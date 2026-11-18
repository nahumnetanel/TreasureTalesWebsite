// Draw the creatures from shaded polygon meshes with a perspective camera.
const characters = {
  fox: [
    // Body, chest, head and muzzle.
    { center: [0, -0.32, 0], size: [0.48, 0.56, 0.37], color: '#d37028' },
    { center: [0, -0.32, 0.31], size: [0.31, 0.43, 0.13], color: '#ffe0a1' },
    { center: [0, 0.37, 0.13], size: [0.52, 0.42, 0.43], color: '#ec9237' },
    { center: [0, 0.13, 0.43], size: [0.32, 0.19, 0.24], color: '#ffe0a1' },
    { center: [0, 0.22, 0.645], size: [0.1, 0.065, 0.055], color: '#452b28' },
    {
      center: [0.61, -0.48, -0.27],
      size: [0.22, 0.51, 0.2],
      tilt: -0.75,
      color: '#e78532',
    },
    {
      center: [0.86, -0.22, -0.27],
      size: [0.16, 0.22, 0.15],
      tilt: -0.75,
      color: '#ffe0a1',
    },
    { center: [0, -0.09, 0.48], size: [0.09, 0.05, 0.06], color: '#e9a26e' },
  ],
  owl: [
    // Body, pale belly, face and beak.
    { center: [0, -0.25, 0], size: [0.54, 0.6, 0.43], color: '#56753c' },
    { center: [0, -0.28, 0.35], size: [0.35, 0.41, 0.13], color: '#d6bb7e' },
    { center: [0, 0.39, 0.07], size: [0.54, 0.44, 0.38], color: '#7e984d' },
    { center: [0, 0.21, 0.48], size: [0.13, 0.13, 0.12], color: '#f1a144' },
    { center: [0, 0.76, 0.05], size: [0.115, 0.13, 0.11], color: '#a9c061' },
  ],
};

for (const side of [-1, 1]) {
  characters.fox.push(
    {
      center: [side * 0.38, 0.78, 0.11],
      size: [0.16, 0.35, 0.13],
      tilt: -side * 0.44,
      color: '#cf6828',
    },
    {
      center: [side * 0.4, 0.8, 0.21],
      size: [0.085, 0.24, 0.055],
      tilt: -side * 0.44,
      color: '#f5b57e',
    },
    {
      center: [side * 0.58, -0.06, -0.27],
      size: [0.17, 0.42, 0.11],
      tilt: -side * 0.86,
      color: '#83ad59',
    },
    {
      center: [side * 0.78, 0.14, -0.27],
      size: [0.125, 0.37, 0.09],
      tilt: -side * 0.97,
      color: '#b1ca72',
    },
    {
      center: [side * 0.26, -0.75, 0.17],
      size: [0.19, 0.15, 0.235],
      color: '#a95129',
    },
    {
      center: [side * 0.24, 0.42, 0.535],
      size: [0.133, 0.146, 0.05],
      color: '#fff1c4',
    },
    {
      center: [side * 0.23, 0.41, 0.58],
      size: [0.079, 0.096, 0.036],
      color: '#34573b',
    },
    {
      center: [side * 0.23 - 0.022, 0.45, 0.608],
      size: [0.027, 0.027, 0.015],
      color: '#ffffff',
    },
  );
  characters.owl.push(
    {
      center: [side * 0.47, -0.21, -0.045],
      size: [0.22, 0.42, 0.22],
      tilt: side * 0.36,
      color: '#779b55',
    },
    {
      center: [side * 0.24, 0.41, 0.385],
      size: [0.235, 0.245, 0.115],
      color: '#f3dfad',
    },
    {
      center: [side * 0.225, 0.4, 0.49],
      size: [0.143, 0.15, 0.06],
      color: '#d2ae5e',
    },
    {
      center: [side * 0.218, 0.4, 0.532],
      size: [0.093, 0.11, 0.044],
      color: '#263a2e',
    },
    {
      center: [side * 0.218 - 0.027, 0.445, 0.57],
      size: [0.028, 0.028, 0.015],
      color: '#ffffff',
    },
    {
      center: [side * 0.23, -0.77, 0.27],
      size: [0.175, 0.105, 0.19],
      color: '#c88543',
    },
    {
      center: [side * 0.37, 0.81, -0.03],
      size: [0.071, 0.27, 0.069],
      tilt: -side * 0.51,
      color: '#a67742',
    },
    {
      center: [side * 0.53, 0.91, -0.03],
      size: [0.051, 0.145, 0.05],
      tilt: -side * 0.86,
      color: '#b0824e',
    },
  );
}

function mesh(parts) {
  const triangles = [];
  const rings = 8;
  const segments = 12;
  for (const { center, size, color, tilt = 0 } of parts) {
    const [red, green, blue] = color
      .slice(1)
      .match(/../g)
      .map((hex) => parseInt(hex, 16));
    const cos = Math.cos(tilt);
    const sin = Math.sin(tilt);
    function vertex(ring, segment) {
      const latitude = (Math.PI * ring) / rings;
      const longitude = (2 * Math.PI * segment) / segments;
      const x = size[0] * Math.sin(latitude) * Math.cos(longitude);
      const y = size[1] * Math.cos(latitude);
      const z = size[2] * Math.sin(latitude) * Math.sin(longitude);
      return [
        center[0] + x * cos - y * sin,
        center[1] + x * sin + y * cos,
        center[2] + z,
      ];
    }
    for (let ring = 0; ring < rings; ring++) {
      for (let segment = 0; segment < segments; segment++) {
        const a = vertex(ring, segment);
        const b = vertex(ring, segment + 1);
        const c = vertex(ring + 1, segment + 1);
        const d = vertex(ring + 1, segment);
        if (ring > 0)
          triangles.push({ points: [a, b, c], color: [red, green, blue] });
        if (ring < rings - 1)
          triangles.push({ points: [a, c, d], color: [red, green, blue] });
      }
    }
  }
  return triangles;
}

function drawModel(canvas, context, model, angle) {
  const density = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.round(canvas.clientWidth * density);
  const height = Math.round(canvas.clientHeight * density);
  if (!width || !height) return;
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
  context.clearRect(0, 0, width, height);
  const scale = Math.min(width, height) * 0.395;
  const sin = Math.sin(angle);
  const cos = Math.cos(angle);
  const faces = [];
  for (const { points, color } of model) {
    const [a, b, c] = points.map(([x, y, z]) => [
      x * cos + z * sin,
      y,
      z * cos - x * sin,
    ]);
    const edge1 = b.map((value, i) => value - a[i]);
    const edge2 = c.map((value, i) => value - a[i]);
    const nx = edge1[1] * edge2[2] - edge1[2] * edge2[1];
    const ny = edge1[2] * edge2[0] - edge1[0] * edge2[2];
    const nz = edge1[0] * edge2[1] - edge1[1] * edge2[0];
    // Back faces point away from the camera.
    if (nz <= 0) continue;
    const light =
      0.59 +
      0.41 *
        Math.max(
          0,
          (-nx * 0.35 + ny * 0.46 + nz * 0.81) / Math.hypot(nx, ny, nz),
        );
    faces.push({
      points: [a, b, c],
      color: color.map((value) => Math.round(value * light)),
      depth: (a[2] + b[2] + c[2]) / 3,
    });
  }
  faces.sort((a, b) => a.depth - b.depth);
  for (const face of faces) {
    context.beginPath();
    face.points.forEach(([x, y, z], i) => {
      const projection = (scale * 4.8) / (4.8 - z);
      const px = width / 2 + x * projection;
      const py = height * 0.52 - y * projection;
      if (i === 0) context.moveTo(px, py);
      else context.lineTo(px, py);
    });
    context.closePath();
    const fill = `rgb(${face.color.join(',')})`;
    context.fillStyle = fill;
    context.strokeStyle = fill;
    context.lineWidth = 0.9 * density;
    context.stroke();
    context.fill();
  }
}

export function mountAdventureCharacters(scene) {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const models = new Map();
  for (const name of Object.keys(characters)) {
    const frame = scene.querySelector(`.hunt-creature--${name}`);
    if (!frame) continue;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) continue;
    canvas.setAttribute('aria-hidden', 'true');
    frame.append(canvas);
    frame.classList.add('has-character-model');
    models.set(name, { canvas, context, model: mesh(characters[name]) });
  }

  let frameRequest;
  let angle = -0.15;
  let isVisible = true;
  function render(time) {
    const active = models.get(scene.dataset.stage);
    if (!active || !isVisible) return;
    const still = motion.matches || scene.dataset.paused === 'true';
    if (!still) angle = Math.sin(time / 1050) * 0.57;
    drawModel(active.canvas, active.context, active.model, angle);
    if (!still) frameRequest = window.requestAnimationFrame(render);
  }

  function refresh() {
    window.cancelAnimationFrame(frameRequest);
    frameRequest = window.requestAnimationFrame(render);
  }

  const observer = new MutationObserver(refresh);
  observer.observe(scene, {
    attributes: true,
    attributeFilter: ['data-stage', 'data-paused'],
  });
  const resize = new ResizeObserver(refresh);
  resize.observe(scene);
  if ('IntersectionObserver' in window) {
    const visibility = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      refresh();
    });
    visibility.observe(scene);
  }
  motion.addEventListener('change', refresh);
  refresh();
}
