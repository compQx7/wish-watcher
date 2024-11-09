import { checkDiscountRate } from "../../src/utils/check-alert";

describe('checkDiscountRate', () => {
    test.each([
      {
        targetData: {
          alertOptions: {
            listPrice: 100,
            desired_reduction_price: 10
          },
        },
        pageData: { currentPrice: 90 },
        expected: true,
      },
    ])('$targetData.alertOptions', ({targetData, pageData, expected}) => {
      expect(checkDiscountRate(targetData, pageData)).toBe(expected);
    });
});
