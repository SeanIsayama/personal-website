# Personal Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- 🌙 Dark mode support
- ⚡ Fast performance with Next.js
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized
- 📧 Contact form
- 🔗 Social media integration

## Pages & Sections

1. **Hero Section** - Introduction and call-to-action
2. **About** - Personal information and skills
3. **Experience** - Work history and achievements
4. **Projects** - Portfolio showcase
5. **Contact** - Contact form and information
6. **Footer** - Social links and additional info

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd personal-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your information:

- `components/Hero.tsx` - Update name and tagline
- `components/About.tsx` - Update personal description and skills
- `components/Experience.tsx` - Update work experience
- `components/Projects.tsx` - Update project details
- `components/Contact.tsx` - Update contact information
- `components/Footer.tsx` - Update social links and contact info

### Styling

- Colors: Update the primary color palette in `tailwind.config.js`
- Fonts: Change the font family in `tailwind.config.js`
- Layout: Modify component styles in individual component files

### Content

- Replace placeholder text with your actual content
- Add your own projects and experiences
- Update social media links
- Add your own images and assets

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:

```bash
npm run build
npm start
```

## Project Structure

```
personal-website/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the website, feel free to open an issue or reach out!