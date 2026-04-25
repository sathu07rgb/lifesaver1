// Load environment variables from .env file
require('dotenv').config();

const http = require('http');
const https = require('https');
const url = require('url');

// Safely retrieve the API key — never exposed to the frontend
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('❌ ERROR: GEMINI_API_KEY is not set in your .env file.');
  process.exit(1);
}

// ─── Emergency first aid data ────────────────────────────────────────────────
const emergencyData = {
  bleeding: {
    label: 'Severe Bleeding',
    call: '108',
    steps: [
      'Apply firm, direct pressure using a clean cloth or bandage.',
      'Do NOT remove the cloth if it soaks through — add more on top.',
      'Elevate the injured limb above heart level if possible.',
      'If bleeding doesn\'t stop in 10 mins, call 108 immediately.',
      'Watch for signs of shock: pale skin, rapid breathing, dizziness.'
    ]
  },
  choking: {
    label: 'Choking',
    call: '108',
    steps: [
      'Ask: \'Are you choking?\' — if they can\'t speak, act immediately.',
      'Give 5 firm back blows between shoulder blades with heel of hand.',
      'Perform 5 abdominal thrusts (Heimlich maneuver) — push inward & upward.',
      'Alternate back blows and abdominal thrusts until object is dislodged.',
      'If person loses consciousness, call 108 and start CPR.'
    ]
  },
  faint: {
    label: 'Fainting / Unconscious',
    call: '108',
    steps: [
      'Lay the person flat on their back on a safe surface.',
      'Loosen tight clothing around neck and chest.',
      'Lift legs about 12 inches to restore blood flow to brain.',
      'Check for breathing — if absent, begin CPR.',
      'If they don\'t regain consciousness in 1 minute, call 108.'
    ]
  },
  burn: {
    label: 'Burns',
    call: '108',
    steps: [
      'Cool the burn under cool (not cold) running water for 10–20 minutes.',
      'Do NOT use ice, butter, or toothpaste — these worsen damage.',
      'Remove jewelry near the burn before swelling starts.',
      'Cover loosely with a sterile, non-fluffy bandage or cling film.',
      'For burns larger than hand size or on face/hands/joints, call 108.'
    ]
  },
  accident: {
    label: 'General Accident Response',
    call: '108',
    steps: [
      'Ensure the scene is safe before approaching the injured person.',
      'Stop any major bleeding by applying firm pressure with a clean cloth.',
      'Keep the injured area still and supported; do not move them unless unsafe.',
      'Cover with a blanket to prevent shock and keep them calm.',
      'Call 108 immediately for serious injuries, broken bones, or heavy bleeding.'
    ]
  }
};

// ─── Gemini API helper ────────────────────────────────────────────────────────

/**
 * Calls the Gemini multimodal API.
 * @param {Array} parts  - Array of content parts (text and/or inlineData)
 * @returns {Promise<string>} raw text response from Gemini
 */
function callGeminiAPI(parts) {
  return new Promise((resolve, reject) => {
    const requestBody = JSON.stringify({
      contents: [{ parts }]
    });

    const options = {
      hostname: 'generativelanguage.googleapis.com',
      path: `/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(requestBody)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          const text = parsed?.candidates?.[0]?.content?.parts?.[0]?.text || '';
          resolve(text.trim());
        } catch (err) {
          reject(new Error('Failed to parse Gemini response'));
        }
      });
    });

    req.on('error', reject);
    req.write(requestBody);
    req.end();
  });
}

// ─── Parse request body ───────────────────────────────────────────────────────
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => { body += chunk; });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error('Invalid JSON body'));
      }
    });
    req.on('error', reject);
  });
}

// ─── HTTP Server ──────────────────────────────────────────────────────────────
const server = http.createServer(async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  // ── GET /help?type=<emergency_type> ────────────────────────────────────────
  if (pathname === '/help' && req.method === 'GET') {
    const type = query.type;

    if (!type) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing type parameter' }));
      return;
    }

    const data = emergencyData[type];

    if (!data) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Emergency type not found' }));
      return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
    return;
  }

  // ── POST /analyze-image ─────────────────────────────────────────────────────
  if (pathname === '/analyze-image' && req.method === 'POST') {
    let body;
    try {
      body = await parseBody(req);
    } catch {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid request body' }));
      return;
    }

    // Build Gemini content parts — support base64 image or plain text description
    const parts = [];

    if (body.image && body.mimeType) {
      // Vision: send the actual image to Gemini
      parts.push({
        inlineData: {
          mimeType: body.mimeType,
          data: body.image
        }
      });
    } else if (body.description) {
      // Text-only fallback
      parts.push({ text: `Injury description: "${body.description}"` });
    } else {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Provide image+mimeType or description in the request body' }));
      return;
    }

    // Add the instruction prompt
    parts.push({
      text: `You are an expert medical first-aid assistant. Analyse this wound image carefully.

Respond ONLY in this exact JSON format (no markdown, no code fences, just raw JSON):
{
  "type": "bleeding" | "burn" | "fracture" | "bruise" | "cut" | "unknown",
  "severity": "mild" | "moderate" | "severe",
  "callEmergency": true | false,
  "description": "A clear 2-3 sentence description of what you see — the wound type, affected area, and any visible signs of severity.",
  "steps": [
    "Step 1 ...",
    "Step 2 ...",
    "Step 3 ...",
    "Step 4 ...",
    "Step 5 ..."
  ]
}

Rules:
- description: describe the wound clearly for a non-medical person
- steps: specific, actionable first-aid steps for this exact wound
- callEmergency: true if severe or life-threatening
- Respond with ONLY the JSON object, nothing else`
    });

    try {
      const rawResponse = await callGeminiAPI(parts);

      // Clean the response — strip any accidental markdown fences
      const cleaned = rawResponse
        .replace(/^```json\s*/i, '')
        .replace(/^```\s*/i, '')
        .replace(/```\s*$/i, '')
        .trim();

      let result;
      try {
        result = JSON.parse(cleaned);
      } catch {
        // If JSON parse fails, extract type at minimum
        const lower = rawResponse.toLowerCase();
        let type = 'unknown';
        if (lower.includes('bleeding')) type = 'bleeding';
        else if (lower.includes('burn')) type = 'burn';
        else if (lower.includes('fracture')) type = 'fracture';
        else if (lower.includes('bruise')) type = 'bruise';
        else if (lower.includes('cut')) type = 'cut';

        result = {
          type,
          severity: 'moderate',
          callEmergency: false,
          description: rawResponse.substring(0, 300),
          steps: ['Apply pressure to stop bleeding.', 'Keep the wound clean and covered.', 'Seek medical attention if unsure.']
        };
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
    } catch (err) {
      // If Gemini API fails entirely, degrade gracefully
      console.error('Gemini API error:', err.message);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        type: 'unknown',
        severity: 'moderate',
        callEmergency: false,
        description: 'AI analysis unavailable. Please assess the wound manually.',
        steps: [
          'Apply firm pressure to stop any bleeding.',
          'Clean the wound gently with clean water.',
          'Cover with a sterile bandage.',
          'Elevate the injured area if possible.',
          'Call 108 if the wound is deep or bleeding does not stop.'
        ]
      }));
    }
    return;
  }

  // ── 404 fallback ────────────────────────────────────────────────────────────
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Endpoint not found' }));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`✅ LifeSaver API server running on http://localhost:${PORT}`);
  console.log('');
  console.log('Available endpoints:');
  console.log('  GET  /help?type=bleeding');
  console.log('  GET  /help?type=choking');
  console.log('  GET  /help?type=faint');
  console.log('  GET  /help?type=burn');
  console.log('  GET  /help?type=accident');
  console.log('  POST /analyze-image   { "description": "..." }');
});