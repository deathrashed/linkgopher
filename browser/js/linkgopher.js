'use strict';
const containerLinks = document.getElementById('links');
const containerDomains = document.getElementById('domains');
const message = document.getElementById('message');
const reBaseURL = /(^\w+:\/\/[^\/]+)|(^[A-Za-z0-9.-]+)\/|(^[A-Za-z0-9.-]+$)/;
const tabId = parseInt(location.search.replace(/.*tabId=(\d+).*/, '$1'));
const filtering = location.search.replace(/.*filtering=(true|false).*/, '$1');
const pattern = filtering === 'true'
  ? window.prompt(chrome.i18n.getMessage('askPattern'))
  : null;
const filteringDomains = location
  .search.replace(/.*filteringDomains=(true|false).*/, '$1') === 'true'
  ? true
  : false;
const onlyDomains = location.search.replace(/.*onlyDomains=(true|false).*/, '$1');

chrome.tabs.sendMessage(tabId, {action: 'extract'}, links => {
  handler(links, pattern, onlyDomains);
});

// Localization.
[
  {id: 'links', messageId: 'links'},
  {id: 'domains', messageId: 'domains'},
  {id: 'message', messageId: 'pleaseWait'}
].forEach(item => {
  const container = document.getElementById(item.id);
  container.dataset.content = chrome.i18n.getMessage(item.messageId);
});

// Simple additions after page loads
setTimeout(() => {
  // Toggle collapse on header click
  containerLinks.addEventListener('click', (e) => {
    if (e.target === containerLinks) {
      containerLinks.classList.toggle('collapsed');
    }
  });
  
  containerDomains.addEventListener('click', (e) => {
    if (e.target === containerDomains) {
      containerDomains.classList.toggle('collapsed');
    }
  });
  
  // Filter
  const filterInput = document.getElementById('filterInput');
  if (filterInput) {
    filterInput.addEventListener('input', (e) => {
      const filter = e.target.value.toLowerCase();
      const allLinks = containerLinks.querySelectorAll('a');
      const allDomains = containerDomains.querySelectorAll('a');
      
      allLinks.forEach(link => {
        link.style.display = link.innerText.toLowerCase().includes(filter) ? 'block' : 'none';
        const br = link.nextSibling;
        if (br && br.tagName === 'BR') br.style.display = link.style.display;
      });
      
      allDomains.forEach(domain => {
        domain.style.display = domain.innerText.toLowerCase().includes(filter) ? 'block' : 'none';
        const br = domain.nextSibling;
        if (br && br.tagName === 'BR') br.style.display = domain.style.display;
      });
    });
  }
  
  // Sort
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      const sortBy = e.target.value;
      const allLinks = Array.from(containerLinks.querySelectorAll('a'));
      
      // Remove existing BRs
      containerLinks.querySelectorAll('br').forEach(br => br.remove());
      
      if (sortBy === 'alpha') {
        allLinks.sort((a, b) => a.innerText.localeCompare(b.innerText));
      } else if (sortBy === 'reverse') {
        allLinks.reverse();
      }
      
      // Re-append with BRs
      allLinks.forEach(link => {
        containerLinks.appendChild(link);
        containerLinks.appendChild(document.createElement('br'));
      });
    });
  }
  
  // Copy All
  const copyAllBtn = document.getElementById('copyAllBtn');
  if (copyAllBtn) {
    copyAllBtn.addEventListener('click', () => {
      const allLinks = Array.from(containerLinks.querySelectorAll('a')).map(a => a.innerText);
      const text = allLinks.join('\n');
      navigator.clipboard.writeText(text).then(() => {
        copyAllBtn.innerText = 'Copied!';
        setTimeout(() => {
          copyAllBtn.innerText = 'Copy All';
        }, 2000);
      });
    });
  }
}, 100);

/**
 * @function handler
 * @param links
 * @param {string} pattern -- Pattern for filtering.
 * @param onlyDomains
 */
function handler(links, pattern, onlyDomains) {
  if (chrome.runtime.lastError) {
    return window.alert(chrome.runtime.lastError);
  }

  // To filter links like: javascript:void(0)
  const resLinks = links.filter(link => link.lastIndexOf('://', 10) > 0);
  // Remove duplicate, sorting of links.
  const items = [...(new Set(resLinks))].sort();
  const re = pattern ? new RegExp(pattern, 'g') : null;
  const added = items.filter(link => addNodes(link, containerLinks, re, onlyDomains));

  if (!added.length) {
    return message.dataset.content = chrome.i18n.getMessage('noMatches');
  }
  // Extract base URL from link, remove duplicate, sorting of domains.
  const domains = [...(new Set(added.map(link => getBaseURL(link))))].sort();
  const reDomains = filteringDomains ? re : null;
  domains.forEach(domain => addNodes(domain, containerDomains, reDomains), onlyDomains);
};

/**
 * Add nodes to container.
 *
 * @function addNodes
 * @param url
 * @param {Node} container
 * @param {object|null} re -- Regular Expression pattern.
 * @param onlyDomains
 * @return {boolean} -- Whether link added into document.
 */
function addNodes(url, container, re, onlyDomains) {
  if (re && !url.match(re)) return false;

  if(onlyDomains === 'true' && container === containerLinks) {
    return true;
  }

  const br = document.createElement('br');
  const a = document.createElement('a');
  a.href = url;
  a.innerText = url;
  container.appendChild(a);
  container.appendChild(br);

  return true;
};

/**
 * Get base URL of link.
 *
 * @function getBaseURL
 * @param {string} link
 */
function getBaseURL(link) {
  const result = link.match(reBaseURL);

  if (!result) {
    return null;
  } else if (result[1]) {
    return `${result[1]}/`;
  } else {
    return `http://${result[2] || result[3]}/`;
  }
};