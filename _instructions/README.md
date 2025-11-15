# eleventy-simple

A blog starter using [11ty](https://github.com/11ty/eleventy) and [Simple.css](https://github.com/kevquirk/simple.css). Based on [eleventy-base-blog](https://github.com/11ty/eleventy-base-blog)

## Demo

[eleventy-simple.pages.dev](https://eleventy-simple.pages.dev)

## Getting Started

* [Want a more generic/detailed getting started guide?](https://www.11ty.dev/docs/getting-started/)

1. Make a directory and navigate to it:

```
mkdir my-blog-name
cd my-blog-name
```

2. Clone this Repository

```
git clone https://github.com/11ty/eleventy-base-blog.git .
```

_Optional:_ Review `eleventy.config.js` and `_data/metadata.js` to configure the site’s options and data.

3. Install dependencies

```
npm install
```

4. Run Eleventy

Generate a production-ready build to the `_site` folder:

```
npx @11ty/eleventy
```

Or build and host on a local development server:

```
npx @11ty/eleventy --serve
```

Or you can run [debug mode](https://www.11ty.dev/docs/debugging/) to see all the internals.

## For Students — how to safely customize this template

This project is used as a classroom starter. Below are safe, practical steps and examples students can use to customize the site without breaking the core layout.

### Where to edit (safe to change)

* `css/student.css` — the recommended place for student edits. This file contains documented CSS variables and namespaced classes (`.student-*`) so you can change colors, spacing, and add new small components safely.

* `css/custom.css` — extra styles used by the template. Use this only if an instructor asks you to.

* `content/` — add or edit pages and posts here (Markdown or Nunjucks). This is where page content lives.

* `_data/metadata.js` — site-wide metadata (site title, description, author). Safe to update for site settings.

### Where NOT to edit (unless you know what you are doing)

* `_includes/layouts/*.njk` — these files control site layout and navigation. Avoid changing them unless instructed.

* `eleventy.config.js` — build configuration. Only change with instructor approval.

* `node_modules/` or third-party files — never edit these directly.

### Quick safe workflow (recommended)

1. Edit `css/student.css` to change variables at the top (e.g. `--student-accent`) or add new `.student-*` classes.

2. Add your content in `content/` (for a page or post) and use the `.student-*` classes in your Markdown or Nunjucks content blocks.

3. Preview locally with the Eleventy dev server:

```bash
npx @11ty/eleventy --serve
```

The server watches for changes and rebuilds automatically. Open the printed URL (commonly `http://localhost:8080`) and refresh the page.

### Example edits

Change the accent color (safe):

```css
:root { --student-accent: #c2185b; }
```

Add a new namespaced utility (safe):

```css
.student-highlight { background: color-mix(in srgb, var(--student-accent) 10%, transparent); padding: 0.4rem; border-radius: 6px; }
```

Use it in a page or post (Markdown with inline HTML allowed):

```html
<div class="student-card">
  <h3>My project</h3>
  <p class="student-highlight">This is a highlighted note.</p>
  <p><a class="student-btn" href="/blog/">Read the blog</a></p>
</div>
```

Per-page scoping (change variables only for one page):

```html
<main style="--student-accent:#2b9348">
  <div class="student-card">This page uses a different accent color.</div>
</main>
```

### Accessibility and safety tips

* Prefer semantic HTML (headings, paragraphs, lists) inside your content — it's better for accessibility.

* When changing colors, ensure sufficient contrast for readability.

* Avoid removing the skip link (`#skip-link`) or logic that provides keyboard navigation.

### Troubleshooting

* If changes don't show: make sure the dev server is running and that you saved the file.

* If the site won't build: run `npx @11ty/eleventy` in the terminal and read the error message — it usually tells you which file or plugin had a problem.

* To revert a file to the original state (if using git):

```bash
git checkout -- path/to/file
```

### If you want a demo block on the homepage

If you'd like a visible demo for students, you (or an instructor) can add a small snippet into `content/index.njk` or `_includes/layouts/home.njk` showing `.student-banner`, `.student-card`, and `.student-btn`. Keep it clearly marked as removable.
