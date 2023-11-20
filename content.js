function addBlankTargetToLinks() {
  browser.runtime.sendMessage({ action: "checkPinned" }, (response) => {
    if (response && response.isPinned) {
      const links = document.querySelectorAll("a");

      links.forEach((link) => {
        // ignore links that start with "#"
        if (!link.getAttribute("href").startsWith("#")) {
          // Check if the 'target' attribute is not already present
          if (!link.hasAttribute("target")) {
            link.setAttribute("target", "_blank");
          }
        }
      });
    }
  });
}

// document.addEventListener('DOMContentLoaded', addBlankTargetToLinks);
addBlankTargetToLinks();
