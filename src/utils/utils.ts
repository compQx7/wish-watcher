import config from "../config";

/**
 * Generate a random number between min and max.
 * 
 * @param min The minimum number.
 * @param max The maximum number.
 * @returns A random number between min and max.
 */
export const random = (min: number, max: number) => {
  if (max < min) {
    throw new Error('Maximum sleep time is less than minimum sleep time');
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Sleep for a random amount of time between min and max milliseconds.
 * 
 * @param min The minimum amount of time to sleep in milliseconds.
 * @param max The maximum amount of time to sleep in milliseconds.
 * @returns A promise that resolves after the sleep time.
 */
export const sleep = async (min: number, max: number) => {
  // 念のため少ない数字が指定された場合はエラーを投げる
  if (min < 1001 || max < 1001) {
    throw new Error('Minimum sleep time is less than 1001 milliseconds');
  }
  if (min < config.minimumWaitTime) {
    min = config.minimumWaitTime;
    max = min + config.minimumWaitTime - min;
  }
  return new Promise((resolve) => setTimeout(resolve, random(min, max)));
};
