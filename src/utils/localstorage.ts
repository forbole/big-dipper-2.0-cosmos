export const getItem = <P>(key: string, value: P): P => {
  const persistedString = localStorage.getItem(key);
  if (persistedString === null) {
    return value;
  }
  const persistedValue = JSON.parse(persistedString);
  return persistedValue;
};
