/**
 * util to conver nano to seconds
 * @param nano
 * @returns seconds
 */
export const nanoToSeconds = (nano: number) => nano / 1000000000;

/**
 * Util to convert seconds to days
 * @param seconds
 * @returns days
 */
export const secondsToDays = (seconds: number) => seconds / (3600 * 24);
