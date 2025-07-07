export const LandingLocators = {
  //landing page locators
  nav: {
    contactLink: 'a[href="#contact"]',
    aboutLink:   'a[href="#about"]',
    workLink:    'a[href="#service"]',
  },

  pagePopup: {
    // pop-up close
    closeButton: 'button.page-popup-close'
  },

  videoLauncherXPath: 'xpath=//*[@id="home"]/div/div[1]/div[3]/div/div[2]/div/a',

  video: {
    iframeSelector: 'iframe[src*="youtube"]',
    pauseButton:    'button[aria-label="Pause"]',
    closeButton:    'button#myBannerClose, .modal .close-x',
  }
};
