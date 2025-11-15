# Quick Start Guide

Welcome! This guide will get you up and running in 2 minutes.

## 🚀 Start Development Server

```bash
npm start
```

Visit: `http://localhost:8080`

## 🎨 Change Theme Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: "#8F0F22",      // Change this!
  secondary: "#236139",    // Change this!
  accent: "#DF993A",       // Change this!
  background: "#FEEFC6",   // Change this!
  text: "#3A210F",         // Change this!
}
```

Save and watch your site update instantly! 🎉

## 📝 Edit Content

### Home Page
- File: `src/index.njk`
- Update hero text, mission statement, FAQ

### Events Page
- File: `src/events.njk`
- Update event descriptions, past events

### About Page
- File: `src/about.njk`
- Update mission, testimonials

### Join Page
- File: `src/join.njk`
- Update benefits, how-to-join steps

## 🔗 Update Links

Search and replace these placeholders:

1. **Gator Hub URL**: Replace `#` in "Join us on Gator Hub" buttons
2. **Social Media**: Update links in social icons sections
3. **Email**: Change `contact@sass.edu` to your email
4. **Google Calendar**: Update calendar public URL

## 🖼️ Add Images

1. **Hero Background**: Update in `src/index.njk`, `src/events.njk`, etc.
   ```html
   style="background-image: url('YOUR_IMAGE_URL');"
   ```

2. **Logo**: Add to `src/images/` and update in templates

3. **Leader Photos**: Via Google Sheets (see API setup)

## 🔌 Google API Setup

Edit `src/js/main.js`:

```javascript
const CALENDAR_API_KEY = 'YOUR_KEY_HERE';
const CALENDAR_ID = 'YOUR_CALENDAR_ID@group.calendar.google.com';
const SHEETS_API_KEY = 'YOUR_KEY_HERE';
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID';
```

**Google Sheets Format** (for leaders):
| Name | Role | Bio | Photo URL |
|------|------|-----|-----------|
| John Doe | President | Bio text... | https://... |

## 🎨 Using Colors

Always use semantic names:

```html
<!-- ✅ GOOD -->
<div class="bg-primary text-background">
<h1 class="text-primary">Title</h1>
<p class="text-text">Content</p>

<!-- ❌ BAD - Don't hardcode! -->
<div style="background: #8F0F22;">
```

## 📦 Build for Production

```bash
npm run build
```

Output: `_site/` directory

## 🛠️ Common Tasks

### Add a new page

1. Create `src/mypage.njk`
2. Add frontmatter:
   ```yaml
   ---
   layout: base.njk
   title: My Page
   ---
   ```
3. Add to navigation in `src/_layouts/base.njk`

### Add custom CSS

Edit `src/css/style.css`:

```css
@layer components {
  .my-custom-class {
    @apply bg-primary text-background p-4 rounded-lg;
  }
}
```

### Add custom animation

Edit `tailwind.config.js`:

```javascript
animation: {
  'my-animation': 'myKeyframes 1s ease',
},
keyframes: {
  myKeyframes: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
}
```

## 🐛 Troubleshooting

### Build fails
```bash
npm run clean
npm install
npm run build
```

### Colors not updating
```bash
# Force rebuild
npm run clean && npm run build
```



## 📚 Documentation Files

- `README.md` - Full documentation
- `COLORS.md` - Color system guide
- `SETUP.md` - Detailed setup
- `CHANGELOG.md` - Version history
- `TAILWIND_CONVERSION.md` - Tailwind details

## ✨ Pro Tips

1. **Hot Reload**: Save any file and browser auto-refreshes
2. **Tailwind IntelliSense**: Install VS Code extension for autocomplete
3. **Color Picker**: Use browser DevTools to find colors
4. **Component Reuse**: Extract repeated patterns to `@layer components`
5. **Mobile First**: Use `md:`, `lg:` prefixes for responsive design

## 🎯 Next Steps

1. [ ] Update all Lorem ipsum text
2. [ ] Add real images
3. [ ] Set up Google Calendar API
4. [ ] Set up Google Sheets for leaders
5. [ ] Update social media links
6. [ ] Test on mobile devices
7. [ ] Deploy to hosting (Netlify, Vercel, GitHub Pages)

## 🆘 Need Help?

- Read `COLORS.md` for theme customization
- Read `README.md` for full documentation
- Check `SETUP.md` for detailed setup
- Search Tailwind docs: https://tailwindcss.com/docs

---

**Remember**: Semantic colors = Easy theming! 🎨