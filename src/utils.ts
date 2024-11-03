/**
 * Generate a random number between min and max.
 * 
 * @param min The minimum number.
 * @param max The maximum number.
 * @returns A random number between min and max.
 */
export const random = (min: number, max: number) => {
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
  await new Promise((resolve) => setTimeout(resolve, random(min, max)));
};

// 金額をパースする
export const parsePrice = (price: string, currency: string = 'jpy') => {
    // ￥3,665 から 3665 に変換
    const parsed = price.replace(/[^0-9]/g, '');
    return currency === 'jpy' ? parseInt(parsed) : parseFloat(parsed);
};
