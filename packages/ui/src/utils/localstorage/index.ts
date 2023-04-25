const isClient = typeof window === 'object';

/**
 * Util to get item from localstorage
 * @param key
 * @param value
 * @returns the localstorage item
 */
export const getItem = <P>(key: string, value: P): P => {
  if (isClient) {
    const persistedString = localStorage.getItem(key);
    if (persistedString === null) {
      return value;
    }

    const persistedValue = JSON.parse(persistedString);
    return persistedValue;
  }
  return value;
};

/**
 * Util to set item in to localstorage
 * @param key
 * @param value
 */
export const setItem = <P>(key: string, value: P) => {
  if (isClient) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// ================================
// Current keys in localstorage
// ================================
export const THEME_KEY = 'themeSelection';
export const DATE_KEY = 'dateFormatSelection';
export const TX_KEY = 'txListFormatSelection';
export const TIME_FORMAT_KEY = 'timeFormatSelection';
export const ADDRESS_KEY = 'userAddress';
export const PUBKEY_KEY = 'userPubKey';
export const WALLET_NAME_KEY = 'userWalletName';
export const CONNECTION_TYPE = 'connectionType';
