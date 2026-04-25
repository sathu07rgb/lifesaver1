const http = require('http');
const url = require('url');

// Emergency first aid data
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

const server = http.createServer((req, res) => {
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
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Endpoint not found' }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`LifeSaver API server running on http://localhost:${PORT}`);
  console.log('Available endpoints:');
  console.log('  GET /help?type=bleeding');
  console.log('  GET /help?type=choking');
  console.log('  GET /help?type=faint');
  console.log('  GET /help?type=burn');
  console.log('  GET /help?type=accident');
});