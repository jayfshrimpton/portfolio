# Jay Shrimpton — Developer Portfolio

An immersive single-page portfolio built with React, TypeScript, GSAP, Three.js, Lenis, and Tailwind CSS. A persistent WebGL scene evolves through the page while GSAP ScrollTrigger coordinates the camera, section reveals, and project storytelling.

## Local development

```bash
npm install
npm run dev
```

The animation dependencies were installed with:

```bash
npm install gsap three lenis
npm install --save-dev @types/three
```

## Production checks

```bash
npm run lint
npm run build
npm run preview
```

The interface includes responsive layouts, keyboard-visible focus states, a WebGL fallback, lazy-loaded 3D and case-study bundles, and a reduced-motion mode that removes smooth scrolling and entrance choreography.
