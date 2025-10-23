# Spiritual Sanctuary Portal

A modern web platform for Pandit Shree Prakash's spiritual services, featuring katha recitations, puja bookings, and authentic consecrated products.

## Overview

This portal provides a comprehensive digital presence for spiritual services including:

- **Katha Services**: Shrimad Bhagwat Katha, Ram Katha, Devi Bhagwat, Shiv Mahapuran
- **Puja Bookings**: Schedule and manage spiritual ceremonies
- **Consecrated Products**: Browse and purchase authentic spiritual items
- **Event Calendar**: Stay updated with upcoming spiritual events
- **About & Contact**: Learn more about Pandit Shree Prakash and get in touch

## Tech Stack

This project is built with modern web technologies:

- **React 18** - UI library for building interactive interfaces
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **shadcn/ui** - High-quality React components built on Radix UI
- **React Router** - Client-side routing
- **React Hook Form** - Form management with validation
- **Zod** - Schema validation
- **Lucide React** - Beautiful icon library
- **TanStack Query** - Powerful data synchronization

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd spiritual-sanctuary-portal
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
spiritual-sanctuary-portal/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components for routing
│   ├── lib/           # Utility functions and configurations
│   └── main.tsx       # Application entry point
├── public/            # Static assets
│   ├── images/        # Image assets
│   │   ├── katha/     # Katha-related images
│   │   ├── products/  # Product images
│   │   └── events/    # Event images
│   ├── videos/        # Video content
│   └── favicon.svg    # Site icon
└── index.html         # HTML template
```

## Media Assets

### Images

The project includes sample spiritual images in SVG format:

**Katha Images** (`/public/images/katha/`)
- `bhagwat-katha.svg` - Shrimad Bhagwat Katha illustration
- `ram-katha.svg` - Ram Katha imagery
- `devi-bhagwat.svg` - Devi Bhagwat representation
- `shiv-mahapuran.svg` - Shiv Mahapuran artwork

**Product Images** (`/public/images/products/`)
- `rudraksha.svg` - Rudraksha mala illustration
- `yantras.svg` - Sri Yantra design
- `sacred-books.svg` - Sacred scriptures
- `puja-items.svg` - Puja essentials

**Event Images** (`/public/images/events/`)
- `spiritual-gathering.svg` - Spiritual event illustration
- `mahayagna.svg` - Mahayagna ceremony

**General Images**
- `hero-banner.svg` - Homepage hero banner
- `favicon.svg` - Site favicon with Om symbol

### Videos

Video placeholders are located in `/public/videos/`. Replace the placeholder text files with actual video content in MP4, WebM, or OGG formats.

See `/public/videos/README.md` for detailed video specifications and guidelines.

**Recommended Video Formats:**
- MP4 (H.264) - Primary format for best compatibility
- WebM (VP9) - Modern browsers
- Resolution: 1280x720 (HD) or 1920x1080 (Full HD)
- Bitrate: 5-10 Mbps

### Replacing Sample Content

All sample images are in SVG format and should be replaced with actual photos and videos:

1. Replace SVG files with JPG/PNG photos (recommended: 1920x1080 for images)
2. Add actual video content in the videos directory
3. Update image references in your components
4. Optimize images using tools like ImageOptim or TinyPNG
5. For videos, use FFmpeg or HandBrake for web optimization

## Features

### Responsive Design
The portal is fully responsive and works seamlessly across desktop, tablet, and mobile devices.

### Modern UI/UX
Built with shadcn/ui components for a consistent and professional look.

### Type Safety
TypeScript ensures code reliability and better developer experience.

### Performance
Optimized build process with Vite for fast loading times.

## Development

### Code Style
This project uses ESLint for code quality. Run `npm run lint` to check for issues.

### Adding New Components
UI components are built using shadcn/ui. To add a new component:

```bash
npx shadcn-ui@latest add <component-name>
```

## Building for Production

Create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to your hosting service.

## Deployment

The application can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Or any other static hosting provider

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please ensure your code follows the existing style and passes linting.

## License

This project is private and proprietary.

## Contact

For inquiries about Pandit Shree Prakash's services, please use the contact form on the website.

---

Built with dedication to spiritual service and modern web technologies.
