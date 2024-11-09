import { closeBrowser, initBrowser, screenShot } from "./browser-helper";
import { AlertOptions, Target } from "../types";
import { parsePrice } from "../utils/parser";
import { random } from "../utils/utils";
import { checkDiscountRate } from "../utils/check-alert";
import { processOutputConsole } from "../output-process/output-console";

/**
 * Actions that need to be done before the process.
 */
const initialProcess = (page: any) => {

};

/**
 * Actions that lead to the next process.
 */
const relayProcess = (page: any) => {

};

const getCheckers = (alertOptions: AlertOptions | undefined) => {
  let checkers: Function[] = [];
  if (!alertOptions) {
    return checkers;
  }

  // Add a check functions depending on the alertOptions.
  if (alertOptions.desiredReductionRate !== undefined) {
    checkers.push(checkDiscountRate);
  }
  return checkers;
};

/** 
 * Collect page data required for output and checks.
 */
const collectPageData = async (page: any) => {
  const currentPrice = await page.textContent('#tmm-grid-swatch-KINDLE .slot-price');
  return {
    currentPrice: currentPrice && parsePrice(currentPrice),
  };
};

const processParams = {
    initialProcess,
    relayProcess,
    outputProcess: processOutputConsole,
    getCheckers,
    collectPageData,
}

export default processParams;
