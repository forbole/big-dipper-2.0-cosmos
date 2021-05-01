export const replaceNaN = (format: string, base = '0') => {
  return format.replace('NaN', base).replace('Infinity', '100');
};
