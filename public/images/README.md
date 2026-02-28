# Hero Background Image

## Required Image: ai-server-room.jpg

**Specifications:**
- **Minimum Resolution:** 1920x1080 (Full HD)
- **Recommended Resolution:** 2560x1440 or higher for Retina displays
- **Format:** JPG (optimized for web, quality 80-90%)
- **File Size:** Aim for under 500KB for best performance

## Theme & Style
The image should be a **cinematic AI server room or data center laboratory** with:
- Dark, moody atmospheric lighting
- Rows of high-tech servers or computing infrastructure
- Minimal orange/amber accent lighting (LED indicators)
- Professional, corporate tech environment
- Dramatic depth of field (shallow focus preferred)
- Matte, non-glossy finish

## Where to Get the Image

### Option 1: Stock Photo Sites (Free)
- **Unsplash**: https://unsplash.com/s/photos/server-room
- **Pexels**: https://www.pexels.com/search/data-center/
- **Pixabay**: https://pixabay.com/images/search/server-room/

### Option 2: Stock Photo Sites (Premium)
- **Shutterstock**: Search for "AI server room" or "data center"
- **Adobe Stock**: Search for "cinematic server room"
- **iStock**: Search for "tech infrastructure"

### Option 3: AI Generation (When Available)
- You can retry the image generation tool later
- Use Midjourney, DALL-E, or similar with this prompt:
  "Cinematic AI server room laboratory, dramatic dark atmosphere, rows of high-tech servers with subtle blue LED lights, minimal orange accent lighting, professional corporate tech environment, moody atmospheric lighting, photorealistic, ultra-high resolution"

## Installation
Once you have your image:
1. Place it in this directory: `/public/images/`
2. Name it: `ai-server-room.jpg`
3. The Hero section will automatically pick it up

## Current Status
⚠️ **PLACEHOLDER NEEDED** - Please add your background image to this directory as `ai-server-room.jpg`

## Fallback
If you want to test the Hero section without a background image first, you can temporarily use a dark gradient by modifying the `.hero` class in globals.css:

```css
.hero {
  position: relative;
  height: 100vh;
  /* Temporary fallback gradient */
  background: linear-gradient(135deg, #0c0f14 0%, #1a1d24 100%);
  /* background: url('/images/ai-server-room.jpg') center/cover no-repeat; */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
```
