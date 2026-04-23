<div align="center">
<img
src="icons/link-gopher-64.png" alt="Logo Logo">

# Link Gopher

[![GitHub](https://img.shields.io/badge/Original-1e1e1e?style=for-the-badge&logo=GitHub&logoColor=04D58F)](https://github.com/az0/linkgopher)
[![GitHub](https://img.shields.io/badge/Fork-1e1e1e?style=for-the-badge&logo=GitHub&logoColor=04D58F)](https://github.com/deathrashed/linkgopher)

</div>

# Link Gopher

Link Gopher is a modern web browser extension that extracts all links from web pages with enhanced functionality. It features a sleek dark-themed popup interface for instant link viewing, real-time filtering, sorting options, and smart copying. Links can be extracted in full, by domains only, or using custom patterns, with all operations available directly from the popup or in a full-page view.

## Download
To download and install the latest release:

* [Link Gopher on Mozilla Add-ons](https://addons.mozilla.org/en-US/firefox/addon/link-gopher/) for Firefox
* [Link Gopher on Chrome Web Store](https://chrome.google.com/webstore/detail/link-gopher/bpjdkodgnbfalgghnbeggfbfjpcfamkf) for Google Chrome

## Documentation
There is [brief documentation](https://sites.google.com/site/linkgopher/Home)


## Features

### 🎨 Modern Dark Theme UI
- Beautiful dark mode interface throughout
- Green accent color (`#04D58F`) for headers and hover effects
- Blue links (`#4A90E2`) with green outline on hover
- Custom dark scrollbar styling
- Fixed 415px popup width with proper word wrapping

### ⚡ Enhanced Popup Interface
- **In-popup link display** - View links directly without opening new tab
- **Compact layout** - All controls organized efficiently
- **Collapsible sections** - Click "Links" or "Domains" headers to toggle
- **Real-time filtering** - Type to filter links instantly
- **Sorting options** - Sort alphabetically (A-Z) or reverse (Z-A)
- **Smart button states** - Visual feedback for active extraction mode

### 🔧 Extraction Modes
- **All** - Extract all links from the page
- **Domain** - Extract only unique domains (hides links section)
- **Filter** - Extract links matching a custom pattern

### 📋 Smart Actions
- **Copy** - Copies all links (or domains in Domain mode) to clipboard
- **Page** - Opens full page view with all features
- **Auto-extract** - Copy and Page buttons automatically extract if needed

### 🌐 Full Page View
- Advanced filtering and sorting
- Copy all functionality
- Collapsible categories
- Same dark theme consistency

## Installation

1. Clone or download this repository
2. Open Chrome/Edge and go to `chrome://extensions/`
3. Enable "Developer mode" (top right)
4. Click "Load unpacked"
5. Select the extension folder

## Usage

1. Click the Link Gopher icon in your browser toolbar
2. Choose an extraction option:
   - **All** - Shows all links and domains
   - **Domain** - Shows only unique domains
   - **Filter** - Enter a pattern to filter links
3. Use the filter box to search through links
4. Use the sort dropdown to reorder links
5. Click **Copy** to copy all links to clipboard
6. Click **Page** to open in full-page view
7. Click section headers to collapse/expand

## Keyboard Shortcuts

- Type directly in the filter box to search
- Use Tab to navigate between controls

## Changes from Original

This fork includes significant improvements:

### UI/UX Enhancements
- Complete dark theme redesign
- In-popup link display (no need to open new tab)
- Horizontal button layout
- Fixed width popup (415px)
- Word wrapping for long URLs
- Smooth animations and transitions
- Active button highlighting

### New Features
- Real-time filtering in popup
- Sort functionality (A-Z, Z-A)
- Collapsible sections
- Smart Copy button (copies based on current mode)
- Direct Page button for full view
- Auto-extraction on Copy/Page click

### Technical Improvements
- Modern CSS with flexbox layouts
- Improved JavaScript with async/await
- Better error handling
- State management for extraction modes
- Optimized DOM manipulation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request


## Credits

Original Link Gopher extension - Enhanced by deathrashed
- Original repo: https://github.com/az0/linkgopher
- Repository: https://github.com/deathrashed/linkgopher

## License
Copyright (c) 2008, 2009, 2014, 2017, 2021, 2023 by Andrew Ziem. All rights reserved.

Licensed under the [GNU General Public License version 3](https://www.gnu.org/licenses/gpl-3.0.en.html) or later
