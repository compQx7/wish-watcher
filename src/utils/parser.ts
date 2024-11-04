// 金額をパースする
export const parsePrice = (value: string, currency: string = 'jpy') => {
    // ￥3,665 から 3665 に変換
    const parsed = value.replace(/[^0-9]/g, '');
    return currency === 'jpy' ? parseInt(parsed) : parseFloat(parsed);
};

export const parsePoint = (value: string) => {
    return value.replace(/[^0-9]/g, '');
};
