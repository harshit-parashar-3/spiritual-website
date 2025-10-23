# 🎬 YouTube Video Integration Guide

## ✅ What's Now Working

**Videos now play directly on your website!** When users click "वीडियो देखें" (Watch Videos), a modal opens with an embedded YouTube video player.

---

## 🎥 How It Works

### Current Setup:
- ✅ YouTube iframe embed integrated
- ✅ Modal video player working
- ✅ Click any katha card → Video plays
- ✅ Autoplay enabled
- ✅ Fullscreen support
- ✅ Works on Homepage & Videos page

### Sample Video ID Used:
Currently using: `dQw4w9WgXcQ` (placeholder)

---

## 📝 How to Add Your Own YouTube Videos

### Step 1: Get Your YouTube Video ID

#### From YouTube URL:
```
https://www.youtube.com/watch?v=VIDEO_ID_HERE
                                 ↑ This is the video ID
```

**Examples:**
- URL: `https://www.youtube.com/watch?v=ABC123XYZ`
- Video ID: `ABC123XYZ`

- URL: `https://youtu.be/DEF456UVW`
- Video ID: `DEF456UVW`

---

### Step 2: Update Video IDs in Components

#### For Homepage Video Gallery:

Edit: `/src/components/VideoGallery.tsx`

Find this section and replace the `youtubeId` values:

```typescript
categories: [
  {
    title: "श्रीमद्भागवत कथा",
    desc: "संपूर्ण कथा प्रवचन",
    image: "/images/katha/bhagwat-katha.svg",
    youtubeId: "YOUR_VIDEO_ID_HERE" // ← Change this
  },
  {
    title: "श्री राम कथा",
    desc: "रामायण कथा वाचन",
    image: "/images/katha/ram-katha.svg",
    youtubeId: "YOUR_VIDEO_ID_HERE" // ← Change this
  },
  // ... and so on for all 6 categories
]
```

#### For Videos Page:

Edit: `/src/pages/Videos.tsx`

Same process - find the `categories` array and update `youtubeId` for all 9 categories.

---

### Step 3: Example With Real Video IDs

```typescript
categories: [
  {
    title: "श्रीमद्भागवत कथा",
    desc: "संपूर्ण कथा प्रवचन",
    image: "/images/katha/bhagwat-katha.svg",
    youtubeId: "abc123xyz" // Your Bhagwat Katha video
  },
  {
    title: "श्री राम कथा",
    desc: "रामायण कथा वाचन",
    image: "/images/katha/ram-katha.svg",
    youtubeId: "def456uvw" // Your Ram Katha video
  },
]
```

---

## 🎯 Testing the Videos

### Step 1: Start Dev Server
```bash
npm run dev
```

### Step 2: Test on Homepage
1. Visit: http://localhost:8080
2. Scroll to video section
3. Click "वीडियो देखें" on any card
4. Video should play in modal!

### Step 3: Test on Videos Page
1. Click "Videos" in navigation
2. Click "अभी देखें" (Watch Now)
3. Video plays in modal

---

## 🔧 Customization Options

### Disable Autoplay:

Change this line:
```typescript
src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
```

To:
```typescript
src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0`}
```

### Add More YouTube Parameters:

```typescript
src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
```

**Parameters:**
- `autoplay=1` - Auto-start video
- `rel=0` - Don't show related videos at end
- `modestbranding=1` - Minimal YouTube branding
- `start=30` - Start at 30 seconds
- `end=120` - End at 2 minutes
- `cc_load_policy=1` - Show captions by default
- `hl=hi` - Set language to Hindi

---

## 📱 Features Already Included

### ✅ Responsive
- Works on desktop, tablet, mobile
- Adapts to screen size
- Touch-friendly

### ✅ User Experience
- Click to open modal
- Video autoplays
- Click outside to close
- ESC key closes modal
- Fullscreen button works

### ✅ Accessibility
- Proper title attributes
- Keyboard navigation
- Screen reader friendly

---

## 🎨 Modal Appearance

### Current Setup:
- **Size**: Max-width 1024px (4xl)
- **Aspect Ratio**: 16:9 (standard video)
- **Background**: Black
- **Border**: Rounded corners
- **Animation**: Smooth fade-in

### To Customize Modal Size:

Edit the DialogContent in VideoGallery.tsx:

```typescript
<DialogContent className="max-w-6xl"> {/* Larger */}
<DialogContent className="max-w-3xl"> {/* Smaller */}
```

---

## 🚀 Quick Setup Example

### 1. Upload Your Videos to YouTube

Upload your katha videos to your YouTube channel.

### 2. Get Video IDs

For each video, copy the ID from the URL.

### 3. Create a List

```
Bhagwat Katha Day 1: abc123
Bhagwat Katha Day 2: def456
Ram Katha Part 1: ghi789
Ram Katha Part 2: jkl012
Devi Bhagwat: mno345
Shiv Mahapuran: pqr678
```

### 4. Update Both Files

- `/src/components/VideoGallery.tsx` (6 videos)
- `/src/pages/Videos.tsx` (9 videos)

### 5. Test & Deploy

```bash
npm run build
npm run preview
```

---

## 📊 Video Requirements

### Recommended Settings:
- **Privacy**: Public or Unlisted
- **Age Restriction**: None (for accessibility)
- **Embedding**: Enabled (check video settings)
- **Monetization**: Your choice

### To Enable Embedding:
1. Go to YouTube Studio
2. Select your video
3. Click "Details"
4. Scroll to "Audience"
5. Ensure "Allow embedding" is checked

---

## 🔒 Privacy & Copyright

### Important Notes:
- Only embed your own videos
- Or videos you have permission to use
- Respect copyright laws
- YouTube handles video hosting & bandwidth
- No storage costs for you

### Video Visibility Options:
- **Public**: Anyone can find and watch
- **Unlisted**: Only people with link can watch (recommended for website embedding)
- **Private**: Only you can watch (won't work for public site)

---

## 📈 Analytics

### YouTube Provides:
- View counts
- Watch time
- Audience demographics
- Traffic sources
- Engagement metrics

### To Check Stats:
1. Visit YouTube Studio
2. Click "Analytics"
3. See where views come from (your website will show up!)

---

## 🐛 Troubleshooting

### Video Not Playing?

**Check:**
1. ✓ Video ID is correct
2. ✓ Video is Public or Unlisted
3. ✓ Embedding is enabled
4. ✓ No age restrictions
5. ✓ Video hasn't been removed

### Modal Not Opening?

**Check:**
1. ✓ Button onClick is set
2. ✓ No JavaScript errors in console (F12)
3. ✓ Dialog component imported

### Black Screen?

**Possible Causes:**
- Wrong video ID
- Video is Private
- Embedding disabled
- Copyright claim blocking playback

---

## 🎯 Complete File Locations

### Files to Edit:
```
/src/components/VideoGallery.tsx
  - Lines 20-55 (Hindi categories)
  - Lines 63-98 (English categories)

/src/pages/Videos.tsx
  - Lines 20-83 (Hindi categories)
  - Lines 92-155 (English categories)
```

### Search for:
```javascript
youtubeId: "dQw4w9WgXcQ"
```

Replace with your video IDs.

---

## ✨ Advanced: Multiple Videos Per Category

Want a playlist? Modify to show video list:

```typescript
{
  title: "श्रीमद्भागवत कथा",
  desc: "संपूर्ण कथा प्रवचन",
  image: "/images/katha/bhagwat-katha.svg",
  videos: [
    { title: "Day 1", youtubeId: "abc123" },
    { title: "Day 2", youtubeId: "def456" },
    { title: "Day 3", youtubeId: "ghi789" },
  ]
}
```

(Requires additional code changes)

---

## 📝 Quick Reference Card

| Task | File | Line Numbers |
|------|------|--------------|
| Homepage videos | VideoGallery.tsx | 20-98 |
| Videos page | Videos.tsx | 20-155 |
| Modal settings | Both files | ~160-175 |
| Autoplay setting | Both files | ~167 |

---

## 🎉 Summary

### What You Have Now:
✅ Fully functional YouTube video player
✅ Modal opens on click
✅ Videos play embedded on your site
✅ Professional user experience
✅ Mobile responsive
✅ Autoplay enabled

### What You Need to Do:
1. Upload videos to YouTube
2. Get video IDs
3. Replace `dQw4w9WgXcQ` with your IDs
4. Test on your site
5. Deploy!

---

## 📞 Support

### For YouTube Help:
- YouTube Studio: https://studio.youtube.com
- Help Center: https://support.google.com/youtube

### For Code Help:
- See component files for inline comments
- Test with sample video ID first
- Check browser console for errors

---

**Ready to add your videos? Just replace the video IDs and you're done!** 🎬

---

**Last Updated**: 2025-10-23
**Status**: ✅ YouTube integration complete & working!
