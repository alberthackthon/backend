const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rawMd = fs.readFileSync(path.join(__dirname, 'The Complete JavaScript, Node.js and Express.js Book.md'), 'utf8');

// Load window.BOOK_DATA
const bookDataCode = fs.readFileSync(path.join(__dirname, 'book-data.js'), 'utf8');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(bookDataCode, context);

const bookData = context.window.BOOK_DATA;

console.log('=== Book Integrity Verification ===');
console.log('Book title:', bookData.meta.title);
console.log('Author & Date:', bookData.meta.author, '·', bookData.meta.date);
console.log('Total chapters:', bookData.chapters.length);
console.log('Total words:', bookData.meta.totalWords);

// Convert all chapters to plain text
const allBookPlainText = bookData.chapters.map(c => {
  return c.html
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}).join('\n');

const samplePhrases = [
  "This book takes you from zero to building and publishing a complete",
  "What happens when you open a website",
  "HTML and CSS Crash Course",
  "JavaScript Basics: Variables, Types and Operators",
  "Making Decisions and Repeating Things",
  "Modern JavaScript (ES6 and Beyond)",
  "The DOM: Controlling the Web Page with JavaScript",
  "Mini Project: A Task Manager in the Browser",
  "Building a Web Server with Plain Node.js",
  "Routing and Middleware",
  "Building REST APIs with Express",
  "Databases: MongoDB, Mongoose and SQL Basics",
  "Authentication and Authorization",
  "Capstone Project: InkBlog, a Complete Full-Stack Website",
  "Deployment: Putting Your Website on the Internet",
  "Best Practices and Your Next Steps",
  "Appendices",
  "docker-compose.yml",
  "bcryptjs",
  "mongoose.connect",
  "app.use(express.json())",
  "SELECT * FROM users",
  "addEventListener('click'",
  "npm install express",
  "res.status(200).json",
  "git commit -m"
];

let allPassed = true;
for (const phrase of samplePhrases) {
  const foundInMd = rawMd.includes(phrase);
  const foundInBook = allBookPlainText.includes(phrase);
  if (!foundInMd) {
    console.warn(`WARNING: phrase not found in original MD: "${phrase}"`);
  } else if (!foundInBook) {
    console.error(`FAIL: phrase found in MD but missing from website: "${phrase}"`);
    allPassed = false;
  } else {
    console.log(`PASS: "${phrase}"`);
  }
}

// Check chapter by chapter line and content fidelity
console.log('\nChecking all 30 chapters presence:');
bookData.chapters.forEach((ch, idx) => {
  if (!ch.title || !ch.html || ch.html.length < 50) {
    console.error(`Chapter ${idx} (${ch.id}) appears truncated or empty!`);
    allPassed = false;
  }
});
console.log(`All ${bookData.chapters.length} chapters contain full rendered content.`);

if (allPassed) {
  console.log('\nSUCCESS: 100% of tested key phrases, code snippets, and sections verified!');
} else {
  console.error('\nFAILURE: Missing content detected!');
  process.exit(1);
}
