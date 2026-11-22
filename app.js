// ==========================================================================
// The Complete JavaScript, Node.js and Express.js Book - Interactive Reader
// ==========================================================================

(function() {
  'use strict';

  const data = window.BOOK_DATA;
  if (!data) {
    console.error('Book data not found!');
    return;
  }

  // State
  let currentChapter = null;
  let completedChapters = new Set();
  try {
    const saved = localStorage.getItem('fullstack_book_completed');
    if (saved) completedChapters = new Set(JSON.parse(saved));
  } catch (e) {}

  let currentTheme = localStorage.getItem('fullstack_book_theme') || 'dark';
  let fontSizes = ['15px', '16px', '18px', '20px'];
  let currentFontIdx = parseInt(localStorage.getItem('fullstack_book_font') || '1', 10);

  // DOM Elements
  const htmlEl = document.documentElement;
  const renderedContentEl = document.getElementById('renderedContent');
  const chapterMainTitleEl = document.getElementById('chapterMainTitle');
  const chapterPartPillEl = document.getElementById('chapterPartPill');
  const chapterReadTimeEl = document.getElementById('chapterReadTime');
  const chapterWordCountEl = document.getElementById('chapterWordCount');
  const breadcrumbPartEl = document.getElementById('breadcrumbPart');
  const breadcrumbChapterEl = document.getElementById('breadcrumbChapter');
  const markCompleteBtn = document.getElementById('markCompleteBtn');
  const markCompleteText = document.getElementById('markCompleteText');
  const prevChapterLink = document.getElementById('prevChapterLink');
  const prevChapterTitle = document.getElementById('prevChapterTitle');
  const nextChapterLink = document.getElementById('nextChapterLink');
  const nextChapterTitle = document.getElementById('nextChapterTitle');
  const sidebarTreeEl = document.getElementById('sidebarTree');
  const sidebarFilterInput = document.getElementById('sidebarFilterInput');
  const tocListEl = document.getElementById('tocList');
  const progressBarEl = document.getElementById('readingProgressBar');
  const overallProgressFill = document.getElementById('overallProgressFill');
  const readingStatsText = document.getElementById('readingStatsText');
  const searchModal = document.getElementById('searchModal');
  const searchInput = document.getElementById('searchInput');
  const searchResultsList = document.getElementById('searchResultsList');
  const searchResultsCount = document.getElementById('searchResultsCount');
  const searchTriggerBtn = document.getElementById('searchTriggerBtn');
  const closeSearchModalBtn = document.getElementById('closeSearchModalBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeMoonIcon = document.getElementById('themeMoonIcon');
  const themeSunIcon = document.getElementById('themeSunIcon');
  const fontSizeBtn = document.getElementById('fontSizeBtn');
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  const copyChapterLinkBtn = document.getElementById('copyChapterLinkBtn');
  const copyChapterLinkText = document.getElementById('copyChapterLinkText');
  const playgroundDrawer = document.getElementById('playgroundDrawer');
  const playgroundToggleBtn = document.getElementById('playgroundToggleBtn');
  const closePlaygroundBtn = document.getElementById('closePlaygroundBtn');
  const runCodeBtn = document.getElementById('runCodeBtn');
  const clearConsoleBtn = document.getElementById('clearConsoleBtn');
  const playgroundCode = document.getElementById('playgroundCode');
  const playgroundOutput = document.getElementById('playgroundOutput');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navSidebar = document.getElementById('navSidebar');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');

  // Initialize Theme
  function applyTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    currentTheme = theme;
    localStorage.setItem('fullstack_book_theme', theme);
    if (theme === 'dark') {
      themeMoonIcon.style.display = 'block';
      themeSunIcon.style.display = 'none';
    } else {
      themeMoonIcon.style.display = 'none';
      themeSunIcon.style.display = 'block';
    }
  }
  applyTheme(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  // Initialize Font Size
  function applyFontSize(idx) {
    currentFontIdx = idx % fontSizes.length;
    htmlEl.style.fontSize = fontSizes[currentFontIdx];
    localStorage.setItem('fullstack_book_font', currentFontIdx);
  }
  applyFontSize(currentFontIdx);

  fontSizeBtn.addEventListener('click', () => {
    applyFontSize(currentFontIdx + 1);
  });

  // Build Left Sidebar
  function renderSidebar() {
    sidebarTreeEl.innerHTML = '';

    data.parts.forEach(part => {
      const partGroup = document.createElement('div');
      partGroup.className = 'part-group';
      partGroup.setAttribute('data-part-id', part.partId);

      const partBtn = document.createElement('button');
      partBtn.type = 'button';
      partBtn.className = 'part-title-btn';
      partBtn.innerHTML = `
        <span>${part.icon || '📄'} ${part.title}</span>
        <svg class="part-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
      `;

      partBtn.addEventListener('click', () => {
        partGroup.classList.toggle('collapsed');
      });

      const chapterList = document.createElement('ul');
      chapterList.className = 'chapter-list';

      // Find chapters in this part
      const chaptersInPart = data.chapters.filter(c => {
        if (part.chapters.includes('preface') && c.id === 'preface') return true;
        if (part.chapters.includes('appendices') && c.id === 'appendices') return true;
        return part.chapters.includes(c.number);
      });

      chaptersInPart.forEach(ch => {
        const li = document.createElement('li');
        li.className = 'chapter-item';
        li.setAttribute('data-chapter-id', ch.id);

        const a = document.createElement('a');
        a.href = `#${ch.id}`;
        a.className = 'chapter-item-link';
        if (currentChapter && currentChapter.id === ch.id) {
          a.classList.add('active');
        }

        const badgeNum = ch.id === 'preface' ? '0' : (ch.id === 'appendices' ? 'App' : ch.number);
        const isDone = completedChapters.has(ch.id);

        a.innerHTML = `
          <span class="chapter-badge">${badgeNum}</span>
          <span class="chapter-title-text" title="${escapeHtml(ch.title)}">${escapeHtml(ch.title.replace(/^Chapter \d+:\s*/i, ''))}</span>
          <button class="chapter-check-btn ${isDone ? 'completed' : ''}" type="button" title="${isDone ? 'Completed' : 'Mark complete'}" data-check-id="${ch.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="${isDone ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </button>
        `;

        // Checkmark click handler
        const checkBtn = a.querySelector('.chapter-check-btn');
        checkBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleChapterCompleted(ch.id);
        });

        // Chapter link click handler
        a.addEventListener('click', () => {
          closeMobileSidebar();
        });

        li.appendChild(a);
        chapterList.appendChild(li);
      });

      partGroup.appendChild(partBtn);
      partGroup.appendChild(chapterList);
      sidebarTreeEl.appendChild(partGroup);
    });

    updateOverallProgress();
  }

  // Update Overall Progress
  function updateOverallProgress() {
    const total = data.chapters.length;
    const completedCount = completedChapters.size;
    const pct = Math.round((completedCount / total) * 100);
    overallProgressFill.style.width = `${pct}%`;
    readingStatsText.textContent = `${pct}% (${completedCount}/${total})`;
  }

  function toggleChapterCompleted(id) {
    if (completedChapters.has(id)) {
      completedChapters.delete(id);
    } else {
      completedChapters.add(id);
    }
    localStorage.setItem('fullstack_book_completed', JSON.stringify([...completedChapters]));

    // Update UI
    document.querySelectorAll(`[data-check-id="${id}"]`).forEach(btn => {
      const isDone = completedChapters.has(id);
      btn.className = `chapter-check-btn ${isDone ? 'completed' : ''}`;
      const svg = btn.querySelector('svg');
      if (svg) svg.setAttribute('fill', isDone ? 'currentColor' : 'none');
    });

    if (currentChapter && currentChapter.id === id) {
      updateMarkCompleteBtnState();
    }
    updateOverallProgress();
  }

  function updateMarkCompleteBtnState() {
    if (!currentChapter) return;
    const isDone = completedChapters.has(currentChapter.id);
    if (isDone) {
      markCompleteBtn.classList.add('completed');
      markCompleteText.textContent = 'Completed ✓';
    } else {
      markCompleteBtn.classList.remove('completed');
      markCompleteText.textContent = 'Mark as Completed';
    }
  }

  markCompleteBtn.addEventListener('click', () => {
    if (currentChapter) {
      toggleChapterCompleted(currentChapter.id);
    }
  });

  // Filter Chapters in Sidebar
  sidebarFilterInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    document.querySelectorAll('.chapter-item').forEach(item => {
      const text = item.textContent.toLowerCase();
      if (!q || text.includes(q)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });

    document.querySelectorAll('.part-group').forEach(group => {
      const visibleChapters = group.querySelectorAll('.chapter-item:not([style*="display: none"])');
      if (visibleChapters.length === 0 && q) {
        group.style.display = 'none';
      } else {
        group.style.display = 'flex';
      }
    });
  });

  // Copy Code Block Handler
  function setupCopyButtons() {
    renderedContentEl.querySelectorAll('.copy-code-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const wrapper = btn.closest('.code-block-wrapper');
        const codeEl = wrapper ? wrapper.querySelector('pre code') : null;
        if (!codeEl) return;
        const text = codeEl.innerText;
        navigator.clipboard.writeText(text).then(() => {
          btn.classList.add('copied');
          const copyText = btn.querySelector('.copy-text');
          if (copyText) copyText.textContent = 'Copied!';
          setTimeout(() => {
            btn.classList.remove('copied');
            if (copyText) copyText.textContent = 'Copy';
          }, 2000);
        }).catch(err => {
          console.error('Copy failed:', err);
        });
      });
    });
  }

  // Load and Render Chapter
  function loadChapter(id, subSlug) {
    let chapter = data.chapters.find(c => c.id === id);
    if (!chapter) {
      chapter = data.chapters[0]; // fallback to preface
      id = chapter.id;
    }

    currentChapter = chapter;

    // Header info
    chapterMainTitleEl.textContent = chapter.title;
    chapterPartPillEl.textContent = `${chapter.partIcon || '📄'} ${chapter.partTitle}`;
    chapterReadTimeEl.textContent = `~${chapter.readTimeMin} min read`;
    chapterWordCountEl.textContent = `${chapter.wordCount.toLocaleString()} words`;
    breadcrumbPartEl.textContent = chapter.partTitle;
    breadcrumbChapterEl.textContent = chapter.title.replace(/^Chapter \d+:\s*/i, '');

    // Mark complete button state
    updateMarkCompleteBtnState();

    // Render HTML content
    renderedContentEl.innerHTML = chapter.html;
    setupCopyButtons();

    // Update active state in sidebar
    document.querySelectorAll('.chapter-item-link').forEach(link => {
      link.classList.remove('active');
    });
    const activeLink = document.querySelector(`[data-chapter-id="${chapter.id}"] .chapter-item-link`);
    if (activeLink) {
      activeLink.classList.add('active');
      // Ensure parent part group is expanded
      const partGroup = activeLink.closest('.part-group');
      if (partGroup) partGroup.classList.remove('collapsed');
      // Scroll into view if needed
      activeLink.scrollIntoView({ block: 'nearest' });
    }

    // Previous & Next Chapter links
    const currentIdx = data.chapters.findIndex(c => c.id === chapter.id);
    if (currentIdx > 0) {
      const prevCh = data.chapters[currentIdx - 1];
      prevChapterLink.href = `#${prevCh.id}`;
      prevChapterTitle.textContent = prevCh.title;
      prevChapterLink.style.visibility = 'visible';
    } else {
      prevChapterLink.style.visibility = 'hidden';
    }

    if (currentIdx < data.chapters.length - 1) {
      const nextCh = data.chapters[currentIdx + 1];
      nextChapterLink.href = `#${nextCh.id}`;
      nextChapterTitle.textContent = nextCh.title;
      nextChapterLink.style.visibility = 'visible';
    } else {
      nextChapterLink.style.visibility = 'hidden';
    }

    // Build right sidebar Table of Contents ("On This Page")
    renderTableOfContents(chapter);

    // Scroll to section or top
    if (subSlug) {
      setTimeout(() => {
        const target = document.getElementById(subSlug);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }

  // Right Sidebar "On This Page"
  function renderTableOfContents(chapter) {
    tocListEl.innerHTML = '';
    if (!chapter.toc || chapter.toc.length === 0) {
      tocListEl.innerHTML = '<li class="toc-item-link" style="color:var(--text-muted);font-style:italic;">Chapter overview</li>';
      return;
    }

    chapter.toc.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `#${chapter.id}/${item.slug}`;
      a.className = `toc-item-link level-${item.level}`;
      a.setAttribute('data-target-slug', item.slug);
      a.textContent = item.title;

      a.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById(item.slug);
        if (target) {
          window.location.hash = `${chapter.id}/${item.slug}`;
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });

      li.appendChild(a);
      tocListEl.appendChild(li);
    });
  }

  // Scroll Spy & Top Progress Bar
  window.addEventListener('scroll', () => {
    // Top reading progress bar
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0) {
      const scrolled = (window.scrollY / docHeight) * 100;
      progressBarEl.style.width = `${Math.min(100, Math.max(0, scrolled))}%`;
    }

    // Scroll spy on headings
    const headings = renderedContentEl.querySelectorAll('h2, h3, h4');
    let activeId = null;
    const scrollPos = window.scrollY + 120;

    headings.forEach(h => {
      if (h.offsetTop <= scrollPos) {
        activeId = h.id;
      }
    });

    if (activeId) {
      document.querySelectorAll('.toc-item-link').forEach(link => {
        if (link.getAttribute('data-target-slug') === activeId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });

  // Action Buttons
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  copyChapterLinkBtn.addEventListener('click', () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      copyChapterLinkText.textContent = 'Link Copied!';
      setTimeout(() => {
        copyChapterLinkText.textContent = 'Copy chapter link';
      }, 2000);
    });
  });

  // Hash Routing
  function handleRoute() {
    let hash = window.location.hash.replace(/^#/, '').trim();
    if (!hash) {
      hash = 'preface';
    }

    let chapterId = hash;
    let subSlug = '';

    if (hash.includes('/')) {
      const parts = hash.split('/');
      chapterId = parts[0];
      subSlug = parts[1];
    } else {
      // Check if hash matches a known chapter
      const matched = data.chapters.find(c => c.id === hash);
      if (!matched) {
        // Maybe it's a section anchor in current chapter
        const anchorEl = document.getElementById(hash);
        if (anchorEl) {
          anchorEl.scrollIntoView({ behavior: 'smooth' });
          return;
        }
        chapterId = 'preface';
      }
    }

    loadChapter(chapterId, subSlug);
  }

  window.addEventListener('hashchange', handleRoute);

  // Search Modal Logic
  function openSearchModal() {
    searchModal.classList.add('open');
    searchInput.value = '';
    renderSearchResults('');
    setTimeout(() => searchInput.focus(), 50);
  }

  function closeSearchModal() {
    searchModal.classList.remove('open');
  }

  searchTriggerBtn.addEventListener('click', openSearchModal);
  closeSearchModalBtn.addEventListener('click', closeSearchModal);

  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) closeSearchModal();
  });

  searchInput.addEventListener('input', (e) => {
    renderSearchResults(e.target.value.trim());
  });

  let selectedResultIdx = 0;

  function renderSearchResults(query) {
    searchResultsList.innerHTML = '';
    selectedResultIdx = 0;

    if (!query) {
      searchResultsCount.textContent = 'Type to search over 65,000 words';
      // Suggest first 5 chapters
      data.chapters.slice(0, 5).forEach((ch, idx) => {
        const item = createResultItem(ch.id, '', ch.title, `Chapter overview (${ch.readTimeMin} min read)`, ch.partTitle, '');
        if (idx === 0) item.classList.add('selected');
        searchResultsList.appendChild(item);
      });
      return;
    }

    const qLower = query.toLowerCase();
    const matches = [];

    // Search through search index
    for (const item of data.searchIndex) {
      const headingMatch = item.heading.toLowerCase().includes(qLower);
      const snippetMatch = item.snippet.toLowerCase().includes(qLower);

      if (headingMatch || snippetMatch) {
        matches.push({
          chapterId: item.chapterId,
          slug: item.slug,
          heading: item.heading,
          snippet: item.snippet,
          partTitle: item.partTitle,
          score: headingMatch ? 10 : 1
        });
      }
      if (matches.length >= 25) break;
    }

    matches.sort((a, b) => b.score - a.score);
    const finalResults = matches.slice(0, 15);

    searchResultsCount.textContent = `${matches.length} result${matches.length === 1 ? '' : 's'} found`;

    if (finalResults.length === 0) {
      searchResultsList.innerHTML = '<div style="padding:24px;text-align:center;color:var(--text-muted);">No matching topics or code found for "' + escapeHtml(query) + '"</div>';
      return;
    }

    finalResults.forEach((res, idx) => {
      const itemEl = createResultItem(res.chapterId, res.slug, res.heading, res.snippet, res.partTitle, query);
      if (idx === 0) itemEl.classList.add('selected');
      searchResultsList.appendChild(itemEl);
    });
  }

  function createResultItem(chapterId, slug, title, snippet, partTitle, query) {
    const a = document.createElement('a');
    a.className = 'search-result-item';
    a.href = slug ? `#${chapterId}/${slug}` : `#${chapterId}`;

    const highlightedTitle = highlightMatch(title, query);
    const highlightedSnippet = highlightMatch(snippet, query);

    a.innerHTML = `
      <div class="result-item-header">
        <span class="result-part-tag">${escapeHtml(partTitle)}</span>
      </div>
      <div class="result-title">${highlightedTitle}</div>
      <div class="result-snippet">${highlightedSnippet}</div>
    `;

    a.addEventListener('click', () => {
      closeSearchModal();
    });

    return a;
  }

  function highlightMatch(text, query) {
    if (!query) return escapeHtml(text);
    const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${safeQuery})`, 'gi');
    return escapeHtml(text).replace(new RegExp(`(${escapeRegex(escapeHtml(query))})`, 'gi'), '<mark>$1</mark>');
  }

  function escapeRegex(string) {
    return string.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  // Keyboard navigation inside search modal
  searchInput.addEventListener('keydown', (e) => {
    const items = searchResultsList.querySelectorAll('.search-result-item');
    if (items.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedResultIdx = (selectedResultIdx + 1) % items.length;
      updateSelectedSearchItem(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedResultIdx = (selectedResultIdx - 1 + items.length) % items.length;
      updateSelectedSearchItem(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (items[selectedResultIdx]) {
        items[selectedResultIdx].click();
      }
    }
  });

  function updateSelectedSearchItem(items) {
    items.forEach((it, i) => {
      if (i === selectedResultIdx) {
        it.classList.add('selected');
        it.scrollIntoView({ block: 'nearest' });
      } else {
        it.classList.remove('selected');
      }
    });
  }

  // Global Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    // Ctrl+K or Cmd+K: Open search
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearchModal();
      return;
    }

    // '/' opens search when not in input
    if (e.key === '/' && document.activeElement !== searchInput && document.activeElement !== playgroundCode) {
      e.preventDefault();
      openSearchModal();
      return;
    }

    // Escape closes modals
    if (e.key === 'Escape') {
      closeSearchModal();
      closePlayground();
      closeMobileSidebar();
      return;
    }

    // Arrow navigation for chapters (when not typing)
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    if (e.key === 'ArrowLeft') {
      if (prevChapterLink.style.visibility !== 'hidden') {
        prevChapterLink.click();
      }
    } else if (e.key === 'ArrowRight') {
      if (nextChapterLink.style.visibility !== 'hidden') {
        nextChapterLink.click();
      }
    }
  });

  // Mobile Menu Drawer
  function openMobileSidebar() {
    navSidebar.classList.add('open');
    sidebarBackdrop.classList.add('open');
  }

  function closeMobileSidebar() {
    navSidebar.classList.remove('open');
    sidebarBackdrop.classList.remove('open');
  }

  mobileMenuToggle.addEventListener('click', openMobileSidebar);
  sidebarBackdrop.addEventListener('click', closeMobileSidebar);

  // JavaScript Playground Runner
  function openPlayground() {
    playgroundDrawer.classList.add('open');
    playgroundCode.focus();
  }

  function closePlayground() {
    playgroundDrawer.classList.remove('open');
  }

  playgroundToggleBtn.addEventListener('click', () => {
    if (playgroundDrawer.classList.contains('open')) {
      closePlayground();
    } else {
      openPlayground();
    }
  });

  closePlaygroundBtn.addEventListener('click', closePlayground);

  clearConsoleBtn.addEventListener('click', () => {
    playgroundOutput.innerHTML = '<div class="console-entry log">Console cleared.</div>';
  });

  function logToPlayground(type, ...args) {
    const entry = document.createElement('div');
    entry.className = `console-entry ${type}`;
    const formatted = args.map(arg => {
      if (typeof arg === 'object' && arg !== null) {
        try { return JSON.stringify(arg, null, 2); } catch (e) { return String(arg); }
      }
      return String(arg);
    }).join(' ');

    entry.textContent = `[${new Date().toLocaleTimeString()}] ${formatted}`;
    playgroundOutput.appendChild(entry);
    playgroundOutput.scrollTop = playgroundOutput.scrollHeight;
  }

  function runPlaygroundCode() {
    const code = playgroundCode.value;
    logToPlayground('log', '--- Executing script ---');

    // Create sandbox console
    const customConsole = {
      log: (...args) => logToPlayground('log', ...args),
      warn: (...args) => logToPlayground('warn', ...args),
      error: (...args) => logToPlayground('error', ...args),
      info: (...args) => logToPlayground('log', ...args),
      table: (...args) => logToPlayground('log', ...args)
    };

    try {
      // Async function wrapper to allow top-level await
      const wrapped = new Function('console', `
        return (async () => {
          ${code}
        })();
      `);
      
      const result = wrapped(customConsole);
      if (result && typeof result.then === 'function') {
        result.then(val => {
          if (val !== undefined) {
            logToPlayground('return', 'Return value: ' + (typeof val === 'object' ? JSON.stringify(val) : val));
          }
        }).catch(err => {
          logToPlayground('error', 'Runtime Error: ' + err.message);
        });
      }
    } catch (err) {
      logToPlayground('error', 'Syntax/Execution Error: ' + err.message);
    }
  }

  runCodeBtn.addEventListener('click', runPlaygroundCode);

  playgroundCode.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      runPlaygroundCode();
    }
  });

  function escapeHtml(str) {
    return (str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Initial startup
  renderSidebar();
  handleRoute();

})();
