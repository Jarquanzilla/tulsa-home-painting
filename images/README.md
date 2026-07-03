# Image sourcing notes

## Before/after gallery — local files in place
`interior-before.jpg`, `interior-after.jpg`, `exterior-before.jpg`, `exterior-after.jpg` are AI-generated placeholders, cropped to a centered 4:3 (1024x768) and trimmed on the sides to remove the source tool's corner watermark. Replace with real client project photos as jobs are completed — same crop (centered 4:3, `magick input.jpg -gravity center -crop 1024x768+0+0 +repage output.jpg`) keeps the before/after slider layout consistent. The slider (`.ba-slider` in [index.html](../index.html)) shows the **before** image on the left, **after** on the right — keep that order when swapping files.

## Still hotlinked from Unsplash
| Section | Current placeholder | Suggested search terms for a replacement |
|---|---|---|
| Hero (index.html) | Sunlit living room | "modern living room neutral paint", "bright living room interior daylight" |
| About page | Crew prepping a room | "painter taping trim", "painting prep drop cloth", "interior painting in progress" |

## Guidelines
- Avoid overly staged/cheesy stock photography (forced smiles, exaggerated poses).
- Favor natural light, real-looking rooms, and neutral/warm palettes that match the site's color scheme.
- Once real project photos exist, this before/after gallery should use actual client work — that's the single highest-trust element the site can gain.
