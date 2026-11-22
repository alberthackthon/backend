# The Complete JavaScript, Node.js and Express.js Book — Interactive Web Edition

This project converts the entire book **The Complete JavaScript, Node.js and Express.js Book** (`437 KB`, `12,074 lines`, `65,000+ words`) into a visual, responsive documentation website.

> **Zero Content Loss Guarantee**: Every chapter, section, exercise, code block, table, command, and appendix has been preserved verbatim.

---

## 🚀 How to Open and View the Website

You can view the website in two ways:

### Option 1: Open Directly in Your Browser (No Server Needed)
Simply open the [`index.html`](./index.html) file directly in your favorite browser (Google Chrome, Microsoft Edge, Firefox, Safari, Brave):
- Double click `index.html` in your file explorer, or
- Right click `index.html` -> **Open with** -> **Google Chrome** / **Microsoft Edge**.

### Option 2: Run with the Local Server
A lightweight, zero-dependency Node.js server is included:

```bash
# Start the web server
npm start
```

Then visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✨ Features

- **Unabridged Book Content**: All 30 sections (Preface, Chapters 1 through 28, and Appendices) converted to high-fidelity semantic HTML.
- **Dark & Light Mode**: Seamless theme switching with persistence in `localStorage`.
- **Global Full-Text Search (`Ctrl + K` or `/`)**: Search through 430+ headings, code snippets, and concepts across all chapters with instant highlighting and keyboard navigation.
- **Interactive JavaScript Playground**: An embedded code runner to practice JavaScript snippets directly in the browser with live console output.
- **"On This Page" Scroll-Spy**: Dynamic right sidebar outlining all H3 and H4 subheadings, highlighting your position as you scroll.
- **Reading Progress Tracker**: Track completed chapters with checkmarks and an overall progress bar saved to your browser's local storage.
- **One-Click Code Copy**: Copy buttons on every code block with animated feedback and language badges (`JavaScript`, `Bash`, `HTML`, `CSS`, `JSON`, `SQL`).
- **Responsive Layout**: Designed for mobile, tablet, and wide desktop screens with an accessible slide-out navigation drawer.
- **Font Size Adjuster**: Toggle between comfortable reading font sizes directly from the header.

---

## 🛠 Project Scripts

- `npm start`: Starts the local HTTP server on port 3000.
- `npm run build`: Re-parses the markdown book and regenerates `book-data.js`.
- `npm run verify`: Runs automated content integrity checks against the markdown source.
