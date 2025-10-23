# Media Assets Reference

This document provides a quick reference to all media assets in the project.

## Image Assets

### Hero & Banner Images

| File | Location | Description | Dimensions |
|------|----------|-------------|------------|
| `hero-banner.svg` | `/public/images/` | Homepage hero banner with Om symbol | 1200x600 |

### Katha Images

| File | Location | Description | Usage |
|------|----------|-------------|-------|
| `bhagwat-katha.svg` | `/public/images/katha/` | Shrimad Bhagwat Katha book illustration | Katha cards, service pages |
| `ram-katha.svg` | `/public/images/katha/` | Ram Katha with bow & temple | Katha cards, service pages |
| `devi-bhagwat.svg` | `/public/images/katha/` | Devi Bhagwat with lotus & trishul | Katha cards, service pages |
| `shiv-mahapuran.svg` | `/public/images/katha/` | Shiv Mahapuran with Shiva linga | Katha cards, service pages |

### Product Images

| File | Location | Description | Usage |
|------|----------|-------------|-------|
| `rudraksha.svg` | `/public/images/products/` | Rudraksha mala illustration | Product catalog |
| `yantras.svg` | `/public/images/products/` | Sri Yantra geometric design | Product catalog |
| `sacred-books.svg` | `/public/images/products/` | Stack of sacred scriptures | Product catalog |
| `puja-items.svg` | `/public/images/products/` | Puja essentials (diya, incense, flowers) | Product catalog |

### Event Images

| File | Location | Description | Usage |
|------|----------|-------------|-------|
| `spiritual-gathering.svg` | `/public/images/events/` | Spiritual gathering with audience | Events page, gallery |
| `mahayagna.svg` | `/public/images/events/` | Mahayagna fire ceremony | Events page, gallery |

### Icons & Branding

| File | Location | Description | Usage |
|------|----------|-------------|-------|
| `favicon.svg` | `/public/` | Om symbol favicon (orange/saffron) | Browser tab icon |
| `placeholder.svg` | `/public/` | Generic placeholder | Development fallback |

## Video Assets

### Video Directory Structure

```
/public/videos/
├── katha/
│   ├── bhagwat/
│   ├── ram/
│   ├── devi/
│   └── shiv/
├── events/
├── tutorials/
└── testimonials/
```

### Current Video Files

| File | Location | Type | Description |
|------|----------|------|-------------|
| `sample-katha-1.txt` | `/public/videos/` | Placeholder | Replace with actual katha video |
| `sample-katha-2.txt` | `/public/videos/` | Placeholder | Replace with actual katha video |
| `README.md` | `/public/videos/` | Documentation | Video specifications guide |

## Asset Usage in Components

### Example: Using Katha Images

```jsx
// In React components
<img
  src="/images/katha/bhagwat-katha.svg"
  alt="Shrimad Bhagwat Katha"
  className="w-full h-auto rounded-lg"
/>
```

### Example: Using Hero Banner

```jsx
<div
  style={{backgroundImage: 'url(/images/hero-banner.svg)'}}
  className="bg-cover bg-center h-96"
>
  {/* Hero content */}
</div>
```

### Example: Using Videos

```jsx
<video controls poster="/images/thumbnails/katha-thumb.jpg">
  <source src="/videos/katha/bhagwat/session-1.mp4" type="video/mp4" />
  <source src="/videos/katha/bhagwat/session-1.webm" type="video/webm" />
  Your browser does not support video playback.
</video>
```

## Asset Guidelines

### Image Guidelines

1. **Format**: SVG for illustrations, JPG/PNG for photos
2. **Size**: Optimize for web (max 500KB per image)
3. **Dimensions**:
   - Hero images: 1920x1080
   - Cards: 800x600
   - Thumbnails: 400x300
4. **Naming**: Use kebab-case (e.g., `bhagwat-katha.svg`)

### Video Guidelines

1. **Format**: MP4 (H.264) primary, WebM fallback
2. **Resolution**: 1280x720 (HD) or 1920x1080 (Full HD)
3. **Bitrate**: 5-10 Mbps for quality balance
4. **Audio**: AAC codec, 128-192 kbps
5. **Length**: Keep under 10 minutes for better loading

### Optimization Tools

**Images:**
- [TinyPNG](https://tinypng.com/) - PNG/JPG compression
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization
- ImageOptim - Mac app for image compression

**Videos:**
- FFmpeg - Command-line video processing
- HandBrake - GUI video transcoder
- CloudConvert - Online video converter

## Color Palette Used in Assets

| Color | Hex Code | Usage |
|-------|----------|-------|
| Saffron | `#FF6B35` | Primary spiritual color, Om symbols |
| Brown | `#8B4513` | Books, wood elements |
| Gold | `#DAA520` | Sacred items, accents |
| Maroon | `#8B0000` | Devi elements, serious tones |
| Blue | `#4169E1` | Shiva elements, calm tones |
| Pink | `#FF69B4` | Devi lotus, feminine energy |
| Cream | `#FFF8F0` | Background color |
| Dark Brown | `#2C1810` | Text, dark elements |

## Adding New Assets

### Steps to Add New Images:

1. Place image in appropriate directory:
   ```bash
   /public/images/[category]/your-image.jpg
   ```

2. Optimize the image before adding

3. Update this reference file

4. Add to component:
   ```jsx
   <img src="/images/category/your-image.jpg" alt="Description" />
   ```

### Steps to Add New Videos:

1. Optimize video for web delivery

2. Place in appropriate video subdirectory:
   ```bash
   /public/videos/[category]/your-video.mp4
   ```

3. Create a thumbnail:
   ```bash
   ffmpeg -i your-video.mp4 -ss 00:00:05 -vframes 1 thumbnail.jpg
   ```

4. Update this reference file

5. Add to component with proper HTML5 video tags

## Future Asset Needs

### Recommended Additions:

- [ ] Actual professional photos from katha events
- [ ] Pandit Shree Prakash portrait photo
- [ ] Temple/venue photographs
- [ ] Product photography (high-quality)
- [ ] Event photo galleries
- [ ] Video testimonials
- [ ] Full katha session recordings
- [ ] Bhajan/kirtan recordings
- [ ] Puja ceremony videos

### Professional Photography Tips:

- Use natural lighting when possible
- Capture candid moments during events
- Get multiple angles of ceremonies
- Include wide shots and close-ups
- Ensure proper permissions for attendee photos
- Maintain respectful, reverent atmosphere in imagery

---

**Last Updated:** 2025-10-23
**Maintained By:** Development Team

For questions about media assets, refer to `/public/videos/README.md` or contact the technical team.
