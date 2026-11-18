import Image from 'next/image';

export function Adventure({ language }: { language: 'he' | 'en' }) {
  const he = language === 'he';
  const panels = [
    {
      stage: 'riddle',
      title: he ? 'תחנה ראשונה · החידה' : 'First stop · The riddle',
      clue: he
        ? 'מי נראה כמו שועל, אבל יכול לעוף בעזרת כנפיים בצורת עלים?'
        : 'What looks like a fox but can fly on leaf-shaped wings?',
    },
    {
      stage: 'fox',
      title: he ? 'מצאתם את השועל המכונף!' : 'You found the winged fox!',
      clue: he
        ? 'הרמז שלי: לכו לקרחת היער וחפשו עיניים גדולות וקרניים שצומחות מהראש.'
        : 'My clue: head to the forest clearing and look for big eyes and antlers.',
    },
    {
      stage: 'owl',
      title: he ? 'פגשתם את ינשוף היער!' : 'You met the woodland owl!',
      clue: he
        ? 'הרמז האחרון: חפשו את ה־X ליד שורשי העץ הגדול. שם מחכה האוצר.'
        : 'One last clue: look for the X by the roots of the largest tree. The treasure is waiting there.',
    },
    {
      stage: 'treasure',
      title: he ? 'מצאתם את האוצר!' : 'You found the treasure!',
      clue: he
        ? 'פתרתם את החידות והגעתם לתיבה.'
        : 'You solved the clues and reached the chest.',
    },
  ];

  return (
    <>
      <script src="/adventure-autoplay.js" async />
      <figure className="adventure">
        <Image
          className="adventure-map"
          src="/treasure-map.jpg"
          alt=""
          width={1440}
          height={960}
          unoptimized
          loading="eager"
        />
        <Image
          className="adventure-forest"
          src="/enchanted-forest.jpg"
          alt=""
          width={1440}
          height={960}
          unoptimized
          loading="eager"
        />
        <svg
          className="adventure-route"
          viewBox="0 0 500 400"
          preserveAspectRatio="none"
          aria-hidden="true"
          fill="none"
        >
          <path
            className="trail"
            pathLength="100"
            d="M 73 304 C 84 219 194 313 205 242 S 132 146 220 134 S 320 251 385 124"
            stroke="#612819"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle
            cx="73"
            cy="304"
            r="8"
            fill="#612819"
            stroke="#ecca8c"
            strokeWidth="2"
          />
          <path
            className="destination"
            d="M 370 109 L 402 137 M 402 108 L 370 138"
            stroke="#9e2a22"
            strokeWidth="9"
            strokeLinecap="round"
          />
        </svg>
        {panels.map(({ stage, title, clue }) => (
          <div
            className="hunt-story-panel"
            data-scene={stage}
            key={stage}
            hidden
          >
            {(stage === 'fox' || stage === 'owl') && (
              <div className={`hunt-creature hunt-creature--${stage}`}>
                <Image
                  src="/forest-creatures.png"
                  alt=""
                  width={768}
                  height={512}
                  unoptimized
                />
              </div>
            )}
            <div className="hunt-story-caption">
              <strong>{title}</strong>
              <p>{clue}</p>
            </div>
          </div>
        ))}
        <div className="adventure-chest" aria-hidden="true">
          <span className="chest-light"></span>
          <span className="chest-interior"></span>
          <span className="chest-lid"></span>
          <span className="chest-front"></span>
        </div>
        <button className="hunt-play-toggle" type="button" hidden>
          <span data-play-label>{he ? 'השהיית המסע' : 'Pause the hunt'}</span>
          <span data-pause-label hidden>
            {he ? 'המשך המסע' : 'Resume the hunt'}
          </span>
        </button>
      </figure>
    </>
  );
}
