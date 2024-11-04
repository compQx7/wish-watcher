import { Browser, Page, chromium } from '@playwright/test';

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
}

async function closeBrowser() {
  if (browser) {
    await browser.close();
    browser = null;
  }
}

export {
  initBrowser,
  closeBrowser,
};
