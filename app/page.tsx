import {
  ArrowLeft,
  Camera,
  Compass,
  MapPinned,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

const screenshots = [
  { src: '/screens/TreasureTales_1.jpg', alt: 'מפת מסלולי ציד האוצרות של TreasureTales' },
  { src: '/screens/TreasureTales_2.jpg', alt: 'יצירת מסלול חדש ב-TreasureTales' },
  { src: '/screens/TreasureTales_3.jpg', alt: 'פתרון רמז במהלך מסע' },
  { src: '/screens/TreasureTales_4.jpg', alt: 'דמות במציאות רבודה' },
  { src: '/screens/TreasureTales_5.jpg', alt: 'מציאת האוצר בסיום המסע' },
];

const features = [
  { icon: MapPinned, title: 'מסעות סביבכם', text: 'גלו מסלולי ציד אוצרות על המפה וצאו לדרך.' },
  { icon: Puzzle, title: 'חידות ורמזים', text: 'כל תחנה חושפת רמז חדש ומקרבת אתכם לאוצר.' },
  { icon: Camera, title: 'דמויות ב־AR', text: 'פגשו דמויות תלת־ממד בעולם האמיתי דרך המצלמה.' },
  { icon: Users, title: 'יוצרים ומשתפים', text: 'בנו מסלול משלכם והזמינו משפחה וחברים באמצעות קוד.' },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="TreasureTales — ראש הדף">
          <span className="brand-mark"><img src="/chest.png" alt="" /></span>
          <span>TreasureTales</span>
        </a>
        <nav aria-label="ניווט ראשי">
          <a href="#how">איך זה עובד</a>
          <a href="#screens">הצצה לאפליקציה</a>
          <a href="/support">תמיכה</a>
          <a className="language-link" href="/en" lang="en">English</a>
        </nav>
        <a className="nav-cta" href="#download">בקרוב ב־App Store</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={18} /> כל מקום מסתיר סיפור</p>
          <h1>העולם סביבכם<br /><span>הופך להרפתקה.</span></h1>
          <p className="hero-lead">
            ציד אוצרות אינטראקטיבי שמשלב מפה, חידות ודמויות במציאות רבודה —
            למשפחה, לחברים ולכל מי שמוכן לצאת למסע.
          </p>
          <div className="hero-actions" id="download">
            <span className="store-button" aria-label="TreasureTales תושק בקרוב ב-App Store">
              <span className="apple">●</span>
              <span><small>בקרוב ב־</small>App Store</span>
            </span>
            <a className="text-link" href="#how">גלו איך זה עובד <ArrowLeft size={19} /></a>
          </div>
          <div className="trust-line"><ShieldCheck size={19} /> נבנה עם בטיחות, פרטיות וחוויה משפחתית במרכז</div>
        </div>
        <div className="hero-art" aria-label="תיבת אוצר זוהרת">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="spark spark-one">✦</div>
          <div className="spark spark-two">✧</div>
          <img src="/chest.png" alt="תיבת האוצר של TreasureTales" />
          <div className="map-chip"><Compass size={20} /> המסע הבא מחכה לידכם</div>
        </div>
      </section>

      <section className="steps-section" id="how">
        <div className="section-heading">
          <p className="eyebrow">הרפתקה בשלושה צעדים</p>
          <h2>פשוט לצאת. כיף לגלות.</h2>
          <p>בחרו מסע, פתרו את הרמזים וגלו מה מחכה לכם בתחנה הבאה.</p>
        </div>
        <div className="steps-grid">
          {[
            ['01', 'בוחרים מסע', 'מוצאים מסלול על המפה או מצטרפים למסע פרטי באמצעות קוד.'],
            ['02', 'פותרים בדרך', 'מגיעים לתחנות, קוראים את הרמזים ומסתכלים אחרת על העולם סביבכם.'],
            ['03', 'מגלים את האוצר', 'פוגשים דמויות ב־AR ומשלימים את הסיפור עד לרגע הגילוי.'],
          ].map(([number, title, copy]) => (
            <article className="step-card" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="screens-section" id="screens">
        <div className="section-heading left-heading">
          <p className="eyebrow">הצצה לאפליקציה</p>
          <h2>מהמפה ועד האוצר</h2>
          <p>כל המסע, בעיצוב אחד פשוט וברור.</p>
        </div>
        <div className="screens-track">
          {screenshots.map((shot) => (
            <figure className="screen-card" key={shot.src}>
              <img src={shot.src} alt={shot.alt} />
            </figure>
          ))}
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <p className="eyebrow">יותר ממשחק</p>
          <h2>אתם בוחרים איך הסיפור מתקדם</h2>
        </div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, title, text }) => (
            <article className="feature-card" key={title}>
              <span className="feature-icon"><Icon size={26} /></span>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="creator-section">
        <div>
          <p className="eyebrow">הסיפור שלכם. המסלול שלכם.</p>
          <h2>צרו הרפתקה שאי אפשר למצוא בשום מקום אחר.</h2>
          <p>בחרו מיקומים, הוסיפו רמזים ודמויות, ושלחו קוד הצטרפות למי שתרצו להזמין.</p>
        </div>
        <div className="creator-badge"><Sparkles size={30} /><strong>יוצרים</strong><span>ומשתפים</span></div>
      </section>

      <footer>
        <div className="brand footer-brand"><span className="brand-mark"><img src="/chest.png" alt="" /></span><span>TreasureTales</span></div>
        <p>כל מקום מסתיר סיפור. הגיע הזמן למצוא אותו.</p>
        <div className="footer-links"><a href="/support">תמיכה</a><a href="/privacy">מדיניות פרטיות</a><a href="/en" lang="en">English</a></div>
        <small>© 2026 TreasureTales. כל הזכויות שמורות.</small>
      </footer>
    </main>
  );
}
