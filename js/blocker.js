const adElements = document.querySelectorAll(
  '.ad, [id*="ad"], [class*="ad"], [class*="google_image_div"], [id*="google_image_div"]'
);
adElements.forEach((element) => {
  element.style.display = "none";
});
