# Changelog

All notable changes and fixes to the South Asian Student Society website.

## [2024-11-15] - Theme Toggle, Smooth Accordion & Color System Refactor

### ✨ New Features

#### 🌓 Light/Dark Theme Toggle
- Added floating theme toggle button in bottom-right corner
- **Light Theme** (default): Light beige background (#FEEFC6) with dark brown text (#3A210F)
- **Dark Theme**: Dark brown background (#3A210F) with light beige text (#FEEFC6)
- Theme preference saved in localStorage and persists across sessions
- Smooth 300ms transitions between themes
- All components automatically adjust:
  - Navbar background
  - Glass-effect cards
  - Text colors
  - Border colors
- Sun/moon icons with rotation animation
- Accessible with aria-labels

#### 🎞️ Smooth Accordion Transitions
- Fixed FAQ accordion to use CSS Grid technique instead of max-height
- Eliminated stepped/jumpy animations
- Perfectly smooth expand/collapse with 400ms ease-out timing
- Works with any content height
- No more stuttering or jumping

## [2024-11-15] - Color System Refactor & Bug Fixes

### 🎨 Major: Semantic Color System
- **BREAKING CHANGE**: Refactored all colors from descriptive names to semantic names
- Changed from `sass-red`, `sass-green`, `sass-yellow`, `sass-brown`, `sass-bg` to:
  - `primary` (#8F0F22 - Red)
  - `secondary` (#236139 - Green)
  - `accent` (#DF993A - Yellow/Orange)
  - `background` (#FEEFC6 - Light Beige)
  - `text` (#3A210F - Dark Brown)
- Benefits: Easy theme switching, better maintainability, future-proof design
- All templates, CSS, and components updated to use semantic naming

### 🎨 Color Scheme Updates
- Background color changed from dark brown to light beige/cream (#FEEFC6)
- Text color changed from light beige to dark brown (#3A210F)
- Improved contrast and readability
- Updated all opacity values for better visibility
- Fixed glass morphism effect backgrounds

### 🐛 Bug Fixes
- Fixed CSS build errors with `sass-pink` references
- Removed all hardcoded opacity values that reduced text readability
- Updated navbar background to use semantic color with proper opacity
- Fixed footer link hover colors
- Fixed social icon hover states
- Fixed all border colors to use semantic naming

### ✅ Configuration Updates
- Updated `tailwind.config.js` with semantic color definitions
- Added `dark-background` and `dark-text` colors for theme toggle
- Added inline comments in config for color meanings
- Configured smooth transitions for all color changes

### 📝 Documentation
- Created `COLORS.md` - Comprehensive color system documentation
- Updated `README.md` with semantic color information
- Updated `SETUP.md` with theme customization guide
- Added color usage guidelines and examples
- Included theme variation examples (Dark Mode, Minimal, Vibrant)
- Documented all Tailwind color utility classes

### 🔄 Template Updates
All `.njk` templates updated with semantic colors:
- `src/_layouts/base.njk` - Navigation and footer
- `src/index.njk` - Home page
- `src/events.njk` - Events page
- `src/about.njk` - About/Leaders page
- `src/join.njk` - Join page

### 🎯 CSS Component Updates
Updated `src/css/style.css`:
- `.navbar-sticky` - Uses semantic background color, supports dark theme
- `.glass-effect` - Updated opacity for light background, dark theme variant
- `.gradient-overlay` - Adjusted for new color scheme
- `.social-icon-hover` - Uses semantic secondary color
- `.footer-link-hover` - Uses semantic primary color
- `.nav-link-hover` - Uses semantic primary color
- `.theme-toggle` - New floating button component
- `.faq-answer-transition` - Refactored to use CSS Grid for smooth animations
- `body.dark-theme` - Dark theme styles for all components

### 🔍 Build & Testing
- ✅ All files build successfully
- ✅ No TypeScript/CSS errors
- ✅ Semantic colors verified in built HTML
- ✅ All pages render correctly
- ✅ Animations and transitions working
- ✅ Theme toggle persists across page reloads
- ✅ Smooth accordion animations verified
- ✅ Dark theme tested on all pages

## [2024-11-15] - Initial Tailwind Conversion

### ✨ Features
- Converted from custom CSS to Tailwind CSS v3.4
- Set up PostCSS processing with Autoprefixer
- Configured Eleventy to use ESM (ES Modules)
- Created custom Tailwind animations (slide-down, fade-in, slide-in-right)
- Implemented glass morphism effects
- Added smooth scroll animations
- Integrated Alpine.js for interactivity

### 📄 Pages Created
- Home page with hero, events, stats, FAQ
- Events page with timeline and gallery
- About page with leaders, testimonials, contact
- Join page with benefits and how-to-join

### 🎨 Design System
- Responsive grid layouts
- Smooth transitions and hover effects
- Mobile-first approach
- Accessible color contrast
- Custom component classes

### 🛠 Developer Experience
- Hot reload with Eleventy dev server
- Fast builds with Tailwind JIT
- Type-safe configuration
- Clear project structure

---

## Migration Guide

### Updating Color References

**Old way (before semantic naming):**
```html
<div class="bg-sass-red text-sass-brown border-sass-yellow">
```

**New way (semantic naming):**
```html
<div class="bg-primary text-text border-accent">
```

### Changing Theme Colors

Simply update `tailwind.config.js`:

```javascript
colors: {
  primary: "#YOUR_COLOR",
  secondary: "#YOUR_COLOR",
  accent: "#YOUR_COLOR",
  background: "#YOUR_COLOR",
  text: "#YOUR_COLOR",
}
```

That's it! All pages update automatically.

---

## Future Improvements

### Planned
- [ ] Add dark mode toggle
- [ ] Implement proper Google Calendar API integration
- [ ] Connect Google Sheets for dynamic leader data
- [ ] Add more animation variants
- [ ] Create reusable component library
- [ ] Add accessibility improvements (ARIA labels, keyboard navigation)
- [ ] Implement image optimization
- [ ] Add loading states for API data

### Nice to Have
- [ ] Multiple theme presets
- [ ] Color customization UI
- [ ] Print stylesheets
- [ ] Progressive Web App (PWA) features
- [ ] Offline support
- [ ] Performance optimizations

---

## Breaking Changes

### v2 (Semantic Colors)
- All color class names changed from descriptive to semantic
- `sass-*` prefix removed
- If you have custom code, update color references

### v1 (Tailwind Migration)
- Removed all custom CSS files
- Changed from vanilla CSS to Tailwind utilities
- Requires Node.js and build step

---

## Acknowledgments

- Built with ❤️ by Anshu Pathak
- Uses Tailwind CSS v3.4
- Powered by Eleventy v3
- Interactive components via Alpine.js