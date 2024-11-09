import { Browser, Page, chromium } from '@playwright/test';
import config from '../config';
import { Target } from '../types';
import path from 'path';

let browser: Browser | null = null;

async function initBrowser(): Promise<Page> {
    if (!browser) {
        browser = await chromium.launch({
            headless: false
        });
    }
    const context = await browser.newContext();
    const page = await context.newPage();
    return page;
};

async function closeBrowser() {
  if (browser) {
    await browser.close();
    browser = null;
  }
};

async function screenShot(page: Page, target: Target) {
  const dir = (config && config.outputDirectory) || './';
  const filename = `${target.title}.png`;
  await page.screenshot({ path: path.join(dir, filename) });
};

export {
  initBrowser,
  closeBrowser,
  screenShot,
};
