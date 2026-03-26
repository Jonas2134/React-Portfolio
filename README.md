# Portfolio — Jonas Stiefer

My personal developer portfolio built with React, TypeScript and Tailwind CSS.

## Tech Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite 7 (SWC)
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **i18n:** react-i18next (EN, DE, FR, LB)
- **Contact Form:** EmailJS

## Features

- Responsive single-page design
- Dark / Light mode with system preference detection
- Multi-language support (English, German, French, Luxembourgish)
- Animated Matrix-style background using Canvas
- Contact form with client-side validation and EmailJS integration

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/Jonas2134/React-Portfolio
cd react-portfolio
npm install
```

### Environment Variables

Copy the example file and fill in your EmailJS credentials:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | Your EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | Your EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS public key |

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/        React components
├── css/               Tailwind CSS layers (base, theme, utilities, fonts)
├── data/              Static data (projects, skills)
├── i18n/              i18next config + translation files (en, de, fr, lb)
└── assets/            Fonts, images
```

## License

All rights reserved.
