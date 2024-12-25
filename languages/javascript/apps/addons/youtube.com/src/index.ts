function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function deleteLikedVideos() {
  'use strict';
  const items = document.querySelectorAll(
    '#primary ytd-playlist-video-renderer yt-icon-button.dropdown-trigger > button[aria-label]'
  );
  let out;

  for (const item of items) {
    (item as HTMLElement).click();
    out = setTimeout(function () {
      const selector =
        'tp-yt-paper-listbox.style-scope.ytd-menu-popup-renderer';
      if (document.querySelector(selector)?.lastElementChild) {
        (
          document?.querySelector(selector)?.lastElementChild as HTMLElement
        ).click();
      }
    }, 100);
    await sleep(500); // sleep cause browser can not handle the process
    clearTimeout(out);
  }
}

deleteLikedVideos();
