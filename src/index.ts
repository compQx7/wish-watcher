import * as fs from 'fs';
import * as path from 'path';
import { eachProcess } from './browse/process';
import config from './config';
import amazonBookParams from './browse/amazon';
import { closeBrowser, initBrowser } from './browse/browser-helper';

(async () => {
  const targetFilesBasePath = path.resolve(__dirname, config.inputDirectory);

  try {
    const page = await initBrowser();

    // Amazon books
    const amazonBooks = JSON.parse(fs.readFileSync(path.resolve(targetFilesBasePath, 'dummy.json'), 'utf-8'));
    // const amazonBooks = JSON.parse(fs.readFileSync(path.resolve(targetFilesBasePath, 'amazon-books.json'), 'utf-8'));
    await eachProcess(page, amazonBooks, amazonBookParams);

    // ...other site processes
  } finally {
    await closeBrowser();
  }
})();
