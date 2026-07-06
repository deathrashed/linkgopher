<div align="center">
<img
src="icons/link-gopher-64.png" alt="Logo Logo">

# Link Gopher

[![GitHub](https://img.shields.io/badge/Original-1e1e1e?style=for-the-badge&logo=GitHub&logoColor=c5372d)](https://github.com/az0/linkgopher)
[![GitHub](https://img.shields.io/badge/Fork-1e1e1e?style=for-the-badge&logo=GitHub&logoColor=c5372d)](https://github.com/deathrashed/linkgopher)

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

### <svg width="16" height="16" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#c5372d" d="M128.224 477.382C97.468 457.656 353.8 18.668 383.71 34.684c30.063 17.357-225.423 460.055-255.486 442.698m41.597-270.908C229.36 102.967 347.62 13.847 383.71 34.684C306.133-7.59 192.58 75.147 132.737 175.107c-67.115 112.103-73.49 266.164-4.513 302.275c-35.191-26.449-11.749-178.167 41.597-270.908M383.71 34.684c40.605 44.376 4.837 193.602-47.05 277.568c-50.211 83.688-161.014 181.835-208.436 165.13c60.253 40.663 192.727-38.17 253.35-144.487c55.512-97.356 84.585-244.908 2.136-298.211m-4.767-3.12c-300.093-146.21-534.837 258.55-250.72 445.818c-234.64-144.57 4.847-568.985 250.72-445.818m10.247 5.918c102.385 63.26 117.705 202.633 48.243 322.945c-60.27 103.141-181.423 185.587-309.21 116.955c122.275 70.595 278.869 28.56 349.463-93.715c68.193-117.443 32.735-272.799-88.496-346.185"/></svg> Modern Dark Theme UI
- Beautiful dark mode interface throughout
- Green accent color (`#04D58F`) for headers and hover effects
- Blue links (`#4A90E2`) with green outline on hover
- Custom dark scrollbar styling
- Fixed 415px popup width with proper word wrapping

### <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="#c5372d" d="M16 2H7.979C6.88 2 6 2.88 6 3.98V12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 10H8V4h8zM4 10H2v6c0 1.1.9 2 2 2h6v-2H4z"/></svg> Enhanced Popup Interface
- **In-popup link display** - View links directly without opening new tab
- **Compact layout** - All controls organized efficiently
- **Collapsible sections** - Click "Links" or "Domains" headers to toggle
- **Real-time filtering** - Type to filter links instantly
- **Sorting options** - Sort alphabetically (A-Z) or reverse (Z-A)
- **Smart button states** - Visual feedback for active extraction mode

### <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="#c5372d" d="M18.5 20a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-3H4v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.829-5.828A2.05 2.05 0 0 0 12.172 2H6a2 2 0 0 0-2 2v9h1.5V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5zm-5-15.379L17.378 8.5H14a.5.5 0 0 1-.5-.5zM8.75 11.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm-6 2.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm6 2.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z"/></svg> Extraction Modes
- **All** - Extract all links from the page
- **Domain** - Extract only unique domains (hides links section)
- **Filter** - Extract links matching a custom pattern

### <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#c5372d" d="M8.28 4.504c1.015-.63 1.73-1.072 2.327-1.363c.581-.283.993-.391 1.393-.391s.812.108 1.393.391c.598.29 1.312.733 2.327 1.363l2 1.241c.961.597 1.636 1.016 2.14 1.402c.489.375.77.684.963 1.036c.193.353.306.766.365 1.398c.061.648.062 1.465.062 2.623v1.521c0 1.97-.002 3.376-.14 4.443c-.136 1.048-.393 1.656-.82 2.099c-.425.439-1.003.7-2.004.839c-1.026.142-2.379.144-4.286.144a.75.75 0 0 0 0 1.5h.058c1.836 0 3.294 0 4.434-.159c1.177-.163 2.128-.509 2.876-1.282c.743-.769 1.073-1.742 1.23-2.947c.152-1.175.152-2.678.152-4.582v-1.613c0-1.113 0-2-.068-2.726c-.07-.75-.217-1.383-.543-1.978c-.327-.597-.78-1.056-1.368-1.507c-.568-.436-1.306-.893-2.227-1.465l-2.067-1.283c-.973-.604-1.753-1.088-2.427-1.416c-.699-.34-1.342-.542-2.05-.542s-1.351.203-2.05.542c-.674.328-1.454.812-2.427 1.416L5.456 4.491c-.92.572-1.659 1.03-2.227 1.465c-.589.45-1.041.91-1.368 1.507c-.398.728-.53 1.516-.58 2.499a.75.75 0 1 0 1.498.076c.046-.904.161-1.423.398-1.855c.193-.352.474-.661.964-1.036c.503-.386 1.178-.805 2.139-1.402z"/><path fill="currentColor" d="M2 12.25a.75.75 0 0 0 0 1.5A8.25 8.25 0 0 1 10.25 22a.75.75 0 0 0 1.5 0A9.75 9.75 0 0 0 2 12.25"/><path fill="currentColor" d="M1.25 16a.75.75 0 0 1 .75-.75A6.75 6.75 0 0 1 8.75 22a.75.75 0 0 1-1.5 0c0-2.9-2.35-5.25-5.25-5.25a.75.75 0 0 1-.75-.75"/><path fill="currentColor" d="M2 18.25a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 4.25 22a.75.75 0 0 0 1.5 0A3.75 3.75 0 0 0 2 18.25"/></svg> Smart Actions
- **Copy** - Copies all links (or domains in Domain mode) to clipboard
- **Page** - Opens full page view with all features
- **Auto-extract** - Copy and Page buttons automatically extract if needed

### <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g fill="none"><rect width="40" height="32" x="4" y="8" stroke="#c5372d" stroke-linejoin="round" stroke-width="4" rx="3"/><path stroke="#c5372d" stroke-width="4" d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z"/><circle r="2" fill="white" transform="matrix(0 -1 -1 0 10 14)"/><circle r="2" fill="white" transform="matrix(0 -1 -1 0 16 14)"/></g></svg> Full Page View
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
