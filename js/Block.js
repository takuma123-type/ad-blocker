const adBlock = () => {
  const baseUrls = [
    "https://yt3.ggpht.com/ytc/APkrFKa2X9oS3Z08OTPavY2Xapfg-iBjCoNF4G2XD2JV8w=s48-c-k-c0x00ffffff-no-rj",
    "https://i.ytimg.com/vi/5SUVOIelSBA/",
  ];

  const imageTypes = [
    "hqdefault.jpg",
    "mqdefault.jpg",
    "default.jpg",
    "sddefault.jpg",
    "maxresdefault.jpg",
    "hq720.jpg",
    "hq720_live.jpg",
    "hqdefault_live.jpg",
    "mqdefault_live.jpg",
    "default_live.jpg",
    "sddefault_live.jpg",
    "maxresdefault_live.jpg",
    "hq720_live_webp.jpg",
    "hqdefault_live_webp.jpg",
    "mqdefault_live_webp.jpg",
    "default_live_webp.jpg",
    "sddefault_live_webp.jpg",
    "maxresdefault_live_webp.jpg",
    "hq720_webp.jpg",
    "hqdefault_webp.jpg",
    "mqdefault_webp.jpg",
    "default_webp.jpg",
    "sddefault_webp.jpg",
    "maxresdefault_webp.jpg",
  ];

  const removeElements = (selector) => {
    document.querySelectorAll(selector).forEach((el) => el.remove());
  };

  baseUrls.forEach((baseUrl) => {
    if (baseUrl.endsWith("/")) {
      imageTypes.forEach((type) => {
        removeElements(`img[src='${baseUrl}${type}']`);
      });
    } else {
      removeElements(`img[src='${baseUrl}']`);
    }
  });
};

adBlock();
