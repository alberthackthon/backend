const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Load window.BOOKS_DATA
const bookDataCode = fs.readFileSync(path.join(__dirname, 'book-data.js'), 'utf8');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(bookDataCode, context);

const booksData = context.window.BOOKS_DATA;

console.log('=== Multi-Book Integrity Verification ===');
console.log('Total books:', booksData.books.length);
console.log('Search index size:', booksData.searchIndex.length);

let allPassed = true;

booksData.books.forEach((book, bIdx) => {
  console.log(`\n--- Checking [${book.id}] ${book.title} ---`);
  console.log(`Chapters: ${book.chapters.length}, Words: ${book.totalWords}`);

  const rawMd = fs.readFileSync(path.join(__dirname, book.filename), 'utf8');

  // Strip tags and decode entities
  const allPlainText = book.chapters.map(c => {
    return c.html
      .replace(/<[^>]+>/g, '')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
  }).join('\n');

  // Specific key phrases for Book 1
  const book1Phrases = [
    "What happens when you open a website",
    "JavaScript Basics: Variables, Types and Operators",
    "Building a Web Server with Plain Node.js",
    "Routing and Middleware",
    "Building REST APIs with Express",
    "Databases: MongoDB, Mongoose and SQL Basics",
    "Authentication and Authorization",
    "Capstone Project: InkBlog, a Complete Full-Stack Website",
    "Deployment: Putting Your Website on the Internet"
  ];

  // Specific key phrases for Book 2
  const book2Phrases = [
    "Welcome to Book 2",
    "TypeScript: JavaScript with types",
    "Why TypeScript? Setup and First Steps",
    "Objects, Interfaces, Unions and Narrowing",
    "React Fundamentals: Components, JSX and Props",
    "State and Events",
    "Effects, Data Fetching and Custom Hooks",
    "Introduction to Next.js and the App Router",
    "Server Components, Client Components and Data Fetching",
    "Rendering and Caching with Cache Components",
    "Forms, Server Actions and Route Handlers",
    "Databases in Next.js with PostgreSQL and Prisma",
    "Capstone Project: InkBlog, a Full-Stack Next.js Application"
  ];

  const testPhrases = book.id === 'book-1' ? book1Phrases : book2Phrases;

  testPhrases.forEach(phrase => {
    const inMd = rawMd.includes(phrase);
    const inBook = allPlainText.includes(phrase);
    if (!inMd) {
      console.warn(`[${book.id}] Warning: phrase not in MD: "${phrase}"`);
    } else if (!inBook) {
      console.error(`[${book.id}] FAIL: missing phrase: "${phrase}"`);
      allPassed = false;
    } else {
      console.log(`[${book.id}] PASS: "${phrase}"`);
    }
  });

  // Verify all chapters have content
  book.chapters.forEach((ch, idx) => {
    if (!ch.title || !ch.html || ch.html.length < 50) {
      console.error(`[${book.id}] Chapter ${idx} (${ch.id}) appears truncated or empty!`);
      allPassed = false;
    }
  });
});

if (allPassed) {
  console.log('\nSUCCESS: 100% of tested content and chapters verified for BOTH books!');
} else {
  console.error('\nFAILURE: Missing content detected!');
  process.exit(1);
}
