/**
 * Util to help me correctly transform a base denom amount
 * in to a display denom amount
 * @param value the current amount
 * @param denom the denom to convert the amount in to
 * @returns TokenUnit
 */
export declare const formatToken: (value: number | string, denom?: string) => TokenUnit;
/**
 * Util to help me correctly transform a base denom amount
 * in to a display denom amount
 * @param value the current amount
 * @param exponent the exponent to div by
 * @returns string value of formatted
 */
export declare const formatTokenByExponent: (value: number | string, exponent?: number) => string;
/**
 * Mostly used for formatting tokens as javascript being javascript,
 * cannot handle tokens with 18 decimal places
 * @param tokenUnit string
 * @param toFixed defaults null
 * @returns formatted number with all the decimal places one can wish for
 */
export declare const formatNumber: (tokenUnit: string, toFixed?: number | null) => string;
/**
 * takes in a number string and removes any lingering 0s
 * ex - 100 -> 1
 * @param value number string
 * @returns a string without lingering 0
 */
export declare const removeEndingZeros: (value: string) => string;
//# sourceMappingURL=index.d.ts.map