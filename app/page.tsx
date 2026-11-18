/* oxlint-disable next/no-html-link-for-pages -- Load localized pages directly, as on the static site. */
import Image from 'next/image';
import { Adventure } from './adventure';
import {
  ArrowLeft,
  Camera,
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
    <main className="treasure-home">
      <a className="adventure-skip" href="#top">דילוג לתוכן</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="TreasureTales — ראש הדף">
          <span className="brand-mark"><Image src="/brand-chest.png" alt="" width={96} height={96} unoptimized /></span>
          <span>TreasureTales</span>
        </a>
        <nav aria-label="ניווט ראשי">
          <a href="#how">איך זה עובד</a>
          <a href="#screens">הצצה לאפליקציה</a>
          <a href="/support">תמיכה</a>
        </nav>
        <a className="language-link" href="/en" lang="en">English</a>
      </header>

      <section className="hero family-hero" id="top" tabIndex={-1}>
        <div className="family-hero-media"><Image src="/family-hunt.jpg" alt="משפחה מגלה תיבת אוצר מעץ בשביל ביער" width={1440} height={960} unoptimized loading="eager" fetchPriority="high" /></div>
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={18} /> המטמון מחכה לכם</p>
          <h1>יוצאים יחד <span>לחיפוש מטמון.</span></h1>
          <p className="hero-lead">מפה, חידות ודמויות במציאות רבודה הופכות כל יציאה להרפתקה למשפחות, לבתי ספר ולימי גיבוש.</p>
          <div className="hero-actions" id="download">
            <a className="store-button" href="https://apps.apple.com/il/app/treasuretales/id6809154239"><span>הורדה מ־<bdi>App Store</bdi></span></a>
            <a className="android-test" href="https://play.google.com/apps/internaltest/4701109278122805153">אנדרואיד</a>
            <a className="text-link" href="#try-the-hunt">נסו את חיפוש המטמון <ArrowLeft size={19} /></a>
          </div>
          <div className="trust-line"><ShieldCheck size={19} /> נבנה עם בטיחות, פרטיות וחוויה משפחתית במרכז</div>
        </div>
      </section>

      <section className="hunt-demo" id="try-the-hunt" aria-labelledby="hunt-demo-title">
        <div className="hunt-demo-copy"><h2 id="hunt-demo-title">תצליחו למצוא את המטמון?</h2><p>עקבו אחרי המסלול במפה העתיקה וגלו מה מסתתר מאחורי ה־X.</p></div>
        <Adventure language="he" />
      </section>

      <section className="hunt-audiences" id="adventures" aria-labelledby="adventures-title">
        <h2 id="adventures-title">איזה מסע מתאים לכם?</h2>
        <div className="hunt-cards">
          <article className="hunt-card">
            <span className="hunt-emblem" aria-hidden="true">✦</span>
            <h3>משפחות</h3>
            <p>צאו למסע בפארק או בשכונה. הילדים מובילים בין התחנות, וכולם משתתפים בפתרון החידות.</p>
          </article>
          <article className="hunt-card">
            <span className="hunt-emblem" aria-hidden="true">✎</span>
            <h3>בתי ספר</h3>
            <p>בנו מסלול בחצר או בטיול כיתתי, עם חידות שמתאימות לנושא הלימוד ותחנות לפעילות בקבוצות.</p>
          </article>
          <article className="hunt-card">
            <span className="hunt-emblem" aria-hidden="true">⚑</span>
            <h3>ימי גיבוש</h3>
            <p>חלקו את המשתתפים לקבוצות, שתפו קוד למסלול ותנו לכל צוות לפתור את הרמזים יחד עד האוצר.</p>
          </article>
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
        {/* oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- Make the overflow area keyboard-scrollable. */}
        <section className="screens-track" tabIndex={0} aria-label="צילומי מסך מהאפליקציה">
          {screenshots.map((shot) => (
            <figure className="screen-card" key={shot.src}>
              <Image src={shot.src} alt={shot.alt} width={1284} height={2778} sizes="(max-width: 900px) 220px, 255px" />
            </figure>
          ))}
        </section>
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
        <div className="brand footer-brand"><span className="brand-mark"><Image src="/brand-chest.png" alt="" width={96} height={96} unoptimized /></span><span>TreasureTales</span></div>
        <p>כל מקום מסתיר סיפור. הגיע הזמן למצוא אותו.</p>
        <div className="footer-links"><a href="/support">תמיכה</a><a href="/privacy">מדיניות פרטיות</a><a href="/en" lang="en">English</a></div>
        <small>© 2026 TreasureTales. כל הזכויות שמורות.</small>
      </footer>
    </main>
  );
}
