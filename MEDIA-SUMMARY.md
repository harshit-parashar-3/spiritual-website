# Media Assets Summary

## Overview

Sample spiritual-themed images and video placeholders have been added to the project for development and demonstration purposes.

## What's Included

### ✅ Images Created (SVG Format)

#### 1. Hero Banner
- **File**: `/public/images/hero-banner.svg`
- **Size**: 1200x600px
- **Content**: Saffron-white-green gradient with Om symbol and site title

#### 2. Katha Services (4 images)
Located in `/public/images/katha/`:
- `bhagwat-katha.svg` - Sacred book with Om symbol
- `ram-katha.svg` - Temple and bow & arrow
- `devi-bhagwat.svg` - Lotus flower with trishul
- `shiv-mahapuran.svg` - Shiva linga with sacred elements

#### 3. Products (4 images)
Located in `/public/images/products/`:
- `rudraksha.svg` - 5-mukhi Rudraksha bead
- `yantras.svg` - Sri Yantra geometric design
- `sacred-books.svg` - Stack of spiritual texts
- `puja-items.svg` - Diya, incense, and flowers

#### 4. Events (2 images)
Located in `/public/images/events/`:
- `spiritual-gathering.svg` - Katha gathering scene
- `mahayagna.svg` - Fire ceremony illustration

#### 5. Favicon
- **File**: `/public/favicon.svg`
- **Content**: Om symbol (ॐ) on saffron background
- **Linked**: Already added to index.html

### ✅ Video Placeholders

Located in `/public/videos/`:
- `sample-katha-1.txt` - Instructions for adding real videos
- `sample-katha-2.txt` - Video content ideas
- `README.md` - Complete video specifications guide

### ✅ Documentation

1. **Main README** (`/README.md`)
   - Updated with media assets section
   - Instructions for replacing sample content

2. **Video README** (`/public/videos/README.md`)
   - Detailed video specifications
   - Encoding guidelines
   - Hosting options
   - Implementation examples

3. **Media Assets Reference** (`/public/MEDIA-ASSETS.md`)
   - Complete asset inventory
   - Usage examples
   - Optimization guidelines
   - Color palette reference

## Next Steps

### Replace Sample Content with Real Media

1. **Take Professional Photos**
   - Katha events and ceremonies
   - Pandit Shree Prakash portrait
   - Product photography
   - Temple/venue shots

2. **Record Videos**
   - Katha sessions (full or highlights)
   - Testimonials
   - Puja ceremonies
   - Event recordings

3. **Optimize Media**
   - Images: Use JPG (80-90% quality) or WebP
   - Videos: MP4 with H.264 codec, 720p or 1080p
   - Compress before uploading

4. **Update Components**
   - Replace SVG references with actual photo paths
   - Add video player components
   - Update alt text and descriptions

## Using the Sample Assets

### In React Components

```jsx
// Hero Banner
<img src="/images/hero-banner.svg" alt="Spiritual Services" />

// Katha Cards
<img src="/images/katha/bhagwat-katha.svg" alt="Shrimad Bhagwat Katha" />

// Products
<img src="/images/products/rudraksha.svg" alt="Rudraksha Mala" />

// Events
<img src="/images/events/spiritual-gathering.svg" alt="Spiritual Gathering" />
```

### Color Theme

All images use a consistent spiritual color palette:
- **Saffron** (#FF6B35) - Primary spiritual color
- **Gold** (#DAA520) - Sacred accents
- **Brown** (#8B4513) - Natural elements
- **Cream** (#FFF8F0) - Background

## File Structure

```
public/
├── favicon.svg                    # Om symbol favicon
├── images/
│   ├── hero-banner.svg           # Homepage banner
│   ├── katha/                    # 4 katha images
│   ├── products/                 # 4 product images
│   └── events/                   # 2 event images
├── videos/
│   ├── README.md                 # Video specifications
│   └── sample-*.txt              # Placeholder files
├── MEDIA-ASSETS.md               # Detailed asset reference
└── placeholder.svg               # Generic placeholder
```

## Quick Tips

### Image Optimization
```bash
# For JPG images
convert input.jpg -quality 85 -resize 1920x1080 output.jpg

# For PNG images
pngquant --quality=80-95 input.png -o output.png
```

### Video Optimization
```bash
# Create web-optimized video
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium \
  -c:a aac -b:a 128k -vf scale=1280:720 output.mp4

# Generate thumbnail
ffmpeg -i video.mp4 -ss 00:00:05 -vframes 1 thumbnail.jpg
```

### Lazy Loading Images
```jsx
<img
  src="/images/katha/bhagwat-katha.svg"
  alt="Bhagwat Katha"
  loading="lazy"
/>
```

## Benefits of Current Setup

1. ✅ **No Lovable Branding** - All assets are custom-created
2. ✅ **Spiritual Theme** - Authentic cultural elements
3. ✅ **SVG Format** - Scalable, small file size
4. ✅ **Organized Structure** - Easy to navigate and manage
5. ✅ **Documented** - Clear guidelines for replacement
6. ✅ **Production Ready** - Can be used as-is for development

## Resources

- **Image Compression**: https://tinypng.com/
- **SVG Optimization**: https://jakearchibald.github.io/svgomg/
- **Video Encoding**: https://handbrake.fr/
- **Color Picker**: Use DevTools to extract exact colors from images

## Support

For questions about:
- **Images**: See `/public/MEDIA-ASSETS.md`
- **Videos**: See `/public/videos/README.md`
- **General**: See main `/README.md`

---

**Created**: 2025-10-23
**Purpose**: Development placeholders and guidance
**Status**: Ready to be replaced with actual media content
