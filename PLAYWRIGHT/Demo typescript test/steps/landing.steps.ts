import * as dotenv from 'dotenv';
import {
  setDefaultTimeout,
  BeforeAll,
  AfterAll,
  Before,
  Given,
  When,
  Then,
} from '@cucumber/cucumber';
import { chromium, Browser, Page, expect } from '@playwright/test';
import { LandingPage } from '../pages/landingpages';

dotenv.config();
setDefaultTimeout(90 * 1000);

const BASE_URL = process.env.BASE_URL!;

let browser: Browser;
let page: Page;
let landing: LandingPage;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  landing = new LandingPage(page);
});

AfterAll(async function () {
  await browser.close();
});

Before(async function () {
  landing = new LandingPage(page);
});

Given('I open the landing page', async function () {
  await page.goto(`${BASE_URL}/`, { waitUntil: 'load' });
});

When('I go to {string}', async function (section: string) {
  switch (section) {
    case 'Contact':
      await landing.navigateToContact();
      break;
    case 'About Me':
      await landing.navigateToAbout();
      break;
    case 'Work History':
      await landing.navigateToWorkHistory();
      break;
    default:
      throw new Error(`Unknown section "${section}"`);
  }
});

Then('I should see URL fragment {string}', async function (fragment: string) {
  // fragment comes in as "#contact", "#about", "#service"
  await expect(page).toHaveURL(new RegExp(`${fragment}$`));
});

When('I click the play button on the page', async function () {
  await landing.clickPagePlayButton();
});

When('I play the YouTube video', async function () {
  await landing.playYouTubeVideo();
});

Then('the popup should appear', async function () {
  await expect(
    page.getByRole('button', { name: 'Close (Esc)' })
  ).toBeVisible();
});

//allow video to play for 2 seconds
When('I stop the video after {int} seconds', async function (seconds: 4000) {
  await landing.stopVideoAfter(seconds);
});

When('I close the pop-up page', async function () {
  await landing.closePagePopup();
});

//closes pop up
When('I close the video popup', async function () {
  await landing.closeVideoPopup();
});


Then('the popup should disappear', async function () {
  await expect(
    page.getByRole('button', { name: 'Close (Esc)' })
  ).toHaveCount(0);
});
