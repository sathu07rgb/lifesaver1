const firstAidData = {
  bleeding: {
    label: '🩸 Severe Bleeding',
    call: '108',
    steps: [
      'Apply firm, direct pressure using a clean cloth or bandage.',
      'Do NOT remove the cloth if it soaks through — add more on top.',
      'Elevate the injured limb above heart level if possible.',
      'If bleeding doesn\'t stop in 10 mins, call 108 immediately.',
      'Watch for signs of shock: pale skin, rapid breathing, dizziness.'
    ]
  },
  faint: {
    label: '😵 Fainting / Unconscious',
    call: '108',
    steps: [
      'Lay the person flat on their back on a safe surface.',
      'Loosen tight clothing around neck and chest.',
      'Lift legs about 12 inches to restore blood flow to brain.',
      'Check for breathing — if absent, begin CPR.',
      'If they don\'t regain consciousness in 1 minute, call 108.'
    ]
  },
  choking: {
    label: '😮‍💨 Choking',
    call: '108',
    steps: [
      'Ask: \'Are you choking?\' — if they can\'t speak, act immediately.',
      'Give 5 firm back blows between shoulder blades with heel of hand.',
      'Perform 5 abdominal thrusts (Heimlich maneuver) — push inward & upward.',
      'Alternate back blows and abdominal thrusts until object is dislodged.',
      'If person loses consciousness, call 108 and start CPR.'
    ]
  },
  burn: {
    label: '🔥 Burns',
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
    label: '🚑 General Accident Response',
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

function getHelp(type) {
  const data = firstAidData[type];
  if (!data) {
    showToast('⚠ Unable to find guidance for that emergency.');
    showResult(null);
    return;
  }
  showResult(data);
}

function showResult(data) {
  const heading = document.getElementById('detailHeading');
  const content = document.getElementById('detailContent');
  const resultCard = document.querySelector('.result-card');
  resultCard.classList.add('active');
  content.classList.add('active');

  if (!data) {
    heading.textContent = 'Emergency Guidance';
    content.innerHTML = `
      <div class="call-label">General Advice</div>
      <ul class="step-list">
        ${[
          'Stay calm and keep the person reassured.',
          'Call 108 if the situation seems serious or worsening.',
          'Keep the person still and comfortable until help arrives.',
          'Do not give food or water unless absolutely necessary.',
          'Monitor breathing and pulse continuously.'
        ].map((text, index) => `<li class="step-item" style="animation-delay:${index * 0.05}s"><span>${index + 1}</span><span>${text}</span></li>`).join('')}
      </ul>
    `;
    window.location.hash = 'help';
    window.scrollTo({ top: document.querySelector('.result-display').offsetTop - 20, behavior: 'smooth' });
    return;
  }

  heading.textContent = data.label;

  content.innerHTML = `
    <div class="call-label">Call ${data.call}</div>
    <ul class="step-list">
      ${data.steps.map((step, index) => `<li class="step-item" style="animation-delay:${index * 0.05}s"><span>${index + 1}</span><span>${step}</span></li>`).join('')}
    </ul>
  `;

  window.location.hash = `help-${data.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  window.scrollTo({ top: document.querySelector('.result-display').offsetTop - 20, behavior: 'smooth' });
}

function closeDetail() {
  const resultCard = document.querySelector('.result-card');
  const content = document.getElementById('detailContent');
  resultCard.classList.remove('active');
  content.classList.remove('active');
}

function callService(name, number) {
  showToast(`📞 Calling ${name} — ${number}`);
  window.location.href = `tel:${number}`;
}

function openSosModal() {
  document.getElementById('sosModal').classList.add('open');
}

function closeSosModal() {
  document.getElementById('sosModal').classList.remove('open');
}

function confirmSos() {
  closeSosModal();
  showToast('🚨 SOS sent — help is on the way!');
  window.location.href = 'tel:112';
}

function findHospitals() {
  showToast('📍 Opening nearby hospitals');
  window.open('https://www.google.com/maps/search/hospitals+near+me', '_blank');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => toast.classList.remove('show'), 3200);
}

const sosModal = document.getElementById('sosModal');
sosModal.addEventListener('click', function (event) {
  if (event.target === this) {
    closeSosModal();
  }
});

// Check for URL parameter on page load
window.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get('type');
  if (type) {
    getHelp(type);
  }
});
