/**
 * `ItemType` is returned by the `useAccounts` hook.
 * @property {number} rank - The rank of the address in the top 100 addresses.
 * @property {string} address - The address of the account
 * @property {number} balance - The balance of the address in the token.
 * @property {number} percentage - The percentage of the total supply that the address holds.
 */
export type ItemType = {
  rank: number;
  address: string;
  balance: number;
  percentage: number;
};

/**
 * `UseAccountsState` is the return type of the `useAccounts` hook.
 * @property items - Array<ItemType>;
 * @property {boolean} loading - boolean - A boolean indicating whether the query is loading
 * or not.
 * @property {boolean} exists - boolean;
 * @property {number} page - The current page number.
 * @property setPage - Function to be called when the user changes the page.
 * @property {number} rowsPerPage - number;
 * @property setRowsPerPage - Function to be called when the user changes rowsPerPage;
 */
export type UseAccountsState = {
  items: Array<ItemType> | undefined;
  loading: boolean;
  exists: boolean;
  page: number;
  setPage: (page: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (rowsPerPage: number) => void;
};
