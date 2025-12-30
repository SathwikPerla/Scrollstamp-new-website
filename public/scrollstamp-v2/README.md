# 📌 ScrollStamp

> Bookmark AI assistant messages in chat conversations

ScrollStamp is a Chrome extension that lets you save and navigate to specific AI assistant messages across popular AI chat platforms.

---

## 🚀 Supported Platforms

- ChatGPT (chat.openai.com / chatgpt.com)
- Claude (claude.ai)
- Google Gemini (gemini.google.com)
- Perplexity (perplexity.ai)
- Grok (grok.x.ai)
- DeepSeek (chat.deepseek.com)

---

## 📦 Versions

### v2.0.0 (Current)

**Message-Based Bookmarking** - Complete redesign focusing on AI message detection.

#### Features
- 📍 **Smart Message Detection** - Automatically identifies AI assistant messages
- 🎯 **Precise Navigation** - Jump directly to bookmarked messages
- 💾 **Persistent Storage** - Bookmarks saved across browser sessions
- 🌐 **Multi-Platform Support** - Works on all major AI chat platforms
- 🎨 **Visual Feedback** - Animated highlights when navigating to messages
- 📋 **Message Preview** - See snippet of bookmarked content in popup

#### How It Works
1. Click the floating 📌 button on any supported AI chat page
2. The nearest AI assistant message gets bookmarked
3. Access your bookmarks via the extension popup
4. Click any bookmark to scroll directly to that message

#### Files
```
scrollstamp-v2/
├── manifest.json    # Extension configuration
├── content.js       # Message detection & bookmarking logic
├── content.css      # Floating button & highlight styles
├── popup.html       # Bookmark list popup structure
├── popup.css        # Popup styling
└── popup.js         # Popup interaction handling
```

---

### v1.0.0 (Legacy)

**Scroll Position Bookmarking** - Original version using scroll percentage.

#### Features
- 📍 Bookmark based on scroll position percentage
- 💾 Basic storage functionality
- 🔄 Simple scroll restoration

#### Limitations
- Less precise (position-based, not message-based)
- Could miss target if page content changed
- No message preview functionality

---

## 🛠️ Installation

### From Source (Developer Mode)

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer mode** (toggle in top-right)
4. Click **Load unpacked**
5. Select the `scrollstamp-v2` folder
6. The extension icon will appear in your toolbar

---

## 🎮 Usage

### Creating a Bookmark
1. Navigate to any supported AI chat platform
2. Scroll to view the AI response you want to bookmark
3. Click the floating 📌 button in the bottom-right corner
4. A toast notification confirms the bookmark was saved

### Viewing Bookmarks
1. Click the ScrollStamp icon in your browser toolbar
2. See all your saved bookmarks with previews
3. Timestamps show when each was created

### Navigating to a Bookmark
1. Open the popup and click any bookmark
2. The page scrolls to that message
3. The message highlights briefly for visibility

### Deleting Bookmarks
- **Single**: Click the 🗑️ button on any bookmark item
- **All**: Click "Clear All" in the popup footer

---

## 🔮 Roadmap

### v2.1.0 (Planned)
- [ ] Bookmark folders/categories
- [ ] Search within bookmarks
- [ ] Export/import bookmarks
- [ ] Keyboard shortcuts

### v2.2.0 (Planned)
- [ ] Sync bookmarks across devices
- [ ] Custom bookmark labels/notes
- [ ] Dark/light theme toggle
- [ ] Bookmark sharing via links

### v3.0.0 (Future)
- [ ] AI-powered bookmark organization
- [ ] Smart suggestions for important messages
- [ ] Integration with note-taking apps
- [ ] Browser sidebar view

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

---

## 📄 License

MIT License - feel free to use and modify as needed.

---

## 📞 Support

Having issues? Please open an issue on the repository with:
- Browser version
- Platform where the issue occurs
- Steps to reproduce

---

<p align="center">
  Made with ❤️ for the AI chat community
</p>
