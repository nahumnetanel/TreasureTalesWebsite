import {
  ArrowRight,
  Camera,
  Compass,
  MapPinned,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TreasureTales — Every place hides a story',
  description: 'Interactive treasure hunts combining maps, puzzles and augmented reality characters.',
  alternates: { canonical: '/en', languages: { 'he-IL': '/', 'en-US': '/en' } },
  openGraph: {
    title: 'TreasureTales — Every place hides a story',
    description: 'Interactive treasure hunts combining maps, puzzles and augmented reality characters.',
    locale: 'en_US',
  },
};

const screenshots = [
  { src: '/screens/TreasureTales_1.jpg', alt: 'TreasureTales treasure hunt map' },
  { src: '/screens/TreasureTales_2.jpg', alt: 'Creating a new hunt in TreasureTales' },
  { src: '/screens/TreasureTales_3.jpg', alt: 'Solving a clue during an adventure' },
  { src: '/screens/TreasureTales_4.jpg', alt: 'An augmented reality character' },
  { src: '/screens/TreasureTales_5.jpg', alt: 'Finding the treasure at the end of a hunt' },
];

const features = [
  { icon: MapPinned, title: 'Adventures nearby', text: 'Discover treasure hunts on the map and head out.' },
  { icon: Puzzle, title: 'Clues and puzzles', text: 'Every stop reveals a new clue and brings you closer to the treasure.' },
  { icon: Camera, title: 'Characters in AR', text: 'Meet 3D characters in the real world through your camera.' },
  { icon: Users, title: 'Create and share', text: 'Build your own hunt and invite family and friends with a code.' },
];

export default function EnglishHome() {
  return (
    <main dir="ltr" lang="en">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="TreasureTales — top of page">
          <span className="brand-mark"><img src="/chest.png" alt="" /></span>
          <span>TreasureTales</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#how">How it works</a>
          <a href="#screens">Inside the app</a>
          <a href="/en/support">Support</a>
          <a className="language-link" href="/" lang="he">עברית</a>
        </nav>
        <a className="nav-cta" href="#download">Coming to the App Store</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={18} /> Every place hides a story</p>
          <h1>The world around you<br /><span>becomes an adventure.</span></h1>
          <p className="hero-lead">
            An interactive treasure hunt combining maps, puzzles and augmented reality characters —
            for families, friends and everyone ready to explore.
          </p>
          <div className="hero-actions" id="download">
            <span className="store-button" aria-label="TreasureTales is coming soon to the App Store">
              <span className="apple">●</span>
              <span><small>Coming soon to the</small>App Store</span>
            </span>
            <a className="text-link" href="#how">See how it works <ArrowRight size={19} /></a>
          </div>
          <div className="trust-line"><ShieldCheck size={19} /> Designed around safety, privacy and family-friendly fun</div>
        </div>
        <div className="hero-art" aria-label="Glowing treasure chest">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="spark spark-one">✦</div>
          <div className="spark spark-two">✧</div>
          <img src="/chest.png" alt="The TreasureTales treasure chest" />
          <div className="map-chip"><Compass size={20} /> Your next adventure is close by</div>
        </div>
      </section>

      <section className="steps-section" id="how">
        <div className="section-heading">
          <p className="eyebrow">An adventure in three steps</p>
          <h2>Easy to start. Fun to discover.</h2>
          <p>Choose a hunt, solve the clues and discover what is waiting at the next stop.</p>
        </div>
        <div className="steps-grid">
          {[
            ['01', 'Choose a hunt', 'Find an adventure on the map or join a private hunt with a code.'],
            ['02', 'Solve as you go', 'Visit each stop, read the clues and see the world around you differently.'],
            ['03', 'Discover the treasure', 'Meet AR characters and complete the story all the way to the final reveal.'],
          ].map(([number, title, copy]) => (
            <article className="step-card" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="screens-section" id="screens">
        <div className="section-heading left-heading">
          <p className="eyebrow">Inside the app</p>
          <h2>From the map to the treasure</h2>
          <p>The entire adventure in one simple, clear experience.</p>
        </div>
        <div className="screens-track">
          {screenshots.map((shot, index) => (
            <figure className={index === 2 ? 'screen-card featured' : 'screen-card'} key={shot.src}>
              <img src={shot.src} alt={shot.alt} />
            </figure>
          ))}
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <p className="eyebrow">More than a game</p>
          <h2>You decide where the story goes</h2>
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
          <p className="eyebrow">Your story. Your route.</p>
          <h2>Create an adventure that cannot be found anywhere else.</h2>
          <p>Choose locations, add clues and characters, then send an invitation code to anyone you want to join.</p>
        </div>
        <div className="creator-badge"><Sparkles size={30} /><strong>Create</strong><span>and share</span></div>
      </section>

      <footer>
        <div className="brand footer-brand"><span className="brand-mark"><img src="/chest.png" alt="" /></span><span>TreasureTales</span></div>
        <p>Every place hides a story. It is time to find it.</p>
        <div className="footer-links"><a href="/en/support">Support</a><a href="/en/privacy">Privacy Policy</a><a href="/" lang="he">עברית</a></div>
        <small>© 2026 TreasureTales. All rights reserved.</small>
      </footer>
    </main>
  );
}
