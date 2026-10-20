const OPTIONS_PAGE = "options.html";

function createOptionsTab() {
  chrome.tabs.create({ url: chrome.runtime.getURL(OPTIONS_PAGE) });
}

function openSettings() {
  try {
    const result = chrome.runtime.openOptionsPage();
    if (result && typeof result.catch === "function") {
      result.catch(createOptionsTab);
    }
  } catch {
    createOptionsTab();
  }
}

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    openSettings();
  }
});

chrome.action.onClicked.addListener(openSettings);
