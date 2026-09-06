import { ArrowLeft } from 'lucide-react';

export default function EnglishPrivacyPage() {
  return (
    <main className="legal-page privacy-page" dir="ltr" lang="en">
      <div className="legal-topbar"><a className="back-link" href="/en"><ArrowLeft size={18} /> Back to home</a><a className="language-link" href="/privacy" lang="he">עברית</a></div>
      <section className="legal-hero">
        <p className="eyebrow">Privacy Policy</p>
        <h1>Privacy Policy</h1>
        <p>Your privacy matters to us. This policy explains what information may be collected and how it is used to operate TreasureTales.</p>
      </section>
      <section className="legal-content">
        <h2>Information we collect</h2>
        <p>When you use the app, we may collect basic account information such as your name and email address; location data while the app is in use; progress in adventures and routes you create; and content you choose to upload, such as a logo.</p>
        <h2>How we use information</h2>
        <p>We use this information to provide account access, show nearby adventures, save progress, operate routes, and improve the app&apos;s stability and experience.</p>
        <h2>Camera and augmented reality</h2>
        <p>TreasureTales requests camera access to display augmented reality characters and objects. Camera imagery is used to provide the live AR experience and is not stored by us during normal use.</p>
        <h2>Location</h2>
        <p>The app uses location while in use to show nearby adventures, recognize arrival at stops and activate relevant stages. You can disable location permission in your device settings.</p>
        <h2>Sharing and third-party services</h2>
        <p>The app may use system services and sign-in providers to operate features you choose. We do not sell personal information.</p>
        <h2>Retention and security</h2>
        <p>We take reasonable measures to protect information and retain it only for as long as needed to operate the service or meet legal obligations.</p>
        <h2>Children and safety</h2>
        <p>Children should use the app with the supervision of a parent or guardian. When playing outdoors, always remain aware of traffic and your surroundings.</p>
        <h2>Your choices</h2>
        <p>You can manage camera, location and photo permissions in your device settings. You may also request information, correction or deletion through the support channel that will be published on this website.</p>
        <h2>Policy updates</h2>
        <p>We may update this policy as the service changes. The latest update date will appear at the bottom of this page.</p>
      </section>
      <p className="legal-updated">Last updated: September 6, 2026</p>
    </main>
  );
}
