// ==========================================================================
// The Fullstack Developer Bookshelf - Multi-Book Interactive Reader
// ==========================================================================

(function() {
  'use strict';

  const multiData = window.BOOKS_DATA || { books: [window.BOOK_DATA], searchIndex: [] };
  const books = multiData.books;
  const searchIndex = multiData.searchIndex;

  if (!books || books.length === 0) {
    console.error('Books data not found!');
    return;
  }

  // State
  let currentBookId = localStorage.getItem('fullstack_active_book') || 'book-1';
  let currentBook = books.find(b => b.id === currentBookId) || books[0];
  let currentChapter = null;

  // Completed chapters stored per book
  function getCompletedSet(bookId) {
    try {
      const saved = localStorage.getItem(`fullstack_book_completed_${bookId}`);
      if (saved) return new Set(JSON.parse(saved));
    } catch (e) {}
    return new Set();
  }

  function saveCompletedSet(bookId, set) {
    localStorage.setItem(`fullstack_book_completed_${bookId}`, JSON.stringify([...set]));
  }

  let completedChapters = getCompletedSet(currentBook.id);

  // Theme & Font
  let currentTheme = localStorage.getItem('fullstack_book_theme') || 'dark';
  const fontSizes = ['15px', '16px', '18px', '20px'];
  let currentFontIdx = parseInt(localStorage.getItem('fullstack_book_font') || '1', 10);

  // Search Filter State ('all' | 'book-1' | 'book-2')
  let currentSearchFilter = 'all';

  // DOM Elements
  const htmlEl = document.documentElement;
  const renderedContentEl = document.getElementById('renderedContent');
  const chapterMainTitleEl = document.getElementById('chapterMainTitle');
  const chapterPartPillEl = document.getElementById('chapterPartPill');
  const chapterReadTimeEl = document.getElementById('chapterReadTime');
  const chapterWordCountEl = document.getElementById('chapterWordCount');
  const breadcrumbBookEl = document.getElementById('breadcrumbBook');
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
  const activeBookBadge = document.getElementById('activeBookBadge');
  const activeBookTitle = document.getElementById('activeBookTitle');
  const brandIcon = document.getElementById('brandIcon');
  const brandTitle = document.getElementById('brandTitle');
  const bookSwitcher = document.getElementById('bookSwitcher');
  const tocListEl = document.getElementById('tocList');
  const progressBarEl = document.getElementById('readingProgressBar');
  const overallProgressFill = document.getElementById('overallProgressFill');
  const readingStatsText = document.getElementById('readingStatsText');
  const searchModal = document.getElementById('searchModal');
  const searchInput = document.getElementById('searchInput');
  const searchResultsList = document.getElementById('searchResultsList');
  const searchResultsCount = document.getElementById('searchResultsCount');
  const searchFilterTabs = document.getElementById('searchFilterTabs');
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
  const templateSelect = document.getElementById('templateSelect');
  const playgroundCode = document.getElementById('playgroundCode');
  const playgroundOutput = document.getElementById('playgroundOutput');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navSidebar = document.getElementById('navSidebar');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');

  // Theme Management
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

  // Font Size
  function applyFontSize(idx) {
    currentFontIdx = idx % fontSizes.length;
    htmlEl.style.fontSize = fontSizes[currentFontIdx];
    localStorage.setItem('fullstack_book_font', currentFontIdx);
  }
  applyFontSize(currentFontIdx);

  fontSizeBtn.addEventListener('click', () => {
    applyFontSize(currentFontIdx + 1);
  });

  // Switch Active Book
  function switchBook(bookId, targetChapterId, subSlug) {
    const targetBook = books.find(b => b.id === bookId);
    if (!targetBook) return;

    currentBookId = bookId;
    currentBook = targetBook;
    completedChapters = getCompletedSet(currentBookId);
    localStorage.setItem('fullstack_active_book', currentBookId);

    // Update Header Switcher Tabs
    if (bookSwitcher) {
      bookSwitcher.querySelectorAll('.book-tab').forEach(tab => {
        const isSelected = tab.getAttribute('data-book-id') === currentBookId;
        tab.classList.toggle('active', isSelected);
        tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      });
    }

    // Update Branding
    if (brandIcon) {
      brandIcon.textContent = currentBook.icon || 'JS';
      brandIcon.style.background = currentBook.gradient || 'linear-gradient(135deg, #f59e0b, #ea580c)';
    }
    if (activeBookBadge) activeBookBadge.textContent = currentBook.badge || 'Active Book';
    if (activeBookTitle) activeBookTitle.textContent = currentBook.shortTitle || currentBook.title;

    // Render new sidebar
    renderSidebar();

    // Load chapter
    const chId = targetChapterId || 'preface';
    loadChapter(chId, subSlug);
  }

  // Header Book Switcher Click
  if (bookSwitcher) {
    bookSwitcher.querySelectorAll('.book-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const bId = tab.getAttribute('data-book-id');
        if (bId !== currentBookId) {
          window.location.hash = `${bId}/preface`;
        }
      });
    });
  }

  // Render Left Navigation Sidebar
  function renderSidebar() {
    sidebarTreeEl.innerHTML = '';

    currentBook.parts.forEach(part => {
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
      const chaptersInPart = currentBook.chapters.filter(c => {
        if (part.chapters.includes('preface') && c.id === 'preface') return true;
        if (part.chapters.includes('appendices') && c.id === 'appendices') return true;
        return part.chapters.includes(c.number);
      });

      chaptersInPart.forEach(ch => {
        const li = document.createElement('li');
        li.className = 'chapter-item';
        li.setAttribute('data-chapter-id', ch.id);

        const a = document.createElement('a');
        a.href = `#${currentBook.id}/${ch.id}`;
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

  // Update Overall Progress for Active Book
  function updateOverallProgress() {
    const total = currentBook.chapters.length;
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
    saveCompletedSet(currentBook.id, completedChapters);

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
    let chapter = currentBook.chapters.find(c => c.id === id);
    if (!chapter) {
      chapter = currentBook.chapters[0];
      id = chapter.id;
    }

    currentChapter = chapter;

    // Header info & breadcrumbs
    chapterMainTitleEl.textContent = chapter.title;
    chapterPartPillEl.textContent = `${chapter.partIcon || '📄'} ${chapter.partTitle}`;
    chapterReadTimeEl.textContent = `~${chapter.readTimeMin} min read`;
    chapterWordCountEl.textContent = `${chapter.wordCount.toLocaleString()} words`;
    breadcrumbBookEl.textContent = currentBook.badge + ': ' + currentBook.shortTitle;
    breadcrumbBookEl.href = `#${currentBook.id}/preface`;
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
      const partGroup = activeLink.closest('.part-group');
      if (partGroup) partGroup.classList.remove('collapsed');
      activeLink.scrollIntoView({ block: 'nearest' });
    }

    // Previous & Next Chapter links
    const currentIdx = currentBook.chapters.findIndex(c => c.id === chapter.id);
    if (currentIdx > 0) {
      const prevCh = currentBook.chapters[currentIdx - 1];
      prevChapterLink.href = `#${currentBook.id}/${prevCh.id}`;
      prevChapterTitle.textContent = prevCh.title;
      prevChapterLink.style.visibility = 'visible';
    } else {
      prevChapterLink.style.visibility = 'hidden';
    }

    if (currentIdx < currentBook.chapters.length - 1) {
      const nextCh = currentBook.chapters[currentIdx + 1];
      nextChapterLink.href = `#${currentBook.id}/${nextCh.id}`;
      nextChapterTitle.textContent = nextCh.title;
      nextChapterLink.style.visibility = 'visible';
    } else {
      nextChapterLink.style.visibility = 'hidden';
    }

    // Right Sidebar TOC
    renderTableOfContents(chapter);

    // Scroll to sub-section or top
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
      a.href = `#${currentBook.id}/${chapter.id}/${item.slug}`;
      a.className = `toc-item-link level-${item.level}`;
      a.setAttribute('data-target-slug', item.slug);
      a.textContent = item.title;

      a.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById(item.slug);
        if (target) {
          window.location.hash = `${currentBook.id}/${chapter.id}/${item.slug}`;
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });

      li.appendChild(a);
      tocListEl.appendChild(li);
    });
  }

  // Scroll Spy & Top Progress Bar
  window.addEventListener('scroll', () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0) {
      const scrolled = (window.scrollY / docHeight) * 100;
      progressBarEl.style.width = `${Math.min(100, Math.max(0, scrolled))}%`;
    }

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

  // Comprehensive Hash Routing
  function handleRoute() {
    let hash = window.location.hash.replace(/^#/, '').trim();
    if (!hash) {
      hash = `${currentBookId}/preface`;
    }

    const segments = hash.split('/');
    let targetBookId = currentBookId;
    let targetChapterId = 'preface';
    let targetSubSlug = '';

    if (segments[0].startsWith('book-')) {
      targetBookId = segments[0];
      targetChapterId = segments[1] || 'preface';
      targetSubSlug = segments[2] || '';
    } else {
      // Backwards compatible format: #chapter-1 or #preface
      targetChapterId = segments[0];
      targetSubSlug = segments[1] || '';
    }

    if (targetBookId !== currentBookId) {
      switchBook(targetBookId, targetChapterId, targetSubSlug);
    } else {
      loadChapter(targetChapterId, targetSubSlug);
    }
  }

  window.addEventListener('hashchange', handleRoute);

  // Search Modal
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

  // Search Filter Tabs
  if (searchFilterTabs) {
    searchFilterTabs.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        searchFilterTabs.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentSearchFilter = tab.getAttribute('data-filter');
        renderSearchResults(searchInput.value.trim());
      });
    });
  }

  searchInput.addEventListener('input', (e) => {
    renderSearchResults(e.target.value.trim());
  });

  let selectedResultIdx = 0;

  function renderSearchResults(query) {
    searchResultsList.innerHTML = '';
    selectedResultIdx = 0;

    let pool = searchIndex;
    if (currentSearchFilter !== 'all') {
      pool = searchIndex.filter(item => item.bookId === currentSearchFilter);
    }

    if (!query) {
      searchResultsCount.textContent = `Search over ${pool.length} indexed topics`;
      // Sample suggestions
      pool.slice(0, 6).forEach((item, idx) => {
        const itemEl = createResultItem(item.bookId, item.chapterId, item.slug, item.heading, item.snippet, item.partTitle, item.bookTitle, '');
        if (idx === 0) itemEl.classList.add('selected');
        searchResultsList.appendChild(itemEl);
      });
      return;
    }

    const qLower = query.toLowerCase();
    const matches = [];

    for (const item of pool) {
      const headingMatch = item.heading.toLowerCase().includes(qLower);
      const snippetMatch = item.snippet.toLowerCase().includes(qLower);

      if (headingMatch || snippetMatch) {
        matches.push({
          bookId: item.bookId,
          bookTitle: item.bookTitle,
          chapterId: item.chapterId,
          slug: item.slug,
          heading: item.heading,
          snippet: item.snippet,
          partTitle: item.partTitle,
          score: headingMatch ? 10 : 1
        });
      }
      if (matches.length >= 35) break;
    }

    matches.sort((a, b) => b.score - a.score);
    const finalResults = matches.slice(0, 20);

    searchResultsCount.textContent = `${matches.length} result${matches.length === 1 ? '' : 's'} found`;

    if (finalResults.length === 0) {
      searchResultsList.innerHTML = '<div style="padding:24px;text-align:center;color:var(--text-muted);">No matching topics or code found for "' + escapeHtml(query) + '"</div>';
      return;
    }

    finalResults.forEach((res, idx) => {
      const itemEl = createResultItem(res.bookId, res.chapterId, res.slug, res.heading, res.snippet, res.partTitle, res.bookTitle, query);
      if (idx === 0) itemEl.classList.add('selected');
      searchResultsList.appendChild(itemEl);
    });
  }

  function createResultItem(bookId, chapterId, slug, title, snippet, partTitle, bookTitle, query) {
    const a = document.createElement('a');
    a.className = 'search-result-item';
    a.href = slug ? `#${bookId}/${chapterId}/${slug}` : `#${bookId}/${chapterId}`;

    const highlightedTitle = highlightMatch(title, query);
    const highlightedSnippet = highlightMatch(snippet, query);
    const tagClass = bookId === 'book-2' ? 'tag-book-2' : 'tag-book-1';

    a.innerHTML = `
      <div class="result-item-header">
        <span class="result-book-tag ${tagClass}">${escapeHtml(bookTitle || bookId)}</span>
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
    return escapeHtml(text).replace(new RegExp(`(${escapeRegex(escapeHtml(query))})`, 'gi'), '<mark>$1</mark>');
  }

  function escapeRegex(string) {
    return string.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  // Keyboard navigation inside search
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
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearchModal();
      return;
    }

    if (e.key === '/' && document.activeElement !== searchInput && document.activeElement !== playgroundCode) {
      e.preventDefault();
      openSearchModal();
      return;
    }

    if (e.key === 'Escape') {
      closeSearchModal();
      closePlayground();
      closeMobileSidebar();
      return;
    }

    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

    if (e.key === 'ArrowLeft') {
      if (prevChapterLink.style.visibility !== 'hidden') prevChapterLink.click();
    } else if (e.key === 'ArrowRight') {
      if (nextChapterLink.style.visibility !== 'hidden') nextChapterLink.click();
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

  // Playground Templates
  const playgroundTemplates = {
    'js-basics': `// Modern JavaScript Demo
const numbers = [10, 25, 40, 55, 70];
const doubled = numbers.map(n => n * 2);
console.log('Original numbers:', numbers);
console.log('Doubled:', doubled);

// Async / Promise demo
const fetchStatus = async () => {
  return new Promise(res => setTimeout(() => res({ status: 200, ok: true }), 400));
};

console.log('Awaiting status...');
const res = await fetchStatus();
console.log('Status result:', res);`,

    'ts-types': `// TypeScript / Type-Checking Simulation
// Note: Browsers run JS; this playground executes valid JS/TS constructs!
interface User {
  id: number;
  name: string;
  role: 'admin' | 'student';
}

const user = {
  id: 1,
  name: 'Albert',
  role: 'admin'
};

function formatUser(u) {
  return \`[\${u.role.toUpperCase()}] \${u.name} (#\${u.id})\`;
}

console.log(formatUser(user));`,

    'react-state': `// React State Logic Simulation
function createStore(initial) {
  let state = initial;
  const listeners = [];
  return {
    getState: () => state,
    setState: (updater) => {
      state = typeof updater === 'function' ? updater(state) : updater;
      listeners.forEach(fn => fn(state));
    },
    subscribe: (fn) => listeners.push(fn)
  };
}

const counterStore = createStore({ count: 0 });
counterStore.subscribe(s => console.log('State updated:', s));

counterStore.setState(s => ({ count: s.count + 1 }));
counterStore.setState(s => ({ count: s.count + 5 }));`,

    'custom': `// Write your own code here!\nconsole.log('Hello from Playground!');\n`
  };

  if (templateSelect) {
    templateSelect.addEventListener('change', (e) => {
      const code = playgroundTemplates[e.target.value];
      if (code) playgroundCode.value = code;
    });
  }

  // Playground Drawer
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
    logToPlayground('log', '--- Running script ---');

    const customConsole = {
      log: (...args) => logToPlayground('log', ...args),
      warn: (...args) => logToPlayground('warn', ...args),
      error: (...args) => logToPlayground('error', ...args),
      info: (...args) => logToPlayground('log', ...args),
      table: (...args) => logToPlayground('log', ...args)
    };

    try {
      const wrapped = new Function('console', `
        return (async () => {
          ${code}
        })();
      `);
      
      const result = wrapped(customConsole);
      if (result && typeof result.then === 'function') {
        result.then(val => {
          if (val !== undefined) {
            logToPlayground('return', 'Returned: ' + (typeof val === 'object' ? JSON.stringify(val) : val));
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

  // Initial Boot
  switchBook(currentBookId);
  handleRoute();

})();
