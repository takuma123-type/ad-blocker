const adBlock = () => {
  const removeElements = (selector) => {
    document.querySelectorAll(selector).forEach((el) => el.remove());
  };

  removeElements("iframe");
  removeElements(".yjAdImage");
  removeElements(".yadsOverlay");
};

const onPageLoad = () => {
  adBlock();
  setTimeout(adBlock, 3000);
  setTimeout(adBlock, 5000);
};

document.addEventListener("DOMContentLoaded", onPageLoad);
window.addEventListener("load", onPageLoad);
chrome.runtime.onMessage.addListener(adBlock);
