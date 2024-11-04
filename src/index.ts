import * as fs from 'fs';
import * as path from 'path';
import { commonConfig } from './config';
import { closeBrowser, initBrowser } from './browser_helper';
import { processOutputConsole } from './output-process/output_console';
import { relayProcess, processAmazonBooks } from './amazon/process';

(async () => {
  // Amazon books
  // const targets = JSON.parse(fs.readFileSync(path.resolve(__dirname, './input/amazon-books.json'), 'utf-8'));
  const targets = JSON.parse(fs.readFileSync(path.resolve(__dirname, './input/dummy.json'), 'utf-8'));
  await processAmazonBooks(
    targets, {
      processOutput: processOutputConsole,
      ...commonConfig,
    },
    relayProcess
  );
})();
