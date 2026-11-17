# First-view photographic background

The complete first-view section uses a photorealistic workspace image as its background, including the baseline at the bottom. The raster contains visual interface shapes, charts and product imagery, with no readable lettering or numbers. The previous image card and technology caption panel have been removed. The introduction, buttons and project slideshow remain separate HTML content.

- Generation/editing: built-in `image_gen` tool, editing the previous photographic workspace.
- Published image: `public/images/hero/development-workspace-background.webp` (1672 × 941, 197,326 bytes).
- Original PNG retained locally in `.local/hero-banner/development-workspace-background.png`.
- Image is an AI-generated visual concept, not a photograph of the owner's actual office or customer systems.
- Background uses `cover`, so its crop adapts to the viewport. The same local image is preloaded on the Japanese and English homepages only.
- `public/hero-banner.css` sets the existing `--ambient-surface` layer. When the mouse-fluid effect is active, the photo stays below the fluid canvas and page content stays above it.
- Contrast gradients protect the live page text. Carousel surface/text colors retain the existing day/night theme.
- The separate 72-project screenshot carousel retains its two-second timing and controls.

## Final edit prompt

```text
Use case: precise-object-edit.
Asset type: full-width first-view background photograph for a software developer portfolio.
Input image: the supplied image is the edit target.
Primary request: preserve this believable, photorealistic workspace and remove EVERY piece of text from the entire image. The finished raster must contain no letters, no numerals, no words, no code characters, no logos and no watermark.
Keep unchanged: the desk composition, realistic monitor/laptop/smartphone, device proportions, camera angle, daylight, warm wood, plants, cup, notebook, materials, shadows, color palette and photographic quality.
Screen edits:
- On the large monitor, replace the code-editor text with a credible visual software-workflow editor composed only of small solid colored blocks, lines and connections. The adjacent business dashboard should contain clean charts, unlabelled geometric cards and table-like rows of shapes. Remove all Japanese/English labels, file names, code, numbers, browser addresses, menu text, ticks and axis labels.
- On the laptop, show a restrained visual AI/automation workflow with connected nodes, unlabelled panels and simple document-shaped icons. No writing, numbers, words, pseudo-writing, or text-like marks anywhere.
- On the smartphone, keep a photographic product image, color swatches, simple icons and a plain blue button, with absolutely no product name, price, rating numbers, status-bar time, letters or words.
- Remove lettering/numbers from all keyboard keycaps, hardware, book spines, notebook and any tiny peripheral details. Keys can have realistic blank matte surfaces.
All screen content must remain perspective-correct and physically confined to the real displays. Use clean visual forms to imply web, business, mobile commerce and automation capabilities. Do not add any floating graphics, badges, text overlay, headline, caption, decorative typography, brand marks or 3D illustrations. The final result must still look like a natural professional photograph.
Output: preserve wide 16:9 framing and high resolution. No baked-in gradients or dark overlay; the website will apply its own contrast layer.
```
