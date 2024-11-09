export const parsePrice = (value: string, currency: string = 'jpy') => {
    const parsed = value.replace(/[^0-9.]/g, '');
    return currency === 'jpy' ? parseInt(parsed) : parseFloat(parsed);
};

export const parsePoint = (value: string) => {
    const parsed = value.replace(/[^0-9.]/g, '');
    return parseFloat(parsed);
};
