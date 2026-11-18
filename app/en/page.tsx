/* oxlint-disable next/no-html-link-for-pages -- Load localized pages directly, as on the static site. */
import Image from 'next/image';
import { Adventure } from '../adventure';
import {
  ArrowRight,
  Camera,
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
    <main className="treasure-home" dir="ltr" lang="en">
      <a className="adventure-skip" href="#top">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="TreasureTales — top of page">
          <span className="brand-mark"><Image src="/brand-chest.png" alt="" width={96} height={96} unoptimized /></span>
          <span>TreasureTales</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#how">How it works</a>
          <a href="#screens">Inside the app</a>
          <a href="/en/support">Support</a>
        </nav>
        <a className="language-link" href="/" lang="he">עברית</a>
      </header>

      <section className="hero family-hero" id="top" tabIndex={-1}>
        <div className="family-hero-media"><Image src="/family-hunt.jpg" alt="A family discovering a wooden treasure chest on a forest trail" width={1440} height={960} unoptimized loading="eager" fetchPriority="high" /></div>
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={18} /> The treasure awaits</p>
          <h1>Go on a <span>treasure hunt together.</span></h1>
          <p className="hero-lead">Maps, clues, and augmented reality bring the adventure to life for families, schools, and team-building days.</p>
          <div className="hero-actions" id="download">
            <a className="store-button" href="https://apps.apple.com/il/app/treasuretales/id6809154239">Download on the App Store</a>
            <a className="android-test" href="https://play.google.com/apps/internaltest/4701109278122805153">Android</a>
            <a className="text-link" href="#try-the-hunt">Try the treasure hunt <ArrowRight size={19} /></a>
          </div>
          <div className="trust-line"><ShieldCheck size={19} /> Designed around safety, privacy and family-friendly fun</div>
        </div>
      </section>

      <section className="hunt-demo" id="try-the-hunt" aria-labelledby="hunt-demo-title">
        <div className="hunt-demo-copy"><h2 id="hunt-demo-title">Can you find the treasure?</h2><p>Follow the trail on the old map and see what the X is hiding.</p></div>
        <Adventure language="en" />
      </section>

      <section className="hunt-audiences" id="adventures" aria-labelledby="adventures-title">
        <h2 id="adventures-title">Find the right adventure</h2>
        <div className="hunt-cards">
          <article className="hunt-card">
            <span className="hunt-emblem" aria-hidden="true">✦</span>
            <h3>Families</h3>
            <p>Explore a park or your neighborhood. Let the kids lead the way and solve each clue together.</p>
          </article>
          <article className="hunt-card">
            <span className="hunt-emblem" aria-hidden="true">✎</span>
            <h3>Schools</h3>
            <p>Build a route in the schoolyard or on a field trip, with clues tied to a lesson and stops for group activities.</p>
          </article>
          <article className="hunt-card">
            <span className="hunt-emblem" aria-hidden="true">⚑</span>
            <h3>Team building</h3>
            <p>Split into groups, share a join code, and give each team a trail of clues to solve together.</p>
          </article>
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
        {/* oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- Make the overflow area keyboard-scrollable. */}
        <section className="screens-track" tabIndex={0} aria-label="App screenshots">
          {screenshots.map((shot) => (
            <figure className="screen-card" key={shot.src}>
              <Image src={shot.src} alt={shot.alt} width={1284} height={2778} sizes="(max-width: 900px) 220px, 255px" />
            </figure>
          ))}
        </section>
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
        <div className="brand footer-brand"><span className="brand-mark"><Image src="/brand-chest.png" alt="" width={96} height={96} unoptimized /></span><span>TreasureTales</span></div>
        <p>Every place hides a story. It is time to find it.</p>
        <div className="footer-links"><a href="/en/support">Support</a><a href="/en/privacy">Privacy Policy</a><a href="/" lang="he">עברית</a></div>
        <small>© 2026 TreasureTales. All rights reserved.</small>
      </footer>
    </main>
  );
}
