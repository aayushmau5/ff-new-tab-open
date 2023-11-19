// content.js
function addBlankTargetToLinks() {
  browser.runtime.sendMessage({ action: "checkPinned" }, (response) => {
    console.log(response);
    if (response && response.isPinned) {
      const links = document.querySelectorAll('a');
      console.log(links);
      links.forEach(link => {
        // Check if the 'target' attribute is not already present
        if (!link.hasAttribute('target')) {
          link.setAttribute('target', '_blank');
        }
      });
    }
  });
}

// Run the function when the DOM is ready
// document.addEventListener('DOMContentLoaded', addBlankTargetToLinks);
addBlankTargetToLinks();
