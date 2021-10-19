export const getItem = <P>(key: string, defaultValue: P): P => {
  const persistedString = localStorage.getItem(key);
  if (persistedString === null) {
    return defaultValue;
  }
  return JSON.parse(persistedString);
};

export const setItem = <P>(key: string, value: P) => {
  localStorage.setItem(key, JSON.stringify(value));
  return true;
};
