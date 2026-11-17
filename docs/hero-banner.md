# First-view photographic development banner

The Japanese and English homepages use a photorealistic, AI-generated workspace image. The screens depict illustrative demo interfaces for development, business operations, an AI assistant and mobile commerce. This is a visual concept, not a photograph of the owner's actual office or a record of customer data.

- Generation: built-in `image_gen` tool.
- Full image: `public/images/hero/development-workspace-photo.webp` (1672 × 941, 276,494 bytes).
- Mobile image: `public/images/hero/development-workspace-photo-800.webp` (800 × 450, 72,634 bytes).
- Original PNG retained locally in `.local/hero-banner/development-workspace-photo.png`.
- Full composition retained at every viewport, without cropping devices.
- Frontend: `renderExpertiseBanner` and `renderHero` in `src/page.mjs`, styled by `public/hero-banner.css`.
- Six localized capability groups map the owner's supplied skills to websites, e-commerce, systems/APIs, mobile apps, AI/automation and data/cloud. The GitHub → Vercel row describes this portfolio's source and publishing environment.
- On desktop, the introduction and consultation actions sit above the existing project carousel beside the banner. Mobile order is introduction heading, photographic banner, capability labels, overview/actions and carousel.
- The 72-project, two-second screenshot carousel remains separate from this image.

## Final generation prompt

```text
Use case: photorealistic-natural.
Asset type: first-view photographic banner for a Japanese freelance software developer portfolio.
Primary request: create an exceptionally believable real-world photograph of a working software development desk, communicating web development, business systems, mobile apps, AI integration and deployment through real devices and their screens.
Scene: an understated contemporary Japanese home-office workspace beside a large window, medium-dark walnut desk, matte charcoal monitor, slim silver laptop, one real smartphone upright on a small understated desk stand. A compact keyboard, mouse, a neatly folded notebook and a ceramic coffee cup make this a plausible working desk. Small natural irregularities, fine wood grain, slightly worn keyboard keys, realistic glass reflections and subtle fingerprints. Background softly out of focus with a plain warm-gray wall and daylight, a restrained deep-blue fabric accent. No people.
Screens: the dominant external monitor displays a credible developer code editor with syntax-colored TypeScript/React source on its left, and a clean live responsive business web dashboard with navigation, a table and a small chart on its right. The laptop displays a plausible light-mode AI-assisted business application with a compact chat panel and document/search results. The smartphone shows a polished mobile e-commerce product detail screen. All screen UI must be small-scale, clean, physically contained inside the displays, perspective-correct, with thin realistic bezels and normal screen luminance. No prominent marketing text, no company names, no fake testimonials, no invented performance claims.
Photography: premium editorial interior/product photography, absolutely photographic rather than CGI or a 3D illustration. Natural soft afternoon window light from camera-left, realistic ambient fill, subtle shadows, neutral white balance, restrained slate blue and warm wood tones. Full-frame camera, 35mm lens, f/5.6, believable perspective and optical depth, precise device geometry, tactile materials, gentle film grain. Professional but lived-in, calm and credible.
Composition: landscape 16:9. Camera at seated eye height, slight three-quarter angle, fairly close to the desk. Dominant monitor centered-left, laptop lower-right and smartphone in the foreground between them, all complete devices visible with comfortable edge margins. Screens should be large enough to remain meaningful in a 600px-wide website banner. Keep the main devices and useful screen content in the middle 75% of the frame so modest responsive cropping is safe. No large empty dark upper margin. No typography overlay; live HTML capability labels will be placed BELOW this photograph.
Avoid: floating technology icons, holograms, glass UI panels in midair, connecting neon lines, database cylinders floating on walls, glowing clouds, robots, plastic toy-like surfaces, isometric view, fantasy sci-fi studio, excessive blue lighting, fake camera bokeh, exaggerated reflections, logos, watermarks.
```
