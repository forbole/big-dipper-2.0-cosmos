export const getItem = <P>(key: string, value: P): P => {
  const isClient = typeof window === 'object';
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

export const setItem = <P>(key: string, value: P) => {
  const isClient = typeof window === 'object';
  if (isClient) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const THEME_KEY = 'themeSelection';
export const DATE_KEY = 'dateFormatSelection';
export const TX_KEY = 'txListFormatSelection';
