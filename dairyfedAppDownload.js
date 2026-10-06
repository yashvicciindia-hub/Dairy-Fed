(function (window, document) {
  "use strict";

  function mountDairyFedAppDownloadCTA() {
    if (document.getElementById("dairyfedAppDownload")) return;

    var container = document.createElement("div");
    container.className = "dairyfed-app-download";
    container.id = "dairyfedAppDownload";

    container.innerHTML =
      '<a href="/DairyFed.apk" download="DairyFed.apk" class="df-app-cta" id="dfAppCtaLink" aria-label="Download DairyFed Android App">' +
        '<div class="df-app-cta__icon-wrapper" aria-hidden="true">' +
          '<svg class="df-app-cta__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
            '<rect x="5" y="2" width="14" height="20" rx="3" ry="3"></rect>' +
            '<path d="M12 18h.01"></path>' +
            '<path d="M12 6v6"></path>' +
            '<path d="m9 9.5 3 3 3-3.5"></path>' +
          '</svg>' +
          '<span class="df-app-cta__pulse"></span>' +
        '</div>' +
        '<div class="df-app-cta__text">' +
          '<span class="df-app-cta__label">Download App</span>' +
          '<span class="df-app-cta__hover-label">Download DairyFed App</span>' +
          '<span class="df-app-cta__sub">Android App</span>' +
        '</div>' +
        '<div class="df-app-cta__arrow" aria-hidden="true">' +
          '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' +
            '<path d="M12 5v14M19 12l-7 7-7-7"/>' +
          '</svg>' +
        '</div>' +
      '</a>';

    document.body.appendChild(container);
  }

  window.DairyFedAppDownloadCTA = {
    mount: mountDairyFedAppDownloadCTA
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountDairyFedAppDownloadCTA);
  } else {
    mountDairyFedAppDownloadCTA();
  }
})(window, document);
