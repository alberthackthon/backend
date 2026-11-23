# The Full-Stack Developer Bookshelf — Interactive Multi-Book Web Library

An interactive, responsive documentation and learning platform containing two complete developer books by **@Albert Hackthon**:

1. **Book 1: The Complete JavaScript, Node.js and Express.js Book**
   - 30 Chapters & Sections · 62,348 words · 12,074 lines
   - Foundations, Modern JavaScript (ES6+), DOM, Async, Node.js Core, Express.js APIs, Databases & Security.
2. **Book 2: The Complete TypeScript, React.js and Next.js Book**
   - 26 Chapters & Sections · 67,294 words · 10,981 lines
   - TypeScript 7, React 19 (Hooks, Actions, View Transitions), Next.js 16 (App Router, Server Actions, Caching, Prisma, Auth, CI/CD).

> **Total**: 56 complete chapters, 129,642 words, 784 indexed search topics with **zero content loss**.

---

## 🚀 How to View the Website

### Option 1: Open Directly in Your Browser (No Server Needed)
Open [`index.html`](./index.html) in any browser (Chrome, Edge, Firefox, Brave, Safari). It works completely offline!

### Option 2: Run with the Local Server
```bash
npm start
```
Then visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌟 Interactive Features

- **Header Book Switcher**: Toggle seamlessly between **Book 1 (JS & Node.js)** and **Book 2 (TS, React & Next.js)** with instant sidebar and theme updates.
- **Unified Global Search (`Ctrl + K` or `/`)**: Search across all 56 chapters and 784 topics, or filter by book with instant keyword highlighting.
- **Interactive Code Playground**: Embedded runner for testing JavaScript, TypeScript, and React state snippets directly in the browser with live console output.
- **"On This Page" Scroll-Spy**: Dynamic right sidebar outlining H3 and H4 subheadings with real-time scroll tracking.
- **Per-Book Reading Progress**: Track completed chapters with checkmarks and a progress bar saved to your browser's local storage for each book independently.
- **One-Click Code Copy**: Copy button with animated feedback on every code snippet.
- **Dark / Light Mode**: Eye-friendly documentation theme with persistent preference.
- **Font Size Adjuster**: `A-` / `A+` controls for comfortable reading.

---

## 🛠 Project Scripts

- `npm start`: Starts the local HTTP server on port 3000.
- `npm run build`: Compiles both markdown books into `book-data.js`.
- `npm run verify`: Runs automated content integrity checks against both markdown source files.
