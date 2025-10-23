# Where to See Images - Visual Guide

## 🌐 Visit: http://localhost:8080

---

## 📍 Homepage (Index Page)

### 1. Hero Section (Top of page)
**Image**: Hero Banner with Om Symbol
- **File**: `/images/hero-banner.svg`
- **Location**: Background of hero section
- **Features**:
  - Saffron-white-green gradient
  - Large Om symbol (ॐ)
  - "Pandit Shree Prakash" text
  - "श्रीमद्भागवत कथा • राम कथा" text

**How to see**: Load the homepage and look at the top banner section

---

### 2. Video Gallery Section (Homepage - Middle)
**Section Title**: "कथा एवं अनुष्ठान वीडियो" (Hindi) / "Katha & Anusthan Videos" (English)

Six cards with images:

| Card | Image File | What You'll See |
|------|------------|-----------------|
| 1. Shrimad Bhagwat Katha | `katha/bhagwat-katha.svg` | Sacred book with Om symbol |
| 2. Shri Ram Katha | `katha/ram-katha.svg` | Temple with bow & arrow |
| 3. Devi Bhagwat Katha | `katha/devi-bhagwat.svg` | Lotus flower with trishul |
| 4. Shiv Mahapuran | `katha/shiv-mahapuran.svg` | Shiva linga with elements |
| 5. Special Anusthan | `events/mahayagna.svg` | Fire ceremony (havan) |
| 6. Spiritual Discourses | `events/spiritual-gathering.svg` | Gathering with pandit |

**Features**:
- Each card has full image at top
- Play button overlay on hover
- Image zooms in on hover (110%)
- YouTube button below

**How to see**: Scroll down on homepage to "Video Gallery" section

---

### 3. Products Section (Homepage - Lower)
**Section Title**: "अभिमंत्रित आध्यात्मिक उत्पाद" (Hindi) / "Consecrated Spiritual Products" (English)

Six product cards with images:

| Card | Image File | What You'll See |
|------|------------|-----------------|
| 1. Shree Yantra | `products/yantras.svg` | Geometric Sri Yantra design |
| 2. Rudraksh Mala | `products/rudraksha.svg` | 5-mukhi Rudraksha bead |
| 3. Navaratna | `products/yantras.svg` | Sri Yantra (reused) |
| 4. Shivling | `products/puja-items.svg` | Diya, incense, kalash |
| 5. Tulsi Mala | `products/rudraksha.svg` | Rudraksha (reused) |
| 6. Ganesh Idol | `products/puja-items.svg` | Puja items (reused) |

**Features**:
- Product image displayed prominently
- Sparkle icon in corner
- Image zooms on hover
- Price displayed
- Contact button

**How to see**: Scroll down on homepage to "Products" section

---

## 📺 Videos Page

### Navigate to Videos Page:
- Click "Videos" in navigation menu, OR
- Visit: http://localhost:8080/videos

### Hero Section (Top)
**Icon**: Video camera icon in circle
**Title**: "कथा एवं अनुष्ठान वीडियो"

---

### Video Categories (Main Content)
Nine category cards with full images:

| # | Category | Image | Visual Description |
|---|----------|-------|-------------------|
| 1 | Shrimad Bhagwat Katha | `katha/bhagwat-katha.svg` | Sacred book |
| 2 | Shri Ram Katha | `katha/ram-katha.svg` | Temple & bow |
| 3 | Devi Bhagwat Katha | `katha/devi-bhagwat.svg` | Lotus & trishul |
| 4 | Shiv Mahapuran | `katha/shiv-mahapuran.svg` | Shiva linga |
| 5 | Special Anusthan | `events/mahayagna.svg` | Fire ceremony |
| 6 | Spiritual Discourses | `events/spiritual-gathering.svg` | Gathering |
| 7 | Mantra Japa | `products/rudraksha.svg` | Rudraksha |
| 8 | Festival Specials | `products/puja-items.svg` | Puja items |
| 9 | Satsang | `events/spiritual-gathering.svg` | Gathering |

**Features**:
- Full-width images (248px height)
- Dark gradient overlay
- Large play icon (16x16) in center
- Image scales to 110% on hover
- Video count badge
- "Watch Now" button

**How to see**: Click "Videos" in menu or visit `/videos` route

---

## 🔍 Browser Tab

### Favicon
**File**: `/favicon.svg`
**What You'll See**:
- Orange/saffron square with rounded corners
- White Om symbol (ॐ) in center
- Appears in browser tab

**How to see**: Look at the browser tab icon (may need hard refresh: Ctrl+Shift+R)

---

## 🎨 Visual Effects to Notice

### 1. Image Hover Effects
**All Images**:
- Smooth scale animation (100% → 110%)
- Transition duration: 300-500ms
- Maintains aspect ratio

### 2. Overlay Effects
**Video/Katha Cards**:
- Dark gradient from bottom to top
- Play icon appears on hover
- Icon scales up (125%) on hover

### 3. Card Hover Effects
**All Cards**:
- Shadow increases
- Card lifts up (-1px transform)
- Smooth transition

---

## 🌍 Language Toggle

Switch between Hindi (हि) and English (EN) using the language toggle in header.

**Both languages show the same images**, only text changes.

---

## 📱 Responsive Design

Images adapt to screen size:

### Desktop (>1024px)
- 3 columns grid
- Larger images
- Full hover effects

### Tablet (768-1024px)
- 2 columns grid
- Medium images
- Touch-friendly

### Mobile (<768px)
- 1 column grid
- Full-width images
- Stacked layout

**Test**: Resize browser window to see responsive behavior

---

## 🐛 Troubleshooting

### Images Not Showing?

1. **Check Server is Running**
   ```bash
   npm run dev
   ```
   Should show: `http://localhost:8080`

2. **Hard Refresh Browser**
   - Windows/Linux: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`

3. **Check Browser Console**
   - Press `F12`
   - Look for 404 errors
   - All image paths should start with `/images/`

4. **Verify Files Exist**
   ```bash
   ls public/images/katha/
   ls public/images/products/
   ls public/images/events/
   ```

5. **Clear Browser Cache**
   - Open DevTools (F12)
   - Right-click refresh button
   - Select "Empty Cache and Hard Reload"

---

## ✅ Quick Checklist

Visit each section and verify:

- [ ] Homepage loads
- [ ] Hero banner shows Om symbol
- [ ] Video gallery shows 6 cards with images
- [ ] Each video card has image at top
- [ ] Products section shows 6 cards with images
- [ ] Product images display correctly
- [ ] Hover effects work on all cards
- [ ] Click "Videos" in menu
- [ ] Videos page shows 9 categories
- [ ] Each category has full-width image
- [ ] Play icons appear on images
- [ ] Browser tab shows Om favicon
- [ ] Language toggle works (images stay same)

---

## 📊 Performance

### Image Load Times (approximate):
- SVG images: < 50ms (very fast)
- Total page load: < 1 second
- All images under 2KB each

### Network Tab (F12 → Network):
You should see successful loads:
```
✓ hero-banner.svg          1.1 KB
✓ bhagwat-katha.svg        1.1 KB
✓ ram-katha.svg            1.0 KB
✓ devi-bhagwat.svg         1.4 KB
✓ shiv-mahapuran.svg       1.6 KB
✓ mahayagna.svg            1.5 KB
✓ spiritual-gathering.svg  2.0 KB
✓ rudraksha.svg            1.0 KB
✓ yantras.svg              1.5 KB
✓ puja-items.svg           1.7 KB
✓ sacred-books.svg         1.4 KB
✓ favicon.svg              0.3 KB
```

---

## 🎥 No Videos Yet?

Currently, only **video placeholders** exist (text files).

**To add actual videos**:
1. Place MP4 files in `/public/videos/`
2. Update components to use `<video>` tags
3. Add poster images (thumbnails)

**For now**: Cards show video categories with images and YouTube integration buttons.

---

## 📸 Screenshot Locations

Take screenshots at:
1. **Homepage Hero**: Top banner
2. **Video Gallery**: 6-card grid
3. **Products**: 6-card product grid
4. **Videos Page**: 9-card category grid
5. **Mobile View**: Stacked cards

---

## 🎯 What You Should See Right Now

### ✅ Working Now:
- Hero banner with Om symbol ✓
- 6 katha images in video gallery ✓
- 6 product images ✓
- 9 video category images ✓
- Om favicon ✓
- All hover effects ✓
- Responsive design ✓

### 📝 Need Real Content Later:
- Actual photos of events
- Real product photography
- Pandit portrait
- Actual video files (MP4)
- Event galleries

---

**Development Server**: http://localhost:8080

**Last Updated**: 2025-10-23
**Status**: ✅ All images visible and working
