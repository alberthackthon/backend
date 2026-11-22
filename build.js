const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const hljs = require('highlight.js');

const rawMdPath = path.join(__dirname, 'The Complete JavaScript, Node.js and Express.js Book.md');
const rawMd = fs.readFileSync(rawMdPath, 'utf8');
const allLines = rawMd.split(/\r?\n/);
console.log(`Original file lines: ${allLines.length}, characters: ${rawMd.length}`);

// Custom marked renderer
const renderer = new marked.Renderer();

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/<[^>]*>/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function escapeHtml(str) {
  return (str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

renderer.code = function({ text, lang }) {
  const rawLang = (lang || '').trim();
  const language = rawLang.split(/\s+/)[0] || 'text';
  let highlighted = text;
  try {
    if (hljs.getLanguage(language)) {
      highlighted = hljs.highlight(text, { language }).value;
    } else {
      highlighted = hljs.highlightAuto(text).value;
    }
  } catch (e) {
    highlighted = escapeHtml(text);
  }
  
  return `<div class="code-block-wrapper">
  <div class="code-block-header">
    <div class="code-lang-info">
      <span class="code-lang-dot"></span>
      <span class="code-lang-tag">${escapeHtml(language)}</span>
    </div>
    <button class="copy-code-btn" type="button" aria-label="Copy code to clipboard">
      <svg class="copy-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
      <span class="copy-text">Copy</span>
    </button>
  </div>
  <pre><code class="hljs language-${escapeHtml(language)}">${highlighted}</code></pre>
</div>`;
};

renderer.heading = function({ text, depth }) {
  const cleanTitle = text.replace(/<[^>]*>/g, '').trim();
  const slug = slugify(cleanTitle);
  const anchorTag = `<a href="#${slug}" class="heading-anchor" aria-label="Permalink to ${escapeHtml(cleanTitle)}" title="Copy link to this section">#</a>`;
  return `<h${depth} id="${slug}" class="heading-anchor-target h${depth}-heading"><span class="heading-text">${text}</span>${anchorTag}</h${depth}>`;
};

renderer.table = function(token) {
  const tableHtml = marked.Renderer.prototype.table.call(this, token);
  return `<div class="table-responsive">${tableHtml.replace('<table>', '<table class="book-table">')}</div>`;
};

renderer.blockquote = function({ text }) {
  return `<blockquote class="book-callout">${text}</blockquote>`;
};

marked.use({ renderer, gfm: true, breaks: false });

// Split into chapters accurately:
// Chapter 0 (Preface): lines 0 to line before "## Chapter 1:"
// Chapters 1 to 28: start at "## Chapter X:"
// Chapter 29 (Appendices): start at "## Appendices"
let inCode = false;
const rawChapters = [];
let currentLines = [];

for (let i = 0; i < allLines.length; i++) {
  const line = allLines[i];
  if (line.trim().startsWith('```')) {
    inCode = !inCode;
  }
  
  const isChapterStart = !inCode && (
    line.startsWith('## Chapter ') || 
    line.startsWith('## Appendices')
  );

  if (isChapterStart && i > 0) {
    if (currentLines.length > 0) {
      rawChapters.push(currentLines);
    }
    currentLines = [line];
  } else {
    currentLines.push(line);
  }
}
if (currentLines.length > 0) {
  rawChapters.push(currentLines);
}

// Verification: total lines across all rawChapters must equal allLines.length
const sumLines = rawChapters.reduce((acc, c) => acc + c.length, 0);
console.log(`Verification: sum of chapter lines = ${sumLines} (Original: ${allLines.length})`);
if (sumLines !== allLines.length) {
  throw new Error(`Line count mismatch! Sum: ${sumLines}, Original: ${allLines.length}`);
}

console.log(`Identified ${rawChapters.length} chapters.`);

// Part definitions
const partDefinitions = [
  { partId: 'preface', title: 'Introduction & Overview', icon: '📖', chapters: ['preface'] },
  { partId: 'part-1', title: 'Part 1: Foundations', icon: '🧱', chapters: [1, 2] },
  { partId: 'part-2', title: 'Part 2: JavaScript Language', icon: '⚡', chapters: [3, 4, 5, 6, 7] },
  { partId: 'part-3', title: 'Part 3: JavaScript in the Browser', icon: '🌐', chapters: [8, 9, 10, 11, 12, 13] },
  { partId: 'part-4', title: 'Part 4: Node.js', icon: '🟢', chapters: [14, 15, 16] },
  { partId: 'part-5', title: 'Part 5: Express.js & The Backend', icon: '🚀', chapters: [17, 18, 19, 20, 21, 22, 23, 24, 25] },
  { partId: 'part-6', title: 'Part 6: Capstone & Launch', icon: '🏆', chapters: [26, 27, 28] },
  { partId: 'appendices', title: 'Appendices & Reference', icon: '📚', chapters: ['appendices'] }
];

function getPartForChapter(num) {
  for (const part of partDefinitions) {
    if (part.chapters.includes(num)) {
      return part;
    }
  }
  return { partId: 'general', title: 'General', icon: '📄' };
}

// Process each chapter
const chaptersData = [];
const searchIndex = [];

rawChapters.forEach((linesArr, idx) => {
  const fullMd = linesArr.join('\n');
  let title = '';
  let id = '';
  let chapterNumber = null;
  let part = null;

  if (idx === 0) {
    id = 'preface';
    title = 'Preface: Read This First';
    chapterNumber = 0;
    part = getPartForChapter('preface');
  } else {
    const firstLine = linesArr[0].trim();
    if (firstLine.includes('Appendices')) {
      id = 'appendices';
      title = 'Appendices';
      chapterNumber = 99;
      part = getPartForChapter('appendices');
    } else {
      const headingMatch = firstLine.match(/^##\s+Chapter\s+(\d+):\s*(.*)$/i);
      if (headingMatch) {
        chapterNumber = parseInt(headingMatch[1], 10);
        id = `chapter-${chapterNumber}`;
        title = firstLine.replace(/^##\s+/, '').trim();
        part = getPartForChapter(chapterNumber);
      } else {
        id = slugify(firstLine.replace(/^##\s+/, ''));
        title = firstLine.replace(/^##\s+/, '').trim();
        part = getPartForChapter(chapterNumber || 0);
      }
    }
  }

  // Extract subheadings (H3 and H4) for right sidebar Table of Contents
  const toc = [];
  let inCodeBlock = false;
  let currentSectionText = '';
  let currentH3 = null;

  for (const l of linesArr) {
    if (l.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
    }
    if (!inCodeBlock) {
      const h3Match = l.match(/^###\s+(.*)$/);
      if (h3Match) {
        const hTitle = h3Match[1].trim();
        const slug = slugify(hTitle);
        currentH3 = {
          level: 3,
          title: hTitle,
          slug: slug
        };
        toc.push(currentH3);
      }
      const h4Match = l.match(/^####\s+(.*)$/);
      if (h4Match) {
        const hTitle = h4Match[1].trim();
        toc.push({
          level: 4,
          title: hTitle,
          slug: slugify(hTitle)
        });
      }
    }
  }

  // Word count and reading time
  const words = fullMd.trim().split(/\s+/).length;
  const readTimeMin = Math.max(1, Math.round(words / 200));

  // Render markdown to HTML
  const html = marked.parse(fullMd);

  // Search indexing items
  searchIndex.push({
    chapterId: id,
    chapterTitle: title,
    heading: title,
    slug: '',
    partTitle: part.title,
    level: 2,
    snippet: fullMd.substring(0, 300).replace(/[#*`_]/g, '').trim()
  });

  // Index each H3 with surrounding text preview
  toc.filter(t => t.level === 3).forEach(t => {
    // Find text following this H3 up to next heading
    const h3Idx = linesArr.findIndex(l => l.includes(`### ${t.title}`) || l.includes(`### ${t.title.substring(0, 20)}`));
    let preview = '';
    if (h3Idx !== -1) {
      const slice = linesArr.slice(h3Idx + 1, h3Idx + 6).join(' ').replace(/[#*`_\[\]()]/g, ' ').replace(/\s+/g, ' ').trim();
      preview = slice.substring(0, 220);
    }
    searchIndex.push({
      chapterId: id,
      chapterTitle: title,
      heading: t.title,
      slug: t.slug,
      partTitle: part.title,
      level: 3,
      snippet: preview || `${title} > ${t.title}`
    });
  });

  chaptersData.push({
    id,
    number: chapterNumber,
    title,
    partId: part.partId,
    partTitle: part.title,
    partIcon: part.icon,
    wordCount: words,
    readTimeMin,
    toc,
    html
  });
});

console.log(`Successfully processed all ${chaptersData.length} chapters.`);
chaptersData.forEach((c, idx) => {
  console.log(`[${idx}] ${c.id}: "${c.title}" (${c.wordCount} words, ~${c.readTimeMin}m read, ${c.toc.length} subheadings)`);
});

// Output book data as JavaScript file
const bookDataContent = `// Auto-generated complete book data from markdown
window.BOOK_DATA = {
  meta: {
    title: "The Complete JavaScript, Node.js and Express.js Book",
    author: "@Albert Hackthon",
    date: "Nov 22, 2026",
    totalChapters: ${chaptersData.length},
    totalWords: ${chaptersData.reduce((acc, c) => acc + c.wordCount, 0)}
  },
  parts: ${JSON.stringify(partDefinitions, null, 2)},
  chapters: ${JSON.stringify(chaptersData)},
  searchIndex: ${JSON.stringify(searchIndex)}
};
`;

fs.writeFileSync(path.join(__dirname, 'book-data.js'), bookDataContent, 'utf8');
console.log(`Generated book-data.js (${(fs.statSync(path.join(__dirname, 'book-data.js')).size / 1024).toFixed(1)} KB)`);
