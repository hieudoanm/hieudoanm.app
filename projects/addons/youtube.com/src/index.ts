function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function deleteLikedVideos() {
  'use strict';
  const items = document.querySelectorAll(
    '#primary ytd-playlist-video-renderer yt-icon-button.dropdown-trigger > button[aria-label]'
  );
  let out;

  for (let i = 0; i < items.length; i++) {
    (items[i] as HTMLElement).click();
    out = setTimeout(function() {
      if (
        document.querySelector(
          'tp-yt-paper-listbox.style-scope.ytd-menu-popup-renderer'
        )?.lastElementChild
      ) {
        document
          .querySelector(
            'tp-yt-paper-listbox.style-scope.ytd-menu-popup-renderer'
          )
          ?.lastElementChild.click();
      }
    }, 100);
    await sleep(500); // sleep cause browser can not handle the process
    clearTimeout(out);
  }
}

deleteLikedVideos();
