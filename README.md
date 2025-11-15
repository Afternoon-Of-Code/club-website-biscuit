# South Asian Student Society Website

A modern, dynamic website for the South Asian Student Society built with Eleventy, Alpine.js, and integrated with Google Calendar and Google Sheets APIs.

## Features

- 🎨 Custom color theme matching SASS branding
- 📅 Real-time event integration with Google Calendar API
- 👥 Dynamic leadership roster from Google Sheets
- ✨ Smooth animations and transitions
- 📱 Fully responsive design
- 🚀 Fast static site generation with Eleventy

## Tech Stack

- **HTML** - Structure
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Alpine.js** - Lightweight JavaScript framework for interactivity
- **Eleventy** - Static site generator
- **PostCSS** - CSS processing with Autoprefixer
- **Google Calendar API** - Event management
- **Google Sheets API** - Leadership roster

## Color Theme (Semantic Tailwind Colors)

The project uses **semantic color naming** for easy theme switching:

| Semantic Name | Hex Code | Color | Usage |
|---------------|----------|-------|-------|
| `primary` | `#8F0F22` | Red | Primary actions, headings |
| `secondary` | `#236139` | Green | Secondary actions |
| `accent` | `#DF993A` | Yellow/Orange | Highlights, borders |
| `background` | `#FEEFC6` | Light Beige | Page background |
| `text` | `#3A210F` | Dark Brown | Text color |

These colors are configured in `tailwind.config.js` and can be used with classes like:
- `bg-primary`, `text-primary`, `border-primary`
- `bg-secondary`, `text-secondary`, `border-secondary`
- `bg-accent`, `text-accent`, `border-accent`
- `bg-background`, `text-background`
- `bg-text`, `text-text`

**To change the entire theme**, simply update the hex values in `tailwind.config.js`!

See `COLORS.md` for detailed color usage guidelines and theme examples.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Afternoon-Of-Code/club-website-biscuit.git
cd club-website-biscuit
```

2. Install dependencies:
```bash
npm install
```

3. Set up Google APIs:
   - Create a Google Cloud project
   - Enable Google Calendar API and Google Sheets API
   - Create API credentials
   - Update API keys in `src/js/main.js`:
     - `CALENDAR_API_KEY`
     - `CALENDAR_ID`
     - `SHEETS_API_KEY`
     - `SPREADSHEET_ID`

4. Start the development server:
```bash
npm start
```

The site will be available at `http://localhost:8080`

Tailwind CSS will be automatically processed and built with Eleventy using PostCSS.

### Building for Production

```bash
npm run build
```

The built site will be in the `_site` directory.

## Project Structure

```
club-website-biscuit/
├── src/
│   ├── _layouts/        # Eleventy layouts
│   │   └── base.njk
│   ├── _data/           # Data files
│   ├── css/             # Stylesheets
│   │   └── style.css
│   ├── js/              # JavaScript files
│   │   └── main.js
│   ├── images/          # Static images
│   ├── index.njk        # Home page
│   ├── events.njk       # Events page
│   ├── about.njk        # About/Leaders page
│   └── join.njk         # Join Us page
├── .eleventy.js         # Eleventy configuration (ESM)
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── package.json
```

## Google Sheets Setup

Create a Google Sheet with the following columns for leadership roster:

| Name | Role | Bio | Photo URL |
|------|------|-----|-----------|
| John Doe | President | Lorem ipsum... | https://... |

Update the `SPREADSHEET_ID` in `src/js/main.js` with your sheet's ID.

## Google Calendar Setup

1. Create a Google Calendar for SASS events
2. Make it public or get the calendar ID
3. Add the calendar ID to `src/js/main.js`
4. Events with image attachments will automatically display those images

## Customization

### Styling with Tailwind

This project uses **Tailwind CSS** for all styling. Key features:

- Custom color palette defined in `tailwind.config.js`
- Custom animations: `animate-slide-down`, `animate-fade-in`, `animate-slide-in-right`
- Utility classes for responsive design
- Custom component classes in `src/css/style.css` using `@layer components`

To customize styles:
- **Change colors**: Edit the `colors` object in `tailwind.config.js` (see `COLORS.md`)
- **Add custom components**: Use `@layer components` in `src/css/style.css`
- **Use Tailwind utilities**: Apply classes directly in `.njk` templates
- **Semantic naming**: Always use `primary`, `secondary`, `accent`, `background`, `text` instead of color names

### Content

Most content uses Lorem ipsum placeholders. Update the following files:

- `src/index.njk` - Home page content (uses Tailwind classes)
- `src/events.njk` - Events page content
- `src/about.njk` - About and mission statements
- `src/join.njk` - Join page content

### Links

Update these placeholder links:

- Gator Hub URL (search for `#` in navigation)
- Social media links (currently using `#`)
- Email addresses (currently `contact@sass.edu`)
- Google Calendar public link

### Images

Replace placeholder images:

- Hero background (inline style in `src/index.njk`)
- Logo (add to `src/images/` and update in templates)
- Leader photos (via Google Sheets)

## Tailwind CSS Notes

This project is configured to use **ES Modules (ESM)** and includes:

- `eleventy-plugin-postcss` for processing Tailwind CSS
- Custom Tailwind configuration with SASS brand colors
- Smooth animations and transitions
- Glass morphism effects using `backdrop-filter`
- Responsive design utilities

All pages use Tailwind utility classes instead of custom CSS. The base styles are in `src/css/style.css` which imports Tailwind directives.

## Pages

- **Home** (`/`) - Hero, upcoming events, socials, mission, FAQ
- **Events** (`/events/`) - Full events feed and past events gallery
- **About** (`/about/`) - Mission, team, testimonials, contact
- **Join Us** (`/join/`) - Why join, benefits, how to join

## Credits

Made with ❤️ by Anshu Pathak

## License

ISC