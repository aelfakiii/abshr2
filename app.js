const ICONS = {
  heritage: `<svg viewBox="0 0 64 64" fill="none"><path d="M6 40 L58 40 L52 50 L12 50 Z" fill="#FFFFFF"/><path d="M32 8 L32 38" stroke="#FFFFFF" stroke-width="3"/><path d="M32 12 C44 16 50 26 50 36 L32 38 Z" fill="#C9A14A"/><path d="M16 50 C16 56 48 56 48 50" stroke="#FFFFFF" stroke-width="3" fill="none"/></svg>`,
  food: `<svg viewBox="0 0 64 64" fill="none"><path d="M20 30 C20 18 44 18 44 30 L44 34 L20 34 Z" fill="#1A1A1A"/><rect x="18" y="34" width="28" height="6" rx="2" fill="#1A1A1A"/><path d="M44 26 C52 26 52 36 44 36" stroke="#1A1A1A" stroke-width="3" fill="none"/><path d="M30 14 L30 20 M34 12 L34 20" stroke="#1A1A1A" stroke-width="3" stroke-linecap="round"/></svg>`,
  worldcup: `<svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="26" r="16" fill="#FFFFFF"/><path d="M32 14 L37 20 L34 27 L30 27 L27 20 Z M18 24 L24 22 L24 30 L19 32 Z M46 24 L40 22 L40 30 L45 32 Z M24 36 L40 36 L37 42 L27 42 Z" fill="#1F6B62"/><path d="M24 42 L20 54 M40 42 L44 54 M18 54 L46 54" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/></svg>`,
  landmarks: `<svg viewBox="0 0 64 64" fill="none"><path d="M8 48 L8 30 L16 24 L16 48 Z" fill="#FFFFFF"/><path d="M20 48 L20 18 L32 8 L44 18 L44 48 Z" fill="#FFFFFF"/><path d="M48 48 L48 26 L56 32 L56 48 Z" fill="#FFFFFF"/><rect x="6" y="48" width="52" height="4" fill="#FFFFFF"/><circle cx="32" cy="22" r="2.5" fill="#B5562F"/></svg>`,
  dialect: `<svg viewBox="0 0 64 64" fill="none"><path d="M8 14 H56 C58 14 60 16 60 18 V38 C60 40 58 42 56 42 H30 L18 52 V42 H8 C6 42 4 40 4 38 V18 C4 16 6 14 8 14 Z" fill="#FFFFFF"/><text x="32" y="33" font-family="Changa, sans-serif" font-size="20" font-weight="700" fill="#5C3661" text-anchor="middle">ش</text></svg>`,
  modern: `<svg viewBox="0 0 64 64" fill="none"><rect x="10" y="26" width="10" height="26" fill="#C9A14A"/><rect x="22" y="14" width="12" height="38" fill="#FFFFFF"/><rect x="36" y="30" width="9" height="22" fill="#C9A14A"/><rect x="47" y="20" width="10" height="32" fill="#FFFFFF"/><rect x="6" y="52" width="54" height="3" fill="#FFFFFF"/></svg>`,
  plus: `<svg viewBox="0 0 64 64" fill="none"><path d="M32 12 V52 M12 32 H52" stroke="#8A1538" stroke-width="5" stroke-linecap="round"/></svg>`,
  trophy: `<svg viewBox="0 0 64 64" fill="none"><path d="M20 12 H44 V26 C44 34 38 40 32 40 C26 40 20 34 20 26 Z" fill="none" stroke="#8A1538" stroke-width="3"/><path d="M20 16 H12 V22 C12 27 16 30 20 30" fill="none" stroke="#8A1538" stroke-width="3"/><path d="M44 16 H52 V22 C52 27 48 30 44 30" fill="none" stroke="#8A1538" stroke-width="3"/><path d="M32 40 V48 M24 52 H40" stroke="#8A1538" stroke-width="3" stroke-linecap="round"/></svg>`,
  friends: `<svg viewBox="0 0 64 64" fill="none"><circle cx="22" cy="22" r="8" fill="none" stroke="#8A1538" stroke-width="3"/><circle cx="42" cy="22" r="8" fill="none" stroke="#8A1538" stroke-width="3"/><path d="M8 50 C8 38 16 34 22 34 C28 34 36 38 36 50 M28 50 C28 38 34 34 42 34 C48 34 56 38 56 50" fill="none" stroke="#8A1538" stroke-width="3" stroke-linecap="round"/></svg>`,
};

const CATEGORIES = [
  { id: 'heritage', name: 'التراث', sub: 'سفن، غوص، الدوحة القديمة', desc: 'من سفن الغوص للدوحة القديمة — شوف قد إيش تعرف عن تراثنا', icon: ICONS.heritage, color: 'maroon' },
  { id: 'food', name: 'الأكل القطري', sub: 'مجبوس، كرك، حلويات', desc: 'مجبوس، كرك، ولقيمات — أكيد تعرف الأكل بس وش تعرف عنه؟', icon: ICONS.food, color: 'gold' },
  { id: 'worldcup', name: 'كأس العالم', sub: 'قطر ٢٠٢٢', desc: 'أيام ما ننساها — قد إيش فاكر من كأس العالم؟', icon: ICONS.worldcup, color: 'teal' },
  { id: 'landmarks', name: 'معالم قطر', sub: 'المتحف، سوق واقف، اللؤلؤة', desc: 'من المتحف لسوق واقف — تعرف معالم بلدك زين؟', icon: ICONS.landmarks, color: 'terracotta' },
  { id: 'dialect', name: 'اللهجة القطرية', sub: 'كلمات وتعابير محلية', desc: 'كلمات نقولها كل يوم — بس وش معناها بالضبط؟', icon: ICONS.dialect, color: 'plum' },
  { id: 'modern', name: 'قطر الحديثة', sub: 'الاقتصاد والإنجازات', desc: 'قطر اليوم — اقتصاد، إنجازات، وأفق الدوحة', icon: ICONS.modern, color: 'ink' },
];

// Sample question bank — 10 per category, quiz uses first N based on room/solo setting
const QUESTION_BANK = {
  heritage: [
    { q: 'ما اسم السفينة التقليدية المستخدمة في الغوص عن اللؤلؤ؟', choices: ['الدانة', 'البتيل', 'الجالبوت', 'السنبوك'], correct: 0 },
    { q: 'ما هو السوق التراثي الأشهر في الدوحة؟', choices: ['سوق واقف', 'سوق الذهب', 'السوق الشعبي', 'سوق التراث'], correct: 0 },
    { q: 'ماذا كانت تسمى مهنة استخراج اللؤلؤ؟', choices: ['الصيد', 'الغوص', 'البحث', 'الجلب'], correct: 1 },
    { q: 'ما اسم المنزل التقليدي القطري القديم؟', choices: ['البيت الشعبي', 'بيت الشعر', 'البيت العتيق', 'الفريج'], correct: 1 },
    { q: 'أي مادة استُخدمت تقليديًا في بناء المنازل القطرية القديمة؟', choices: ['الطين والحجر المرجاني', 'الخشب فقط', 'الطوب الأحمر', 'الإسمنت'], correct: 0 },
    { q: 'ما اسم الرقصة الشعبية القطرية المرتبطة بالبحر؟', choices: ['العرضة', 'الفجري', 'السامري', 'الهبان'], correct: 1 },
    { q: 'ما هو "الفريج" في الثقافة القطرية؟', choices: ['نوع طعام', 'الحي السكني التقليدي', 'لعبة شعبية', 'قماش تقليدي'], correct: 1 },
    { q: 'متى كان موسم الغوص التقليدي على اللؤلؤ يبدأ عادة؟', choices: ['الشتاء', 'الصيف', 'الخريف', 'طوال السنة'], correct: 1 },
    { q: 'ما اسم القارب الصغير المستخدم للصيد القريب من الشاطئ؟', choices: ['الهوري', 'البغلة', 'البوم', 'الشوعي'], correct: 0 },
    { q: 'ما هو الزي التقليدي الذي يرتديه الرجل القطري على الرأس؟', choices: ['الغترة والعقال', 'الطاقية فقط', 'الشماغ الأحمر', 'العمامة'], correct: 0 },
  ],
  food: [
    { q: 'ما هو الطبق الوطني القطري المصنوع من الأرز واللحم؟', choices: ['المجبوس', 'الكبسة', 'البرياني', 'المندي'], correct: 0 },
    { q: 'ما هو المشروب التقليدي الشعبي في قطر؟', choices: ['الشاي الأخضر', 'الكرك', 'القهوة السادة فقط', 'العصير'], correct: 1 },
    { q: 'ما اسم الحلوى القطرية التقليدية المصنوعة من النشا والسكر؟', choices: ['البلاليط', 'اللقيمات', 'العصيدة', 'الكنافة'], correct: 1 },
    { q: 'ما هو طبق "الثريد" المكوّن أساسًا منه؟', choices: ['الخبز واللحم', 'الأرز والسمك', 'الخضار فقط', 'العدس'], correct: 0 },
    { q: 'أي توابل يشتهر بها المجبوس القطري؟', choices: ['البهارات القطرية الخاصة', 'الفلفل الأسود فقط', 'الزعفران فقط', 'الكمون فقط'], correct: 0 },
    { q: 'ما اسم وجبة الفطور الشعبية المكوّنة من البيض والطماطم؟', choices: ['البيض بلبن', 'الشكشوكة', 'البلاليط', 'الجشيد'], correct: 1 },
    { q: 'ما هو "الهريس" المقدم عادة في رمضان والمناسبات؟', choices: ['عصيدة من القمح واللحم', 'نوع حلوى', 'نوع شاي', 'سلطة خضار'], correct: 0 },
    { q: 'بأي مناسبة يرتبط طبق "اللقيمات" بشكل خاص؟', choices: ['رمضان', 'الأعياد الوطنية فقط', 'الأعراس فقط', 'لا يرتبط بمناسبة'], correct: 0 },
    { q: 'ما هو المكوّن الأساسي في "ساغو" الحلوى القطرية؟', choices: ['حبوب الساغو والحليب', 'الأرز والسكر', 'التمر فقط', 'دقيق القمح'], correct: 0 },
    { q: 'ما اسم الخبز التقليدي الرقيق المستخدم في البلاليط وغيره؟', choices: ['الرقاق', 'الخبز الفرنسي', 'الصمون', 'التميس'], correct: 0 },
  ],
  worldcup: [
    { q: 'في أي عام استضافت قطر كأس العالم؟', choices: ['٢٠١٨', '٢٠٢٠', '٢٠٢٢', '٢٠٢٤'], correct: 2 },
    { q: 'ما اسم الملعب الذي أقيمت فيه المباراة النهائية؟', choices: ['ملعب لوسيل', 'ملعب البيت', 'ملعب ٩٧٤', 'ملعب الجنوب'], correct: 0 },
    { q: 'أي منتخب فاز بكأس العالم ٢٠٢٢؟', choices: ['فرنسا', 'الأرجنتين', 'البرازيل', 'كرواتيا'], correct: 1 },
    { q: 'ما اسم التميمة الرسمية لكأس العالم قطر ٢٠٢٢؟', choices: ['لعيب', 'زاكومي', 'فولكو', 'سامبا'], correct: 1 },
    { q: 'كم عدد الملاعب التي استضافت مباريات البطولة؟', choices: ['٦', '٨', '١٠', '١٢'], correct: 1 },
    { q: 'أي ملعب بُني بالكامل من حاويات الشحن القابلة لإعادة التدوير؟', choices: ['ملعب ٩٧٤', 'ملعب لوسيل', 'ملعب خليفة', 'ملعب الثمامة'], correct: 0 },
    { q: 'من كان الهداف الأعلى تسجيلاً للأهداف في البطولة؟', choices: ['ميسي', 'مبابي', 'رونالدو', 'نيمار'], correct: 1 },
    { q: 'كانت بطولة قطر ٢٠٢٢ أول كأس عالم تُقام في أي فصل؟', choices: ['الصيف', 'الشتاء', 'الربيع', 'الخريف'], correct: 1 },
    { q: 'كم عدد المنتخبات المشاركة في البطولة؟', choices: ['٢٤', '٣٠', '٣٢', '٣٦'], correct: 2 },
    { q: 'أي مدينة قطرية احتضنت أكبر عدد من الملاعب؟', choices: ['الدوحة', 'الوكرة', 'الخور', 'الريان'], correct: 0 },
  ],
  landmarks: [
    { q: 'من صمّم مبنى متحف الفن الإسلامي في الدوحة؟', choices: ['آي إم بي', 'زها حديد', 'نورمان فوستر', 'جان نوفيل'], correct: 0 },
    { q: 'ما اسم الجزيرة الاصطناعية الفاخرة في الدوحة؟', choices: ['جزيرة اللؤلؤة', 'جزيرة الموز', 'جزيرة بالم', 'جزيرة الخور'], correct: 0 },
    { q: 'أين يقع "سوق واقف" بالتحديد؟', choices: ['وسط الدوحة على الكورنيش', 'في الوكرة', 'في الشمال', 'في الريان'], correct: 0 },
    { q: 'ما اسم البرج الأشهر ذو التصميم الحلزوني في الدوحة؟', choices: ['برج الدوحة', 'برج بوابة الشرق', 'برج اللؤلؤة', 'برج قطر'], correct: 0 },
    { q: 'ما هي "كتارا" المعروفة في الدوحة؟', choices: ['الحي الثقافي', 'مركز تسوق', 'حديقة عامة', 'مطار قديم'], correct: 0 },
    { q: 'أي معلم قطري يقع بالقرب من الكورنيش ويُعد رمزًا للدولة؟', choices: ['برج بوابة الشرق', 'متحف الفن الإسلامي', 'كتارا', 'سوق واقف'], correct: 1 },
    { q: 'ما اسم منطقة الأعمال الحديثة المطلة على الخليج في الدوحة؟', choices: ['الخليج الغربي', 'الوكرة', 'مسيعيد', 'الشمال'], correct: 0 },
    { q: 'ما هو "متحف قطر الوطني" مستوحى من شكله؟', choices: ['وردة الصحراء', 'صدفة بحرية', 'سفينة شراعية', 'نخلة'], correct: 0 },
    { q: 'في أي منطقة يقع "متحف قطر الوطني"؟', choices: ['بالقرب من قصر الأمير القديم', 'في الشمال', 'في الريان', 'في مسيعيد'], correct: 0 },
    { q: 'ما هي الوظيفة الأساسية لمبنى "برج بوابة الشرق"؟', choices: ['مكاتب وأعمال', 'فندق فقط', 'متحف', 'مطار'], correct: 0 },
  ],
  dialect: [
    { q: 'ماذا تعني كلمة "شلونك" في اللهجة القطرية؟', choices: ['كيف حالك', 'إلى أين', 'ما اسمك', 'متى تأتي'], correct: 0 },
    { q: 'ماذا تعني كلمة "زين" في اللهجة المحلية؟', choices: ['جيد / حسناً', 'سيء', 'كبير', 'بعيد'], correct: 0 },
    { q: 'ماذا تعني كلمة "يبه"؟', choices: ['تعبير تعجب', 'وداعاً', 'شكراً', 'عفواً'], correct: 0 },
    { q: 'ماذا تعني "وايد" في اللهجة القطرية؟', choices: ['كثير / جداً', 'قليل', 'أبداً', 'ربما'], correct: 0 },
    { q: 'ماذا تعني كلمة "درب" في اللهجة المحلية؟', choices: ['طريق / شارع', 'منزل', 'سيارة', 'محل'], correct: 0 },
    { q: 'ماذا تعني "حيل" في السياق القطري؟', choices: ['جداً / كثيراً', 'بطيء', 'صغير', 'متأخر'], correct: 0 },
    { q: 'ماذا تعني كلمة "تراني" في اللهجة المحلية؟', choices: ['ربما / لعل', 'أبداً', 'الآن', 'غداً'], correct: 0 },
    { q: 'ماذا تعني "خوش" كصفة في اللهجة القطرية؟', choices: ['جيد / ممتاز', 'سيء', 'غريب', 'قديم'], correct: 0 },
    { q: 'ماذا تعني كلمة "عقب" في اللهجة المحلية؟', choices: ['بعد', 'قبل', 'مع', 'بدون'], correct: 0 },
    { q: 'ماذا تعني "شوي شوي" في الاستخدام اليومي؟', choices: ['ببطء / قليلاً قليلاً', 'بسرعة', 'كثيراً', 'أبداً'], correct: 0 },
  ],
  modern: [
    { q: 'ما هي العملة الرسمية لدولة قطر؟', choices: ['الريال القطري', 'الدينار', 'الدرهم', 'الجنيه'], correct: 0 },
    { q: 'ما هو المورد الاقتصادي الرئيسي لقطر؟', choices: ['الغاز الطبيعي المسال', 'الزراعة', 'السياحة فقط', 'التعدين'], correct: 0 },
    { q: 'ما اسم شركة الطيران الوطنية القطرية؟', choices: ['الخطوط القطرية', 'طيران الخليج', 'فلاي دبي', 'العربية'], correct: 0 },
    { q: 'ما هي الرؤية الوطنية التنموية طويلة المدى لقطر؟', choices: ['رؤية قطر الوطنية ٢٠٣٠', 'رؤية ٢٠٤٠', 'خطة النهضة', 'مشروع المستقبل'], correct: 0 },
    { q: 'أين يقع المقر الرئيسي لقناة الجزيرة؟', choices: ['الدوحة', 'الرياض', 'أبوظبي', 'المنامة'], correct: 0 },
    { q: 'ما اسم الجامعة التي تضم فروعًا لجامعات عالمية في قطر؟', choices: ['المدينة التعليمية', 'جامعة قطر فقط', 'أكاديمية الدوحة', 'معهد قطر'], correct: 0 },
    { q: 'أي مؤسسة قطرية تُعنى بدعم البحث العلمي والتعليم؟', choices: ['مؤسسة قطر', 'هيئة المتاحف', 'مجلس التخطيط', 'صندوق التنمية'], correct: 0 },
    { q: 'ما اسم البنك المركزي في دولة قطر؟', choices: ['مصرف قطر المركزي', 'بنك قطر الوطني', 'بنك الدوحة', 'البنك التجاري'], correct: 0 },
    { q: 'في أي عام أصبحت قطر دولة مستقلة؟', choices: ['١٩٧١', '١٩٦٨', '١٩٨٠', '١٩٦٠'], correct: 0 },
    { q: 'ما اسم صندوق الثروة السيادي القطري؟', choices: ['جهاز قطر للاستثمار', 'صندوق قطر الوطني', 'هيئة الاستثمار القطرية', 'بنك قطر للتنمية'], correct: 0 },
  ],
};


const CAT_BY_ID = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));
const CARD_COLOR_CLASS = { maroon: 'card--maroon', gold: 'card--gold', teal: 'card--teal', terracotta: 'card--terracotta', plum: 'card--plum', ink: 'card--ink' };

/* ============================================================
   APP STATE
============================================================= */
const state = {
  activeTab: 'home',
  homeCarouselIndex: 0,
  pendingCategoryId: null, // category chosen, awaiting play-mode pick
  pickerOriginTab: 'home', // which tab the picker was opened from, for back navigation

  profile: { name: '', nickname: '', gender: '' }, // persisted to localStorage, captured once before first play
  pendingPlayAction: null, // function to run once profile setup completes

  solo: { categoryId: null, questions: [], index: 0, score: 0, streak: 0, bestStreak: 0, answered: false, lifeline5050Used: false, lifelineSkipUsed: false, hiddenChoices: [] },

  room: {
    code: null, playerId: null, playerName: null, isHost: false,
    pollTimer: null, lastQuestionIndex: -1, answeredThisQuestion: false,
    cameFromPicker: false,
  },
};

const GENDER_AVATAR_COLOR = { male: '#1F6B62', female: '#5C3661' };
const DEFAULT_AVATAR_COLOR = '#8A1538';

function avatarColorForGender(gender) { return GENDER_AVATAR_COLOR[gender] || DEFAULT_AVATAR_COLOR; }

/* ============================================================
   PROFILE — name / nickname / gender, captured once, stored locally
============================================================= */
function loadProfile() {
  try {
    const raw = localStorage.getItem('profile');
    if (raw) state.profile = JSON.parse(raw);
  } catch (e) {}
}
function saveProfile() {
  try { localStorage.setItem('profile', JSON.stringify(state.profile)); } catch (e) {}
}
function hasProfile() { return !!(state.profile && state.profile.name && state.profile.nickname); }

function requireProfile(action) {
  if (hasProfile()) { action(); return; }
  state.pendingPlayAction = action;
  go('profile-setup');
  document.getElementById('profile-setup-name').value = '';
  document.getElementById('profile-setup-nickname').value = '';
  document.querySelectorAll('#screen-profile-setup .gender-option').forEach(b => b.classList.remove('selected'));
  state._pendingGender = '';
  hideError('profile-setup-error');
}

function selectGender(g) {
  state._pendingGender = g;
  document.getElementById('gender-male').classList.toggle('selected', g === 'male');
  document.getElementById('gender-female').classList.toggle('selected', g === 'female');
}

function submitProfileSetup() {
  hideError('profile-setup-error');
  const name = document.getElementById('profile-setup-name').value.trim();
  const nickname = document.getElementById('profile-setup-nickname').value.trim();
  const gender = state._pendingGender || '';

  if (!name) { showError('profile-setup-error', 'اكتب اسمك الكامل'); return; }
  if (!nickname) { showError('profile-setup-error', 'اكتب اللقب اللي تبيه'); return; }
  if (!gender) { showError('profile-setup-error', 'اختر الجنس'); return; }

  state.profile = { name, nickname, gender };
  saveProfile();

  const action = state.pendingPlayAction;
  state.pendingPlayAction = null;
  syncAccountChip();
  if (action) action();
  else go('home');
}

/* ---------- account screen (view/edit) ---------- */
function openAccount() {
  if (!hasProfile()) { requireProfile(() => go('account')); return; }
  document.getElementById('account-name').value = state.profile.name;
  document.getElementById('account-nickname').value = state.profile.nickname;
  document.getElementById('account-gender-male').classList.toggle('selected', state.profile.gender === 'male');
  document.getElementById('account-gender-female').classList.toggle('selected', state.profile.gender === 'female');
  state._accountGender = state.profile.gender;
  hideError('account-error');
  go('account');
}
function backFromAccount() { go(state.activeTab || 'home'); }
function selectAccountGender(g) {
  state._accountGender = g;
  document.getElementById('account-gender-male').classList.toggle('selected', g === 'male');
  document.getElementById('account-gender-female').classList.toggle('selected', g === 'female');
}
function saveAccountChanges() {
  hideError('account-error');
  const name = document.getElementById('account-name').value.trim();
  const nickname = document.getElementById('account-nickname').value.trim();
  const gender = state._accountGender || '';
  if (!name) { showError('account-error', 'اكتب اسمك الكامل'); return; }
  if (!nickname) { showError('account-error', 'اكتب اللقب'); return; }
  if (!gender) { showError('account-error', 'اختر الجنس'); return; }
  state.profile = { name, nickname, gender };
  saveProfile();
  syncAccountChip();
  showToast('تم حفظ بياناتك');
  go(state.activeTab || 'home');
}

function syncAccountChip() {
  const chip = document.getElementById('account-chip');
  if (!chip) return;
  if (hasProfile()) {
    chip.classList.remove('account-chip-guest');
    const color = avatarColorForGender(state.profile.gender);
    chip.innerHTML = `<span class="avatar-dot" style="background:${color};">${state.profile.nickname.charAt(0)}</span><span>${state.profile.nickname}</span>`;
  } else {
    chip.classList.add('account-chip-guest');
    chip.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20 C4 15.5 7.5 13 12 13 C16.5 13 20 15.5 20 20"/></svg>`;
  }
}

/* ---------- entry points that now require a profile first ---------- */
function quickPlaySolo() {
  // hero "play solo" button with no category chosen yet — send to explore tab to pick one
  requireProfile(() => switchTab('explore'));
}


/* ============================================================
   NAVIGATION — two layers: persistent tabs (home/explore) and
   stacked screens (everything else, pushed over the tab bar area)
============================================================= */
const TAB_SCREENS = ['home', 'explore'];

function go(screenKey) {
  document.querySelectorAll('.screen, .screen-static').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('screen-' + screenKey);
  if (el) el.classList.add('active');
  const scroller = el ? el.querySelector('.app-scroll') : null;
  if (scroller) scroller.scrollTop = 0;

  if (TAB_SCREENS.includes(screenKey)) {
    state.activeTab = screenKey;
    syncTabBar();
    document.getElementById('tab-bar').style.display = 'flex';
  } else {
    document.getElementById('tab-bar').style.display = 'none';
  }

  if (screenKey !== 'lobby' && screenKey !== 'room-quiz') {
    stopRoomPolling();
  }
}

function switchTab(tabKey) {
  go(tabKey);
}

function syncTabBar() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === state.activeTab);
  });
}

function showToast(msg, isError) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.background = isError ? 'var(--red)' : 'var(--text-dark)';
  t.classList.add('show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => t.classList.remove('show'), 2600);
}
function showError(elId, msg) { const el = document.getElementById(elId); el.textContent = msg; el.classList.add('show'); }
function hideError(elId) { document.getElementById(elId).classList.remove('show'); }
function arabicNum(n) { const map = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩']; return String(n).split('').map(ch => map[ch] || ch).join(''); }

/* ============================================================
   HOME: CATEGORY CAROUSEL (single centered card, left/right arrows)
============================================================= */
function renderHomeCarousel() {
  const track = document.getElementById('home-cat-track');
  const cat = CATEGORIES[state.homeCarouselIndex];
  track.innerHTML = `
    <button class="cat-card-main ${CARD_COLOR_CLASS[cat.color]}" onclick="pickCategory('${cat.id}')">
      <div class="cat-card-icon">${cat.icon}</div>
      <div class="cat-card-name">${cat.name}</div>
      <div class="cat-card-sub">${cat.sub}</div>
      <span class="cat-card-cta">يلا ابدأ</span>
    </button>
  `;
  const dots = document.getElementById('home-cat-dots');
  dots.innerHTML = CATEGORIES.map((c, i) => `<div class="dot ${i === state.homeCarouselIndex ? 'active' : ''}"></div>`).join('');
}

function homeCarouselMove(dir) {
  const n = CATEGORIES.length;
  // RTL note: visually "right arrow" should feel like "next" reading right-to-left,
  // so right arrow advances forward and left arrow goes back — matches arrow placement in markup.
  state.homeCarouselIndex = (state.homeCarouselIndex + dir + n) % n;
  renderHomeCarousel();
}

/* ============================================================
   EXPLORE TAB: full grid of categories
============================================================= */
function renderExploreGrid() {
  const grid = document.getElementById('explore-grid');
  grid.innerHTML = CATEGORIES.map(cat => `
    <button class="explore-card ${CARD_COLOR_CLASS[cat.color]}" onclick="pickCategory('${cat.id}')">
      <div class="cat-card-icon">${cat.icon}</div>
      <div>
        <div class="explore-name">${cat.name}</div>
        <div class="explore-sub">${cat.sub}</div>
      </div>
    </button>
  `).join('');
}

/* ============================================================
   HOME: FULL CATEGORY LIST WITH SHORT DESCRIPTIONS
============================================================= */
function renderHomeCategoryDescList() {
  const list = document.getElementById('home-cat-desc-list');
  if (!list) return;
  const bgFor = { maroon: 'rgba(138,21,56,0.1)', gold: 'rgba(201,161,74,0.15)', teal: 'rgba(31,107,98,0.1)', terracotta: 'rgba(181,86,47,0.1)', plum: 'rgba(92,54,97,0.1)', ink: 'rgba(26,26,26,0.08)' };
  const iconFor = { maroon: '#8A1538', gold: '#8a6d28', teal: '#1F6B62', terracotta: '#B5562F', plum: '#5C3661', ink: '#1A1A1A' };
  list.innerHTML = CATEGORIES.map(cat => `
    <button class="cat-desc-card" onclick="pickCategory('${cat.id}')">
      <div class="cat-desc-icon-wrap" style="background:${bgFor[cat.color]};">${cat.icon.replace(/fill="#FFFFFF"/g, `fill="${iconFor[cat.color]}"`).replace(/stroke="#FFFFFF"/g, `stroke="${iconFor[cat.color]}"`)}</div>
      <div class="cat-desc-body">
        <strong>${cat.name}</strong>
        <p>${cat.desc}</p>
      </div>
      <span class="cat-desc-arrow">‹</span>
    </button>
  `).join('');
}

/* ============================================================
   PLAY MODE PICKER (solo / join friends / make a majlis)
============================================================= */
function pickCategory(catId) {
  state.pendingCategoryId = catId;
  state.pickerOriginTab = state.activeTab; // remember home vs explore so back button returns correctly
  const cat = CAT_BY_ID[catId];
  const head = document.getElementById('play-mode-head');
  head.innerHTML = `
    <div class="pm-icon">${cat.icon.replace(/fill="#FFFFFF"/g, 'fill="#8A1538"').replace(/stroke="#FFFFFF"/g, 'stroke="#8A1538"')}</div>
    <h2>${cat.name} — وش تبي تسوي؟</h2>
    <p>${cat.desc}</p>
  `;
  go('play-mode');
}

function backFromPlayMode() {
  go(state.pickerOriginTab || 'home');
}

function openCategoryFromHome(catId) {
  // used by footer quick-links — same entry point as tapping a carousel card
  pickCategory(catId);
}

function startSoloQuizFromPicker() {
  requireProfile(() => startSoloQuiz(state.pendingCategoryId));
}
function openCreateRoomFromPicker() {
  requireProfile(() => {
    state.room.cameFromPicker = true;
    openCreateRoom();
    if (state.pendingCategoryId) {
      document.getElementById('create-room-cat').value = state.pendingCategoryId;
    }
  });
}
function openJoinRoomFromPicker() {
  requireProfile(() => {
    state.room.cameFromPicker = true;
    openJoinRoom();
  });
}
function goBackFromCreate() {
  if (state.room.cameFromPicker && state.pendingCategoryId) { state.room.cameFromPicker = false; go('play-mode'); }
  else { go(state.pickerOriginTab || 'home'); }
}
function goBackFromJoin() {
  if (state.room.cameFromPicker) { state.room.cameFromPicker = false; go(state.pendingCategoryId ? 'play-mode' : (state.pickerOriginTab || 'home')); }
  else { go(state.pickerOriginTab || 'home'); }
}

/* ============================================================
   SOLO QUIZ
============================================================= */
function startSoloQuiz(catId) {
  const bank = QUESTION_BANK[catId].slice(0, 5);
  state.solo = {
    categoryId: catId, questions: bank, index: 0, score: 0,
    streak: 0, bestStreak: 0, answered: false,
    lifeline5050Used: false, lifelineSkipUsed: false, hiddenChoices: [],
  };
  go('quiz');
  renderSoloQuestion();
}

function retrySoloQuiz() { startSoloQuiz(state.solo.categoryId); }

function renderSoloQuestion() {
  const s = state.solo;
  const cat = CAT_BY_ID[s.categoryId];
  const q = s.questions[s.index];
  const total = s.questions.length;

  document.getElementById('quiz-cat-label').textContent = cat.name;
  document.getElementById('quiz-progress-label').textContent = `السؤال ${arabicNum(s.index + 1)} من ${arabicNum(total)}`;
  document.getElementById('quiz-score-pill').textContent = `${arabicNum(s.score)} نقطة`;
  document.getElementById('quiz-progress-fill').style.width = `${(s.index / total) * 100}%`;
  document.getElementById('quiz-question-text').textContent = q.q;
  document.getElementById('quiz-next-btn').disabled = true;
  document.getElementById('quiz-next-btn').textContent = (s.index === total - 1) ? 'شوف نتيجتك' : 'السؤال اللي بعده';

  document.getElementById('lifeline-5050').disabled = s.lifeline5050Used;
  document.getElementById('lifeline-skip').disabled = s.lifelineSkipUsed;

  const streakRow = document.getElementById('quiz-streak-row');
  if (s.streak >= 2) {
    streakRow.style.display = 'flex';
    document.getElementById('quiz-streak-text').textContent = `سلسلة ${arabicNum(s.streak)} صح ورا بعض، كمّل كذا! 🔥`;
  } else {
    streakRow.style.display = 'none';
  }

  const letters = ['أ', 'ب', 'ج', 'د'];
  const choicesEl = document.getElementById('quiz-choices');
  choicesEl.innerHTML = q.choices.map((choice, idx) => `
    <button class="choice" data-idx="${idx}" onclick="answerSolo(${idx})" ${s.hiddenChoices.includes(idx) ? 'style="display:none;"' : ''}>
      <span class="choice-row"><span class="choice-letter">${letters[idx]}</span><span>${choice}</span></span>
    </button>
  `).join('');
  s.answered = false;
}

function answerSolo(idx) {
  const s = state.solo;
  if (s.answered) return;
  s.answered = true;
  const q = s.questions[s.index];
  const correct = q.correct;
  document.querySelectorAll('#quiz-choices .choice').forEach(btn => {
    const i = Number(btn.dataset.idx);
    btn.disabled = true;
    if (i === correct) btn.classList.add('correct');
    else if (i === idx) btn.classList.add('wrong');
  });
  if (idx === correct) {
    s.score += 1;
    s.streak += 1;
    if (s.streak > s.bestStreak) s.bestStreak = s.streak;
    document.getElementById('quiz-score-pill').textContent = `${arabicNum(s.score)} نقطة`;
  } else {
    s.streak = 0;
  }
  document.getElementById('quiz-next-btn').disabled = false;
}

function quizNext() {
  const s = state.solo;
  if (s.index < s.questions.length - 1) { s.index += 1; renderSoloQuestion(); }
  else showSoloResults();
}

function useLifeline5050() {
  const s = state.solo;
  if (s.lifeline5050Used || s.answered) return;
  s.lifeline5050Used = true;
  const q = s.questions[s.index];
  const wrongIndices = q.choices.map((_, i) => i).filter(i => i !== q.correct);
  const toHide = wrongIndices.sort(() => Math.random() - 0.5).slice(0, 2);
  s.hiddenChoices = toHide;
  toHide.forEach(i => { const btn = document.querySelector(`#quiz-choices .choice[data-idx="${i}"]`); if (btn) btn.style.display = 'none'; });
  document.getElementById('lifeline-5050').disabled = true;
}

function useLifelineSkip() {
  const s = state.solo;
  if (s.lifelineSkipUsed || s.answered) return;
  s.lifelineSkipUsed = true;
  s.streak = 0;
  document.getElementById('lifeline-skip').disabled = true;
  quizNext();
}

function showSoloResults() {
  const s = state.solo;
  const total = s.questions.length;
  document.getElementById('results-score').textContent = arabicNum(s.score);
  document.getElementById('results-total').textContent = arabicNum(total);
  const pct = s.score / total;
  let emoji = '🌱', label = 'مو بطل بس جرب مرة ثانية!';
  if (pct === 1) { emoji = '🏆'; label = 'ما شاء الله، كلها صح!'; }
  else if (pct >= 0.8) { emoji = '🥇'; label = 'يا سلام عليك!'; }
  else if (pct >= 0.5) { emoji = '👍'; label = 'زينة، بس فيه أحسن!'; }
  if (s.bestStreak >= 4) label += ` (سلسلة ${arabicNum(s.bestStreak)} 🔥)`;
  document.getElementById('results-emoji').textContent = emoji;
  document.getElementById('results-label').textContent = label;
  go('results');
}

function confirmLeaveQuiz() {
  if (confirm('تبي تطلع من السؤال؟ بتضيع تقدمك الحالي.')) go('home');
}

/* ============================================================
   ROOM / MAJLIS — built on Firebase Realtime Database (shared, polled)
   NOTE: this REQUIRES a Firebase project. Fill in FIREBASE_CONFIG below
   with your own project's keys (Firebase console → Project settings →
   General → "Your apps" → SDK setup and configuration → Config).
   Realtime Database must be enabled (Build → Realtime Database → Create
   Database), and its rules need to allow read/write for this to work
   (see README for the exact rules to paste in).
============================================================= */
const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

let _fbDb = null;
function getFirebaseDb() {
  if (_fbDb) return _fbDb;
  if (typeof firebase === 'undefined') {
    console.error('Firebase SDK not loaded — check the <script> tags in <head>.');
    return null;
  }
  if (FIREBASE_CONFIG.apiKey === 'YOUR_API_KEY') {
    console.error('Firebase is not configured yet — fill in FIREBASE_CONFIG in app.js with your own project keys (see README).');
    return null;
  }
  if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
  _fbDb = firebase.database();
  return _fbDb;
}

const ROOM_CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no 0/O/1/I to avoid confusion
function generateRoomCode() { let c=''; for (let i=0;i<4;i++) c += ROOM_CODE_CHARS[Math.floor(Math.random()*ROOM_CODE_CHARS.length)]; return c; }
function generatePlayerId() { return 'p_' + Math.random().toString(36).slice(2, 10); }

const AVATAR_COLORS = ['#8A1538', '#C9A14A', '#1F6B62', '#B5562F', '#5C3661', '#1A1A1A'];
function avatarColorFor(playerId) { let h=0; for (let i=0;i<playerId.length;i++) h=(h*31+playerId.charCodeAt(i))>>>0; return AVATAR_COLORS[h % AVATAR_COLORS.length]; }

async function storageGetRoom(code) {
  const db = getFirebaseDb();
  if (!db) return null;
  try {
    const snap = await db.ref('rooms/' + code).once('value');
    return snap.exists() ? snap.val() : null;
  } catch (e) { console.error('storageGetRoom failed:', e); return null; }
}
async function storageSetRoom(roomObj) {
  const db = getFirebaseDb();
  if (!db) return false;
  try { await db.ref('rooms/' + roomObj.code).set(roomObj); return true; }
  catch (e) { console.error('storageSetRoom failed:', e); return false; }
}
async function storageGetAnswers(code, qIndex) {
  const db = getFirebaseDb();
  if (!db) return {};
  try {
    const snap = await db.ref(`answers/${code}/${qIndex}`).once('value');
    return snap.exists() ? snap.val() : {};
  } catch (e) { console.error('storageGetAnswers failed:', e); return {}; }
}
async function storageSetAnswers(code, qIndex, answersObj) {
  const db = getFirebaseDb();
  if (!db) return;
  try { await db.ref(`answers/${code}/${qIndex}`).set(answersObj); }
  catch (e) { console.error('storageSetAnswers failed:', e); }
}

/* ---------- create majlis ---------- */
function openCreateRoom() {
  if (!hasProfile()) { requireProfile(() => openCreateRoom()); return; }
  hideError('create-room-error');
  const sel = document.getElementById('create-room-cat');
  sel.innerHTML = CATEGORIES.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
  document.getElementById('create-room-name').value = state.room.playerName || state.profile.nickname || '';
  go('create-room');
}
function openCreateRoomFromResults() {
  openCreateRoom();
  const sel = document.getElementById('create-room-cat');
  if (state.solo.categoryId) sel.value = state.solo.categoryId;
}
function openJoinRoom() {
  if (!hasProfile()) { requireProfile(() => openJoinRoom()); return; }
  go('join-room');
  hideError('join-room-error');
  document.getElementById('join-room-name').value = state.room.playerName || state.profile.nickname || '';
}

async function submitCreateRoom() {
  hideError('create-room-error');
  const name = document.getElementById('create-room-name').value.trim();
  const catId = document.getElementById('create-room-cat').value;
  const qCount = Number(document.getElementById('create-room-qcount').value);
  if (!name) { showError('create-room-error', 'اكتب اسمك أول شي'); return; }

  const btn = document.getElementById('create-room-submit');
  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span> ثانية...';

  const playerId = generatePlayerId();
  let code = generateRoomCode();
  const existing = await storageGetRoom(code);
  if (existing) code = generateRoomCode();

  const room = {
    code, hostId: playerId, status: 'lobby', categoryId: catId, questionCount: qCount,
    players: [{ id: playerId, name, score: 0 }], currentQuestionIndex: -1, questionRevealedAt: null,
  };

  const ok = await storageSetRoom(room);
  btn.disabled = false;
  btn.textContent = 'سوّي المجلس';

  if (!ok) { showError('create-room-error', 'ما قدرنا نسوي المجلس، شيك على النت وحاول مرة ثانية'); return; }

  state.room.code = code;
  state.room.playerId = playerId;
  state.room.playerName = name;
  state.room.isHost = true;

  go('lobby');
  enterLobby();
}

/* ---------- join majlis ---------- */
async function submitJoinRoom() {
  hideError('join-room-error');
  const code = document.getElementById('join-room-code').value.trim().toUpperCase();
  const name = document.getElementById('join-room-name').value.trim();

  if (code.length !== 4) { showError('join-room-error', 'الكود لازم يكون ٤ خانات'); return; }
  if (!name) { showError('join-room-error', 'اكتب اسمك'); return; }

  const btn = document.getElementById('join-room-submit');
  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span> ثانية...';

  const room = await storageGetRoom(code);
  btn.disabled = false;
  btn.textContent = 'يلا انضم';

  if (!room) { showError('join-room-error', 'ما لقينا مجلس بهذا الكود، تأكد منه وحاول مرة ثانية'); return; }
  if (room.status !== 'lobby') { showError('join-room-error', 'هذا المجلس بدأ يلعب أو خلص بالفعل'); return; }
  if (room.players.length >= 12) { showError('join-room-error', 'المجلس مليان، عذراً'); return; }

  const playerId = generatePlayerId();
  room.players.push({ id: playerId, name, score: 0 });
  const ok = await storageSetRoom(room);
  if (!ok) { showError('join-room-error', 'ما قدرنا ندخّلك، حاول مرة ثانية'); return; }

  state.room.code = code;
  state.room.playerId = playerId;
  state.room.playerName = name;
  state.room.isHost = false;

  go('lobby');
  enterLobby();
}

function copyRoomCode() {
  const code = state.room.code;
  if (!code) return;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code).then(() => showToast('نسخنا الكود لك')).catch(() => showToast('ما قدرنا ننسخ', true));
  } else { showToast('الكود: ' + code); }
}

function confirmLeaveRoom() {
  if (confirm('تبي تطلع من المجلس؟')) {
    stopRoomPolling();
    state.room.code = null;
    state.room.playerId = null;
    state.room.isHost = false;
    go('home');
  }
}

/* ---------- lobby ---------- */
function enterLobby() {
  document.getElementById('lobby-code').textContent = state.room.code;
  state.room.lastQuestionIndex = -1;
  state.room.answeredThisQuestion = false;
  pollRoomOnce();
  startRoomPolling();
}
function startRoomPolling() { stopRoomPolling(); state.room.pollTimer = setInterval(pollRoomOnce, 2000); }
function stopRoomPolling() { if (state.room.pollTimer) { clearInterval(state.room.pollTimer); state.room.pollTimer = null; } }

async function pollRoomOnce() {
  if (!state.room.code) return;
  const room = await storageGetRoom(state.room.code);
  if (!room) return;
  if (room.status === 'lobby') renderLobby(room);
  else if (room.status === 'active') await renderRoomQuiz(room);
  else if (room.status === 'finished') await renderRoomResults(room);
}

function renderLobby(room) {
  const isHost = state.room.isHost;
  const cat = CAT_BY_ID[room.categoryId];
  document.getElementById('lobby-cat-info').textContent = `${cat.name} · ${arabicNum(room.questionCount)} أسئلة`;

  const listEl = document.getElementById('lobby-player-list');
  listEl.innerHTML = room.players.map(p => `
    <div class="player-row">
      <span class="pname">
        <span class="avatar-dot" style="background:${avatarColorFor(p.id)}">${p.name.charAt(0)}</span>
        ${p.name}
        ${p.id === room.hostId ? '<span class="host-badge">صاحب المجلس</span>' : ''}
      </span>
    </div>
  `).join('');

  const hostControls = document.getElementById('lobby-host-controls');
  const guestWaiting = document.getElementById('lobby-guest-waiting');

  if (isHost) {
    guestWaiting.style.display = 'none';
    hostControls.style.display = 'block';
    hostControls.innerHTML = `
      <button class="btn btn-primary btn-block btn-lg" id="lobby-start-btn" onclick="startRoomQuiz()">
        ${room.players.length < 2 ? 'يلا ابدأ (تقدر تلعب لحالك أو تنتظر)' : 'يلا بدّينا'}
      </button>`;
  } else {
    hostControls.style.display = 'none';
    hostControls.innerHTML = '';
    guestWaiting.style.display = 'block';
  }
}

async function startRoomQuiz() {
  if (!state.room.isHost) return;
  const room = await storageGetRoom(state.room.code);
  if (!room) { showToast('ما قدرنا نبدأ، حاول مرة ثانية', true); return; }
  room.status = 'active';
  room.currentQuestionIndex = 0;
  room.questionRevealedAt = Date.now();
  await storageSetRoom(room);
  go('room-quiz');
  state.room.lastQuestionIndex = -1;
  await renderRoomQuiz(room);
}

/* ---------- room quiz (live) ---------- */
async function renderRoomQuiz(room) {
  go('room-quiz');
  const qIndex = room.currentQuestionIndex;
  const cat = CAT_BY_ID[room.categoryId];
  const questions = QUESTION_BANK[room.categoryId].slice(0, room.questionCount);
  const q = questions[qIndex];
  const me = room.players.find(p => p.id === state.room.playerId);

  document.getElementById('room-quiz-cat-label').textContent = cat.name;
  document.getElementById('room-quiz-progress-label').textContent = `السؤال ${arabicNum(qIndex + 1)} من ${arabicNum(room.questionCount)}`;
  document.getElementById('room-quiz-score-pill').textContent = `${arabicNum(me ? me.score : 0)} نقطة`;
  document.getElementById('room-quiz-progress-fill').style.width = `${(qIndex / room.questionCount) * 100}%`;

  if (qIndex !== state.room.lastQuestionIndex) {
    state.room.lastQuestionIndex = qIndex;
    state.room.answeredThisQuestion = false;
  }

  const answers = await storageGetAnswers(room.code, qIndex);
  const myAnswer = answers[state.room.playerId];
  if (myAnswer) state.room.answeredThisQuestion = true;

  document.getElementById('room-quiz-question-text').textContent = q.q;
  const letters = ['أ', 'ب', 'ج', 'د'];
  const choicesEl = document.getElementById('room-quiz-choices');
  const disabled = state.room.answeredThisQuestion;
  choicesEl.innerHTML = q.choices.map((choice, idx) => {
    let cls = 'choice';
    if (disabled && myAnswer) {
      if (idx === q.correct) cls += ' correct';
      else if (idx === myAnswer.choiceIndex) cls += ' wrong';
    }
    return `<button class="${cls}" data-idx="${idx}" onclick="answerRoomQuestion(${idx})" ${disabled ? 'disabled' : ''}>
      <span class="choice-row"><span class="choice-letter">${letters[idx]}</span><span>${choice}</span></span>
    </button>`;
  }).join('');

  const statusEl = document.getElementById('room-quiz-player-status');
  statusEl.innerHTML = room.players.map(p => {
    const hasAnswered = !!answers[p.id];
    return `<div class="waiting-row" style="justify-content:space-between;color:var(--text-dark);">
      <span style="display:flex;align-items:center;gap:9px;">
        <span class="avatar-dot" style="background:${avatarColorFor(p.id)};width:22px;height:22px;font-size:10px;">${p.name.charAt(0)}</span>
        ${p.name}
      </span>
      <span style="font-size:12px;color:${hasAnswered ? 'var(--green)' : '#999'};">${hasAnswered ? '✓ جاوب' : 'يفكر...'}</span>
    </div>`;
  }).join('');

  const footer = document.getElementById('room-quiz-host-footer');
  if (state.room.isHost) {
    const allAnswered = room.players.every(p => !!answers[p.id]);
    const isLast = qIndex === room.questionCount - 1;
    footer.innerHTML = `
      <button class="btn btn-primary btn-block btn-lg" onclick="hostAdvanceQuestion()" ${allAnswered ? '' : 'disabled'}>
        ${allAnswered ? (isLast ? 'خلصنا، شوف النتائج' : 'السؤال اللي بعده') : 'ننتظر البقية يجاوبون...'}
      </button>`;
  } else {
    footer.innerHTML = '';
  }
}

async function answerRoomQuestion(idx) {
  if (state.room.answeredThisQuestion) return;
  state.room.answeredThisQuestion = true;

  const room = await storageGetRoom(state.room.code);
  if (!room) { state.room.answeredThisQuestion = false; showToast('صار خطأ، حاول مرة ثانية', true); return; }
  const qIndex = room.currentQuestionIndex;
  const questions = QUESTION_BANK[room.categoryId].slice(0, room.questionCount);
  const q = questions[qIndex];
  const correct = idx === q.correct;

  const answers = await storageGetAnswers(room.code, qIndex);
  answers[state.room.playerId] = { choiceIndex: idx, correct };
  await storageSetAnswers(room.code, qIndex, answers);

  if (correct) {
    const freshRoom = await storageGetRoom(room.code);
    if (freshRoom) {
      const p = freshRoom.players.find(pl => pl.id === state.room.playerId);
      if (p) p.score += 1;
      await storageSetRoom(freshRoom);
    }
  }
  await pollRoomOnce();
}

async function hostAdvanceQuestion() {
  if (!state.room.isHost) return;
  const room = await storageGetRoom(state.room.code);
  if (!room) return;
  const isLast = room.currentQuestionIndex >= room.questionCount - 1;
  if (isLast) room.status = 'finished';
  else { room.currentQuestionIndex += 1; room.questionRevealedAt = Date.now(); }
  await storageSetRoom(room);
  await pollRoomOnce();
}

/* ---------- room results / leaderboard ---------- */
async function renderRoomResults(room) {
  stopRoomPolling();
  go('room-results');
  const sorted = [...room.players].sort((a, b) => b.score - a.score);
  const medalFor = (i) => i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : arabicNum(i + 1);
  const el = document.getElementById('room-leaderboard');
  el.innerHTML = sorted.map((p, i) => `
    <div class="leaderboard-row ${i === 0 ? 'first' : ''}">
      <span class="leaderboard-rank">${medalFor(i)}</span>
      <span class="avatar-dot" style="background:${avatarColorFor(p.id)}">${p.name.charAt(0)}</span>
      <span style="flex:1;font-weight:600;font-size:14px;">${p.name}${p.id === state.room.playerId ? ' (إنت)' : ''}</span>
      <span style="font-family:var(--font-display);font-weight:800;color:var(--maroon);font-size:14px;">${arabicNum(p.score)} نقطة</span>
    </div>
  `).join('');
}

/* ============================================================
   PWA: install prompt + service worker registration
============================================================= */
let deferredInstallPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  if (!localStorage.getItem('installBannerDismissed')) document.getElementById('install-banner').classList.add('show');
});
async function installApp() {
  const banner = document.getElementById('install-banner');
  if (!deferredInstallPrompt) { banner.classList.remove('show'); return; }
  deferredInstallPrompt.prompt();
  const { outcome } = await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  banner.classList.remove('show');
  if (outcome === 'accepted') showToast('ثبّتنا التطبيق، يعطيك العافية');
}
function dismissInstallBanner() {
  document.getElementById('install-banner').classList.remove('show');
  try { localStorage.setItem('installBannerDismissed', '1'); } catch (e) {}
}
window.addEventListener('appinstalled', () => { document.getElementById('install-banner').classList.remove('show'); deferredInstallPrompt = null; });
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
}

/* ============================================================
   INIT
============================================================= */
loadProfile();
syncAccountChip();
renderHomeCarousel();
renderExploreGrid();
renderHomeCategoryDescList();
syncTabBar();
