import { SurveyVersion } from './types';

export const SURVEY_DATA: SurveyVersion[] = [
  {
    id: 'prompt',
    name: 'Prompt',
    description_en: 'The original Comprehensive AI Context Prompt provided to all models.',
    description_ar: 'سياق الذكاء الاصطناعي الشامل. التعليمات الأصلية المقدمة لجميع النماذج.',
    intro_en: 'Media Z is a research and dialogue initiative launched by Dubai Media Academy. It aims to understand how Generation Z (born 1997–2012) and Generation Alpha (born 2013–present) consume, interact with, and are influenced by media content in the Arab world.',
    intro_ar: 'ميديا زي هي مبادرة بحثية وحوارية أطلقتها أكاديمية دبي للإعلام. تهدف إلى فهم كيفية استهلاك جيل Z وجيل Alpha للمحتوى الإعلامي في العالم العربي وتفاعلهم معه وتأثرهم به.',
    questions: [
        // Page 1: Strategic Context
        {
            id: 'p_objectives',
            section: 'Strategic Objectives',
            text_en: 'What We Are Trying to Find Out',
            text_ar: 'ما نحاول معرفته',
            type: 'multiple',
            page: 1,
            options: [
                { label_en: 'Content Preferences (WHAT topics engage them)', label_ar: 'تفضيلات المحتوى (ما هي المواضيع التي تجذبهم)' },
                { label_en: 'Format Preferences (HOW they consume)', label_ar: 'تفضيلات التنسيق (كيف يستهلكون)' },
                { label_en: 'Behavioral & Psychological Drivers (WHY)', label_ar: 'الدوافع السلوكية والنفسية (لماذا)' },
                { label_en: 'Generational Nuances (Gen Z vs Alpha)', label_ar: 'الفروق الدقيقة بين الأجيال' }
            ]
        },
        {
            id: 'p_beneficiaries',
            section: 'Stakeholders',
            text_en: 'The Four Beneficiary Entities',
            text_ar: 'الجهات المستفيدة الأربعة',
            type: 'multiple',
            page: 1,
            options: [
                { label_en: 'Families (Understanding digital world, safety)', label_ar: 'الأسر (فهم العالم الرقمي، السلامة)' },
                { label_en: 'Education (Communication, curricula)', label_ar: 'التعليم (التواصل، المناهج)' },
                { label_en: 'Media Professionals (Quality content, responsibility)', label_ar: 'الإعلاميون (محتوى عالي الجودة، المسؤولية)' },
                { label_en: 'Government (Public messages, trust)', label_ar: 'الحكومة (الرسائل العامة، الثقة)' }
            ]
        },
        {
            id: 'p_framework',
            section: 'Analysis Framework',
            text_en: 'Thinking Framework for AI Analysis (Critical Dimensions)',
            text_ar: 'إطار التفكير لتحليل الذكاء الاصطناعي',
            type: 'multiple',
            page: 1,
            options: [
                { label_en: 'Avoid Generational Stereotyping', label_ar: 'تجنب التنميط الجيلي' },
                { label_en: 'Understand Bilingual and Cultural Complexity', label_ar: 'فهم التعقيد اللغوي والثقافي' },
                { label_en: 'Recognize Platform Literacy', label_ar: 'إدراك المعرفة بالمنصات' },
                { label_en: 'Challenge Traditional Media Assumptions', label_ar: 'تحدي افتراضات الإعلام التقليدي' },
                { label_en: 'Understand Trust as Contextual', label_ar: 'فهم الثقة كسياق' },
                { label_en: 'Analyze Institutional Failures Constructively', label_ar: 'تحليل الفشل المؤسسي بشكل بناء' },
                { label_en: 'Connect Content to Psychological Needs', label_ar: 'ربط المحتوى بالاحتياجات النفسية' },
                { label_en: 'Maintain Empathy Without Condescension', label_ar: 'الحفاظ على التعاطف دون تعالي' },
                { label_en: 'Account for Access and Economic Inequality', label_ar: 'مراعاة التفاوت في الوصول والاقتصاد' },
                { label_en: 'Generate Actionable Recommendations', label_ar: 'توليد توصيات قابلة للتنفيذ' }
            ]
        },
        // Page 2: Instructions
        {
            id: 'p_research_q_text',
            section: 'Core Mandate',
            text_en: 'Primary Research Question',
            text_ar: 'سؤال البحث الرئيسي',
            type: 'single',
            page: 2,
            options: [
                { 
                    label_en: 'How can institutions communicate authentically with Gen Z/Alpha by leveraging preferred formats and addressing needs?', 
                    label_ar: 'كيف يمكن للمؤسسات التواصل بصدق مع جيل Z و Alpha من خلال الاستفادة من التنسيقات المفضلة وتلبية الاحتياجات؟' 
                }
            ]
        },
        {
            id: 'p_demographics_req',
            section: 'Survey Generation Instructions',
            text_en: 'Required Demographic Segmentation',
            text_ar: 'التقسيم الديموغرافي المطلوب',
            type: 'multiple',
            page: 2,
            options: [
                { label_en: 'Age', label_ar: 'العمر' },
                { label_en: 'Gender (Male / Female only)', label_ar: 'الجنس (ذكر / أنثى فقط)' },
                { label_en: 'Nationality/residency', label_ar: 'الجنسية / الإقامة' },
                { label_en: 'Education level', label_ar: 'المستوى التعليمي' },
                { label_en: 'Primary device used', label_ar: 'الجهاز الأساسي المستخدم' },
                { label_en: 'Average daily screen time', label_ar: 'متوسط وقت الشاشة اليومي' }
            ]
        },
        {
            id: 'p_constraints',
            section: 'Survey Generation Instructions',
            text_en: 'Online Survey Considerations',
            text_ar: 'اعتبارات الاستطلاع عبر الإنترنت',
            type: 'multiple',
            page: 2,
            options: [
                { label_en: 'Mobile-first design', label_ar: 'تصميم للجوال أولاً' },
                { label_en: 'Bilingual presentation', label_ar: 'عرض ثنائي اللغة' },
                { label_en: 'Short completion time (< 7 mins)', label_ar: 'وقت إكمال قصير (< 7 دقائق)' },
                { label_en: 'Touch-friendly / Visual answer choices', label_ar: 'خيارات لمس سهلة / بصرية' },
                { label_en: 'Skip logic for irrelevant questions', label_ar: 'منطق التخطي للأسئلة غير ذات الصلة' }
            ]
        }
    ]
  },
  {
    id: 'gemini3',
    name: 'Gemini 3',
    description_en: 'Optimized for mobile distribution, tailored for Gen Z/Alpha UAE context.',
    description_ar: 'محسن للتوزيع عبر الهاتف المحمول، ومصمم خصيصاً لسياق الجيل Z و Alpha في الإمارات.',
    intro_en: 'Welcome! You are invited to participate in the "Media Z" survey organized by Dubai Media Academy. Through this survey, we aim to understand how your generation interacts with digital content.',
    intro_ar: 'مرحباً! أنت مدعو للمشاركة في استطلاع "ميديا زي" الذي تنظمه أكاديمية دبي للإعلام. نسعى من خلال هذا الاستطلاع لفهم كيف يتفاعل جيلك مع المحتوى الرقمي.',
    questions: [
      // --- Page 1: Demographics ---
      {
        id: 'g3_d1',
        section: 'Part 1: About You',
        text_en: 'Age Group',
        text_ar: 'الفئة العمرية',
        type: 'single',
        page: 1,
        options: [
          { label_en: '10–12 (Gen Alpha)', label_ar: '10–12 (جيل ألفا)' },
          { label_en: '13–17 (Gen Z - School Age)', label_ar: '13–17 (جيل زد - المدرسة)' },
          { label_en: '18–24 (Gen Z - University/Early Career)', label_ar: '18–24 (جيل زد - الجامعة/بداية العمل)' },
          { label_en: '25–29 (Gen Z - Professional)', label_ar: '25–29 (جيل زد - مهنيون)' },
        ]
      },
      {
        id: 'g3_d2',
        section: 'Part 1: About You',
        text_en: 'Gender',
        text_ar: 'الجنس',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Male', label_ar: 'ذكر' },
          { label_en: 'Female', label_ar: 'أنثى' },
        ]
      },
      {
        id: 'g3_d3',
        section: 'Part 1: About You',
        text_en: 'Residency Status',
        text_ar: 'حالة الإقامة',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'UAE National', label_ar: 'مواطن إماراتي' },
          { label_en: 'Arab Expat', label_ar: 'مقيم عربي' },
          { label_en: 'Non-Arab Expat', label_ar: 'مقيم غير عربي' },
        ]
      },
      {
        id: 'g3_d4',
        section: 'Part 1: About You',
        text_en: 'Current Education/Status',
        text_ar: 'الحالة الدراسية/المهنية',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'School Student', label_ar: 'طالب مدرسة' },
          { label_en: 'University Student', label_ar: 'طالب جامعي' },
          { label_en: 'Employed', label_ar: 'موظف' },
          { label_en: 'Entrepreneur/Freelancer', label_ar: 'رائد أعمال/عمل حر' },
          { label_en: 'Not currently studying or working', label_ar: 'لا أدرس ولا أعمل حالياً' },
        ]
      },
      {
        id: 'g3_d5',
        section: 'Part 1: About You',
        text_en: 'Which device do you use MOST for media?',
        text_ar: 'ما هو الجهاز الذي تستخدمه غالباً لمتابعة الإعلام؟',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Smartphone', label_ar: 'الهاتف الذكي' },
          { label_en: 'Tablet/iPad', label_ar: 'الجهاز اللوحي' },
          { label_en: 'Laptop/PC', label_ar: 'الحاسوب' },
          { label_en: 'Smart TV', label_ar: 'التلفاز الذكي' },
          { label_en: 'Gaming Console', label_ar: 'جهاز الألعاب' },
        ]
      },
      {
        id: 'g3_d6',
        section: 'Part 1: About You',
        text_en: 'Average Daily Screen Time (Be honest!)',
        text_ar: 'متوسط وقت الشاشة يومياً (كن صادقاً!)',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Less than 2 hours', label_ar: 'أقل من ساعتين' },
          { label_en: '2–4 hours', label_ar: '2–4 ساعات' },
          { label_en: '5–7 hours', label_ar: '5–7 ساعات' },
          { label_en: '8+ hours', label_ar: 'أكثر من 8 ساعات' },
        ]
      },
      // --- Page 2: Core Questions ---
      {
        id: 'g3_q1',
        section: 'Part 2: Your Digital World',
        text_en: 'CONTENT: What actually grabs your attention? (Select Top 3)',
        text_ar: 'المحتوى: ما الذي يجذب انتباهك فعلاً؟ (اختر أهم 3)',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: 'Gaming & Esports', label_ar: 'الألعاب والرياضات الإلكترونية' },
          { label_en: 'Comedy, Skits & Memes', label_ar: 'الكوميديا والمقاطع الساخرة' },
          { label_en: 'Educational & "How-To" Hacks', label_ar: 'المحتوى التعليمي والحيل الذكية' },
          { label_en: 'Lifestyle, Fashion & Vlogs', label_ar: 'أسلوب الحياة والموضة واليوميات' },
          { label_en: 'News & Current Affairs (Short Form)', label_ar: 'الأخبار والأحداث الجارية (مقاطع قصيرة)' },
          { label_en: 'Social Justice & Global Causes', label_ar: 'العدالة الاجتماعية والقضايا العالمية' },
          { label_en: 'Movies & Series (Long Form)', label_ar: 'الأفلام والمسلسلات (محتوى طويل)' },
          { label_en: 'Religion & Spirituality', label_ar: 'الدين والروحانيات' },
        ]
      },
      {
        id: 'g3_q2',
        section: 'Part 2: Your Digital World',
        text_en: 'PLATFORMS: If you had 15 minutes of free time, which app do you open first?',
        text_ar: 'المنصات: لو لديك 15 دقيقة فراغ، أي تطبيق تفتحه أولاً؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'TikTok', label_ar: 'تيك توك' },
          { label_en: 'Instagram', label_ar: 'إنستغرام' },
          { label_en: 'YouTube', label_ar: 'يوتيوب' },
          { label_en: 'Snapchat', label_ar: 'سناب شات' },
          { label_en: 'X (Twitter)', label_ar: 'إكس (تويتر)' },
          { label_en: 'Twitch / Discord', label_ar: 'تويتش / ديسكورد' },
          { label_en: 'Roblox / Minecraft', label_ar: 'روبلوكس / ماينكرافت' },
          { label_en: 'WhatsApp / Telegram', label_ar: 'واتساب / تيليجرام' },
        ]
      },
      {
        id: 'g3_q3',
        section: 'Part 2: Your Digital World',
        text_en: 'TRUST: Who do you believe the most when looking for information?',
        text_ar: 'الثقة: من تصدق أكثر عند البحث عن معلومة؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'Independent Content Creators/Influencers', label_ar: 'صناع المحتوى المستقلين/المؤثرين' },
          { label_en: 'Official News Channels & Government Accounts', label_ar: 'القنوات الإخبارية والحسابات الحكومية' },
          { label_en: 'Family & Friends (via Group Chats)', label_ar: 'الأهل والأصدقاء (عبر مجموعات المحادثة)' },
          { label_en: 'Teachers & Professors', label_ar: 'المعلمون والأساتذة' },
          { label_en: 'Comments Section / Community Consensus', label_ar: 'التعليقات / رأي الجمهور العام' },
        ]
      },
      {
        id: 'g3_q4',
        section: 'Part 2: Your Digital World',
        text_en: 'INSTITUTIONS: What makes you immediately swipe past a video from a Government entity or School?',
        text_ar: 'المؤسسات: ما الذي يجعلك تتخطى (Swipe) فيديو من جهة حكومية أو مدرسة فوراً؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'It feels too formal or "fake"', label_ar: 'يبدو رسمياً جداً أو "مصطنعاً"' },
          { label_en: 'It is too long/slow', label_ar: 'الفيديو طويل أو بطيء جداً' },
          { label_en: 'They are trying too hard to be "cool"', label_ar: 'يحاولون تقليد الشباب بشكل غير متقن' },
          { label_en: 'The topic is irrelevant to my life', label_ar: 'الموضوع لا يمس حياتي' },
          { label_en: 'I actually watch them if they are useful', label_ar: 'في الحقيقة أشاهدها إذا كانت مفيدة' },
        ]
      },
      {
        id: 'g3_q5',
        section: 'Part 2: Your Digital World',
        text_en: 'LEARNING: If you need to learn a difficult new concept, how do you prefer it explained?',
        text_ar: 'التعلم: إذا أردت تعلم فكرة صعبة وجديدة، كيف تفضل أن يتم شرحها؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'A 60-second fast-paced video summary', label_ar: 'ملخص سريع في فيديو مدته 60 ثانية' },
          { label_en: 'An interactive game or simulation', label_ar: 'لعبة تفاعلية أو محاكاة' },
          { label_en: 'A detailed YouTube explainer (10+ mins)', label_ar: 'شرح مفصل على يوتيوب (أكثر من 10 دقائق)' },
          { label_en: 'Direct interaction with an expert (Live/In-person)', label_ar: 'تفاعل مباشر مع خبير (بث مباشر/شخصي)' },
          { label_en: 'Reading a well-structured article/text', label_ar: 'قراءة مقال أو نص منظم جيداً' },
        ]
      },
      {
        id: 'g3_q6',
        section: 'Part 2: Your Digital World',
        text_en: 'LANGUAGE: When do you prefer content in Arabic over English?',
        text_ar: 'اللغة: متى تفضل المحتوى بالعربية على الإنجليزية؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'For Comedy & Relatable local stories', label_ar: 'للكوميديا والقصص المحلية الواقعية' },
          { label_en: 'For Religion & Values', label_ar: 'للدين والقيم' },
          { label_en: 'For News & Official Announcements', label_ar: 'للأخبار والإعلانات الرسمية' },
          { label_en: 'I prefer Arabic for everything', label_ar: 'أفضل العربية لكل شيء' },
          { label_en: 'I prefer English for everything', label_ar: 'أفضل الإنجليزية لكل شيء' },
          { label_en: 'I mix both (Arabizi/Code-switching) depending on the vibe', label_ar: 'أمزج بين الاثنين حسب الجو العام' },
        ]
      },
      {
        id: 'g3_q7',
        section: 'Part 2: Your Digital World',
        text_en: 'WELLBEING: What is your biggest concern about your online life right now?',
        text_ar: 'الصحة النفسية: ما هو أكبر قلق لديك بشأن حياتك الرقمية حالياً؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'Feeling pressure to look perfect/happy', label_ar: 'الضغط لأبدو مثالياً وسعيداً طوال الوقت' },
          { label_en: 'Cyberbullying or Toxic Comments', label_ar: 'التنمر الإلكتروني أو التعليقات السامة' },
          { label_en: 'Wasting too much time (doomscrolling)', label_ar: 'إضاعة الكثير من الوقت (التصفح اللانهائي)' },
          { label_en: 'Privacy and my data being stolen', label_ar: 'الخصوصية وسرقة بياناتي' },
          { label_en: 'I have no concerns, I feel safe', label_ar: 'ليس لدي مخاوف، أشعر بالأمان' },
        ]
      },
      {
        id: 'g3_q8',
        section: 'Part 2: Your Digital World',
        text_en: 'THE REALITY GAP: What is one thing older generations (Parents/Teachers) completely misunderstand about why you use social media?',
        text_ar: 'فجوة الأجيال: ما هو الشيء الوحيد الذي يسيء الجيل الأكبر (الأهل/المعلمون) فهمه تماماً حول استخدامك للتواصل الاجتماعي؟',
        type: 'text',
        page: 2
      }
    ]
  },
  {
    id: 'grok',
    name: 'Grok 4',
    description_en: 'Mobile-first approach, large touch-friendly buttons, visual elements/emojis.',
    description_ar: 'نهج الأولوية للهاتف المحمول، أزرار كبيرة سهلة اللمس، وعناصر بصرية/رموز تعبيرية.',
    intro_en: 'This survey is designed with a mobile-first approach... We simply want to hear your authentic voice.',
    intro_ar: 'تم تصميم هذا الاستطلاع بنهج الأولوية للهاتف المحمول... نريد فقط سماع صوتك الحقيقي.',
    questions: [
      // --- Page 1: Demographics ---
      {
        id: 'gr_d1',
        section: 'Demographic Questions',
        text_en: 'Your Age',
        text_ar: 'عمرك',
        type: 'single',
        page: 1,
        options: [
          { label_en: '10-14 years (Generation Alpha)', label_ar: '10-14 سنة' },
          { label_en: '15-19 years (Generation Z/Alpha overlap)', label_ar: '15-19 سنة' },
          { label_en: '20-24 years (Generation Z)', label_ar: '20-24 سنة' },
          { label_en: '25-29 years (Generation Z)', label_ar: '25-29 سنة' },
        ]
      },
      {
        id: 'gr_d2',
        section: 'Demographic Questions',
        text_en: 'Gender',
        text_ar: 'الجنس',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Male', label_ar: 'ذكر' },
          { label_en: 'Female', label_ar: 'أنثى' },
        ]
      },
      {
        id: 'gr_d3',
        section: 'Demographic Questions',
        text_en: 'Nationality or Residency',
        text_ar: 'الجنسية أو الإقامة',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'UAE National', label_ar: 'مواطن إماراتي' },
          { label_en: 'Other Arab Country', label_ar: 'دولة عربية أخرى' },
          { label_en: 'Non-Arab Country', label_ar: 'دولة غير عربية' },
          { label_en: 'Prefer not to say', label_ar: 'أفضل عدم الإفصاح' },
        ]
      },
      {
        id: 'gr_d4',
        section: 'Demographic Questions',
        text_en: 'Education Level',
        text_ar: 'مستوى التعليم',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Currently in primary/secondary school', label_ar: 'طالب في المدرسة الابتدائية/الثانوية' },
          { label_en: 'Currently in university', label_ar: 'طالب جامعي' },
          { label_en: 'Completed high school, not in university', label_ar: 'أكملت الثانوية، غير مسجل في الجامعة' },
          { label_en: 'Completed university degree', label_ar: 'حاصل على درجة جامعية' },
          { label_en: 'Other', label_ar: 'آخر' },
        ]
      },
      {
        id: 'gr_d5',
        section: 'Demographic Questions',
        text_en: 'Primary Device Used',
        text_ar: 'الجهاز الرئيسي المستخدم',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Smartphone', label_ar: 'هاتف ذكي' },
          { label_en: 'Tablet', label_ar: 'جهاز لوحي' },
          { label_en: 'Laptop/Computer', label_ar: 'حاسوب محمول/مكتبي' },
          { label_en: 'Other (e.g., smart TV)', label_ar: 'آخر (مثل تلفاز ذكي)' },
        ]
      },
      {
        id: 'gr_d6',
        section: 'Demographic Questions',
        text_en: 'Average Daily Screen Time',
        text_ar: 'متوسط وقت الشاشة اليومي',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Less than 2 hours', label_ar: 'أقل من ساعتين' },
          { label_en: '2-4 hours', label_ar: '2-4 ساعات' },
          { label_en: '5-7 hours', label_ar: '5-7 ساعات' },
          { label_en: '8+ hours', label_ar: '8 ساعات أو أكثر' },
        ]
      },
      // --- Page 2: Core Questions ---
      {
        id: 'gr_q1',
        section: 'The 8 Core Questions',
        text_en: 'Content Preferences: What topics capture your attention most in digital content?',
        text_ar: 'تفضيلات المحتوى: ما هي المواضيع التي تجذب انتباهك أكثر في المحتوى الرقمي؟',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: '😄 Entertainment and humor', label_ar: 'الترفيه والفكاهة 😄' },
          { label_en: '📚 Education and learning', label_ar: 'التعليم والتعلم 📚' },
          { label_en: '🌍 Social issues and activism', label_ar: 'القضايا الاجتماعية والنشاط 🌍' },
          { label_en: '🎮 Gaming and technology', label_ar: 'الألعاب والتكنولوجيا 🎮' },
          { label_en: '👗 Fashion and lifestyle', label_ar: 'الموضة ونمط الحياة 👗' },
          { label_en: '📰 News and current events', label_ar: 'الأخبار والأحداث الجارية 📰' },
          { label_en: 'Other', label_ar: 'آخر' },
        ]
      },
      {
        id: 'gr_q2',
        section: 'The 8 Core Questions',
        text_en: 'Format Preferences: Which platforms and formats do you prefer for consuming content?',
        text_ar: 'تفضيلات الصيغة: أي المنصات والأشكال تفضلها لاستهلاك المحتوى؟',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: '⏱️ Short videos (e.g., TikTok, Reels)', label_ar: 'فيديوهات قصيرة (مثل تيك توك، ريلز)' },
          { label_en: '🎬 Long-form videos (e.g., YouTube)', label_ar: 'فيديوهات طويلة (مثل يوتيوب)' },
          { label_en: '📱 Social media posts (e.g., Instagram, Snapchat)', label_ar: 'منشورات وسائل التواصل (مثل إنستغرام، سناب شات)' },
          { label_en: '🎧 Podcasts or audio content', label_ar: 'بودكاست أو محتوى صوتي' },
          { label_en: '🤝 Interactive content (e.g., polls, games)', label_ar: 'محتوى تفاعلي (مثل استطلاعات، ألعاب)' },
          { label_en: '📺 Traditional media (e.g., TV, newspapers)', label_ar: 'وسائل إعلام تقليدية (مثل التلفاز، الصحف)' },
          { label_en: 'Other', label_ar: 'آخر' },
        ]
      },
      {
        id: 'gr_q3',
        section: 'The 8 Core Questions',
        text_en: 'Trust and Credibility: Who do you trust most as sources of information?',
        text_ar: 'الثقة والمصداقية: من هم المصادر التي تثق بها أكثر للحصول على معلومات؟',
        type: 'rank',
        page: 2,
        options: [
          { label_en: '👥 Friends and peers', label_ar: 'الأصدقاء والأقران 👥' },
          { label_en: '📸 Influencers or content creators', label_ar: 'المؤثرين أو صانعي المحتوى 📸' },
          { label_en: '👨‍👩‍👧‍👦 Family members', label_ar: 'أفراد العائلة 👨‍👩‍👧‍👦' },
          { label_en: '🏛️ Official sources (e.g. government, schools)', label_ar: 'مصادر رسمية (مثل الحكومة، المدارس) 🏛️' },
          { label_en: '🗞️ News organizations', label_ar: 'منظمات إخبارية 🗞️' },
          { label_en: 'Other', label_ar: 'آخر' },
        ]
      },
      {
        id: 'gr_q4',
        section: 'The 8 Core Questions',
        text_en: 'Institutional Communication: How effective do you find messages from schools or government?',
        text_ar: 'فعالية التواصل المؤسسي: كم من الفعالية ترى في الرسائل من المدارس أو الحكومة؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: '🤔 Not effective (too boring or irrelevant)', label_ar: 'غير فعال (ممل أو غير ذي صلة) 🤔' },
          { label_en: '📲 Somewhat effective if on the right platform', label_ar: 'فعال جزئياً إذا كان على المنصة المناسبة 📲' },
          { label_en: '🤝 Very effective when interactive and honest', label_ar: 'فعال جداً عندما يكون تفاعلياً وصادقاً 🤝' },
        ]
      },
      {
        id: 'gr_q5',
        section: 'The 8 Core Questions',
        text_en: 'Safety Concerns: What are your biggest concerns about online safety?',
        text_ar: 'المخاوف المتعلقة بالسلامة: ما هي أكبر مخاوفك بشأن السلامة عبر الإنترنت؟',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: '🚫 Cyberbullying or harassment', label_ar: 'التنمر الإلكتروني أو التحرش 🚫' },
          { label_en: '📰 Misinformation or fake news', label_ar: 'المعلومات المضللة أو الأخبار الكاذبة 📰' },
          { label_en: '🔒 Privacy and data security', label_ar: 'الخصوصية وأمان البيانات 🔒' },
          { label_en: '⚠️ Exposure to inappropriate content', label_ar: 'التعرض لمحتوى غير مناسب ⚠️' },
          { label_en: '⌛ Addiction or excessive screen time', label_ar: 'الإدمان أو وقت الشاشة المفرط ⌛' },
          { label_en: 'Other', label_ar: 'آخر' },
        ]
      },
      {
        id: 'gr_q6',
        section: 'The 8 Core Questions',
        text_en: 'Learning Preferences: How do you prefer learning new things through digital media?',
        text_ar: 'تفضيلات التعلم: كيف تفضل تعلم أشياء جديدة من خلال الوسائط الرقمية؟',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: '🎥 Interactive videos or tutorials', label_ar: 'فيديوهات تفاعلية أو دروس 🎥' },
          { label_en: '🕹️ Gamified apps or challenges', label_ar: 'تطبيقات ألعاب أو تحديات 🕹️' },
          { label_en: '💬 Social media discussions or groups', label_ar: 'مناقشات أو مجموعات على وسائل التواصل 💬' },
          { label_en: '🎙️ Podcasts for on-the-go learning', label_ar: 'بودكاست للتعلم أثناء التنقل 🎙️' },
          { label_en: '📖 Traditional reading (e-books/articles)', label_ar: 'القراءة التقليدية (كتب إلكترونية/مقالات) 📖' },
          { label_en: 'Other', label_ar: 'آخر' },
        ]
      },
      {
        id: 'gr_q7',
        section: 'The 8 Core Questions',
        text_en: 'Language and Identity: What role does Arabic vs. English play in your content consumption?',
        text_ar: 'اللغة والهوية: ما هو دور اللغة العربية مقابل الإنجليزية في استهلاكك للمحتوى؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: '🇦🇪 Mostly Arabic for cultural connection', label_ar: 'غالباً العربية للارتباط الثقافي 🇦🇪' },
          { label_en: '🌐 Mostly English for global access', label_ar: 'غالباً الإنجليزية للوصول العالمي 🌐' },
          { label_en: '🔄 Mix of both, depending on topic', label_ar: 'مزيج من الاثنين حسب الموضوع 🔄' },
          { label_en: '👨‍👩‍👧‍👦 Arabic for family/school, English for fun', label_ar: 'العربية للعائلة/المدرسة، الإنجليزية للترفيه' },
        ]
      },
      {
        id: 'gr_q8',
        section: 'The 8 Core Questions',
        text_en: 'Open-Ended Question: What are your thoughts or suggestions on how families, schools, media, or government can communicate better with your generation?',
        text_ar: 'سؤال مفتوح: ما هي أفكارك أو اقتراحاتك لكيفية تواصل الأسر، المدارس، الإعلام، أو الحكومة مع جيلك بشكل أفضل؟',
        type: 'text',
        page: 2
      }
    ]
  },
  {
    id: 'chatgpt52',
    name: 'ChatGPT 5.2',
    description_en: 'Single-screen questions, big buttons. Focus on needs (WHY) and context.',
    description_ar: 'أسئلة بشاشة واحدة، أزرار كبيرة. التركيز على الاحتياجات (لماذا) والسياق.',
    intro_en: 'Media Z - Online Survey. Mobile-first | Bilingual.',
    intro_ar: 'ميديا زي - استطلاع عبر الإنترنت. أولوية للهاتف | ثنائي اللغة.',
    questions: [
      // --- Page 1: Demographics ---
      {
        id: 'c52_d1',
        section: 'Demographics',
        text_en: 'Age: How old are you?',
        text_ar: 'العمر: كم عمرك؟',
        type: 'single',
        page: 1,
        options: [
          { label_en: '10–12', label_ar: '10–12' },
          { label_en: '13–15', label_ar: '13–15' },
          { label_en: '16–18', label_ar: '16–18' },
          { label_en: '19–22', label_ar: '19–22' },
          { label_en: '23–26', label_ar: '23–26' },
          { label_en: '27+', label_ar: '27+' },
        ]
      },
      {
        id: 'c52_d2',
        section: 'Demographics',
        text_en: 'Gender',
        text_ar: 'الجنس',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Male', label_ar: 'ذكر' },
          { label_en: 'Female', label_ar: 'أنثى' },
        ]
      },
      {
        id: 'c52_d3',
        section: 'Demographics',
        text_en: 'Nationality / Residency: Which best describes you?',
        text_ar: 'الجنسية / الإقامة: أي خيار يصفك أكثر؟',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'UAE National', label_ar: 'مواطن/ة إماراتي/ة' },
          { label_en: 'UAE Resident (non-national)', label_ar: 'مقيم/ة في الإمارات (غير إماراتي/ة)' },
          { label_en: 'Outside UAE', label_ar: 'خارج الإمارات' },
        ]
      },
      {
        id: 'c52_d4',
        section: 'Demographics',
        text_en: 'Education level: What is your current education level?',
        text_ar: 'المستوى التعليمي: ما هو مستواك التعليمي الحالي؟',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Middle school', label_ar: 'إعدادي' },
          { label_en: 'High school', label_ar: 'ثانوي' },
          { label_en: 'University / College (Undergrad)', label_ar: 'جامعة (بكالوريوس)' },
          { label_en: 'Postgraduate', label_ar: 'دراسات عليا' },
          { label_en: 'Not currently studying', label_ar: 'غير ملتحق/ة بالدراسة' },
        ]
      },
      {
        id: 'c52_d5',
        section: 'Demographics',
        text_en: 'Primary device used: What device do you use most for content?',
        text_ar: 'الجهاز الأساسي: ما هو الجهاز الذي تستخدمه غالباً للمحتوى؟',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Smartphone', label_ar: 'هاتف ذكي' },
          { label_en: 'Tablet', label_ar: 'جهاز لوحي' },
          { label_en: 'Laptop', label_ar: 'لابتوب' },
          { label_en: 'Desktop', label_ar: 'كمبيوتر مكتبي' },
          { label_en: 'Smart TV / TV', label_ar: 'تلفاز ذكي / تلفاز' },
          { label_en: 'Gaming console', label_ar: 'جهاز ألعاب' },
        ]
      },
      {
        id: 'c52_d6',
        section: 'Demographics',
        text_en: 'Average daily screen time: On a typical day, how much screen time do you have?',
        text_ar: 'متوسط وقت الشاشة يومياً: في يوم عادي، كم تقضي وقتاً على الشاشة؟',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Less than 1 hour', label_ar: 'أقل من ساعة' },
          { label_en: '1–2 hours', label_ar: '1–2 ساعة' },
          { label_en: '3–4 hours', label_ar: '3–4 ساعات' },
          { label_en: '5–6 hours', label_ar: '5–6 ساعات' },
          { label_en: '7+ hours', label_ar: '7 ساعات فأكثر' },
        ]
      },
      // --- Page 2: Core Questions ---
      {
        id: 'c52_q1',
        section: 'Core Questions',
        text_en: 'Content topics that truly engage you (WHAT): Which topics do you enjoy most online?',
        text_ar: 'مواضيع المحتوى التي تستمتع بها أكثر على الإنترنت؟',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: 'Entertainment / funny content', label_ar: 'ترفيه / مقاطع مضحكة' },
          { label_en: 'Gaming', label_ar: 'ألعاب' },
          { label_en: 'Music', label_ar: 'موسيقى' },
          { label_en: 'Sports', label_ar: 'رياضة' },
          { label_en: 'Fashion & beauty', label_ar: 'موضة وجمال' },
          { label_en: 'Tech & AI', label_ar: 'تقنية وذكاء اصطناعي' },
          { label_en: 'Money / business / entrepreneurship', label_ar: 'مال / أعمال / ريادة' },
          { label_en: 'Education / tutorials', label_ar: 'تعليم / شروحات' },
          { label_en: 'News & current events', label_ar: 'أخبار وأحداث' },
          { label_en: 'Social issues / identity', label_ar: 'قضايا اجتماعية / هوية' },
          { label_en: 'Religion / spirituality', label_ar: 'دين / روحانيات' },
          { label_en: 'Health / fitness', label_ar: 'صحة / لياقة' },
          { label_en: 'Anime / series / films', label_ar: 'أنمي / مسلسلات / أفلام' },
          { label_en: 'Other', label_ar: 'أخرى' },
        ]
      },
      {
        id: 'c52_q2',
        section: 'Core Questions',
        text_en: 'Platforms you use most (HOW): Where do you spend most of your time?',
        text_ar: 'أين تقضي معظم وقتك في مشاهدة/استهلاك المحتوى؟',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: 'TikTok', label_ar: 'تيك توك' },
          { label_en: 'Instagram', label_ar: 'إنستغرام' },
          { label_en: 'YouTube', label_ar: 'يوتيوب' },
          { label_en: 'Snapchat', label_ar: 'سناب شات' },
          { label_en: 'X (Twitter)', label_ar: 'إكس (تويتر)' },
          { label_en: 'WhatsApp / Telegram channels', label_ar: 'واتساب / تيليغرام (قنوات)' },
          { label_en: 'Netflix / Shahid / streaming apps', label_ar: 'منصات مشاهدة (مثل نتفلكس/شاهد)' },
          { label_en: 'Twitch / live platforms', label_ar: 'منصات بث مباشر' },
          { label_en: 'Podcasts apps', label_ar: 'تطبيقات بودكاست' },
          { label_en: 'Gaming platforms (Roblox, Fortnite, etc.)', label_ar: 'منصات ألعاب' },
          { label_en: 'Other', label_ar: 'أخرى' },
        ]
      },
      {
        id: 'c52_q3',
        section: 'Core Questions',
        text_en: 'Formats + attention: Which formats keep your attention the most?',
        text_ar: 'ما نوع المحتوى الذي يحافظ على انتباهك أكثر؟',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: 'Short video (under 60s)', label_ar: 'فيديو قصير (أقل من دقيقة)' },
          { label_en: '1–3 minute video', label_ar: 'فيديو 1–3 دقائق' },
          { label_en: '5–15 minute video', label_ar: 'فيديو 5–15 دقيقة' },
          { label_en: 'Long video (15+ minutes)', label_ar: 'فيديو طويل (أكثر من 15 دقيقة)' },
          { label_en: 'Live streams', label_ar: 'بث مباشر' },
          { label_en: 'Stories (vertical / daily)', label_ar: 'ستوري يومي' },
          { label_en: 'Carousels / photo posts', label_ar: 'منشورات صور/سلايدر' },
          { label_en: 'Text threads / articles', label_ar: 'سلاسل نصية / مقالات' },
          { label_en: 'Audio (podcasts)', label_ar: 'صوت (بودكاست)' },
        ]
      },
      {
        id: 'c52_q4',
        section: 'Core Questions',
        text_en: 'Why you choose content (WHY: needs): What do you usually look for?',
        text_ar: 'عادةً ماذا تبحث عندما تختار محتوى؟',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: 'To relax / escape stress', label_ar: 'للراحة/الهروب من الضغط' },
          { label_en: 'To feel connected / not alone', label_ar: 'للشعور بالانتماء/لست وحدك' },
          { label_en: 'To learn something useful', label_ar: 'لتعلم شيء مفيد' },
          { label_en: 'To laugh / feel good', label_ar: 'للضحك/مزاج أفضل' },
          { label_en: 'To improve myself (skills/fitness/etc.)', label_ar: 'لتطوير نفسي (مهارات/لياقة...)' },
          { label_en: 'To follow trends', label_ar: 'لمتابعة الترند' },
          { label_en: 'To express my identity', label_ar: 'للتعبير عن هويتي' },
          { label_en: 'To discuss/debate', label_ar: 'للنقاش/الجدال' },
          { label_en: 'Other', label_ar: 'أخرى' },
        ]
      },
      {
        id: 'c52_q5',
        section: 'Core Questions',
        text_en: 'Trust & credibility: When you decide whether to trust content, what matters most?',
        text_ar: 'عندما تقرر هل تثق بالمحتوى أم لا، ما الأكثر أهمية؟',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: 'Creator is honest/transparent', label_ar: 'صراحة وشفافية (إعلانات/أخطاء/مصادر)' },
          { label_en: 'I can verify it (links, proof)', label_ar: 'يمكنني التأكد (روابط/أدلة/مصادر متعددة)' },
          { label_en: 'Many people I know share it', label_ar: 'كثير من معارفي يشاركونه' },
          { label_en: 'Creator has expertise/credentials', label_ar: 'لدى صانع المحتوى خبرة/مؤهلات' },
          { label_en: 'It matches what I’ve seen/experienced', label_ar: 'يطابق تجربتي/ما رأيته' },
          { label_en: 'Platform feels reliable', label_ar: 'المنصة نفسها موثوقة' },
          { label_en: 'Official/government account', label_ar: 'حساب رسمي/حكومي' },
          { label_en: 'Other', label_ar: 'أخرى' },
        ]
      },
      {
        id: 'c52_q6',
        section: 'Core Questions',
        text_en: 'Language & identity: In what language do you prefer content most of the time?',
        text_ar: 'ما اللغة التي تفضلها للمحتوى غالباً؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'Mostly Arabic', label_ar: 'غالباً عربي' },
          { label_en: 'Mostly English', label_ar: 'غالباً إنجليزي' },
          { label_en: 'Both equally', label_ar: 'الاثنين بالتساوي' },
          { label_en: 'Depends on the topic/platform', label_ar: 'يعتمد على الموضوع/المنصة' },
        ]
      },
      {
        id: 'c52_q6b',
        section: 'Core Questions (Follow-up)',
        text_en: 'If "Depends": What does it depend on?',
        text_ar: 'على ماذا يعتمد؟',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: 'Topic', label_ar: 'الموضوع' },
          { label_en: 'Platform', label_ar: 'المنصة' },
          { label_en: 'Friends/community', label_ar: 'الأصدقاء/المجتمع' },
          { label_en: 'Creator quality', label_ar: 'جودة صانع المحتوى' },
          { label_en: 'Easier to express feelings', label_ar: 'أسهل للتعبير عن المشاعر' },
          { label_en: 'Other', label_ar: 'أخرى' },
        ]
      },
      {
        id: 'c52_q7',
        section: 'Core Questions',
        text_en: 'Institutional communication: When schools/government/media talk to your generation, what tone works best?',
        text_ar: 'عندما تتحدث المدارس/الجهات الحكومية/الإعلام مع جيلك، ما الأسلوب الأنسب؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'Respectful and direct (no preaching)', label_ar: 'محترم ومباشر (بدون وعظ)' },
          { label_en: 'Honest about limits/uncertainty', label_ar: 'صريح حتى لو فيه "لا نعرف"' },
          { label_en: 'Short and visual', label_ar: 'قصير وبصري' },
          { label_en: 'Interactive (polls, Q&A, comments)', label_ar: 'تفاعلي (تصويت/أسئلة/تعليقات)' },
          { label_en: 'Story-based (real people, real situations)', label_ar: 'قصصي (ناس حقيقيين/مواقف حقيقية)' },
          { label_en: 'Funny/light', label_ar: 'خفيف/ساخر' },
          { label_en: 'Other', label_ar: 'أخرى' },
        ]
      },
      {
        id: 'c52_q7b',
        section: 'Core Questions (Follow-up)',
        text_en: 'Where would you actually notice an important public message?',
        text_ar: 'أين ستلاحظ فعلاً رسالة عامة مهمة؟',
        type: 'single',
        page: 2,
        options: [
            { label_en: 'Top Platforms selected in Q2', label_ar: 'المنصات المختارة في السؤال 2' },
            { label_en: 'Other', label_ar: 'أخرى' }
        ]
      },
      {
        id: 'c52_q8',
        section: 'Core Questions',
        text_en: 'Safety & boundaries: What is the biggest online risk for people your age?',
        text_ar: 'ما أكبر خطر على الإنترنت لمن هم بعمرك؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'Scams / fraud', label_ar: 'احتيال/نصب' },
          { label_en: 'Harassment / bullying', label_ar: 'تنمر/مضايقات' },
          { label_en: 'Inappropriate content', label_ar: 'محتوى غير مناسب' },
          { label_en: 'Privacy leaks / doxxing', label_ar: 'تسريب خصوصية' },
          { label_en: 'Addiction / losing time', label_ar: 'إدمان/ضياع وقت' },
          { label_en: 'Misinformation', label_ar: 'معلومات مضللة' },
          { label_en: 'Pressure to look/act a certain way', label_ar: 'ضغط للمظهر/التصرف' },
          { label_en: 'Other', label_ar: 'أخرى' },
        ]
      },
      {
        id: 'c52_q8b',
        section: 'Core Questions (Follow-up)',
        text_en: 'Who should help most with this?',
        text_ar: 'من يجب أن يساعد أكثر؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'Family', label_ar: 'الأسرة' },
          { label_en: 'School/University', label_ar: 'المدرسة/الجامعة' },
          { label_en: 'Platforms', label_ar: 'المنصات' },
          { label_en: 'Government/Law', label_ar: 'الحكومة/القانون' },
          { label_en: 'Me / users themselves', label_ar: 'المستخدم نفسه' },
        ]
      },
      {
        id: 'c52_q9',
        section: 'Core Questions',
        text_en: 'Learning preferences: If you wanted to learn something important, what works best?',
        text_ar: 'إذا أردت تعلم شيء مهم، ما الأفضل؟',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: 'Short step-by-step videos', label_ar: 'فيديوهات قصيرة خطوة بخطوة' },
          { label_en: 'Longer explanations (10–20 min)', label_ar: 'شرح أطول (10-20 دقيقة)' },
          { label_en: 'Live session with Q&A', label_ar: 'بث مباشر مع أسئلة' },
          { label_en: 'Interactive quizzes', label_ar: 'اختبارات تفاعلية' },
          { label_en: 'A teacher/mentor in person', label_ar: 'معلم/مرشد وجهاً لوجه' },
          { label_en: 'A friend/community group', label_ar: 'مجموعة أصدقاء/مجتمع' },
          { label_en: 'Reading (articles/books)', label_ar: 'قراءة (مقالات/كتب)' },
        ]
      },
      {
        id: 'c52_q10',
        section: 'Core Questions',
        text_en: 'Open-ended voice: If one institution wanted to communicate better with you, what is the one change you want?',
        text_ar: 'إذا كانت جهة واحدة تريد التواصل معك بشكل أفضل، ما التغيير الواحد الذي تريده منهم؟',
        type: 'text',
        page: 2
      }
    ]
  },
  {
    id: 'claude45',
    name: 'Claude Opus 4.5',
    description_en: 'Comprehensive analysis, swipe mechanics for ranking, detailed demographics.',
    description_ar: 'تحليل شامل، آليات التمرير للترتيب، ديموغرافيا مفصلة.',
    intro_en: 'Understanding Gen Z & Alpha Media Consumption in the Arab World.',
    intro_ar: 'فهم استهلاك وسائل الإعلام للجيل Z وألفا في العالم العربي.',
    questions: [
      // --- Page 1: Demographics ---
      {
        id: 'co45_d1',
        section: 'Section A: Demographic Questions',
        text_en: 'Age: Select your age group',
        text_ar: 'العمر: اختر فئتك العمرية',
        type: 'single',
        page: 1,
        options: [
          { label_en: '10-12', label_ar: '10-12' },
          { label_en: '13-15', label_ar: '13-15' },
          { label_en: '16-18', label_ar: '16-18' },
          { label_en: '19-21', label_ar: '19-21' },
          { label_en: '22-24', label_ar: '22-24' },
          { label_en: '25-27', label_ar: '25-27' },
        ]
      },
      {
        id: 'co45_d2',
        section: 'Section A: Demographic Questions',
        text_en: 'Gender',
        text_ar: 'الجنس',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Male', label_ar: 'ذكر' },
          { label_en: 'Female', label_ar: 'أنثى' },
        ]
      },
      {
        id: 'co45_d3',
        section: 'Section A: Demographic Questions',
        text_en: 'Where do you currently live?',
        text_ar: 'أين تعيش حالياً؟',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'UAE', label_ar: 'الإمارات العربية المتحدة' },
          { label_en: 'Saudi Arabia', label_ar: 'المملكة العربية السعودية' },
          { label_en: 'Egypt', label_ar: 'مصر' },
          { label_en: 'Other Arab country', label_ar: 'دولة عربية أخرى' },
          { label_en: 'Outside the Arab world', label_ar: 'خارج العالم العربي' },
        ]
      },
      {
        id: 'co45_d4',
        section: 'Section A: Demographic Questions',
        text_en: 'What is your current education level?',
        text_ar: 'ما هو مستواك التعليمي الحالي؟',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Primary/Elementary school', label_ar: 'المرحلة الابتدائية' },
          { label_en: 'Middle school', label_ar: 'المرحلة الإعدادية/المتوسطة' },
          { label_en: 'High school', label_ar: 'المرحلة الثانوية' },
          { label_en: 'University student', label_ar: 'طالب جامعي' },
          { label_en: 'University graduate', label_ar: 'خريج جامعي' },
          { label_en: 'Working', label_ar: 'أعمل حالياً' },
        ]
      },
      {
        id: 'co45_d5',
        section: 'Section A: Demographic Questions',
        text_en: 'What device do you use MOST for watching content?',
        text_ar: 'ما الجهاز الذي تستخدمه أكثر لمشاهدة المحتوى؟',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Smartphone', label_ar: 'الهاتف الذكي' },
          { label_en: 'Tablet', label_ar: 'الجهاز اللوحي' },
          { label_en: 'Laptop', label_ar: 'الكمبيوتر المحمول' },
          { label_en: 'Desktop computer', label_ar: 'الكمبيوتر المكتبي' },
          { label_en: 'Smart TV', label_ar: 'التلفزيون الذكي' },
          { label_en: 'Gaming console', label_ar: 'جهاز الألعاب' },
        ]
      },
      {
        id: 'co45_d6',
        section: 'Section A: Demographic Questions',
        text_en: 'On average, how many hours per day do you spend on screens?',
        text_ar: 'كم ساعة تقريباً تقضيها يومياً أمام الشاشات؟',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Less than 1 hour', label_ar: 'أقل من ساعة' },
          { label_en: '1-2 hours', label_ar: '١-٢ ساعة' },
          { label_en: '3-4 hours', label_ar: '٣-٤ ساعات' },
          { label_en: '5-6 hours', label_ar: '٥-٦ ساعات' },
          { label_en: '7-8 hours', label_ar: '٧-٨ ساعات' },
          { label_en: 'More than 8 hours', label_ar: 'أكثر من ٨ ساعات' },
        ]
      },
      // --- Page 2: Core Questions ---
      {
        id: 'co45_q1',
        section: 'Section B: Core Questions',
        text_en: 'CONTENT PREFERENCES — What topics do you actively seek out? (Select up to 5)',
        text_ar: 'ما المواضيع التي تبحث عنها بنفسك؟ (اختر حتى ٥ مواضيع)',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: 'Gaming content', label_ar: 'محتوى الألعاب' },
          { label_en: 'Comedy and entertainment', label_ar: 'الكوميديا والترفيه' },
          { label_en: 'Music and artists', label_ar: 'الموسيقى والفنانين' },
          { label_en: 'Sports', label_ar: 'الرياضة' },
          { label_en: 'Fashion and beauty', label_ar: 'الموضة والجمال' },
          { label_en: 'Technology and gadgets', label_ar: 'التقنية والأجهزة' },
          { label_en: 'News and current events', label_ar: 'الأخبار والأحداث الجارية' },
          { label_en: 'Educational content', label_ar: 'المحتوى التعليمي' },
          { label_en: 'Religion and spirituality', label_ar: 'الدين والروحانيات' },
          { label_en: 'Health and fitness', label_ar: 'الصحة واللياقة' },
          { label_en: 'Food and cooking', label_ar: 'الطعام والطبخ' },
          { label_en: 'Personal finance', label_ar: 'التمويل الشخصي' },
          { label_en: 'Career and self-development', label_ar: 'المهنة وتطوير الذات' },
          { label_en: 'Social issues and activism', label_ar: 'القضايا الاجتماعية' },
          { label_en: 'Art and creativity', label_ar: 'الفن والإبداع' },
          { label_en: 'Relationships and life advice', label_ar: 'العلاقات ونصائح الحياة' },
        ]
      },
      {
        id: 'co45_q2',
        section: 'Section B: Core Questions',
        text_en: 'FORMAT & PLATFORM PREFERENCES — Rank your TOP 3 platforms (1 = most used)',
        text_ar: 'رتب أكثر ٣ منصات تستخدمها (١ = الأكثر استخداماً)',
        type: 'rank',
        page: 2,
        options: [
          { label_en: 'TikTok', label_ar: 'TikTok' },
          { label_en: 'YouTube', label_ar: 'YouTube' },
          { label_en: 'Instagram', label_ar: 'Instagram' },
          { label_en: 'Snapchat', label_ar: 'Snapchat' },
          { label_en: 'X (Twitter)', label_ar: 'X (Twitter)' },
          { label_en: 'WhatsApp', label_ar: 'WhatsApp' },
          { label_en: 'Telegram', label_ar: 'Telegram' },
          { label_en: 'Discord', label_ar: 'Discord' },
          { label_en: 'Netflix/Streaming', label_ar: 'Netflix/Streaming' },
          { label_en: 'Twitch', label_ar: 'Twitch' },
          { label_en: 'Other', label_ar: 'أخرى' },
        ]
      },
      {
        id: 'co45_q3',
        section: 'Section B: Core Questions',
        text_en: 'VIDEO LENGTH — What length of content do you prefer for ENTERTAINMENT?',
        text_ar: 'ما طول المحتوى الذي تفضله للترفيه؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'Under 1 minute', label_ar: 'أقل من دقيقة' },
          { label_en: '1-3 minutes', label_ar: '١-٣ دقائق' },
          { label_en: '3-10 minutes', label_ar: '١٠-٣ دقائق' },
          { label_en: '10-30 minutes', label_ar: '٣٠-١٠ دقيقة' },
          { label_en: 'Over 30 minutes', label_ar: 'أكثر من ٣٠ دقيقة' },
        ]
      },
      {
        id: 'co45_q3b',
        section: 'Section B: Core Questions',
        text_en: 'VIDEO LENGTH — What length of content do you prefer for LEARNING something new?',
        text_ar: 'ما طول المحتوى الذي تفضله لتعلم شيء جديد؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'Under 1 minute', label_ar: 'أقل من دقيقة' },
          { label_en: '1-3 minutes', label_ar: '١-٣ دقائق' },
          { label_en: '3-10 minutes', label_ar: '١٠-٣ دقائق' },
          { label_en: '10-30 minutes', label_ar: '٣٠-١٠ دقيقة' },
          { label_en: 'Over 30 minutes', label_ar: 'أكثر من ٣٠ دقيقة' },
        ]
      },
      {
        id: 'co45_q4',
        section: 'Section B: Core Questions',
        text_en: 'TRUST & CREDIBILITY — Rate how much you trust each source (1 = Don\'t trust at all, 5 = Trust completely)',
        text_ar: 'قيّم مدى ثقتك بكل مصدر (١ = لا أثق إطلاقاً، ٥ = أثق تماماً)',
        type: 'rank',
        page: 2,
        options: [
          { label_en: 'Content creators/Influencers I follow', label_ar: 'صناع محتوى/مؤثرين أتابعهم' },
          { label_en: 'Friends my age', label_ar: 'أصدقائي من نفس عمري' },
          { label_en: 'My parents', label_ar: 'والديّ' },
          { label_en: 'Teachers', label_ar: 'الملمين' },
          { label_en: 'Traditional news channels', label_ar: 'القنوات الإخبارية التقليدية' },
          { label_en: 'Government official accounts', label_ar: 'الحسابات الحكومية الرسمية' },
          { label_en: 'Wikipedia', label_ar: 'ويكيبيديا' },
          { label_en: 'AI tools (ChatGPT, etc.)', label_ar: 'أدوات الذكاء الاصطناعي' },
        ]
      },
      {
        id: 'co45_q5',
        section: 'Section B: Core Questions',
        text_en: 'INSTITUTIONAL COMMUNICATION — When official institutions try to reach you, what usually happens?',
        text_ar: 'عندما تحاول المؤسسات الرسمية التواصل معك، ماذا يحدث عادةً؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'I usually see their messages and find them relevant', label_ar: 'عادةً أرى رسائلهم وأجدها مفيدة' },
          { label_en: 'I see their messages but they feel boring or outdated', label_ar: 'أرى رسائلهم لكنها تبدو مملة أو قديمة الطراز' },
          { label_en: 'I rarely see their messages because they\'re not on platforms I use', label_ar: 'نادراً ما أرى رسائلهم لأنها ليست على المنصات التي أستخدمها' },
          { label_en: 'I see them but skip past them immediately', label_ar: 'أراها لكنني أتجاوزها فوراً' },
          { label_en: 'I actively avoid official messaging', label_ar: 'أتجنب الرسائل الرسمية بشكل متعمد' },
        ]
      },
      {
        id: 'co45_q5b',
        section: 'Section B: Core Questions (Follow-up)',
        text_en: 'What would make you pay attention to official messages?',
        text_ar: 'ما الذي سيجعلك تهتم بالرسائل الرسمية؟',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: 'Shorter format (under 60 seconds)', label_ar: 'صيغة أقصر (أقل من ٦٠ ثانية)' },
          { label_en: 'More entertaining/creative approach', label_ar: 'طريقة أكثر ترفيهاً وإبداعاً' },
          { label_en: 'Delivered by creators I already follow', label_ar: 'يقدمها صناع محتوى أتابعهم' },
          { label_en: 'On platforms I actually use', label_ar: 'على منصات أستخدمها فعلاً' },
          { label_en: 'More honest and direct tone', label_ar: 'لهجة أكثر صدقاً ومباشرة' },
          { label_en: 'Opportunity to respond or interact', label_ar: 'فرصة للرد أو التفاعل' },
          { label_en: 'Relevant to my actual life', label_ar: 'ذات صلة بحياتي الفعلية' },
        ]
      },
      {
        id: 'co45_q6',
        section: 'Section B: Core Questions',
        text_en: 'LANGUAGE & IDENTITY — How do you prefer to consume ENTERTAINMENT content?',
        text_ar: 'كيف تفضل استهلاك المحتوى الترفيهي؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'Arabic only', label_ar: 'العربية فقط' },
          { label_en: 'Mostly Arabic', label_ar: 'العربية غالباً' },
          { label_en: 'Mix of Arabic and English', label_ar: 'مزيج من العربية والإنجليزية' },
          { label_en: 'Mostly English', label_ar: 'الإنجليزية غالباً' },
          { label_en: 'English only', label_ar: 'الإنجليزية فقط' },
          { label_en: 'Other language', label_ar: 'لغة أخرى' },
        ]
      },
      {
        id: 'co45_q6b',
        section: 'Section B: Core Questions',
        text_en: 'LANGUAGE & IDENTITY — How do you prefer to consume LEARNING/EDUCATIONAL content?',
        text_ar: 'كيف تفضل استهلاك المحتوى التعليمي؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'Arabic only', label_ar: 'العربية فقط' },
          { label_en: 'Mostly Arabic', label_ar: 'العربية غالباً' },
          { label_en: 'Mix of Arabic and English', label_ar: 'مزيج من العربية والإنجليزية' },
          { label_en: 'Mostly English', label_ar: 'الإنجليزية غالباً' },
          { label_en: 'English only', label_ar: 'الإنجليزية فقط' },
          { label_en: 'Other language', label_ar: 'لغة أخرى' },
        ]
      },
      {
        id: 'co45_q6c',
        section: 'Section B: Core Questions',
        text_en: 'Do you feel there is enough quality Arabic content for your interests?',
        text_ar: 'هل تشعر بوجود محتوى عربي كافٍ وجيد لاهتماماتك؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'Yes, plenty', label_ar: 'نعم، كثير' },
          { label_en: 'Some, but I want more', label_ar: 'بعضه، لكنني أريد المزيد' },
          { label_en: 'Very little', label_ar: 'قليل جداً' },
          { label_en: 'No, I mostly watch non-Arabic content', label_ar: 'لا، أشاهد محتوى غير عربي غالباً' },
        ]
      },
      {
        id: 'co45_q7',
        section: 'Section B: Core Questions',
        text_en: 'MEDIA & WELLBEING — What does media/social media give you? (Select up to 3)',
        text_ar: 'ما الذي يمنحك إياه الإعلام/وسائل التواصل؟ (اختر حتى ٣)',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: 'A sense of belonging to a community', label_ar: 'شعور بالانتماء لمجتمع' },
          { label_en: 'Learning new things', label_ar: 'تعلم أشياء جديدة' },
          { label_en: 'Entertainment and relaxation', label_ar: 'الترفيه والاسترخاء' },
          { label_en: 'Connection with friends', label_ar: 'التواصل مع الأصدقاء' },
          { label_en: 'Escape from stress or problems', label_ar: 'الهروب من الضغوط أو المشاكل' },
          { label_en: 'Inspiration and motivation', label_ar: 'الإلهام والتحفيز' },
          { label_en: 'Understanding the world', label_ar: 'فهم العالم' },
          { label_en: 'Expressing myself', label_ar: 'التعبير عن نفسي' },
        ]
      },
      {
        id: 'co45_q7b',
        section: 'Section B: Core Questions',
        text_en: 'What concerns you about media/social media? (Select up to 3)',
        text_ar: 'ما الذي يقلقك بشأن الإعلام/وسائل التواصل؟ (اختر حتى ٣)',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: 'Too much time spent', label_ar: 'الوقت الكثير الذي أقضيه' },
          { label_en: 'Unrealistic expectations', label_ar: 'التوقعات غير الواقعية' },
          { label_en: 'Misinformation', label_ar: 'المعلومات المغلوطة' },
          { label_en: 'Privacy concerns', label_ar: 'مخاوف الخصوصية' },
          { label_en: 'Negative comparison with others', label_ar: 'المقارنة السلبية مع الآخرين' },
          { label_en: 'Cyberbullying', label_ar: 'التنمر الإلكتروني' },
          { label_en: 'Addictive algorithms', label_ar: 'الخوارزميات التي تسبب الإدمان' },
          { label_en: 'Nothing concerns me', label_ar: 'لا شيء يقلقني' },
        ]
      },
      {
        id: 'co45_q8',
        section: 'Section B: Core Questions',
        text_en: 'YOUR VOICE — If you could send one message to the adults who create media... what would you tell them?',
        text_ar: 'لو استطعت إرسال رسالة واحدة للكبار الذين يصنعون الإعلام... ماذا ستقول لهم؟',
        type: 'text',
        page: 2
      }
    ]
  },
  {
    id: 'kimi',
    name: 'Kimi K2.5',
    description_en: 'Balanced coverage, grid layout with icons, sophisticated conditional logic.',
    description_ar: 'تغطية متوازنة، تخطيط شبكي مع أيقونات، منطق شرطي متطور.',
    intro_en: 'Designed for mobile-first deployment, bilingual presentation.',
    intro_ar: 'مصمم للنشر عبر الهاتف المحمول، عرض ثنائي اللغة.',
    questions: [
      // --- Page 1: Demographics ---
      {
        id: 'k2_d1',
        section: 'Demographic Questions',
        text_en: 'What is your age?',
        text_ar: 'كم عمرك؟',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Under 12', label_ar: 'أقل من 12' },
          { label_en: '12-14', label_ar: '12-14' },
          { label_en: '15-17', label_ar: '15-17' },
          { label_en: '18-20', label_ar: '18-20' },
          { label_en: '21-24', label_ar: '21-24' },
          { label_en: '25-27', label_ar: '25-27' },
        ]
      },
      {
        id: 'k2_d2',
        section: 'Demographic Questions',
        text_en: 'Gender',
        text_ar: 'الجنس',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Male', label_ar: 'ذكر' },
          { label_en: 'Female', label_ar: 'أنثى' },
        ]
      },
      {
        id: 'k2_d3',
        section: 'Demographic Questions',
        text_en: 'What is your nationality/residency status?',
        text_ar: 'ما هي حالة إقامتك/جنسيتك؟',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'UAE/GCC Citizen', label_ar: 'مواطن إماراتي / خليجي' },
          { label_en: 'Arab Resident', label_ar: 'مقيم عربي' },
          { label_en: 'Non-Arab Resident', label_ar: 'مقيم غير عربي' },
          { label_en: 'Visitor/Tourist', label_ar: 'زائر/سياحة' },
        ]
      },
      {
        id: 'k2_d4',
        section: 'Demographic Questions',
        text_en: 'Current education level?',
        text_ar: 'المستوى التعليمي الحالي؟',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Primary School', label_ar: 'مدرسة ابتدائية' },
          { label_en: 'Middle/High School', label_ar: 'مدرسة متوسطة/ثانوية' },
          { label_en: 'University (Bachelor\'s)', label_ar: 'جامعة (بكالوريوس)' },
          { label_en: 'Postgraduate', label_ar: 'دراسات عليا' },
          { label_en: 'Not currently studying', label_ar: 'غير ملتحق بالدراسة' },
        ]
      },
      {
        id: 'k2_d5',
        section: 'Demographic Questions',
        text_en: 'What device do you use MOST for consuming content?',
        text_ar: 'ما الجهاز الذي تستخدمه غالباً لاستهلاك المحتوى؟',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Smartphone', label_ar: 'الهاتف الذكي' },
          { label_en: 'Laptop/Desktop', label_ar: 'اللابتوب/الكمبيوتر' },
          { label_en: 'Smart TV', label_ar: 'التلفزيون المتصل بالإنترنت' },
          { label_en: 'Tablet (iPad/Tablet)', label_ar: 'الجهاز اللوحي (آيباد/تابلت)' },
          { label_en: 'Gaming Console', label_ar: 'أجهزة الألعاب' },
        ]
      },
      {
        id: 'k2_d6',
        section: 'Demographic Questions',
        text_en: 'Average daily screen time for content consumption?',
        text_ar: 'متوسط وقت الشاشة اليومي لاستهلاك المحتوى؟',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Less than 1 hour', label_ar: 'أقل من ساعة' },
          { label_en: '1-3 hours', label_ar: '١-٣ ساعات' },
          { label_en: '4-6 hours', label_ar: '٤-٦ ساعات' },
          { label_en: '7-9 hours', label_ar: '٧-٩ ساعات' },
          { label_en: 'More than 9 hours', label_ar: 'أكثر من ٩ ساعات' },
        ]
      },
      // --- Page 2: Core Questions ---
      {
        id: 'k2_q1',
        section: 'Core Questions',
        text_en: 'CONTENT PREFERENCES — "What Captures Your Attention?" (Select up to 3)',
        text_ar: 'تفضيلات المحتوى: ما الذي يجذب انتباهك؟',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: '😂 Short funny videos/Entertainment', label_ar: '😂 مقاطع مضحكة/ترفيه قصيرة' },
          { label_en: '🎮 Gaming content/Livestreams', label_ar: '🎮 ألعاب ومحتوى الألعاب' },
          { label_en: '📰 News and current affairs', label_ar: '📰 أخبار ومواضيع عامة' },
          { label_en: '🎓 Educational/Self-improvement', label_ar: '🎓 محتوى تعليمي/تطوير ذاتي' },
          { label_en: '🎬 Series and movies', label_ar: '🎬 مسلسلات وأفلام' },
          { label_en: '💄 Beauty, fashion, lifestyle', label_ar: '💄 الجمال، الموضة، والأسلوب' },
          { label_en: '⚽ Sports', label_ar: '⚽ الرياضة' },
          { label_en: '🍳 Cooking/Daily life vlogs', label_ar: '🍳 الطبخ والحياة اليومية' },
          { label_en: '💬 Conversations/Discussions (podcasts)', label_ar: '💬 محادثات ومناقشات (بودكاست، حوارات)' },
          { label_en: '🕌 Religious/Spiritual content', label_ar: '🕌 محتوى ديني/روحاني' },
          { label_en: '🎵 Music and dance', label_ar: '🎵 موسيقى ورقص' },
          { label_en: '🌟 Influencer/Celebrity content', label_ar: '🌟 محتوى المؤثرين والمشاهير' },
        ]
      },
      {
        id: 'k2_q2',
        section: 'Core Questions',
        text_en: 'FORMAT & PLATFORM — "Where and How?" Which platform do you spend the MOST time on daily?',
        text_ar: 'أين وكيف؟ أي منصة تقضي عليها معظم وقتك يومياً؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: '🎵 TikTok', label_ar: 'تيك توك' },
          { label_en: '📸 Instagram (Reels/Stories)', label_ar: 'إنستغرام (ريلز/ستوريز)' },
          { label_en: '📺 YouTube (shorts + long)', label_ar: 'يوتيوب' },
          { label_en: '💬 WhatsApp (Status/Groups)', label_ar: 'واتساب (حالات/مجموعات)' },
          { label_en: '🎮 Twitch/Discord', label_ar: 'تويتش/ديسكورد' },
          { label_en: '🐦 Twitter/X', label_ar: 'تويتر/إكس' },
          { label_en: '📺 Traditional TV', label_ar: 'تلفزيون تقليدي' },
          { label_en: '🎬 Netflix/Streaming platforms', label_ar: 'نتفليكس/ستريمنغ' },
          { label_en: '👻 Snapchat', label_ar: 'سناب شات' },
        ]
      },
      {
        id: 'k2_q2a',
        section: 'Core Questions',
        text_en: 'For educational content specifically, which format actually helps you learn?',
        text_ar: 'للمحتوى التعليمي تحديداً، أي شكل يساعدك فعلاً على التعلم؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'Short videos (under 2 min)', label_ar: 'فيديوهات قصيرة (أقل من دقيقتين)' },
          { label_en: 'Medium videos (5-15 min)', label_ar: 'فيديوهات متوسطة (٥-١٥ دقيقة)' },
          { label_en: 'Long-form videos (15+ min)', label_ar: 'فيديوهات طويلة (أكثر من ١٥ دقيقة)' },
          { label_en: 'Live interactive sessions', label_ar: 'بث مباشر وتفاعلي' },
          { label_en: 'Mixed text + video', label_ar: 'مقروء + فيديو مختلط' },
          { label_en: 'Educational games/interactive', label_ar: 'ألعاب تعليمية/تفاعلية' },
        ]
      },
      {
        id: 'k2_q3',
        section: 'Core Questions',
        text_en: 'LANGUAGE & IDENTITY — When do you prefer Arabic vs. English?',
        text_ar: 'اللغة والهوية: متى تفضل العربية مقابل الإنجليزية؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: '🟢 Mostly Arabic — feels more connected to my identity', label_ar: '🟢 غالباً بالعربي — أشعر أنه يعبر عن هويتي أكثر' },
          { label_en: '🔵 Mostly English — better quality, more options', label_ar: '🔵 غالباً بالإنجليزية — المحتوى أفضل والخيارات أوسع' },
          { label_en: '🟡 I code-switch by topic — Arabic for family/religion, English for education', label_ar: '🟡 أتنقل بين اللغتين حسب الموضوع' },
          { label_en: '🟣 Same content, mixed languages (e.g., Arabic video with English comments)', label_ar: '🟣 أشاهد نفس المحتوى بلغتين مختلفتين' },
          { label_en: '⚪ Language doesn\'t matter, quality does', label_ar: '⚪ اللغة لا تهم، الجودة هي المهمة' },
        ]
      },
      {
        id: 'k2_q4',
        section: 'Core Questions',
        text_en: 'TRUST & CREDIBILITY — Who Do You Actually Believe?',
        text_ar: 'الثقة والمصداقية: من تصدق فعلاً؟',
        type: 'rank',
        page: 2,
        options: [
          { label_en: '1st: People I know personally (family, friends)', label_ar: 'أشخاص أعرفهم شخصياً (عائلة، أصدقاء)' },
          { label_en: '2nd: Influencers/creators I follow regularly', label_ar: 'مؤثرون/يوتيوبرز أتابعهم باستمرار' },
          { label_en: '3rd: Official government sources', label_ar: 'جهات رسمية حكومية' },
          { label_en: '4th: Traditional TV/newspapers', label_ar: 'قنوات تلفزيون/صحف تقليدية' },
          { label_en: '5th: Teachers/professors', label_ar: 'معلمون/أساتذة' },
          { label_en: '6th: Search engines (Google)', label_ar: 'محركات البحث (غوغل)' },
        ]
      },
      {
        id: 'k2_q5',
        section: 'Core Questions',
        text_en: 'INSTITUTIONAL COMMUNICATION — Why Does It Fail?',
        text_ar: 'التواصل المؤسسي: لماذا يفشل؟',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: '🕰️ Too formal/old-fashioned language', label_ar: '🕰️ الطريقة القديمة في التحدث' },
          { label_en: '📢 Obviously an ad/promotion', label_ar: '📢 واضح أنها إعلان/دعاية مدفوعة' },
          { label_en: '🚫 Doesn\'t understand my real problems', label_ar: '🚫 لا تفهم مشاكلي الحقيقية' },
          { label_en: '💬 I can\'t reply or interact', label_ar: '💬 لا يمكنني الرد أو التفاعل' },
          { label_en: '🎨 Visually boring/outdated', label_ar: '🎨 الشكل بصرياً ممل أو قديم' },
          { label_en: '⏱️ Too long and boring — no time', label_ar: '⏱️ طويلة ومملة — لا وقت لها' },
          { label_en: '🤔 I doubt its honesty/feels like hiding something', label_ar: '🤔 أشك في صدقها/أشعر أنها تخفي شيئاً' },
        ]
      },
      {
        id: 'k2_q6',
        section: 'Core Questions',
        text_en: 'SAFETY & FAMILY — "The Conversation You\'re Not Having"',
        text_ar: 'السلامة والعائلة: ما الشيء الوحيد الذي لا يفهمه أهلك عن تجربتك أونلاين؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: '🛡️ "I know how to protect myself better than you think"', label_ar: '🛡️ "أنا أعرف كيف أحمي نفسي أكثر مما تعتقدون"' },
          { label_en: '😨 "Some content upsets me but I don\'t know how to talk about it"', label_ar: '😨 "بعض المحتوى يضايقني لكني لا أعرف كيف أتحدث عنه"' },
          { label_en: '🤝 "I find real friends online"', label_ar: '🤝 "الإنترنت مكان أجد فيه أصدقاء حقيقيين"' },
          { label_en: '🎭 "I am a different person online vs offline — and that\'s normal"', label_ar: '🎭 "أنا شخص مختلف أونلاين مقابل الواقع — وهذا طبيعي"' },
          { label_en: '📵 "Screen time isn\'t the problem, understanding is"', label_ar: '📵 "الحد من الشاشات ليس الحل، الفهم هو الحل"' },
          { label_en: 'Other', label_ar: 'شيء آخر' },
        ]
      },
      {
        id: 'k2_q7',
        section: 'Core Questions',
        text_en: 'LEARNING & FUTURE — "What Should Schools Teach?" What digital skill do you wish your school taught you?',
        text_ar: 'التعلم والمستقبل: ما المهارة الرقمية التي تتمنى أن تعلمك إياها مدرستك؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: '🎥 Content creation and digital influence', label_ar: '🎥 صناعة المحتوى والتأثير الرقمي' },
          { label_en: '🔍 How to verify fake news', label_ar: '🔍 كيف أتحقق من الأخبار الكاذبة' },
          { label_en: '💼 Using social media for work/future career', label_ar: '💼 استخدام السوشال ميديا للعمل/المستقبل' },
          { label_en: '🧠 Time management and focus with constant content', label_ar: '🧠 إدارة الوقت والتركيز مع كثرة المحتوى' },
          { label_en: '💰 Digital economy and cryptocurrency', label_ar: '💰 الاقتصاد الرقمي والعملات الرقمية' },
          { label_en: '🛡️ Privacy and data protection', label_ar: '🛡️ الخصوصية وحماية البيانات' },
          { label_en: '🎨 Design and video editing', label_ar: '🎨 التصميم والمونتاج' },
          { label_en: '🤖 AI and how to use it', label_ar: '🤖 الذكاء الاصطناعي وكيف أستخدمه' },
        ]
      },
      {
        id: 'k2_q8',
        section: 'Core Questions',
        text_en: 'OPEN-ENDED — "Your Voice"',
        text_ar: 'صوتك: لو كان بإمكانك تغيير شيء واحد في كيفية تواصل الكبار معك، ماذا سيكون؟',
        type: 'text',
        page: 2
      }
    ]
  },
  {
    id: 'qwen',
    name: 'Qwen 3 Max',
    description_en: 'Visual topic cards, two-part questions (platform + format), specific challenge section.',
    description_ar: 'بطاقات مواضيع مرئية، أسئلة من جزأين (المنصة + التنسيق)، قسم تحديات محدد.',
    intro_en: 'The survey flows from demographics to 8 core questions. Estimated completion 5-6 mins.',
    intro_ar: 'يسير الاستطلاع من الديموغرافيا إلى 8 أسئلة أساسية. الوقت المقدر 5-6 دقائق.',
    questions: [
      // --- Page 1: Demographics ---
      {
        id: 'qw_d1',
        section: 'Demographic Information',
        text_en: 'Age',
        text_ar: 'العمر',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Under 13', label_ar: 'أقل من 13 سنة' },
          { label_en: '13–15', label_ar: '13–15 سنة' },
          { label_en: '16–18', label_ar: '16–18 سنة' },
          { label_en: '19–22', label_ar: '19–22 سنة' },
          { label_en: '23–26', label_ar: '23–26 سنة' },
          { label_en: '27+', label_ar: '27 سنة فأكثر' },
        ]
      },
      {
        id: 'qw_d2',
        section: 'Demographic Information',
        text_en: 'Gender',
        text_ar: 'الجنس',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Male', label_ar: 'ذكر' },
          { label_en: 'Female', label_ar: 'أنثى' },
        ]
      },
      {
        id: 'qw_d3',
        section: 'Demographic Information',
        text_en: 'Nationality or Residency',
        text_ar: 'الجنسية أو الإقامة',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'UAE National', label_ar: 'مواطن إماراتي' },
          { label_en: 'Arab Resident', label_ar: 'مقيم عربي' },
          { label_en: 'Asian Resident', label_ar: 'مقيم آسيوي' },
          { label_en: 'Western Resident', label_ar: 'مقيم غربي' },
          { label_en: 'Other', label_ar: 'أخرى' },
        ]
      },
      {
        id: 'qw_d4',
        section: 'Demographic Information',
        text_en: 'I am currently...',
        text_ar: 'أنت حالياً...',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'In high school', label_ar: 'في المدرسة الثانوية' },
          { label_en: 'University student', label_ar: 'طالب جامعي' },
          { label_en: 'Employed full-time', label_ar: 'أعمل بدوام كامل' },
          { label_en: 'Working part-time & studying', label_ar: 'أعمل بدوام جزئي وأدرس' },
          { label_en: 'Seeking employment', label_ar: 'أبحث عن عمل' },
          { label_en: 'Other', label_ar: 'أخرى' },
        ]
      },
      {
        id: 'qw_d5',
        section: 'Demographic Information',
        text_en: 'My primary device for content consumption',
        text_ar: 'الجهاز الذي تستخدمه أكثر من غيره لمشاهدة المحتوى',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Smartphone', label_ar: 'هاتف ذكي' },
          { label_en: 'Laptop', label_ar: 'لابتوب' },
          { label_en: 'Desktop', label_ar: 'حاسوب مكتبي' },
          { label_en: 'Smart TV', label_ar: 'تلفزيون ذكي' },
          { label_en: 'Gaming console', label_ar: 'جهاز ألعاب' },
        ]
      },
      {
        id: 'qw_d6',
        section: 'Demographic Information',
        text_en: 'Average daily screen time for non-educational content',
        text_ar: 'متوسط وقت الشاشة اليومي للمحتوى غير التعليمي (مثل الترفيه، التواصل الاجتماعي)',
        type: 'single',
        page: 1,
        options: [
          { label_en: '0-2 hours', label_ar: '0-2 ساعات' },
          { label_en: '2-4 hours', label_ar: '2-4 ساعات' },
          { label_en: '4-6 hours', label_ar: '4-6 ساعات' },
          { label_en: '6-8 hours', label_ar: '6-8 ساعات' },
          { label_en: '8-10 hours', label_ar: '8-10 ساعات' },
          { label_en: '10-12 hours', label_ar: '10-12 ساعة' },
          { label_en: '12+ hours', label_ar: '12+ ساعة' },
        ]
      },
      // --- Page 2: Core Questions ---
      {
        id: 'qw_q7',
        section: 'Core Questions',
        text_en: 'Which topics do you actively seek or follow regularly?',
        text_ar: 'ما المواضيع التي تبحث عنها أو تتابعها بانتظام؟',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: '🎵 Music & Arts', label_ar: '🎵 الموسيقى والفنون' },
          { label_en: '🌍 Environmental issues', label_ar: '🌍 القضايا البيئية' },
          { label_en: '💼 Entrepreneurship & careers', label_ar: '💼 ريادة الأعمال والوظائف' },
          { label_en: '🧠 Mental health', label_ar: '🧠 الصحة النفسية' },
          { label_en: '🕌 Islamic values & identity', label_ar: '🕌 القيم والهوية الإسلامية' },
          { label_en: '🏙️ Local news (UAE/GCC)', label_ar: '🏙️ الأخبار المحلية' },
          { label_en: '🌐 Global news', label_ar: '🌐 الأخبار العالمية' },
          { label_en: '💬 Relationships & community', label_ar: '💬 العلاقات والمجتمع' },
          { label_en: '🎮 Gaming & tech', label_ar: '🎮 الألعاب والتقنية' },
          { label_en: '👗 Fashion & lifestyle', label_ar: '👗 الموضة ونمط الحياة' },
          { label_en: '⚽ Sports', label_ar: '⚽ الرياضة' },
          { label_en: '🎓 Education & self-improvement', label_ar: '🎓 التعليم والتطوير الذاتي' },
        ]
      },
      {
        id: 'qw_q8a',
        section: 'Core Questions',
        text_en: 'Where do you find the most impactful content? (Primary platform)',
        text_ar: 'أين تجد المحتوى الأكثر تأثيراً عليك؟ (المنصة)',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'TikTok', label_ar: 'تيك توك' },
          { label_en: 'Instagram', label_ar: 'إنستغرام' },
          { label_en: 'YouTube', label_ar: 'يوتيوب' },
          { label_en: 'Snapchat', label_ar: 'سناب شات' },
          { label_en: 'X (Twitter)', label_ar: 'إكس (تويتر)' },
          { label_en: 'WhatsApp', label_ar: 'واتساب' },
          { label_en: 'Podcast apps', label_ar: 'تطبيقات بودكاست' },
          { label_en: 'Traditional TV', label_ar: 'تلفزيون تقليدي' },
          { label_en: 'Other', label_ar: 'أخرى' },
        ]
      },
      {
        id: 'qw_q8b',
        section: 'Core Questions',
        text_en: 'Most engaging format on that platform?',
        text_ar: 'ما نوع المحتوى الذي تتفاعل معه أكثر؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'Short-form video (<60 sec)', label_ar: 'فيديو قصير (أقل من 60 ثانية)' },
          { label_en: 'Long-form video (>5 min)', label_ar: 'فيديو طويل (أكثر من 5 دقائق)' },
          { label_en: 'Live stream', label_ar: 'بث مباشر' },
          { label_en: 'Images & Stories', label_ar: 'صور وقصص' },
          { label_en: 'Articles/text posts', label_ar: 'مقالات أو منشورات نصية' },
          { label_en: 'Podcast/audio', label_ar: 'بودكاست أو محتوى صوتي' },
        ]
      },
      {
        id: 'qw_q9',
        section: 'Core Questions',
        text_en: 'Whose information do you trust most on important topics?',
        text_ar: 'من تثق بمصدر معلوماته أكثر عندما يتعلق الأمر بمواضيع مهمة؟',
        type: 'rank',
        page: 2,
        options: [
          { label_en: 'My family', label_ar: 'أفراد عائلتي' },
          { label_en: 'Teachers/professors', label_ar: 'معلمون أو أساتذة' },
          { label_en: 'Government officials', label_ar: 'مسؤولون حكوميون' },
          { label_en: 'Official media outlets', label_ar: 'وسائل إعلام رسمية' },
          { label_en: 'Close friends', label_ar: 'أصدقائي المقربون' },
          { label_en: 'Influencers who share my values', label_ar: 'مؤثرون يشاركون قيمك' },
          { label_en: 'Niche content creators', label_ar: 'مدونون/صانعو محتوى متخصصون' },
          { label_en: 'AI (e.g., chatbot)', label_ar: 'الذكاء الاصطناعي (مثل روبوت محادثة)' },
        ]
      },
      {
        id: 'qw_q10',
        section: 'Core Questions',
        text_en: 'When an official entity (government/school) posts on social media, what makes you stop scrolling and watch?',
        text_ar: 'عندما تنشر جهة رسمية (مثل حكومة أو مدرسة) محتوى على وسائل التواصل، ما الذي يجعلك تتوقف عن التمرير وتشاهده؟',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: 'Feels personally addressed to me', label_ar: 'يشعرني بأنه موجّه لي شخصياً' },
          { label_en: 'Humorous or clever content', label_ar: 'محتوى مرح أو ذكي' },
          { label_en: 'Mobile-optimized (vertical video, clear text)', label_ar: 'مصمم للهاتف (فيديو عمودي، نص واضح)' },
          { label_en: 'Features people my age', label_ar: 'يعرض أشخاصاً من جيلي' },
          { label_en: 'Invites my participation (poll, question)', label_ar: 'يدعوني للمشاركة (استفتاء، سؤال)' },
          { label_en: 'Strong audio/visual quality', label_ar: 'صوتي أو بصري جذاب' },
          { label_en: 'Short (<90 seconds)', label_ar: 'قصير (أقل من 90 ثانية)' },
          { label_en: 'Nothing — I usually ignore it', label_ar: 'لا شيء — عادة أتجاهله' },
        ]
      },
      {
        id: 'qw_q11',
        section: 'Core Questions',
        text_en: 'What is your biggest challenge online?',
        text_ar: 'ما أكبر تحدٍ تواجهه عند استخدامك للإنترنت؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'Difficulty managing screen time', label_ar: 'صعوبة التحكم بوقت الشاشة' },
          { label_en: 'Comparing myself to others', label_ar: 'مقارنة نفسي بالآخرين' },
          { label_en: 'Inappropriate/harmful content', label_ar: 'محتوى غير لائق أو مؤذي' },
          { label_en: 'Misinformation/fake news', label_ar: 'معلومات مضللة أو أخبار كاذبة' },
          { label_en: 'Feeling constantly watched', label_ar: 'شعور بأن كل شيء يُراقب' },
          { label_en: 'Peer pressure or bullying', label_ar: 'ضغط من الأقران أو سخرية' },
          { label_en: 'Can\'t find content reflecting my values', label_ar: 'لا أجد محتوى يعكس قيمي' },
          { label_en: 'I face few challenges', label_ar: 'لا أواجه تحديات كبيرة' },
        ]
      },
      {
        id: 'qw_q12',
        section: 'Core Questions',
        text_en: 'How do you prefer to learn something new or important?',
        text_ar: 'كيف تفضل تعلم مهارة جديدة أو معلومة مهمة؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'Short explainer video (YouTube/TikTok)', label_ar: 'فيديو تعليمي قصير على يوتيوب أو تيك توك' },
          { label_en: 'Discussion with friends', label_ar: 'مناقشة مع أصدقاء' },
          { label_en: 'From a teacher in class', label_ar: 'من معلم في الفصل الدراسي' },
          { label_en: 'Podcast/audio while commuting', label_ar: 'بودكاست أو محتوى صوتي أثناء التنقل' },
          { label_en: 'Interactive app/educational game', label_ar: 'تطبيق تفاعلي أو لعبة تعليمية' },
          { label_en: 'Trusted article/website', label_ar: 'مقال أو موقع إلكتروني موثوق' },
          { label_en: 'Watched with family & discussed', label_ar: 'شاهدته مع عائلتي وناقشناه' },
        ]
      },
      {
        id: 'qw_q13',
        section: 'Core Questions',
        text_en: 'For content about Emirati identity or Arab values, which language do you prefer?',
        text_ar: 'في أي لغة تفضل مشاهدة محتوى عن الهوية الإماراتية أو القيم العربية؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'Formal Arabic only', label_ar: 'عربي فصيح فقط' },
          { label_en: 'Gulf/Emirati dialect only', label_ar: 'عربي عامي (خليجي/إماراتي) فقط' },
          { label_en: 'Bilingual content (Arabic + English)', label_ar: 'أرى محتوى ثنائي اللغة (العربية + الإنجليزية)' },
          { label_en: 'English only', label_ar: 'إنجليزي فقط' },
          { label_en: 'Depends on platform & context', label_ar: 'يعتمد على المنصة والسياق' },
        ]
      },
      {
        id: 'qw_q13b',
        section: 'Core Questions (Follow-up)',
        text_en: 'What determines your choice?',
        text_ar: 'ما الذي يحدد اختيارك؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'Content quality matters more than language', label_ar: 'جودة المحتوى أهم من اللغة' },
          { label_en: 'I trust Arabic more for values/identity topics', label_ar: 'أثق أكثر بالمحتوى العربي للقيم' },
          { label_en: 'English feels deeper for certain topics', label_ar: 'أجد الإنجليزي أكثر عمقاً في بعض المواضيع' },
          { label_en: 'I match the platform\'s dominant language', label_ar: 'أختار حسب لغة المنصة التي أستخدمها' },
        ]
      },
      {
        id: 'qw_q14',
        section: 'Core Questions',
        text_en: 'What do you wish families, schools, or government understood about how you engage with digital content?',
        text_ar: 'ما الذي تتمنى أن تفهمه العائلات أو المدارس أو الحكومة عن طريقة تفاعلك مع المحتوى الرقمي؟',
        type: 'text',
        page: 2
      }
    ]
  },
  {
    id: 'deepseek',
    name: 'DeepSeek V3',
    description_en: 'Direct and concise. Focus on clear segmentation and actionable habits.',
    description_ar: 'مباشر وموجز. يركز على التقسيم الواضح والعادات القابلة للتنفيذ.',
    intro_en: 'Media Z Survey for Gen Z & Alpha (Ages 10–27).',
    intro_ar: 'استطلاع ميديا زي للجيل Z وألفا (الأعمار 10-27).',
    questions: [
      // --- Page 1: Demographics ---
      {
        id: 'ds_d1',
        section: 'Demographic Questions',
        text_en: 'Age',
        text_ar: 'العمر',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Under 10', label_ar: 'أقل من 10' },
          { label_en: '10–12', label_ar: '10–12' },
          { label_en: '13–15', label_ar: '13–15' },
          { label_en: '16–18', label_ar: '16–18' },
          { label_en: '19–22', label_ar: '19–22' },
          { label_en: '23–27', label_ar: '23–27' },
        ]
      },
      {
        id: 'ds_d2',
        section: 'Demographic Questions',
        text_en: 'Gender',
        text_ar: 'الجنس',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Male', label_ar: 'ذكر' },
          { label_en: 'Female', label_ar: 'أنثى' },
        ]
      },
      {
        id: 'ds_d3',
        section: 'Demographic Questions',
        text_en: 'Country of Residence',
        text_ar: 'بلد الإقامة',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'UAE', label_ar: 'الإمارات' },
          { label_en: 'Other GCC country', label_ar: 'دولة خليجية أخرى' },
          { label_en: 'Other Arab country', label_ar: 'دولة عربية أخرى' },
          { label_en: 'Other', label_ar: 'أخرى' },
        ]
      },
      {
        id: 'ds_d4',
        section: 'Demographic Questions',
        text_en: 'Highest Education Level',
        text_ar: 'أعلى مستوى تعليمي',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Primary school', label_ar: 'ابتدائي' },
          { label_en: 'Middle school', label_ar: 'إعدادي' },
          { label_en: 'High school', label_ar: 'ثانوي' },
          { label_en: 'University (undergraduate)', label_ar: 'جامعي' },
          { label_en: 'Postgraduate', label_ar: 'دراسات عليا' },
          { label_en: 'Not in education', label_ar: 'غير ملتحق بالتعليم' },
        ]
      },
      {
        id: 'ds_d5',
        section: 'Demographic Questions',
        text_en: 'Primary Device for Media Consumption',
        text_ar: 'الجهاز الأساسي لاستهلاك الميديا',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Smartphone', label_ar: 'هاتف ذكي' },
          { label_en: 'Tablet', label_ar: 'جهاز لوحي' },
          { label_en: 'Laptop', label_ar: 'لابتوب' },
          { label_en: 'Desktop', label_ar: 'كمبيوتر مكتبي' },
          { label_en: 'Smart TV/Gaming console', label_ar: 'تلفزيون ذكي/جهاز ألعاب' },
        ]
      },
      {
        id: 'ds_d6',
        section: 'Demographic Questions',
        text_en: 'Average Daily Screen Time (for entertainment/social)',
        text_ar: 'متوسط وقت الشاشة اليومي (للترفيه/التواصل)',
        type: 'single',
        page: 1,
        options: [
          { label_en: 'Less than 1 hour', label_ar: 'أقل من ساعة' },
          { label_en: '1–3 hours', label_ar: '1-3 ساعات' },
          { label_en: '3–5 hours', label_ar: '3-5 ساعات' },
          { label_en: 'More than 5 hours', label_ar: 'أكثر من 5 ساعات' },
        ]
      },
      // --- Page 2: Core Questions ---
      {
        id: 'ds_q1',
        section: 'Core Questions',
        text_en: 'Content Preferences: What types of topics or content do you actively seek out online?',
        text_ar: 'تفضيلات المحتوى: ما أنواع المواضيع أو المحتوى الذي تبحث عنه بنشاط عبر الإنترنت؟',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: 'Comedy/entertainment', label_ar: 'الكوميديا/الترفيه' },
          { label_en: 'Gaming & esports', label_ar: 'الألعاب والرياضات الإلكترونية' },
          { label_en: 'Lifestyle & fashion', label_ar: 'أسلوب الحياة والموضة' },
          { label_en: 'Science & technology', label_ar: 'العلوم والتكنولوجيا' },
          { label_en: 'News & current events', label_ar: 'الأخبار والأحداث الجارية' },
          { label_en: 'Self-improvement & learning', label_ar: 'تطوير الذات والتعلم' },
          { label_en: 'Social issues & activism', label_ar: 'القضايا الاجتماعية والنشاط' },
          { label_en: 'Arts & creativity', label_ar: 'الفنون والإبداع' },
          { label_en: 'Sports', label_ar: 'الرياضة' },
          { label_en: 'Religion & spirituality', label_ar: 'الدين والروحانيات' },
        ]
      },
      {
        id: 'ds_q2',
        section: 'Core Questions',
        text_en: 'Platform & Format Habits: Where do you spend the most time consuming content?',
        text_ar: 'عادات المنصات: أين تقضي معظم الوقت في استهلاك المحتوى؟',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: 'YouTube', label_ar: 'يوتيوب' },
          { label_en: 'TikTok', label_ar: 'تيك توك' },
          { label_en: 'Instagram', label_ar: 'إنستغرام' },
          { label_en: 'Snapchat', label_ar: 'سناب شات' },
          { label_en: 'X (Twitter)', label_ar: 'إكس (تويتر)' },
          { label_en: 'Twitch', label_ar: 'تويتش' },
          { label_en: 'Other', label_ar: 'أخرى' },
        ]
      },
      {
        id: 'ds_q2b',
        section: 'Core Questions',
        text_en: 'What is your preferred video length for entertainment?',
        text_ar: 'ما هو طول الفيديو المفضل لديك للترفيه؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'Under 60 seconds', label_ar: 'أقل من 60 ثانية' },
          { label_en: '1–5 minutes', label_ar: '1-5 دقائق' },
          { label_en: '5–15 minutes', label_ar: '5-15 دقيقة' },
          { label_en: '15–30 minutes', label_ar: '15-30 دقيقة' },
          { label_en: '30+ minutes', label_ar: '30+ دقيقة' },
        ]
      },
      {
        id: 'ds_q3',
        section: 'Core Questions',
        text_en: 'Trust & Credibility: When you encounter important information, how do you decide if it’s trustworthy?',
        text_ar: 'الثقة والمصداقية: عندما تصادف معلومات مهمة، كيف تقرر ما إذا كانت جديرة بالثقة؟',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: 'Check if it’s from a known brand/organization', label_ar: 'التحقق مما إذا كانت من علامة تجارية/منظمة معروفة' },
          { label_en: 'See if friends/people I follow are sharing it', label_ar: 'رؤية ما إذا كان الأصدقاء/أشخاص أتابعهم يشاركونها' },
          { label_en: 'Look for multiple sources', label_ar: 'البحث عن مصادر متعددة' },
          { label_en: 'See if the creator shows evidence/transparency', label_ar: 'رؤية ما إذا كان الصانع يظهر أدلة/شفافية' },
          { label_en: 'Don’t really check—just go with what feels right', label_ar: 'لا أتحقق حقاً - أعتمد على الإحساس' },
          { label_en: 'Other', label_ar: 'أخرى' },
        ]
      },
      {
        id: 'ds_q4',
        section: 'Core Questions',
        text_en: 'Language & Identity: In what language(s) do you prefer to consume digital content?',
        text_ar: 'اللغة والهوية: بأي لغة تفضل استهلاك المحتوى الرقمي؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'Mostly Arabic', label_ar: 'غالباً بالعربية' },
          { label_en: 'Mostly English', label_ar: 'غالباً بالإنجليزية' },
          { label_en: 'Mixed equally', label_ar: 'مختلط بالتساوي' },
          { label_en: 'Depends on the topic/platform', label_ar: 'يعتمد على الموضوع/المنصة' },
        ]
      },
      {
        id: 'ds_q5',
        section: 'Core Questions',
        text_en: 'Institutional Communication: How do you usually react to posts/messages from official accounts?',
        text_ar: 'التواصل المؤسسي: كيف تتفاعل عادة مع منشورات الحسابات الرسمية؟',
        type: 'single',
        page: 2,
        options: [
          { label_en: 'Ignore them', label_ar: 'أتجاهلها' },
          { label_en: 'Scroll past quickly', label_ar: 'أمررها بسرعة' },
          { label_en: 'Sometimes engage if interesting', label_ar: 'أتفاعل أحياناً إذا كانت مثيرة للاهتمام' },
          { label_en: 'Actively follow some', label_ar: 'أتابع بعضها بنشاط' },
          { label_en: 'It depends on the platform/tone', label_ar: 'يعتمد على المنصة/الأسلوب' },
        ]
      },
      {
        id: 'ds_q5b',
        section: 'Core Questions',
        text_en: 'What would make you more likely to pay attention?',
        text_ar: 'ما الذي يجعلك أكثر عرضة للانتباه؟',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: 'More relatable storytelling', label_ar: 'سرد قصصي أكثر ارتباطاً بالواقع' },
          { label_en: 'Shorter, visual formats', label_ar: 'تنسيقات بصرية أقصر' },
          { label_en: 'Interactive elements (polls, Q&A)', label_ar: 'عناصر تفاعلية (تصويت، أسئلة)' },
          { label_en: 'Humor/trends used thoughtfully', label_ar: 'استخدام الفكاهة/التريندات بعناية' },
          { label_en: 'Clear, actionable info', label_ar: 'معلومات واضحة وقابلة للتنفيذ' },
          { label_en: 'Seeing peers/creators I trust share it', label_ar: 'رؤية أقران/صناع أثق بهم يشاركونها' },
        ]
      },
      {
        id: 'ds_q6',
        section: 'Core Questions',
        text_en: 'Learning & Education: If a school/university wanted to teach you something online, what format would work best?',
        text_ar: 'التعلم والتعليم: إذا أرادت مدرسة تعليمك شيئاً عبر الإنترنت، ما الشكل الأفضل؟',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: 'Short explainer videos (under 3 mins)', label_ar: 'فيديوهات شرح قصيرة (أقل من 3 دقائق)' },
          { label_en: 'Interactive quizzes/games', label_ar: 'اختبارات/ألعاب تفاعلية' },
          { label_en: 'Podcasts/audio clips', label_ar: 'بودكاست/مقاطع صوتية' },
          { label_en: 'Live Q&A sessions', label_ar: 'جلسات أسئلة وأجوبة مباشرة' },
          { label_en: 'Infographics/carousel posts', label_ar: 'إنفوجرافيك/منشورات متتابعة' },
          { label_en: 'Long-form videos (lectures, documentaries)', label_ar: 'فيديوهات طويلة (محاضرات، وثائقيات)' },
        ]
      },
      {
        id: 'ds_q7',
        section: 'Core Questions',
        text_en: 'Safety & Well-being: What concerns you most about being online?',
        text_ar: 'السلامة والرفاهية: ما الذي يقلقك أكثر بشأن تواجدك على الإنترنت؟',
        type: 'multiple',
        page: 2,
        options: [
          { label_en: 'Privacy/data collection', label_ar: 'الخصوصية/جمع البيانات' },
          { label_en: 'Misinformation/fake news', label_ar: 'المعلومات المضللة/الأخبار الكاذبة' },
          { label_en: 'Cyberbullying/toxicity', label_ar: 'التنمر الإلكتروني/السمية' },
          { label_en: 'Addictive design/too much screen time', label_ar: 'التصميم المسبب للإدمان/وقت الشاشة الزائد' },
          { label_en: 'Pressure to look/act a certain way', label_ar: 'الضغط للمظهر/التصرف بطريقة معينة' },
          { label_en: 'Nothing really', label_ar: 'لا شيء حقاً' },
        ]
      },
      {
        id: 'ds_q8',
        section: 'Core Questions',
        text_en: 'Open Voice: If you could tell parents, teachers, media creators, or leaders one thing about how to communicate with your generation, what would it be?',
        text_ar: 'صوت مفتوح: لو استطعت إخبار الأهل، المعلمين، أو القادة بشيء واحد حول كيفية التواصل مع جيلك، ماذا سيكون؟',
        type: 'text',
        page: 2
      }
    ]
  }
];
