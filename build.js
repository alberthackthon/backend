const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const hljs = require('highlight.js');

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

// Fixed table renderer for marked v15 - no [object Object]!
renderer.table = function(token) {
  const tableHtml = marked.Renderer.prototype.table.call(this, token);
  return `<div class="table-responsive">${tableHtml.replace('<table>', '<table class="book-table">')}</div>`;
};

renderer.blockquote = function({ text }) {
  return `<blockquote class="book-callout">${text}</blockquote>`;
};

marked.use({ renderer, gfm: true, breaks: false });

const bookConfigs = [
  {
    id: 'book-1',
    title: 'The Complete JavaScript, Node.js and Express.js Book',
    shortTitle: 'JavaScript & Node.js',
    subtitle: 'From zero to full-stack web applications',
    icon: 'JS',
    badge: 'Book 1',
    accentColor: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b, #ea580c)',
    filename: 'The Complete JavaScript, Node.js and Express.js Book.md',
    parts: [
      { partId: 'preface', title: 'Introduction & Overview', icon: '📖', chapters: ['preface'] },
      { partId: 'part-1', title: 'Part 1: Foundations', icon: '🧱', chapters: [1, 2] },
      { partId: 'part-2', title: 'Part 2: JavaScript Language', icon: '⚡', chapters: [3, 4, 5, 6, 7] },
      { partId: 'part-3', title: 'Part 3: JavaScript in the Browser', icon: '🌐', chapters: [8, 9, 10, 11, 12, 13] },
      { partId: 'part-4', title: 'Part 4: Node.js', icon: '🟢', chapters: [14, 15, 16] },
      { partId: 'part-5', title: 'Part 5: Express.js & The Backend', icon: '🚀', chapters: [17, 18, 19, 20, 21, 22, 23, 24, 25] },
      { partId: 'part-6', title: 'Part 6: Capstone & Launch', icon: '🏆', chapters: [26, 27, 28] },
      { partId: 'appendices', title: 'Appendices & Reference', icon: '📚', chapters: ['appendices'] }
    ]
  },
  {
    id: 'book-2',
    title: 'The Complete TypeScript, React.js and Next.js Book',
    shortTitle: 'TypeScript, React & Next.js',
    subtitle: 'From fundamentals to production Next.js apps',
    icon: 'TS',
    badge: 'Book 2',
    accentColor: '#38bdf8',
    gradient: 'linear-gradient(135deg, #0284c7, #2563eb)',
    filename: 'The Complete TypeScript, React.js and Next.js Book.md',
    parts: [
      { partId: 'preface', title: 'Introduction & Overview', icon: '📖', chapters: ['preface'] },
      { partId: 'part-1', title: 'Part 1: TypeScript', icon: '🔷', chapters: [1, 2, 3, 4, 5] },
      { partId: 'part-2', title: 'Part 2: React', icon: '⚛️', chapters: [6, 7, 8, 9, 10, 11, 12, 13] },
      { partId: 'part-3', title: 'Part 3: Next.js', icon: '▲', chapters: [14, 15, 16, 17, 18, 19, 20, 21, 22] },
      { partId: 'part-4', title: 'Part 4: Capstone & Growth', icon: '🏆', chapters: [23, 24] },
      { partId: 'appendices', title: 'Appendices & Reference', icon: '📚', chapters: ['appendices'] }
    ]
  }
];

function getPartForChapter(partDefs, num) {
  for (const part of partDefs) {
    if (part.chapters.includes(num)) {
      return part;
    }
  }
  return { partId: 'general', title: 'General', icon: '📄' };
}

const allBooksData = [];
const globalSearchIndex = [];

bookConfigs.forEach(bookCfg => {
  const filePath = path.join(__dirname, bookCfg.filename);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }

  const rawMd = fs.readFileSync(filePath, 'utf8');
  const allLines = rawMd.split(/\r?\n/);
  console.log(`\nProcessing ${bookCfg.title}: ${allLines.length} lines, ${rawMd.length} chars...`);

  // Split into chapters
  let inCode = false;
  const rawChapters = [];
  let currentLines = [];

  for (let i = 0; i < allLines.length; i++) {
    const line = allLines[i];
    if (line.trim().startsWith('```')) {
      inCode = !inCode;
    }

    // A chapter starts if:
    // 1. Line starts with "# Part " (which introduces a chapter in Book 2)
    // 2. Line starts with "## Chapter " and previous line wasn't "# Part "
    // 3. Line starts with "## Appendices"
    const isPartHeader = !inCode && line.startsWith('# Part ');
    const isChapterHeader = !inCode && line.startsWith('## Chapter ');
    const isAppendicesHeader = !inCode && line.startsWith('## Appendices');

    let isStart = false;
    if (isPartHeader && i > 0) {
      isStart = true;
    } else if (isChapterHeader && i > 0) {
      // Check if currentLines ended with # Part
      const lastLine = currentLines.filter(l => l.trim().length > 0).slice(-1)[0];
      if (!lastLine || !lastLine.startsWith('# Part ')) {
        isStart = true;
      }
    } else if (isAppendicesHeader && i > 0) {
      isStart = true;
    }

    if (isStart) {
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
  console.log(`[${bookCfg.id}] Line verification: ${sumLines} / ${allLines.length}`);
  if (sumLines !== allLines.length) {
    throw new Error(`Line count mismatch in ${bookCfg.id}! Sum: ${sumLines}, Original: ${allLines.length}`);
  }

  const chaptersData = [];

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
      part = getPartForChapter(bookCfg.parts, 'preface');
    } else {
      // Find the first line with ##
      const h2Line = linesArr.find(l => l.startsWith('## ')) || linesArr[0];
      const cleanH2 = h2Line.trim();
      if (cleanH2.includes('Appendices')) {
        id = 'appendices';
        title = 'Appendices';
        chapterNumber = 99;
        part = getPartForChapter(bookCfg.parts, 'appendices');
      } else {
        const headingMatch = cleanH2.match(/^##\s+Chapter\s+(\d+):\s*(.*)$/i);
        if (headingMatch) {
          chapterNumber = parseInt(headingMatch[1], 10);
          id = `chapter-${chapterNumber}`;
          title = cleanH2.replace(/^##\s+/, '').trim();
          part = getPartForChapter(bookCfg.parts, chapterNumber);
        } else {
          id = slugify(cleanH2.replace(/^##\s+/, ''));
          title = cleanH2.replace(/^##\s+/, '').trim();
          part = getPartForChapter(bookCfg.parts, chapterNumber || 0);
        }
      }
    }

    // Extract subheadings for TOC
    const toc = [];
    let inCodeBlock = false;
    for (const l of linesArr) {
      if (l.trim().startsWith('```')) {
        inCodeBlock = !inCodeBlock;
      }
      if (!inCodeBlock) {
        const h3Match = l.match(/^###\s+(.*)$/);
        if (h3Match) {
          const hTitle = h3Match[1].trim();
          toc.push({
            level: 3,
            title: hTitle,
            slug: slugify(hTitle)
          });
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

    const words = fullMd.trim().split(/\s+/).length;
    const readTimeMin = Math.max(1, Math.round(words / 200));

    // Render markdown to HTML
    const html = marked.parse(fullMd);

    // Search Indexing
    globalSearchIndex.push({
      bookId: bookCfg.id,
      bookTitle: bookCfg.shortTitle,
      chapterId: id,
      chapterTitle: title,
      heading: title,
      slug: '',
      partTitle: part.title,
      level: 2,
      snippet: fullMd.substring(0, 300).replace(/[#*`_]/g, '').trim()
    });

    toc.filter(t => t.level === 3).forEach(t => {
      const h3Idx = linesArr.findIndex(l => l.includes(`### ${t.title}`) || l.includes(`### ${t.title.substring(0, 20)}`));
      let preview = '';
      if (h3Idx !== -1) {
        const slice = linesArr.slice(h3Idx + 1, h3Idx + 6).join(' ').replace(/[#*`_\[\]()]/g, ' ').replace(/\s+/g, ' ').trim();
        preview = slice.substring(0, 220);
      }
      globalSearchIndex.push({
        bookId: bookCfg.id,
        bookTitle: bookCfg.shortTitle,
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

  allBooksData.push({
    ...bookCfg,
    totalChapters: chaptersData.length,
    totalWords: chaptersData.reduce((acc, c) => acc + c.wordCount, 0),
    chapters: chaptersData
  });
});

console.log(`\nAll books processed successfully: ${allBooksData.length} books, ${globalSearchIndex.length} search entries.`);
allBooksData.forEach(b => {
  console.log(`- ${b.title}: ${b.totalChapters} chapters, ${b.totalWords.toLocaleString()} words`);
});

// Output comprehensive book-data.js
const bookDataContent = `// Auto-generated complete multi-book data
window.BOOKS_DATA = {
  books: ${JSON.stringify(allBooksData)},
  searchIndex: ${JSON.stringify(globalSearchIndex)}
};

// Backwards compatibility for single-book readers
window.BOOK_DATA = window.BOOKS_DATA.books[0];
`;

fs.writeFileSync(path.join(__dirname, 'book-data.js'), bookDataContent, 'utf8');
console.log(`Generated book-data.js (${(fs.statSync(path.join(__dirname, 'book-data.js')).size / (1024 * 1024)).toFixed(2)} MB)`);
