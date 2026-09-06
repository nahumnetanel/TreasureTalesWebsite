import { ArrowRight, Camera, Mail, MapPin, ShieldAlert } from 'lucide-react';

export default function SupportPage() {
  return (
    <main className="legal-page">
      <a className="back-link" href="/"><ArrowRight size={18} /> חזרה לדף הבית</a>
      <section className="legal-hero">
        <p className="eyebrow">TreasureTales Support</p>
        <h1>אנחנו כאן כדי לעזור</h1>
        <p>מצאו תשובות מהירות לשאלות נפוצות על מסעות, מיקום ומציאות רבודה.</p>
      </section>
      <section className="support-grid">
        <article><MapPin /><h2>המיקום לא מתעדכן</h2><p>ודאו ששירותי המיקום פעילים וש־TreasureTales מורשית להשתמש במיקום בזמן השימוש באפליקציה.</p></article>
        <article><Camera /><h2>הדמות לא מופיעה ב־AR</h2><p>אשרו גישה למצלמה, עברו לאזור מואר והזיזו את המכשיר באיטיות כדי לזהות את המשטח.</p></article>
        <article><ShieldAlert /><h2>בטיחות בזמן מסע</h2><p>שימו לב לסביבה, לכבישים ולמכשולים. אין להשתמש באפליקציה בזמן נהיגה, וילדים צריכים לשחק בהשגחת מבוגר.</p></article>
        <article><Mail /><h2>צריכים עזרה נוספת?</h2><p>כתובת התמיכה תתווסף כאן לפני פרסום האתר לציבור.</p></article>
      </section>
      <p className="legal-updated">עודכן לאחרונה: 6 בספטמבר 2026</p>
    </main>
  );
}
