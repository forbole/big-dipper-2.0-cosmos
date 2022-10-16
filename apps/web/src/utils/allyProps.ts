/**
 * Mui helper to return allyProps tabs
 * @param index the index of the tab
 * @returns an object with `id` and `aria-controls`
 */
export const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};
