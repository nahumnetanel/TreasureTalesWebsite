const adventureScriptUrl = document.currentScript?.src;

function prepareAdventure() {
  const scene = document.querySelector('.adventure');
  const toggle = scene?.querySelector('.hunt-play-toggle');
  if (!scene || !toggle) return;

  if (adventureScriptUrl) {
    import(new URL('./adventure-characters.js', adventureScriptUrl))
      .then(({ mountAdventureCharacters }) => mountAdventureCharacters(scene))
      .catch(() => {
        // Keep the illustrated characters if the renderer is unavailable.
      });
  }

  const stages = [
    { id: 'map', duration: 4000 },
    { id: 'riddle', duration: 8000 },
    { id: 'fox', duration: 9000 },
    { id: 'owl', duration: 9000 },
    { id: 'treasure', duration: 10000 },
  ];

  const panels = scene.querySelectorAll('[data-scene]');
  const pauseLabel = toggle.querySelector('[data-play-label]');
  const resumeLabel = toggle.querySelector('[data-pause-label]');
  let index = 0;
  let timeout;
  let deadline;
  let remaining;
  let paused = false;

  function scheduleNextStage() {
    deadline = performance.now() + remaining;
    timeout = window.setTimeout(() => {
      index = (index + 1) % stages.length;
      showStage();
    }, remaining);
  }

  function showStage() {
    const { id, duration } = stages[index];
    scene.dataset.stage = id;
    panels.forEach((panel) => {
      panel.hidden = panel.dataset.scene !== id;
    });
    remaining = duration;
    scheduleNextStage();
  }

  function start() {
    toggle.hidden = false;
    toggle.addEventListener('click', () => {
      paused = !paused;
      scene.dataset.paused = String(paused);
      pauseLabel.hidden = paused;
      resumeLabel.hidden = !paused;
      if (paused) {
        window.clearTimeout(timeout);
        remaining = Math.max(0, deadline - performance.now());
      } else {
        scheduleNextStage();
      }
    });
    showStage();
  }

  if ('IntersectionObserver' in window) {
    scene.dataset.stage = 'waiting';
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 0.4) return;
        observer.disconnect();
        start();
      },
      { threshold: 0.4 },
    );
    observer.observe(scene);
  } else {
    start();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', prepareAdventure, {
    once: true,
  });
} else {
  prepareAdventure();
}
