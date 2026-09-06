import { ArrowLeft, Camera, Mail, MapPin, ShieldAlert } from 'lucide-react';

export default function EnglishSupportPage() {
  return (
    <main className="legal-page" dir="ltr" lang="en">
      <div className="legal-topbar"><a className="back-link" href="/en"><ArrowLeft size={18} /> Back to home</a><a className="language-link" href="/support" lang="he">עברית</a></div>
      <section className="legal-hero">
        <p className="eyebrow">TreasureTales Support</p>
        <h1>We are here to help</h1>
        <p>Find quick answers to common questions about adventures, location and augmented reality.</p>
      </section>
      <section className="support-grid">
        <article><MapPin /><h2>Location is not updating</h2><p>Make sure Location Services are enabled and TreasureTales is allowed to access your location while you use the app.</p></article>
        <article><Camera /><h2>The AR character does not appear</h2><p>Allow camera access, move to a well-lit area and slowly move your device so it can detect a surface.</p></article>
        <article><ShieldAlert /><h2>Safety during an adventure</h2><p>Stay aware of traffic, obstacles and your surroundings. Never use the app while driving, and children should play with adult supervision.</p></article>
        <article><Mail /><h2>Need more help?</h2><p>A support email address will be added here before the public launch.</p></article>
      </section>
      <p className="legal-updated">Last updated: September 6, 2026</p>
    </main>
  );
}
