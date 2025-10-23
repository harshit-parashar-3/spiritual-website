# ⚡ Quick Video Setup - 5 Minutes

## 🎬 Videos Are Already Playable!

**Try it now:** Click any "वीडियो देखें" button on your website!

---

## 🚀 To Use Your YouTube Videos:

### 1️⃣ Get Your YouTube Video ID (30 seconds)

**From this URL:**
```
https://www.youtube.com/watch?v=ABC123XYZ
```

**Video ID is:** `ABC123XYZ`

---

### 2️⃣ Replace in 2 Files (3 minutes)

#### File 1: `/src/components/VideoGallery.tsx`

**Find and replace (6 times):**
```typescript
youtubeId: "dQw4w9WgXcQ"
```

**With your video ID:**
```typescript
youtubeId: "ABC123XYZ"
```

#### File 2: `/src/pages/Videos.tsx`

**Same thing (9 times):**
```typescript
youtubeId: "dQw4w9WgXcQ"  →  youtubeId: "YOUR_ID"
```

---

### 3️⃣ Test (1 minute)

```bash
npm run dev
```

Visit: http://localhost:8080

Click a video → Should play YOUR video! ✅

---

## 🎯 Example

Replace this:
```typescript
{
  title: "श्रीमद्भागवत कथा",
  youtubeId: "dQw4w9WgXcQ"  // ← Sample
}
```

With this:
```typescript
{
  title: "श्रीमद्भागवत कथा",
  youtubeId: "YOUR_VIDEO_ID"  // ← Your actual video
}
```

---

## ✅ Done!

Videos will now play from your YouTube channel!

**Need help?** See `YOUTUBE-INTEGRATION-GUIDE.md`

---

**Total Time:** 5 minutes ⏱️
**Difficulty:** Super Easy! 😊
