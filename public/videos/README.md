# Videos Directory

This directory contains video content for the Spiritual Sanctuary Portal.

## Directory Structure

```
videos/
├── katha/              # Katha session recordings
│   ├── bhagwat/       # Shrimad Bhagwat Katha videos
│   ├── ram/           # Ram Katha videos
│   ├── devi/          # Devi Bhagwat videos
│   └── shiv/          # Shiv Mahapuran videos
├── events/            # Event recordings
├── tutorials/         # How-to and educational videos
└── testimonials/      # Devotee testimonials
```

## Recommended Video Formats

### Primary Format: MP4 (H.264)
- Best compatibility across browsers
- Good compression ratio
- Widely supported

### Alternative Formats
- WebM (VP9) - Modern browsers
- OGG (Theora) - Fallback option

## Video Specifications

### Standard Definition (SD)
- Resolution: 854x480
- Bitrate: 1-2 Mbps
- Use for: Short clips, previews

### High Definition (HD)
- Resolution: 1280x720
- Bitrate: 3-5 Mbps
- Use for: Main content, highlights

### Full HD
- Resolution: 1920x1080
- Bitrate: 5-10 Mbps
- Use for: Premium content, full sessions

## Audio Settings
- Codec: AAC
- Sample Rate: 48kHz
- Bitrate: 128-192 kbps
- Channels: Stereo (2.0)

## Video Optimization

### Compression Tools
1. **FFmpeg** (Command line)
   ```bash
   ffmpeg -i input.mp4 -c:v libx264 -crf 23 -c:a aac -b:a 128k output.mp4
   ```

2. **HandBrake** (GUI)
   - Preset: Web Optimized
   - Quality: RF 20-23

### Thumbnails
Generate thumbnails for each video:
```bash
ffmpeg -i video.mp4 -ss 00:00:05 -vframes 1 thumbnail.jpg
```

## File Naming Convention

Use descriptive, SEO-friendly names:
- `bhagwat-katha-day1-introduction.mp4`
- `ram-katha-highlights-2024.mp4`
- `devi-puja-full-ceremony.mp4`
- `mahashivratri-celebration-2024.mp4`

## Video Hosting Options

### Option 1: Self-Hosted
**Pros:**
- Full control
- No third-party restrictions
- Custom player

**Cons:**
- Bandwidth costs
- Storage requirements
- Server load

### Option 2: YouTube Embedded
**Pros:**
- Free hosting
- Automatic transcoding
- Mobile optimized
- SEO benefits

**Cons:**
- Ads (unless premium)
- YouTube branding
- Less control

### Option 3: Vimeo
**Pros:**
- Professional appearance
- No ads
- Good analytics

**Cons:**
- Cost for storage
- Upload limits

### Option 4: CDN (Recommended for Production)
**Services:**
- AWS CloudFront + S3
- Cloudflare Stream
- Azure Media Services

**Benefits:**
- Fast global delivery
- Scalable
- Adaptive streaming

## Implementation Example

### HTML5 Video Player
```html
<video controls poster="thumbnail.jpg">
  <source src="/videos/katha/bhagwat/session-1.mp4" type="video/mp4">
  <source src="/videos/katha/bhagwat/session-1.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
```

### React Component
```jsx
<video
  controls
  poster="/images/thumbnails/katha-1.jpg"
  className="w-full rounded-lg"
>
  <source src="/videos/katha/session-1.mp4" type="video/mp4" />
</video>
```

## Copyright and Content Policy

- Ensure all video content is authorized for distribution
- Include proper attributions
- Add copyright notices where required
- Follow DMCA guidelines

## Accessibility

- Add closed captions (WebVTT format)
- Provide video transcripts
- Include audio descriptions when possible

### Caption Format (WebVTT)
```
WEBVTT

00:00:00.000 --> 00:00:05.000
Namaste, welcome to Shrimad Bhagwat Katha
```

## Backup and Archival

- Keep master copies in highest quality
- Regular backups to cloud storage
- Version control for edited content
- Document editing history

## Performance Tips

1. **Lazy Loading**: Load videos only when needed
2. **Preload Metadata**: Use `preload="metadata"`
3. **Adaptive Bitrate**: Implement HLS or DASH streaming
4. **Thumbnail Sprites**: For seeking previews
5. **Progressive Download**: Allow playback while downloading

## Analytics Tracking

Track video engagement:
- Play count
- Watch duration
- Drop-off points
- Device types
- Geographic distribution

## Future Enhancements

- [ ] Live streaming capability
- [ ] Multi-language audio tracks
- [ ] Interactive chapters
- [ ] 360° video support
- [ ] VR content for virtual darshan

---

For questions about video content, contact the technical team.
