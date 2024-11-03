import { chromium } from '@playwright/test';
import { parsePrice, random } from './utils';

// jsonファイルを読み込む
import * as fs from 'fs';
import * as path from 'path';
const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'site.json'), 'utf-8'));
const {
  url,
} = json[0];

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(url);

  // id: tmm-grid-swatch-KINDLE > class: slot-price を取得する
  const price = await page.textContent('#tmm-grid-swatch-KINDLE .slot-price');
  console.log(price && parsePrice(price));
  // id: tmm-grid-swatch-PAPERBACK

  await page.screenshot({ path: './output/screenshot.png' });
  await page.waitForTimeout(random(5302, 11039));
  await browser.close();
})();

const process = (page: any, url: string, fn: Function) => {

}
