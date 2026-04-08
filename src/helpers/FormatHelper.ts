
const aznFormatter = new Intl.NumberFormat('az-AZ', {
    style: 'currency',
    currency: 'AZN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

export const formatAZN = (val: number | string): string => {
    const num = typeof val === 'string' ? parseFloat(val) : val;

    if (isNaN(num)) return '0,00 ₼';

    return aznFormatter.format(num);
};

export default formatAZN;