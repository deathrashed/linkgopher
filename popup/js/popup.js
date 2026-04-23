'use strict';

// Store links globally
let allLinks = [];
let allDomains = [];
let currentTabId = null;
let linksExtracted = false;
let currentMode = null; // Track current mode: 'all', 'domains', or 'filter'

// Event listeners for main buttons
document.getElementById('extract-all').addEventListener('click', event => {
  setActiveButton('extract-all');
  currentMode = 'all';
  extractAndDisplay(false, false);
});

document.getElementById('extract-domains').addEventListener('click', event => {
  setActiveButton('extract-domains');
  currentMode = 'domains';
  extractAndDisplay(false, true);
});

document.getElementById('extract-some').addEventListener('click', event => {
  setActiveButton('extract-some');
  currentMode = 'filter';
  extractAndDisplay(true, false);
});

// Event listeners for link display controls
document.getElementById('filter-input').addEventListener('input', filterLinks);
document.getElementById('sort-select').addEventListener('change', sortLinks);

// Copy All button - extracts if needed then copies
document.getElementById('copy-all-btn').addEventListener('click', async () => {
  if (!linksExtracted) {
    setActiveButton('extract-all');
    currentMode = 'all';
    await extractAndDisplay(false, false);
    // Wait a bit for extraction to complete
    setTimeout(() => {
      if (allLinks.length > 0) {
        copyAllLinks();
      }
    }, 500);
  } else {
    // Just copy if links are already extracted
    copyAllLinks();
  }
});

// Open full page button
document.getElementById('open-full-btn').addEventListener('click', async () => {
  if (!linksExtracted) {
    setActiveButton('extract-all');
    currentMode = 'all';
    await extractAndDisplay(false, false);
    // Wait a bit for extraction to complete
    setTimeout(() => {
      if (currentTabId) {
        openFullPage();
      }
    }, 500);
  } else {
    // Just open if links are already extracted
    openFullPage();
  }
});

// Toggle sections
document.getElementById('links-header').addEventListener('click', () => {
  document.getElementById('links-section').classList.toggle('collapsed');
});

document.getElementById('domains-header').addEventListener('click', () => {
  document.getElementById('domains-section').classList.toggle('collapsed');
});

// Set button labels directly
document.getElementById('extract-all').innerText = 'All';
document.getElementById('extract-domains').innerText = 'Domain';
document.getElementById('extract-some').innerText = 'Filter';

/**
 * Set active button state
 */
function setActiveButton(buttonId) {
  // Remove active class from all extraction buttons
  document.querySelectorAll('.button-group:first-child button').forEach(btn => {
    btn.classList.remove('active');
  });
  // Add active class to clicked button
  document.getElementById(buttonId).classList.add('active');
}

/**
 * Extract links and display in popup
 */
async function extractAndDisplay(filtering = false, onlyDomains = false) {
  try {
    const tabs = await getCurrentTab();
    currentTabId = tabs[0].id;
    
    // Clear placeholders and show loading
    document.getElementById('links-content').innerHTML = '<div class="placeholder">Loading...</div>';
    document.getElementById('domains-content').innerHTML = '<div class="placeholder">Loading...</div>';
    
    // Get pattern if filtering
    let pattern = null;
    if (filtering) {
      pattern = window.prompt(chrome.i18n.getMessage('askPattern'));
      if (!pattern) {
        // Clear placeholders if cancelled
        document.getElementById('links-content').innerHTML = '<div class="placeholder">Select an extraction option above</div>';
        document.getElementById('domains-content').innerHTML = '<div class="placeholder">Select an extraction option above</div>';
        return;
      }
    }
    
    // Inject content script and get links
    await injectScript(currentTabId);
    
    // Get links from content script
    chrome.tabs.sendMessage(currentTabId, {action: 'extract'}, links => {
      if (chrome.runtime.lastError) {
        window.alert(chrome.runtime.lastError);
        // Show error message
        document.getElementById('links-content').innerHTML = '<div class="placeholder">Error: ' + chrome.runtime.lastError.message + '</div>';
        document.getElementById('domains-content').innerHTML = '<div class="placeholder">Error: ' + chrome.runtime.lastError.message + '</div>';
        return;
      }
      
      // Process links
      processLinks(links, pattern, onlyDomains);
      linksExtracted = true;
    });
    
  } catch (error) {
    window.alert(error);
    // Show error message
    document.getElementById('links-content').innerHTML = '<div class="placeholder">Error: ' + error.message + '</div>';
    document.getElementById('domains-content').innerHTML = '<div class="placeholder">Error: ' + error.message + '</div>';
  }
}

/**
 * Process extracted links
 */
function processLinks(links, pattern, onlyDomains) {
  // Filter links like: javascript:void(0)
  const resLinks = links.filter(link => link.lastIndexOf('://', 10) > 0);
  
  // Remove duplicates and sort
  const items = [...(new Set(resLinks))].sort();
  const re = pattern ? new RegExp(pattern, 'g') : null;
  
  // Filter by pattern if provided
  allLinks = items.filter(link => re ? link.match(re) : true);
  
  // Extract domains
  allDomains = [...(new Set(allLinks.map(link => getBaseURL(link))))].sort();
  
  // Display based on current mode
  if (onlyDomains || currentMode === 'domains') {
    // Only show domains, hide links section
    displayLinksOnly();
    displayDomains();
  } else {
    // Show both links and domains
    displayLinks();
    displayDomains();
  }
}

/**
 * Display links in popup
 */
function displayLinks() {
  const container = document.getElementById('links-content');
  const linksSection = document.getElementById('links-section');
  container.innerHTML = '';
  linksSection.style.display = 'block';
  
  if (allLinks.length === 0) {
    container.innerHTML = '<div class="placeholder">No links found</div>';
    return;
  }
  
  allLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link;
    a.innerText = link;
    a.target = '_blank';
    container.appendChild(a);
  });
}

/**
 * Display only domains (hide links section)
 */
function displayLinksOnly() {
  const container = document.getElementById('links-content');
  const linksSection = document.getElementById('links-section');
  container.innerHTML = '';
  linksSection.style.display = 'none';
}

/**
 * Display domains in popup
 */
function displayDomains() {
  const container = document.getElementById('domains-content');
  container.innerHTML = '';
  
  if (allDomains.length === 0) {
    container.innerHTML = '<div class="placeholder">No domains found</div>';
    return;
  }
  
  allDomains.forEach(domain => {
    const a = document.createElement('a');
    a.href = domain;
    a.innerText = domain;
    a.target = '_blank';
    container.appendChild(a);
  });
}

/**
 * Filter links based on input
 */
function filterLinks() {
  const filter = document.getElementById('filter-input').value.toLowerCase();
  
  // Filter links (only if visible)
  const linkElements = document.querySelectorAll('#links-content a');
  linkElements.forEach(a => {
    a.style.display = a.innerText.toLowerCase().includes(filter) ? 'block' : 'none';
  });
  
  // Filter domains
  const domainElements = document.querySelectorAll('#domains-content a');
  domainElements.forEach(a => {
    a.style.display = a.innerText.toLowerCase().includes(filter) ? 'block' : 'none';
  });
}

/**
 * Sort links
 */
function sortLinks() {
  const sortBy = document.getElementById('sort-select').value;
  
  if (sortBy === 'alpha') {
    allLinks.sort();
    allDomains.sort();
  } else if (sortBy === 'reverse') {
    allLinks.reverse();
    allDomains.reverse();
  }
  
  // Re-display based on current mode
  if (currentMode === 'domains') {
    displayLinksOnly();
  } else {
    displayLinks();
  }
  displayDomains();
}

/**
 * Copy all links to clipboard
 */
function copyAllLinks() {
  // Copy links if in all or filter mode, copy domains if in domains mode
  const text = currentMode === 'domains' ? allDomains.join('\n') : allLinks.join('\n');
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copy-all-btn');
    const originalText = btn.innerText;
    btn.innerText = 'Copied!';
    setTimeout(() => {
      btn.innerText = originalText;
    }, 2000);
  });
}

/**
 * Open full page view
 */
function openFullPage() {
  const url = `${chrome.runtime.getURL('browser/linkgopher.html')}?tabId=${currentTabId}&onlyDomains=${currentMode === 'domains'}`;
  openTab(url).then(() => window.close());
}

/**
 * Get base URL from link
 */
function getBaseURL(link) {
  const reBaseURL = /(^\w+:\/\/[^\/]+)|(^[A-Za-z0-9.-]+)\/|(^[A-Za-z0-9.-]+$)/;
  const result = link.match(reBaseURL);
  
  if (!result) {
    return null;
  } else if (result[1]) {
    return `${result[1]}/`;
  } else {
    return `http://${result[2] || result[3]}/`;
  }
}

/**
 * Get active tab of current window.
 */
function getCurrentTab() {
  return new Promise((res, rej) => {
    const queryInfo = {
      active: true,
      currentWindow: true
    };

    chrome.tabs.query(queryInfo, items => passNext(items, res, rej));
  });
}

/**
 * Create tab with extension's page.
 */
function openTab(url) {
  return new Promise((res, rej) => {
    const createProperties = {active: true, url};
    chrome.tabs.create(createProperties, tab => passNext(tab, res, rej));
  });
}

/**
 * Inject script into tab
 */
function injectScript(tabId, file = '/content-script.js') {
  return new Promise((res, rej) => {
    chrome.scripting.executeScript(
      { 
        target: {tabId: tabId}, 
        files: [file]
      },
        item => passNext(item, res, rej)
      );
  });
}

/**
 * Pass result to promise
 */
function passNext(result, fulfill, reject) {
  if (chrome.runtime.lastError) return reject(chrome.runtime.lastError);
  return fulfill(result);
}