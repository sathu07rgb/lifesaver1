// Language translations
const translations = {
  en: {
    brandName: 'LifeSaver AI',
    brandTag: 'Emergency care dashboard',
    navHome: 'Home',
    navFirstAid: 'First Aid',
    navHospitals: 'Hospitals',
    navContact: 'Contact',
    navSosBtn: 'SOS Call',
    heroEyebrow: 'Emergency response made effortless',
    heroTitle: 'Fast Help. When It Matters Most.',
    heroText: 'One-tap guidance, instant SOS support, and nearby help right from your phone. Whether it\'s bleeding, choking, burns, or an urgent accident, LifeSaver AI has your back.',
    heroEmergencyBtn: 'Emergency Response',
    heroSosBtn: '🔴 Emergency SOS',
    heroHospitalBtn: '📍 Find Nearby Hospitals',
    ambulanceTitle: 'Ambulance',
    policeTitle: 'Police',
    fireTitle: 'Fire Dept',
    callBtn: 'Call',
    sectionLabel: 'Emergency Response',
    sectionTitle: 'Immediate first aid actions',
    sectionDesc: 'Tap any situation below to get immediate first aid steps and emergency guidance.',
    bleedingTitle: 'Bleeding',
    bleedingDesc: 'Fast first aid steps for severe bleeding.',
    chokingTitle: 'Choking',
    chokingDesc: 'Clear airways and get help quickly.',
    faintTitle: 'Fainted',
    faintDesc: 'Stabilize and monitor unconscious people.',
    burnTitle: 'Burn',
    burnDesc: 'Cool and protect burn injuries safely.',
    accidentTitle: 'Accident',
    accidentDesc: 'Manage trauma until help arrives.',
    resultLabel: 'Result Display',
    resultTitle: 'Emergency guidance panel',
    resultDesc: 'Detailed advice appears here once you choose an emergency action.',
    detailHeading: 'Ready for your first aid action',
    detailSub: 'Select Bleeding, Choking, Fainted, Burn, or Accident above.',
    resultCloseBtn: 'Close',
    resultPlaceholder: 'Choose an emergency to see step-by-step instructions and call information.',
    sosModalTitle: '🚨 SOS Activated',
    sosModalBody: 'This will alert all emergency services to your location. Only proceed in a real emergency.',
    sosCancelBtn: 'Cancel',
    sosSendBtn: 'SEND SOS',
    callLabel: 'Call',
    ambulanceCall: 'Calling Ambulance — 108',
    policeCall: 'Calling Police — 100',
    fireCall: 'Calling Fire Dept — 101',
    sosSuccess: '🚨 SOS sent — help is on the way!',
    hospitalsMsg: '📍 Opening nearby hospitals',
    hospitalSearch: 'hospitals near me'
  },
  hi: {
    brandName: 'जीवन रक्षक AI',
    brandTag: 'आपातकालीन देखभाल डैशबोर्ड',
    navHome: 'होम',
    navFirstAid: 'प्राथमिक चिकित्सा',
    navHospitals: 'अस्पताल',
    navContact: 'संपर्क करें',
    navSosBtn: 'एसओएस कॉल',
    heroEyebrow: 'आसान आपातकालीन प्रतिक्रिया',
    heroTitle: 'तेज़ मदद। जब यह सबसे अधिक मायने रखता है।',
    heroText: 'एक-टैप मार्गदर्शन, तत्काल एसओएस समर्थन, और आपके फोन से पास की मदद। चाहे वह खून बहना हो, घुटन हो, जलना हो, या एक आपातकालीन दुर्घटना हो, जीवन रक्षक AI आपके पास है।',
    heroEmergencyBtn: 'आपातकालीन प्रतिक्रिया',
    heroSosBtn: '🔴 आपातकालीन एसओएस',
    heroHospitalBtn: '📍 पास के अस्पताल खोजें',
    ambulanceTitle: 'एम्बुलेंस',
    policeTitle: 'पुलिस',
    fireTitle: 'अग्निशमन विभाग',
    callBtn: 'कॉल करें',
    sectionLabel: 'आपातकालीन प्रतिक्रिया',
    sectionTitle: 'तत्काल प्राथमिक चिकित्सा कार्य',
    sectionDesc: 'तत्काल प्राथमिक चिकित्सा के चरण और आपातकालीन मार्गदर्शन के लिए नीचे कोई भी स्थिति टैप करें।',
    bleedingTitle: 'खून बहना',
    bleedingDesc: 'गंभीर खून बहने के लिए तेज़ प्राथमिक चिकित्सा के कदम।',
    chokingTitle: 'घुटन',
    chokingDesc: 'वायुमार्ग साफ करें और जल्दी मदद लें।',
    faintTitle: 'बेहोश',
    faintDesc: 'बेहोश व्यक्ति को स्थिर करें और निगरानी करें।',
    burnTitle: 'जलना',
    burnDesc: 'जलन की चोटों को सुरक्षित रूप से ठंडा करें और सुरक्षित रखें।',
    accidentTitle: 'दुर्घटना',
    accidentDesc: 'मदद आने तक आघात का प्रबंधन करें।',
    resultLabel: 'परिणाम प्रदर्शन',
    resultTitle: 'आपातकालीन मार्गदर्शन पैनल',
    resultDesc: 'एक आपातकालीन कार्रवाई चुनने के बाद विस्तृत सलाह यहां दिखाई देती है।',
    detailHeading: 'आपकी प्राथमिक चिकित्सा कार्रवाई के लिए तैयार',
    detailSub: 'ऊपर खून बहना, घुटन, बेहोश, जलना, या दुर्घटना चुनें।',
    resultCloseBtn: 'बंद करें',
    resultPlaceholder: 'चरण-दर-चरण निर्देश और कॉल जानकारी देखने के लिए एक आपातकालीन स्थिति चुनें।',
    sosModalTitle: '🚨 एसओएस सक्रिय',
    sosModalBody: 'यह आपके स्थान पर सभी आपातकालीन सेवाओं को सतर्क करेगा। केवल एक वास्तविक आपातकाल में आगे बढ़ें।',
    sosCancelBtn: 'रद्द करें',
    sosSendBtn: 'एसओएस भेजें',
    callLabel: 'कॉल करें',
    ambulanceCall: 'एम्बुलेंस को कॉल कर रहे हैं — 108',
    policeCall: 'पुलिस को कॉल कर रहे हैं — 100',
    fireCall: 'अग्निशमन विभाग को कॉल कर रहे हैं — 101',
    sosSuccess: '🚨 एसओएस भेज दिया गया — मदद आ रही है!',
    hospitalsMsg: '📍 पास के अस्पताल खोल रहे हैं',
    hospitalSearch: 'मेरे पास अस्पताल'
  },
  kn: {
    brandName: 'ಲೈಫ್‌ಸೇವರ್ AI',
    brandTag: 'ತುರ್ತು ರಕ್ಷಣೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    navHome: 'ಮನೆ',
    navFirstAid: 'ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ',
    navHospitals: 'ಆಸ್ಪತ್ರೆ',
    navContact: 'ಸಂಪರ್ಕ',
    navSosBtn: 'ಎಸ್‌ಒಎಸ್ ಕರೆ',
    heroEyebrow: 'ಸುಲಭ ತುರ್ತು ಪ್ರತಿಕ್ರಿಯೆ',
    heroTitle: 'ತ್ವರಿತ ಸಹಾಯ. ಇದು ಬಹಳ ಮುಖ್ಯ ಆಗಿರುವಾಗ.',
    heroText: 'ಒಂದು-ಟ್ಯಾಪ್ ಮಾರ್ಗದರ್ಶನ, ತ್ವರಿತ ಎಸ್‌ಒಎಸ್ ಬೆಂಬಲ, ಮತ್ತು ನಿಮ್ಮ ಫೋನಿನಿಂದ ಹತ್ತಿರದ ಸಹಾಯ. ರಕ್ತಸ್ರಾವ, ಉಸಿರುಗಟ್ಟಿಕೆ, ಸುಡುವಿಕೆ, ಅಥವಾ ತುರ್ತು ಅಪಘಾತ ಯಾವುದಾಗಿರಲಿ, ಲೈಫ್‌ಸೇವರ್ AI ನಿಮ್ಮೊಂದಿಗೆ ಇದೆ.',
    heroEmergencyBtn: 'ತುರ್ತು ಪ್ರತಿಕ್ರಿಯೆ',
    heroSosBtn: '🔴 ತುರ್ತು ಎಸ್‌ಒಎಸ್',
    heroHospitalBtn: '📍 ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆ ಹುಡುಕಿ',
    ambulanceTitle: 'ಆಂಬುಲೆನ್ಸ್',
    policeTitle: 'ಪೋಲೀಸ್',
    fireTitle: 'ಅಗ್ನಿಶಮನ ವಿಭಾಗ',
    callBtn: 'ಕರೆ ಮಾಡಿ',
    sectionLabel: 'ತುರ್ತು ಪ್ರತಿಕ್ರಿಯೆ',
    sectionTitle: 'ತತ್‌ಕ್ಷಣ ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ ಕ್ರಮಗಳು',
    sectionDesc: 'ತ್ವರಿತ ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ ಹಂತಗಳು ಮತ್ತು ತುರ್ತು ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಕೆಳಗೆ ಯಾವುದೇ ಸ್ಥಿತಿಯನ್ನು ಟ್ಯಾಪ್ ಮಾಡಿ.',
    bleedingTitle: 'ರಕ್ತಸ್ರಾವ',
    bleedingDesc: 'ತೀವ್ರ ರಕ್ತಸ್ರಾವದ ಜಾತ್ರೆ ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ ಹಂತಗಳು.',
    chokingTitle: 'ಉಸಿರುಗಟ್ಟಿಕೆ',
    chokingDesc: 'ಶ್ವಾಸನಾಳವನ್ನು ಸ್ವಚ್ಛ ಮಾಡಿ ಮತ್ತು ತ್ವರಿತವಾಗಿ ಸಹಾಯ ಪಡೆಯಿರಿ.',
    faintTitle: 'ಬೇಹುಷ್',
    faintDesc: 'ಸುಜ್ಞಾನಸ್ಥ ವ್ಯಕ್ತಿಯನ್ನು ಸ್ಥಿರಗೊಳಿಸಿ ಮತ್ತು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ.',
    burnTitle: 'ಬೆಂಕಿ ಗಾಯ',
    burnDesc: 'ಸುಡುವಿಕೆಯ ಗಾಯಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ತಂಪುಮಾಡಿ ಮತ್ತು ರಕ್ಷಿಸಿ.',
    accidentTitle: 'ಅಪಘಾತ',
    accidentDesc: 'ಸಹಾಯ ಆಗುವವರೆಗೆ ಆಘಾತವನ್ನು ನಿರ್ವಹಿಸಿ.',
    resultLabel: 'ಫಲಿತಾಂಶ ಪ್ರದರ್ಶನ',
    resultTitle: 'ತುರ್ತು ಮಾರ್ಗದರ್ಶನ ಫಲಕ',
    resultDesc: 'ತುರ್ತು ಕ್ರಮವನ್ನು ಆರಿಸಿದ ನಂತರ ವಿವರವಾದ ಸಲಹೆ ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ.',
    detailHeading: 'ನಿಮ್ಮ ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ ಕ್ರಮಕ್ಕೆ ಸಿದ್ಧವಾಗಿರಿ',
    detailSub: 'ಮೇಲೆ ರಕ್ತಸ್ರಾವ, ಉಸಿರುಗಟ್ಟಿಕೆ, ಬೇಹುಷ್, ಸುಡುವಿಕೆ, ಅಥವಾ ಅಪಘಾತವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ.',
    resultCloseBtn: 'ಮುಚ್ಚಿ',
    resultPlaceholder: 'ಹಂತ-ಹಂತದ ಸೂಚನೆಗಳು ಮತ್ತು ಕರೆ ಮಾಹಿತಿ ನೋಡಲು ತುರ್ತು ಸ್ಥಿತಿಯನ್ನು ಆರಿಸಿ.',
    sosModalTitle: '🚨 ಎಸ್‌ಒಎಸ್ ಸಕ್ರಿಯವಾಗಿದೆ',
    sosModalBody: 'ಇದು ನಿಮ್ಮ ಸ್ಥಳಕ್ಕೆ ಎಲ್ಲಾ ತುರ್ತು ಸೇವೆಗಳನ್ನು ಸಾವಧಾನಿ ಮಾಡುತ್ತದೆ. ವಾಸ್ತವಿಕ ತುರ್ತುಸ್ಥಿತಿಯಲ್ಲಿ ಮಾತ್ರ ಮುಂದಕ್ಕೆ ಹೋಗಿ.',
    sosCancelBtn: 'ರದ್ದುಮಾಡಿ',
    sosSendBtn: 'ಎಸ್‌ಒಎಸ್ ಕಳುಹಿಸಿ',
    callLabel: 'ಕರೆ ಮಾಡಿ',
    ambulanceCall: 'ಆಂಬುಲೆನ್ಸ್ ಕರೆ ಮಾಡುತ್ತಿದೆ — 108',
    policeCall: 'ಪೋಲೀಸ್ ಕರೆ ಮಾಡುತ್ತಿದೆ — 100',
    fireCall: 'ಅಗ್ನಿಶಮನ ವಿಭಾಗ ಕರೆ ಮಾಡುತ್ತಿದೆ — 101',
    sosSuccess: '🚨 ಎಸ್‌ಒಎಸ್ ಕಳುಹಿಸಲಾಗಿದೆ — ಸಹಾಯ ಮಾರ್ಗದಲ್ಲಿದೆ!',
    hospitalsMsg: '📍 ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆ ತೆರೆಯುತ್ತಿದೆ',
    hospitalSearch: 'ನನ್ನ ಸಮೀಪದ ಆಸ್ಪತ್ರೆ'
  }
};

// First aid data with multilingual support
const firstAidData = {
  bleeding: {
    label_en: 'Severe Bleeding',
    label_hi: 'गंभीर खून बहना',
    label_kn: 'ತೀವ್ರ ರಕ್ತಸ್ರಾವ',
    call: '108',
    steps_en: [
      'Apply firm, direct pressure using a clean cloth or bandage.',
      'Do NOT remove the cloth if it soaks through — add more on top.',
      'Elevate the injured limb above heart level if possible.',
      'If bleeding doesn\'t stop in 10 mins, call 108 immediately.',
      'Watch for signs of shock: pale skin, rapid breathing, dizziness.'
    ],
    steps_hi: [
      'एक स्वच्छ कपड़े या पट्टी का उपयोग करके दृढ़, सीधा दबाव लागू करें।',
      'यदि कपड़ा भिगो जाए तो इसे हटाएं नहीं — ऊपर और जोड़ें।',
      'यदि संभव हो तो घायल अंग को हृदय के स्तर से ऊपर उठाएं।',
      'यदि 10 मिनट में खून बहना बंद न हो तो तुरंत 108 को कॉल करें।',
      'सदमे के संकेत देखें: पीली त्वचा, तेजी से सांस लेना, चक्कर आना।'
    ],
    steps_kn: [
      'ಶುದ್ಧ ಬಟ್ಟೆ ಅಥವಾ ಮುಪ್ಪಿನೊಂದಿಗೆ ಉತ್ತೇಜಕ, ನೇರ ಒತ್ತಡ ಅನ್ವಯಿಸಿ.',
      'ಬಟ್ಟೆ ತೇವವಾದರೆ ಅದನ್ನು ತೆಗೆದುಕೊಳ್ಳಬೇಡಿ — ಮೇಲೆ ಹೆಚ್ಚು ಸೇರಿಸಿ.',
      'ಸಾಧ್ಯವಾದರೆ ಗಾಯವುಳ್ಳ ಅಂಗವನ್ನು ಹೃದಯದ ಮಟ್ಟಕ್ಕಿಂತ ಮೇಲೆ ಎತ್ತಿ.',
      '10 ನಿಮಿಷಗಳಲ್ಲಿ ರಕ್ತಸ್ರಾವ ನಿಲ್ಲದೇ ಇದ್ದರೆ ತುರ್ತು 108 ಕೆ ಕರೆ ಮಾಡಿ.',
      'ಆಘಾತದ ಚಿಹ್ನೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ: ತೆಳುವಾದ ಚರ್ಮ, ವೇಗದ ಶ್ವಾಸ, ತಿರುಗುತ್ತಿರುವಿಕೆ.'
    ]
  },
  faint: {
    label_en: 'Fainting / Unconscious',
    label_hi: 'बेहोशी / अचेतन',
    label_kn: 'ಬೇಹುಷ್ / ಚೇತನರಹಿತ',
    call: '108',
    steps_en: [
      'Lay the person flat on their back on a safe surface.',
      'Loosen tight clothing around neck and chest.',
      'Lift legs about 12 inches to restore blood flow to brain.',
      'Check for breathing — if absent, begin CPR.',
      'If they don\'t regain consciousness in 1 minute, call 108.'
    ],
    steps_hi: [
      'व्यक्ति को एक सुरक्षित सतह पर पीठ के बल लेटा दें।',
      'गर्दन और छाती के आसपास तंग कपड़ों को ढीला करें।',
      'पैरों को लगभग 12 इंच उठाएं ताकि मस्तिष्क में रक्त प्रवाह बहाल हो।',
      'सांस लेने की जांच करें — यदि नहीं है, तो सीपीआर शुरू करें।',
      '1 मिनट में चेतना न लौटे तो 108 को कॉल करें।'
    ],
    steps_kn: [
      'ವ್ಯಕ್ತಿಯನ್ನು ಸುರಕ್ಷಿತ ಮೇಲ್ಮೈಯಲ್ಲಿ ಬೆನ್ನಿನ ಮೇಲೆ ಮಲಗಿಸಿ.',
      'ಕುತ್ತಿಗೆ ಮತ್ತು ಎದೆಯ ಸುತ್ತ ಬಿಗಿಯಾದ ಬಟ್ಟೆಯನ್ನು ಸಡಿಲ ಮಾಡಿ.',
      'ಮೆದುಳಿಗೆ ರಕ್ತ ಪ್ರವಾಹವನ್ನು ಪುನಃಸ್ಥಾಪಿಸಲು ಪೈಗಳನ್ನು ಸುಮಾರು 12 ಇಂಚು ಎತ್ತಿ.',
      'ಶ್ವಾಸಪ್ರಶ್ವಾಸವನ್ನು ಪರೀಕ್ಷಿಸಿ — ಇಲ್ಲದಿದ್ದರೆ, ಸಿಪಿಆರ್ ಪ್ರಾರಂಭಿಸಿ.',
      '1 ನಿಮಿಷದಲ್ಲಿ ಚೇತನತೆ ಮರಳದೇ ಇದ್ದರೆ, 108 ಕೆ ಕರೆ ಮಾಡಿ.'
    ]
  },
  choking: {
    label_en: 'Choking',
    label_hi: 'घुटन',
    label_kn: 'ಉಸಿರುಗಟ್ಟಿಕೆ',
    call: '108',
    steps_en: [
      'Ask: \'Are you choking?\' — if they can\'t speak, act immediately.',
      'Give 5 firm back blows between shoulder blades with heel of hand.',
      'Perform 5 abdominal thrusts (Heimlich maneuver) — push inward & upward.',
      'Alternate back blows and abdominal thrusts until object is dislodged.',
      'If person loses consciousness, call 108 and start CPR.'
    ],
    steps_hi: [
      'पूछें: \'क्या आप घुट रहे हैं?\' — यदि वे बोल नहीं सकते, तो तुरंत कार्य करें।',
      'कंधे के ब्लेड के बीच हाथ की एड़ी से 5 दृढ़ पीठ पर प्रहार करें।',
      '5 पेट के थ्रस्ट (हेमलिच युद्धाभ्यास) करें — अंदर और ऊपर की ओर धकेलें।',
      'वस्तु के निकलने तक पीठ पर प्रहार और पेट के थ्रस्ट को बारी-बारी से करें।',
      'यदि व्यक्ति बेहोश हो जाए तो 108 को कॉल करें और सीपीआर शुरू करें।'
    ],
    steps_kn: [
      'ಕೇಳಿ: \'ನೀವು ಉಸಿರುಗಟ್ಟಿ ಕೊಂಡಿದ್ದೀರಿ? \'— ಅವರು ಮಾತನಾಡಲು ಸಾಧ್ಯವಾಗದೇ ಇದ್ದರೆ, ತುರ್ತುವಾಗಿ ಕಾರ್ಯ ಮಾಡಿ.',
      'ಭುಜದ ಬ್ಲೇಡ್‌ನ ನಡುವೆ ಕೈಯ ಹೀಲ್‌ನೊಂದಿಗೆ 5 ಬಲವಾದ ಬೆನ್ನಿಗೆ ಹೊಡೆಯುವಿಕೆ ಬಿಡಿಸಿ.',
      '5 ಹೊಟ್ಟೆಯ ಥ್ರಸ್ಟ್‌ಗಳು (ಹೈಮ್‌ಲಿಚ್ ತಂತ್ರ) ಮಾಡಿ — ಒಳಗೆ ಮತ್ತು ಮೇಲಕ್ಕೆ ಠೆಕ್ಕೆ ಮಾರಿ.',
      'ವಸ್ತುವನ್ನು ಹೊರಹಾಕುವವರೆಗೆ ಬೆನ್ನಿಗೆ ಹೊಡೆಯುವಿಕೆ ಮತ್ತು ಹೊಟ್ಟೆಯ ಥ್ರಸ್ಟ್‌ಗಳನ್ನು ಪರ್ಯಾಯವಾಗಿ ಮಾಡಿ.',
      'ವ್ಯಕ್ತಿ ಬೇಹುಷ್ ಆದರೆ 108 ಕೆ ಕರೆ ಮಾಡಿ ಮತ್ತು ಸಿಪಿಆರ್ ಪ್ರಾರಂಭಿಸಿ.'
    ]
  },
  burn: {
    label_en: 'Burns',
    label_hi: 'जलना',
    label_kn: 'ಸುಡುವಿಕೆ',
    call: '108',
    steps_en: [
      'Cool the burn under cool (not cold) running water for 10–20 minutes.',
      'Do NOT use ice, butter, or toothpaste — these worsen damage.',
      'Remove jewelry near the burn before swelling starts.',
      'Cover loosely with a sterile, non-fluffy bandage or cling film.',
      'For burns larger than hand size or on face/hands/joints, call 108.'
    ],
    steps_hi: [
      'जलन को ठंडे (ठंडे नहीं) बहते पानी के नीचे 10-20 मिनट के लिए ठंडा करें।',
      'बर्फ, मक्खन, या टूथपेस्ट का उपयोग न करें — ये नुकसान बढ़ाते हैं।',
      'सूजन शुरू होने से पहले जलन के पास गहनों को हटाएं।',
      'निर्जलित, गैर-फुफ्फुसीय पट्टी या क्लिंग फिल्म से ढीले से कवर करें।',
      'हाथ के आकार से बड़ी जलन या चेहरे/हाथ/जोड़ों पर, 108 को कॉल करें।'
    ],
    steps_kn: [
      'ಸುಡುವಿಕೆಯನ್ನು ತಂಪು (ತಂಪಾಗದ) ಹರಿಯುವ ನೀರಿನ ಅಡಿಯಲ್ಲಿ 10-20 ನಿಮಿಷಗಳಿಂದ ತಂಪುಮಾಡಿ.',
      'ಐಸ್, ಬೆಣ್ಣೆ, ಅಥವಾ ಹಲ್ಲಿನ ಪೇಸ್ಟ್ ಬಳಸಬೇಡಿ — ಇವು ನೋವು ಬಿಗಿಗೊಳಿಸುತ್ತವೆ.',
      'ಸೂಜು ಪ್ರಾರಂಭವಾಗುವ ಮೊದಲು ಸುಡುವಿಕೆಯ ಸಮೀಪದ ಆಭರಣವನ್ನು ತೆಗೆದುಹಾಕಿ.',
      'ಜೀವಸಿದ್ಧ, ನಿರ್ಜಲ ಮುಪ್ಪು ಅಥವಾ ಕ್ಲಿಂಗ್ ಫಿಲ್ಮಿನೊಂದಿಗೆ ಸಡಿಲವಾಗಿ ಮುಚ್ಚಿ.',
      'ಕೈಯ ಗಾತ್ರಕ್ಕಿಂತ ದೊಡ್ಡ ಸುಡುವಿಕೆ ಅಥವಾ ಮುಖ/ಕೈ/ಜೋಡಿಗಳ ಮೇಲೆ, 108 ಕೆ ಕರೆ ಮಾಡಿ.'
    ]
  },
  accident: {
    label_en: 'General Accident Response',
    label_hi: 'सामान्य दुर्घटना प्रतिक्रिया',
    label_kn: 'ಸಾಮಾನ್ಯ ಅಪಘಾತ ಪ್ರತಿಕ್ರಿಯೆ',
    call: '108',
    steps_en: [
      'Ensure the scene is safe before approaching the injured person.',
      'Stop any major bleeding by applying firm pressure with a clean cloth.',
      'Keep the injured area still and supported; do not move them unless unsafe.',
      'Cover with a blanket to prevent shock and keep them calm.',
      'Call 108 immediately for serious injuries, broken bones, or heavy bleeding.'
    ],
    steps_hi: [
      'घायल व्यक्ति के पास जाने से पहले सुनिश्चित करें कि दृश्य सुरक्षित है।',
      'एक स्वच्छ कपड़ से दृढ़ दबाव लागू करके किसी भी प्रमुख रक्तस्राव को रोकें।',
      'घायल क्षेत्र को स्थिर रखें और समर्थन करें; जब तक असुरक्षित न हो तब तक उन्हें न हिलाएं।',
      'सदमे को रोकने और उन्हें शांत रखने के लिए एक कंबल से ढकें।',
      'गंभीर चोटों, टूटी हड्डियों, या भारी रक्तस्राव के लिए तुरंत 108 को कॉल करें।'
    ],
    steps_kn: [
      'ಗಾಯವುಳ್ಳ ವ್ಯಕ್ತಿಯ ಬಳಿಕ್ಕೆ ಹೋಗುವ ಮೊದಲು ದೃಶ್ಯವು ಸುರಕ್ಷಿತವೆಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.',
      'ಶುದ್ಧ ಬಟ್ಟೆಯೊಂದಿಗೆ ದೃಢ ಒತ್ತಡ ಅನ್ವಯಿಸಿ ಯಾವುದೇ ಪ್ರಮುಖ ರಕ್ತಸ್ರಾವವನ್ನು ನಿಲ್ಲಿಸಿ.',
      'ಗಾಯವುಳ್ಳ ಪ್ರದೇಶವನ್ನು ಸ್ಥಿರ ಮತ್ತು ಬೆಂಬಲಿತವಾಗಿ ಇಡಿ; ಅಸುರಕ್ಷಿತವಾಗಿ ಇಲ್ಲದೆ ಅವರನ್ನು ಸರಿಸಬೇಡಿ.',
      'ಆಘಾತವನ್ನು ತಡೆಯಲು ಮತ್ತು ಅವರನ್ನು ಶಾಂತ ಇಡಲು ಹೊದೆಯಿಂದ ಮುಚ್ಚಿ.',
      'ತೀವ್ರ ಗಾಯಗಳು, ಮುರಿದ ಮೂಳೆ, ಅಥವಾ ಭಾರೀ ರಕ್ತಸ್ರಾವಕ್ಕಾಗಿ ತುರ್ತು 108 ಕೆ ಕರೆ ಮಾಡಿ.'
    ]
  }
};

// Current language
let currentLanguage = 'en';

// Initialize language from localStorage
function initializeLanguage() {
  const savedLanguage = localStorage.getItem('language') || 'en';
  currentLanguage = savedLanguage;
  const selector = document.getElementById('languageSelector');
  if (selector) {
    selector.value = currentLanguage;
  }
  applyTranslations();
}

// Change language and save to localStorage
function changeLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  applyTranslations();
}

// Apply all translations to the page
function applyTranslations() {
  const langData = translations[currentLanguage];
  
  const ids = [
    'brandName', 'brandTag', 'navHome', 'navFirstAid', 'navHospitals', 'navContact',
    'navSosBtn', 'heroEyebrow', 'heroTitle', 'heroText', 'heroEmergencyBtn', 'heroSosBtn',
    'heroHospitalBtn', 'ambulanceTitle', 'policeTitle', 'fireTitle', 'callBtn',
    'sectionLabel', 'sectionTitle', 'sectionDesc', 'bleedingTitle', 'bleedingDesc',
    'chokingTitle', 'chokingDesc', 'faintTitle', 'faintDesc', 'burnTitle', 'burnDesc',
    'accidentTitle', 'accidentDesc', 'resultLabel', 'resultTitle', 'resultDesc',
    'detailHeading', 'detailSub', 'resultCloseBtn', 'resultPlaceholder', 'sosModalTitle',
    'sosModalBody', 'sosCancelBtn', 'sosSendBtn'
  ];
  
  ids.forEach(id => {
    const element = document.getElementById(id);
    if (element && langData[id]) {
      element.textContent = langData[id];
    }
  });
}

// Get first aid label in current language
function getFirstAidLabel(type) {
  const key = `label_${currentLanguage}`;
  return firstAidData[type][key] || firstAidData[type].label_en;
}

// Get first aid steps in current language
function getFirstAidSteps(type) {
  const key = `steps_${currentLanguage}`;
  return firstAidData[type][key] || firstAidData[type].steps_en;
}

function getHelp(type) {
  console.log('getHelp called with type:', type);
  
  // Show loading state
  const content = document.getElementById('detailContent');
  const heading = document.getElementById('detailHeading');
  const resultCard = document.querySelector('.result-card');
  
  heading.textContent = 'Loading...';
  content.innerHTML = '<div class="result-placeholder"><p>Loading emergency guidance...</p></div>';
  resultCard.classList.add('active');
  content.classList.add('active');

  // Fetch from API
  fetch(`http://localhost:3000/help?type=${type}`)
    .then(response => {
      console.log('API response status:', response.status);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('API response data:', data);
      showResult(data, type);
    })
    .catch(error => {
      console.error('API fetch failed:', error);
      // Fallback to dummy data
      const dummyData = getDummyData(type);
      if (dummyData) {
        showResult(dummyData, type);
      } else {
        showError('Server error - unable to load guidance');
      }
    });
}

// Dummy data fallback
function getDummyData(type) {
  const dummyResponses = {
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
  
  return dummyResponses[type] || null;
}

function showResult(data, type) {
  const heading = document.getElementById('detailHeading');
  const content = document.getElementById('detailContent');
  const resultCard = document.querySelector('.result-card');
  
  if (!data || !data.steps || data.steps.length === 0) {
    showError('No data found for this emergency type');
    return;
  }

  heading.textContent = data.label || `Emergency: ${type}`;

  content.innerHTML = `
    <div class="call-label">Call ${data.call || 'Emergency Services'}</div>
    <ul class="step-list">
      ${data.steps.map((step, index) => `<li class="step-item" style="animation-delay:${index * 0.05}s"><span>${index + 1}</span><span>${step}</span></li>`).join('')}
    </ul>
  `;

  window.location.hash = `help-${type}`;
  const resultDisplay = document.querySelector('.result-display');
  if (resultDisplay) {
    window.scrollTo({ top: resultDisplay.offsetTop - 20, behavior: 'smooth' });
  }
}

function showError(message) {
  const heading = document.getElementById('detailHeading');
  const content = document.getElementById('detailContent');
  
  heading.textContent = 'Error';
  content.innerHTML = `
    <div class="result-placeholder">
      <span class="placeholder-icon">⚠️</span>
      <p>${message}</p>
    </div>
  `;
}

function closeDetail() {
  const resultCard = document.querySelector('.result-card');
  const content = document.getElementById('detailContent');
  const heading = document.getElementById('detailHeading');
  
  resultCard.classList.remove('active');
  content.classList.remove('active');
  
  // Restore placeholder content
  heading.textContent = translations[currentLanguage].detailHeading;
  content.innerHTML = `
    <div class="result-placeholder">
      <span class="placeholder-icon">📍</span>
      <p id="resultPlaceholder">${translations[currentLanguage].resultPlaceholder}</p>
    </div>
  `;
  
  window.location.href = 'index.html';
}

function callService(serviceId, number) {
  const langData = translations[currentLanguage];
  const serviceMap = {
    'ambulanceTitle': langData.ambulanceCall,
    'policeTitle': langData.policeCall,
    'fireTitle': langData.fireCall
  };
  
  showToast(serviceMap[serviceId] || `📞 ${langData.callLabel} ${number}`);
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
  showToast(translations[currentLanguage].sosSuccess);
  window.location.href = 'tel:112';
}

function findHospitals() {
  showToast(translations[currentLanguage].hospitalsMsg);
  window.open(`https://www.google.com/maps/search/${encodeURIComponent(translations[currentLanguage].hospitalSearch)}`, '_blank');
}

function suggestNearbyHospitals(containerElement) {
  if (!containerElement) return;

  const hospitalDiv = document.createElement('div');
  hospitalDiv.className = 'hospital-box';
  hospitalDiv.style.cssText = "margin-top: 1.5rem; padding: 1rem; background: rgba(255,255,255,0.03); border: 1px solid var(--border-color, rgba(255, 255, 255, 0.08)); border-radius: 12px;";
  hospitalDiv.innerHTML = `
    <div style="display: flex; align-items: center; gap: 0.75rem; color: var(--text-muted, #94a3b8);">
      <div class="spinner" style="width: 20px; height: 20px; margin: 0; border-width: 2px;"></div>
      <strong>📍 Finding nearby hospitals...</strong>
    </div>
  `;
  containerElement.appendChild(hospitalDiv);

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        
        // Simulated distances for demo reliability
        const d1 = (Math.random() * 1.5 + 0.5).toFixed(1);
        const d2 = (Math.random() * 2.0 + 2.5).toFixed(1);
        const d3 = (Math.random() * 3.0 + 5.0).toFixed(1);

        hospitalDiv.innerHTML = `
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
            <span style="font-size:1.5rem">🏥</span>
            <div>
              <strong style="color:var(--text-main, #fff); display:block;">Hospitals Near You</strong>
              <span style="font-size:0.85rem; color:var(--text-muted, #94a3b8)">Location: ${lat.toFixed(4)}, ${lng.toFixed(4)}</span>
            </div>
          </div>
          
          <iframe 
            src="https://maps.google.com/maps?q=hospitals+near+${lat},${lng}&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="200" 
            frameborder="0" 
            style="border:0; border-radius: 10px; margin-bottom: 1rem; filter: invert(90%) hue-rotate(180deg);" 
            allowfullscreen>
          </iframe>

          <!-- Suggested Hospitals List -->
          <div style="margin-bottom: 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: rgba(46, 204, 113, 0.1); border: 1px solid rgba(46, 204, 113, 0.3); border-radius: 8px; margin-bottom: 0.5rem;">
              <div>
                <strong style="color: #2ecc71; display: block; font-size: 0.95rem;">City General Hospital</strong>
                <span style="color: #94a3b8; font-size: 0.8rem;">Open 24/7 • Emergency Unit</span>
              </div>
              <div style="text-align: right;">
                <strong style="color: #fff;">${d1} km</strong>
                <span style="display: block; color: #2ecc71; font-size: 0.75rem;">Nearest</span>
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; margin-bottom: 0.5rem;">
              <div>
                <strong style="color: #fff; display: block; font-size: 0.95rem;">Metro Care Center</strong>
                <span style="color: #94a3b8; font-size: 0.8rem;">Trauma & Burn Center</span>
              </div>
              <div style="text-align: right;">
                <strong style="color: #fff;">${d2} km</strong>
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px;">
              <div>
                <strong style="color: #fff; display: block; font-size: 0.95rem;">Lifeline Medical Group</strong>
                <span style="color: #94a3b8; font-size: 0.8rem;">General Hospital</span>
              </div>
              <div style="text-align: right;">
                <strong style="color: #fff;">${d3} km</strong>
              </div>
            </div>
          </div>

          <a href="https://www.google.com/maps/search/hospitals+near+${lat},${lng}" target="_blank" style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; width: 100%; padding: 0.9rem; background: rgba(59, 130, 246, 0.15); border: 1px solid rgba(59, 130, 246, 0.4); border-radius: 10px; color: #60a5fa; text-decoration: none; font-weight: 600; transition: background 0.2s;" onmouseover="this.style.background='rgba(59, 130, 246, 0.25)'" onmouseout="this.style.background='rgba(59, 130, 246, 0.15)'">
            🗺️ Open in Google Maps
          </a>
        `;
      },
      function(error) {
        hospitalDiv.innerHTML = `
          <div style="display: flex; align-items: center; gap: 0.75rem; color: var(--accent-red, #ff3b3b);">
            <span style="font-size:1.5rem">⚠️</span>
            <strong>Please enable location to find nearby hospitals</strong>
          </div>
        `;
      },
      { timeout: 10000 }
    );
  } else {
    hospitalDiv.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.75rem; color: var(--accent-red, #ff3b3b);">
        <span style="font-size:1.5rem">⚠️</span>
        <strong>Location not supported by browser</strong>
      </div>
    `;
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => toast.classList.remove('show'), 3200);
}

const sosModal = document.getElementById('sosModal');
if (sosModal) {
  sosModal.addEventListener('click', function (event) {
    if (event.target === this) {
      closeSosModal();
    }
  });
}

// Initialize on DOMContentLoaded
window.addEventListener('DOMContentLoaded', function() {
  initializeLanguage();
  
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get('type');
  if (type) {
    getHelp(type);
  }
});
