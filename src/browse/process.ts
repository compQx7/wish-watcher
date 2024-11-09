import { screenShot } from "./browser-helper";
import { AlertOptions, Target } from "../types";
import { random } from "../utils/utils";

interface EachProcessParams {
  collectPageData: (page: any) => any
  getCheckers: (alertOptions: AlertOptions | undefined) => Function[];
  outputProcess: (target: Target, pageData: any, alert: any) => void;
  initialProcess?: (page: any) => void;
  relayProcess?: (page: any) => void;
}

const eachProcess = async (
  page: any,
  targets: Target[],
  processParams: EachProcessParams
) => {
  const {
    collectPageData,
    getCheckers,
    outputProcess,
    initialProcess,
    relayProcess,
  } = processParams;

  for (const target of targets) {
    // TOOD: delete
    if (target.title !== targets[1].title) continue;

    if (initialProcess) {
      initialProcess(page);
    }

    await page.goto(target.url);

    // Screenshot if necessary.
    if (target.alertOptions?.screenshot) {
      await screenShot(page, target);
    }

    const pageData = await collectPageData(page);

    // Check alert conditions.
    const checkers = getCheckers(target.alertOptions);
    const alert = checkers.every(check => check(target, pageData));

    outputProcess(target, pageData, alert);

    if (relayProcess) {
      relayProcess(page);
    }

    await page.waitForTimeout(random(5302, 11039));
  };
};

export {
  eachProcess,
}
