browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "checkPinned") {
    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log(tabs);
      const currentTab = tabs[0];
      sendResponse({ isPinned: currentTab.pinned });
    });
    return true;
  }
});
