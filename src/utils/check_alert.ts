export const checkDiscountRate = (alertRate: number, discountRate: number) => {
    if (discountRate < 0 || discountRate > 100) {
        return false;
    }
    return true;
}
