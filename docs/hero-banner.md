# First-view development banner

The home pages in Japanese and English use an original illustration of a development workspace: code, web and mobile previews, and database/cloud components. It represents development capabilities rather than a photograph of a physical office.

- Generation: built-in `image_gen` tool.
- Full image: `public/images/hero/development-workspace.webp` (1672 × 941, 93,174 bytes).
- Mobile image: `public/images/hero/development-workspace-800.webp` (800 × 450, 32,466 bytes).
- Original PNG retained locally in `.local/hero-banner/development-workspace.png`.
- Frontend: `renderExpertiseBanner` in `src/page.mjs`, styled by `public/hero-banner.css`.
- Technology names and deployment labels are HTML, localized and accessible. React, Next.js, TypeScript, Python, Laravel and PostgreSQL come from the owner's supplied skills. GitHub and Vercel are the portfolio's current source and deployment environment.
- Existing 72-image, two-second project carousel remains separate from the banner.

## Final generation prompt

```text
Use case: stylized-concept.
Asset type: premium first-view banner illustration for a bilingual Japanese software developer portfolio.
Create a polished, wide 16:9 landscape 3D editorial illustration of a modern software development workspace and connected deployment environment. A slim graphite workstation monitor, a slightly angled laptop and a small upright mobile preview are arranged on a clean dark architectural surface. Screens show elegant abstract code-line patterns and simplified application interface panels, not real products or customer data. Behind the devices, a few restrained translucent glass panels and small connected database/cloud modules suggest frontend, backend, AI-assisted workflows and cloud deployment. Make the devices readable and beautifully proportioned, not a crowded collage.
Art direction: precise, understated Japanese technology design; sophisticated black/navy, white/silver, azure blue matching rgb(1,98,180), subtle cyan reflections. Physically rendered glass and brushed metal, soft studio lighting, gentle atmospheric depth, rich but controlled contrast. A dark navy background with graceful blue light; distinct illustration, not a purported photo of someone's actual office. Composition must remain clear when shown in a 600px-wide web panel: one dominant monitor, two supporting devices, generous breathing room. Leave a clean upper margin and darker lower quarter for live HTML captions. Entire composition should work as an attractive self-contained banner.
No people, no readable words or letters, no logos, no branding, no watermarks, no certifications, no performance metrics, no customer names, no giant glowing brain, no robot, no sci-fi cyberpunk clutter, no oversaturated rainbow lights.
```
