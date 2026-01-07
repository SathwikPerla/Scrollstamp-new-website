// ScrollStamp - Unified Popup Script

document.addEventListener('DOMContentLoaded', init);

async function init() {
  loadStamps();
  detectCurrentMode();
  document.getElementById('clear-all').addEventListener('click', clearAllStamps);
}

async function detectCurrentMode() {
  const modeBadge = document.getElementById('mode-badge');
  const emptyHint = document.getElementById('empty-hint');
  
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab?.id) {
      chrome.tabs.sendMessage(tab.id, { action: 'getMode' }, (response) => {
        if (chrome.runtime.lastError || !response) {
          modeBadge.textContent = 'Scroll';
          modeBadge.className = 'mode-badge scroll-mode';
          emptyHint.textContent = 'Click 📌 to bookmark scroll positions';
          return;
        }
        
        if (response.isAIChat) {
          modeBadge.textContent = response.platform;
          modeBadge.className = 'mode-badge ai-mode';
          emptyHint.textContent = 'Click 📌 to bookmark AI messages';
        } else {
          modeBadge.textContent = 'Scroll';
          modeBadge.className = 'mode-badge scroll-mode';
          emptyHint.textContent = 'Click 📌 to bookmark scroll positions';
        }
      });
    }
  } catch (e) {
    modeBadge.textContent = 'Scroll';
    modeBadge.className = 'mode-badge scroll-mode';
  }
}

async function loadStamps() {
  const stampsList = document.getElementById('stamps-list');
  const emptyState = document.getElementById('empty-state');
  
  chrome.storage.local.get(null, (items) => {
    const allStamps = [];
    
    Object.keys(items).forEach(key => {
      if (key.startsWith('scrollstamp_')) {
        const stamps = items[key];
        if (Array.isArray(stamps)) {
          stamps.forEach(stamp => {
            allStamps.push({ ...stamp, storageKey: key });
          });
        }
      }
    });
    
    allStamps.sort((a, b) => b.timestamp - a.timestamp);
    
    if (allStamps.length === 0) {
      emptyState.style.display = 'flex';
      stampsList.style.display = 'none';
      return;
    }
    
    emptyState.style.display = 'none';
    stampsList.style.display = 'block';
    stampsList.innerHTML = '';
    
    allStamps.forEach(stamp => {
      const li = createStampElement(stamp);
      stampsList.appendChild(li);
    });
  });
}

function createStampElement(stamp) {
  const li = document.createElement('li');
  li.className = 'stamp-item';
  
  const timeAgo = formatTimeAgo(stamp.timestamp);
  const isMessage = stamp.type === 'message';
  const icon = isMessage ? '💬' : '📍';
  const typeClass = isMessage ? 'message' : 'scroll';
  const typeLabel = isMessage ? stamp.platform : `${stamp.scrollPercent || 0}%`;
  
  let preview = stamp.preview || 'No preview';
  if (!isMessage && stamp.pageTitle) {
    preview = `${stamp.pageTitle} - ${preview}`;
  }
  
  li.innerHTML = `
    <span class="stamp-icon">${icon}</span>
    <div class="stamp-content">
      <div class="stamp-preview">${escapeHtml(preview)}</div>
      <div class="stamp-meta">
        <span class="stamp-type ${typeClass}">${typeLabel}</span>
        <span>${timeAgo}</span>
      </div>
    </div>
    <button class="stamp-delete" title="Delete bookmark">✕</button>
  `;
  
  li.addEventListener('click', (e) => {
    if (e.target.classList.contains('stamp-delete')) return;
    scrollToStamp(stamp);
  });
  
  li.querySelector('.stamp-delete').addEventListener('click', (e) => {
    e.stopPropagation();
    deleteStamp(stamp);
  });
  
  return li;
}

async function scrollToStamp(stamp) {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  if (!tab) return;
  
  // Check if we need to navigate to the page first
  const currentPath = new URL(tab.url).pathname;
  const stampPath = new URL(stamp.url).pathname;
  
  if (currentPath !== stampPath) {
    chrome.tabs.update(tab.id, { url: stamp.url }, () => {
      setTimeout(() => {
        chrome.tabs.sendMessage(tab.id, {
          action: 'scrollTo',
          stamp: stamp
        });
      }, 2000);
    });
  } else {
    chrome.tabs.sendMessage(tab.id, {
      action: 'scrollTo',
      stamp: stamp
    });
  }
  
  window.close();
}

async function deleteStamp(stamp) {
  chrome.storage.local.get([stamp.storageKey], (result) => {
    const stamps = (result[stamp.storageKey] || []).filter(s => s.id !== stamp.id);
    
    if (stamps.length === 0) {
      chrome.storage.local.remove(stamp.storageKey, loadStamps);
    } else {
      chrome.storage.local.set({ [stamp.storageKey]: stamps }, loadStamps);
    }
  });
}

function clearAllStamps() {
  if (!confirm('Delete all bookmarks?')) return;
  
  chrome.storage.local.get(null, (items) => {
    const keysToRemove = Object.keys(items).filter(key => key.startsWith('scrollstamp_'));
    chrome.storage.local.remove(keysToRemove, loadStamps);
  });
}

function formatTimeAgo(timestamp) {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  
  if (seconds < 60) return 'just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
  
  return new Date(timestamp).toLocaleDateString();
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
