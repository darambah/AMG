import { Page, Locator, FrameLocator } from '@playwright/test';
import { LandingLocators as L } from '../locators/landing.locators';

export class LandingPage {
  private contactLink: Locator;
  private aboutLink: Locator;
  private workLink: Locator;

  private pagePopupClose: Locator;

  private videoLauncher: Locator;
  private videoFrame: FrameLocator;
  private videoPauseButton: Locator;
  private videoCloseButton: Locator;

  constructor(private page: Page) {
    this.contactLink      = page.locator(L.nav.contactLink);
    this.aboutLink        = page.locator(L.nav.aboutLink);
    this.workLink         = page.locator(L.nav.workLink);

    this.pagePopupClose   = page.locator(L.pagePopup.closeButton);

    this.videoLauncher    = page.locator(L.videoLauncherXPath);
    this.videoFrame       = page.frameLocator(L.video.iframeSelector);
    this.videoPauseButton = this.videoFrame.getByRole('button', { name: 'Pause' });
    this.videoCloseButton = page.getByRole('button', { name: 'Close (Esc)' });
  }

  async navigateToContact()     { await this.contactLink.click(); }
  async navigateToAbout()       { await this.aboutLink.click(); }
  async navigateToWorkHistory(){ await this.workLink.click(); }

  async clickPagePlayButton()   { await this.videoLauncher.click({ timeout: 15_000 }); }

  async playYouTubeVideo() {
    await this.page.waitForSelector(L.video.iframeSelector, { timeout: 15_000 });
    await this.videoFrame
      .getByRole('button', { name: 'Play' })
      .click({ timeout: 15_000 });
  }

  /** wait X seconds, then pause the video */
  async stopVideoAfter(seconds: number) {
    await this.page.waitForTimeout(seconds * 1000);
    await this.videoPauseButton.click({ timeout: 5_000 });
  }

  /** only close the page-popup modal */
  async closePagePopup() {
    await this.pagePopupClose.waitFor({ state: 'visible', timeout: 15_000 });
    await this.pagePopupClose.click();
    await this.pagePopupClose.waitFor({ state: 'hidden', timeout: 15_000 });
  }

  /** only click the video modal’s Close button */
  async closeVideoPopup() {
    await this.videoCloseButton.waitFor({ state: 'visible', timeout: 15_000 });
    await this.videoCloseButton.click();
    await this.videoCloseButton.waitFor({ state: 'hidden', timeout: 15_000 });
  }
}
