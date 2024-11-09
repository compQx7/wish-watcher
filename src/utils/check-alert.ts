export const checkDiscountRate = (targetData: any, pageData: any) => {
    const { 
        listPrice,
        desired_reduction_price,
    } = targetData.alertOptions;
    const currentPrice = pageData.currentPrice;
    if (targetData.alertOptions.listPrice === undefined) {
        throw new Error('listPrice is not defined in the target information.');
    }
    if (!pageData.currentPrice) {
        throw new Error('currentPrice is not found.');
    }
    const discount = (listPrice - currentPrice) / listPrice * 100;
    return desired_reduction_price! <= discount;
}
