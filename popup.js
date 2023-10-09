const closePopup = () => {
  setTimeout(() => {
    window.close();
  }, 700);
};

const sendMessageToActiveTab = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {}, (res) => {
      closePopup();
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle");
  toggleButton.addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "toggle" });
  });

  sendMessageToActiveTab();
});
