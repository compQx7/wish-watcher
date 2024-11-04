import { closeBrowser, initBrowser } from "../browser_helper";
import { parsePrice } from "../utils/parser";
import { random } from "../utils/utils";

export const relayProcess = () => {
  // 次の処理への橋渡し処理
};

export const getCheckers = (alertOptions: any) => {
  return (currentPrice: number) => {
    if (alertOptions?.desired_reduction_price) {
      return currentPrice < alertOptions.desired_reduction_price;
    }
    return false;
  };
}

export const processAmazonBooks = async (targets: any, config: any, intermediateFunction: Function) => {
  const { processOutput } = config;
  try {
    const page = await initBrowser();
    for (const target of targets) {
      await page.goto(target.url);

      if (target.alertOptions?.desired_reduction_price) {
        // id: tmm-grid-swatch-KINDLE > class: slot-price を取得する
        const discountedPrice = await page.textContent('#tmm-grid-swatch-KINDLE .slot-price');
        console.log(discountedPrice && parsePrice(discountedPrice));
        // id: tmm-grid-swatch-PAPERBACK
      }

      const title = await page.title();
      processOutput(target, { currentPrice: title });
      await page.screenshot({ path: `../output/${target.title}.png` });

      if (intermediateFunction) {
        intermediateFunction();
      }

      await page.waitForTimeout(random(5302, 11039));
    };
  } finally {
    await closeBrowser();
  }
};
