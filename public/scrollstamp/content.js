// ScrollStamp - Unified bookmarking extension
// v2 (message-based) for AI chat platforms, v1 (scroll-based) for everything else

(function() {
  'use strict';

  // ============================================
  // PLATFORM DETECTION & CONFIGURATION
  // ============================================

  // AI chat platforms that use message-based bookmarking (v2)
  const AI_PLATFORM_SELECTORS = {
    chatgpt: {
      assistant: '[data-message-author-role="assistant"]',
      container: 'main',
      messageText: '.markdown'
    },
    claude: {
      assistant: '[data-testid="assistant-message"], .font-claude-message',
      container: 'main',
      messageText: '.prose'
    },
    gemini: {
      assistant: '[data-message-author="1"], .model-response-text',
      container: 'main',
      messageText: '.message-content'
    },
    perplexity: {
      assistant: '[data-testid="answer-content"], .prose',
      container: 'main',
      messageText: '.prose'
    },
    grok: {
      assistant: '[data-testid="assistant-message"]',
      container: 'main',
      messageText: '.message-content'
    },
    deepseek: {
      assistant: '.ds-markdown',
      container: 'main',
      messageText: '.ds-markdown'
    }
  };

  // Detect if current site is an AI chat platform
  function detectAIPlatform() {
    const host = window.location.hostname;
    if (host.includes('chatgpt') || host.includes('chat.openai')) return 'chatgpt';
    if (host.includes('claude')) return 'claude';
    if (host.includes('gemini')) return 'gemini';
    if (host.includes('perplexity')) return 'perplexity';
    if (host.includes('grok')) return 'grok';
    if (host.includes('deepseek')) return 'deepseek';
    return null;
  }

  // Detect if current page is a PDF
  function isPDFPage() {
    const url = window.location.href.toLowerCase();
    const contentType = document.contentType || '';
    return url.endsWith('.pdf') || 
           contentType.includes('pdf') || 
           document.querySelector('embed[type="application/pdf"]') !== null ||
           document.body?.children[0]?.tagName === 'EMBED';
  }

  let floatingBtn = null;
  let currentPlatform = null;
  let isAIChat = false;
  let isPDF = false;
  let isPDFSupported = true;
  // ============================================
  // V2: MESSAGE-BASED BOOKMARKING (AI Chats)
  // ============================================

  function getAssistantMessages() {
    if (!currentPlatform || !AI_PLATFORM_SELECTORS[currentPlatform]) return [];
    const selector = AI_PLATFORM_SELECTORS[currentPlatform].assistant;
    if (!selector) return [];
    return Array.from(document.querySelectorAll(selector));
  }

  function findNearestAssistantMessage() {
    const messages = getAssistantMessages();
    if (messages.length === 0) return null;

    const viewportCenter = window.innerHeight / 2;
    let nearest = null;
    let minDistance = Infinity;

    messages.forEach((msg, index) => {
      const rect = msg.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const msgCenter = rect.top + rect.height / 2;
        const distance = Math.abs(msgCenter - viewportCenter);
        if (distance < minDistance) {
          minDistance = distance;
          nearest = { element: msg, index };
        }
      }
    });

    if (!nearest) {
      messages.forEach((msg, index) => {
        const rect = msg.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < minDistance) {
          minDistance = distance;
          nearest = { element: msg, index };
        }
      });
    }

    return nearest;
  }

  function getMessagePreview(element) {
    const textSelector = AI_PLATFORM_SELECTORS[currentPlatform]?.messageText;
    const textEl = textSelector ? element.querySelector(textSelector) : element;
    const text = (textEl || element).textContent || '';
    return text.trim().substring(0, 100).replace(/\s+/g, ' ');
  }

  function generateMessageId(element, index) {
    const preview = getMessagePreview(element);
    let hash = 0;
    for (let i = 0; i < preview.length; i++) {
      const char = preview.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return `msg_${index}_${Math.abs(hash).toString(36)}`;
  }

  function createMessageStamp(messageInfo) {
    const preview = getMessagePreview(messageInfo.element);
    return {
      id: generateMessageId(messageInfo.element, messageInfo.index),
      type: 'message', // v2 type
      index: messageInfo.index,
      preview: preview,
      title: '', // User-editable title (empty by default)
      timestamp: Date.now(),
      url: window.location.href,
      hostname: window.location.hostname,
      platform: currentPlatform
    };
  }

  function scrollToMessage(stamp) {
    const messages = getAssistantMessages();
    
    if (stamp.index < messages.length) {
      const targetByIndex = messages[stamp.index];
      const preview = getMessagePreview(targetByIndex);
      
      if (preview.startsWith(stamp.preview.substring(0, 30))) {
        smoothScrollTo(targetByIndex);
        return true;
      }
    }

    for (const msg of messages) {
      const preview = getMessagePreview(msg);
      if (preview.startsWith(stamp.preview.substring(0, 30))) {
        smoothScrollTo(msg);
        return true;
      }
    }

    return false;
  }

  // ============================================
  // V1: SCROLL-BASED BOOKMARKING (All other sites)
  // ============================================

  function getScrollPercentage() {
    // For PDFs, Chrome's built-in viewer uses a plugin element
    if (isPDF) {
      // Try to find the PDF viewer's internal scroll container
      const pdfViewer = document.querySelector('#viewer');
      const pdfContainer = document.querySelector('#viewerContainer');
      const embed = document.querySelector('embed[type="application/pdf"]');
      const pdfPlugin = document.querySelector('embed, object');
      
      // Method 1: Check for PDF.js viewer (used by many sites and Firefox)
      if (pdfViewer && pdfContainer) {
        const scrollTop = pdfContainer.scrollTop;
        const scrollHeight = pdfContainer.scrollHeight - pdfContainer.clientHeight;
        if (scrollHeight > 0) {
          return Math.round((scrollTop / scrollHeight) * 100);
        }
      }
      
      // Method 2: For Chrome's native PDF viewer, use page scroll
      // The plugin takes over the whole page, so window scroll should work
      const scrollTop = window.pageYOffset || window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const docHeight = Math.max(
        document.body.scrollHeight || 0,
        document.documentElement.scrollHeight || 0,
        document.body.offsetHeight || 0,
        document.documentElement.offsetHeight || 0
      );
      const scrollHeight = docHeight - window.innerHeight;
      
      // If we can't calculate scroll (single-page PDF or plugin blocking), use 0
      if (scrollHeight <= 0) {
        // Try to estimate based on visible content
        return 0;
      }
      
      return Math.round((scrollTop / scrollHeight) * 100);
    }
    
    // Regular pages
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight <= 0) return 0;
    return Math.round((scrollTop / scrollHeight) * 100);
  }

  function getPageTitle() {
    return document.title || window.location.hostname;
  }

  function getContextPreview() {
    // Try to get some context from visible content
    const viewportCenter = window.innerHeight / 2;
    const elements = document.elementsFromPoint(window.innerWidth / 2, viewportCenter);
    
    for (const el of elements) {
      if (['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI', 'DIV', 'ARTICLE', 'SECTION'].includes(el.tagName)) {
        const text = el.textContent?.trim();
        if (text && text.length > 10) {
          return text.substring(0, 100).replace(/\s+/g, ' ');
        }
      }
    }
    
    return `${getScrollPercentage()}% scrolled`;
  }

  function createScrollStamp() {
    const scrollPercent = getScrollPercentage();
    const preview = getContextPreview();
    
    // Get the actual scroll position from various sources
    let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    // For PDFs, also try the PDF container
    if (isPDF) {
      const pdfContainer = document.querySelector('#viewerContainer');
      if (pdfContainer) {
        scrollY = pdfContainer.scrollTop;
      }
    }
    
    return {
      id: `scroll_${scrollPercent}_${Date.now().toString(36)}`,
      type: isPDF ? 'pdf' : 'scroll', // v1 type with PDF distinction
      scrollPercent: scrollPercent,
      scrollY: scrollY,
      preview: preview,
      pageTitle: getPageTitle(),
      title: '', // User-editable title (empty by default)
      timestamp: Date.now(),
      url: window.location.href,
      hostname: window.location.hostname,
      platform: isPDF ? 'PDF' : 'web'
    };
  }

  function scrollToPosition(stamp) {
    // PDFs (when accessible) may use PDF.js container
    if (stamp.type === 'pdf') {
      const pdfContainer = document.querySelector('#viewerContainer');
      if (pdfContainer && typeof stamp.scrollY === 'number') {
        pdfContainer.scrollTo({
          top: Math.max(0, stamp.scrollY),
          behavior: 'smooth'
        });
        return true;
      }
    }

    // Try scrollY first for exact position (0 is valid)
    if (typeof stamp.scrollY === 'number') {
      window.scrollTo({
        top: Math.max(0, stamp.scrollY),
        behavior: 'smooth'
      });
      return true;
    }

    // Fallback to percentage-based scroll (0 is valid)
    if (typeof stamp.scrollPercent === 'number') {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const targetY = (stamp.scrollPercent / 100) * Math.max(0, scrollHeight);
      window.scrollTo({
        top: Math.max(0, targetY),
        behavior: 'smooth'
      });
      return true;
    }

    return false;
  }

  // ============================================
  // SHARED UTILITIES
  // ============================================

  // Check if extension context is still valid
  function isExtensionContextValid() {
    try {
      return chrome.runtime && !!chrome.runtime.id;
    } catch (e) {
      return false;
    }
  }

  function getStorageKey() {
    return `scrollstamp_${btoa(window.location.pathname).substring(0, 20)}`;
  }

  async function saveStamp(stamp) {
    if (!isExtensionContextValid()) {
      console.log('ScrollStamp: Extension context invalidated, please refresh the page');
      return false;
    }
    
    const storageKey = getStorageKey();
    
    return new Promise((resolve) => {
      try {
        chrome.storage.local.get([storageKey], (result) => {
          if (chrome.runtime.lastError) {
            console.log('ScrollStamp: Storage error', chrome.runtime.lastError);
            resolve(false);
            return;
          }
          const stamps = result[storageKey] || [];
          const exists = stamps.some(s => s.id === stamp.id);
          if (!exists) {
            stamps.push(stamp);
            chrome.storage.local.set({ [storageKey]: stamps }, () => {
              resolve(true);
            });
          } else {
            resolve(false);
          }
        });
      } catch (e) {
        console.log('ScrollStamp: Extension context invalidated');
        resolve(false);
      }
    });
  }

  function smoothScrollTo(element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    
    element.classList.add('scrollstamp-highlight');
    setTimeout(() => {
      element.classList.remove('scrollstamp-highlight');
    }, 2000);
  }

  function showToast(message) {
    const existing = document.getElementById('scrollstamp-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'scrollstamp-toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('scrollstamp-toast-hide');
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  }

  // ============================================
  // UI & INITIALIZATION
  // ============================================

  function getPinTitle() {
    return isAIChat
      ? 'Bookmark this AI message'
      : (isPDF
          ? (isPDFSupported ? 'Bookmark this PDF position' : 'PDFs not supported in ScrollStamp')
          : 'Bookmark this scroll position');
  }

  function createFloatingButton() {
    if (floatingBtn) {
      floatingBtn.title = getPinTitle();
      return;
    }

    floatingBtn = document.createElement('div');
    floatingBtn.id = 'scrollstamp-pin';
    floatingBtn.innerHTML = '📌';
    floatingBtn.title = getPinTitle();
    
    floatingBtn.addEventListener('click', async () => {
      let stamp;
      let saved;

      // PDFs opened in Chrome's viewer / local downloads are not reliably scriptable.
      // We explicitly mark them as unsupported to avoid broken bookmarks.
      if (isPDF && !isPDFSupported) {
        showToast('PDFs are not supported in ScrollStamp');
        return;
      }

      if (isAIChat) {
        // V2: Message-based bookmarking
        const nearest = findNearestAssistantMessage();
        if (nearest) {
          stamp = createMessageStamp(nearest);
          saved = await saveStamp(stamp);
          
          if (saved) {
            showToast('Message bookmarked!');
          } else {
            showToast('Already bookmarked');
          }
        } else {
          showToast('No AI message found nearby');
          return;
        }
      } else {
        // V1: Scroll-based bookmarking
        stamp = createScrollStamp();
        saved = await saveStamp(stamp);
        
        if (saved) {
          showToast(`Position bookmarked (${stamp.scrollPercent}%)`);
        } else {
          showToast('Already bookmarked');
        }
      }

      if (saved) {
        floatingBtn.classList.add('scrollstamp-success');
        setTimeout(() => floatingBtn.classList.remove('scrollstamp-success'), 500);
      }
    });

    document.body.appendChild(floatingBtn);
  }

  // Handle scroll to stamp (called from popup)
  function handleScrollTo(stamp) {
    if (stamp.type === 'message') {
      return scrollToMessage(stamp);
    } else {
      return scrollToPosition(stamp);
    }
  }

  // Listen for messages from popup
  if (isExtensionContextValid()) {
    try {
      chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        // Check context validity before processing
        if (!isExtensionContextValid()) {
          return false;
        }
        
        try {
          if (request.action === 'getStamps') {
            const storageKey = getStorageKey();
            chrome.storage.local.get([storageKey], (result) => {
              if (chrome.runtime.lastError) {
                sendResponse({ stamps: [] });
                return;
              }
              sendResponse({ stamps: result[storageKey] || [] });
            });
            return true;
          }
          
          if (request.action === 'scrollTo') {
            const success = handleScrollTo(request.stamp);
            sendResponse({ success });
            return true;
          }
          
          if (request.action === 'deleteStamp') {
            const storageKey = getStorageKey();
            chrome.storage.local.get([storageKey], (result) => {
              if (chrome.runtime.lastError) {
                sendResponse({ success: false });
                return;
              }
              const stamps = (result[storageKey] || []).filter(s => s.id !== request.stampId);
              chrome.storage.local.set({ [storageKey]: stamps }, () => {
                sendResponse({ success: true });
              });
            });
            return true;
          }
          
          if (request.action === 'getMode') {
            sendResponse({
              isAIChat: isAIChat,
              isPDF: isPDF,
              pdfSupported: isPDFSupported,
              platform: currentPlatform
            });
            return true;
          }
          
          if (request.action === 'updateTitle') {
            const storageKey = getStorageKey();
            chrome.storage.local.get([storageKey], (result) => {
              if (chrome.runtime.lastError) {
                sendResponse({ success: false });
                return;
              }
              const stamps = result[storageKey] || [];
              const stampIndex = stamps.findIndex(s => s.id === request.stampId);
              if (stampIndex !== -1) {
                stamps[stampIndex].title = request.title;
                chrome.storage.local.set({ [storageKey]: stamps }, () => {
                  sendResponse({ success: true });
                });
              } else {
                sendResponse({ success: false });
              }
            });
            return true;
          }
        } catch (e) {
          console.log('ScrollStamp: Message handler error', e);
          return false;
        }
      });
    } catch (e) {
      console.log('ScrollStamp: Could not add message listener', e);
    }
  }

  function init() {
    currentPlatform = detectAIPlatform();
    isAIChat = currentPlatform !== null;
    isPDF = isPDFPage();
    isPDFSupported = !isPDF;
    
    createFloatingButton();
    
    const mode = isAIChat ? `AI Chat (${currentPlatform})` : (isPDF ? 'PDF Mode' : 'Scroll Mode');
    console.log(`ScrollStamp initialized - ${mode}`);
  }

  // Wait for page to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-init on SPA navigation (with safety checks)
  try {
    let lastUrl = location.href;
    if (document.body) {
      new MutationObserver(() => {
        try {
          if (location.href !== lastUrl) {
            lastUrl = location.href;
            setTimeout(init, 500);
          }
        } catch (e) {
          // Ignore errors during URL check
        }
      }).observe(document.body, { subtree: true, childList: true });
    }
  } catch (e) {
    console.log('ScrollStamp: Could not set up SPA navigation observer');
  }

})();
