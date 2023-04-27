/* eslint-disable turbo/no-undeclared-env-vars, camelcase, object-curly-newline */
import chainConfig from '@/chainConfig';
import { readMarket } from '@/recoil/market/selectors';
import { useTopAccountsQuery } from '@/graphql/types/general_types';
import { UseAccountsState } from '@/screens/accounts/components/list/types';
import Big from 'big.js';
import { useEffect, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';

const { primaryTokenUnit, tokenUnits } = chainConfig();
const { exponent } = tokenUnits[primaryTokenUnit] ?? {};

/**
 * `useAccounts` is a custom hook that will be used to fetch the top accounts.
 * @returns An object with the following properties:
 * - data: The data returned from the query.
 * - error: The error returned from the query.
 * - loading: A boolean indicating whether the query is loading.
 * - page: The current page.
 * - handlePageChange: A function to change the current page.
 * - rowsPerPage: The number of rows per page.
 * - handleRowsPerPageChange: A function to change the number of rows per page.
 */
export const useAccounts = (): UseAccountsState => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);

  const offset = page * rowsPerPage;

  // Fetch the top accounts.
  const { data, error, loading, refetch } = useTopAccountsQuery({
    variables: {
      offset,
      limit: rowsPerPage,
    },
  });
  const { supply } = useRecoilValue(readMarket);

  /* If there is an error, refetch the data. */
  useEffect(() => {
    if (error) refetch();
  }, [error, refetch]);

  // Format the data returned from the query.
  const items = useMemo(
    () =>
      data?.top_accounts
        .filter(({ type }) => type !== 'cosmos.auth.v1beta1.ModuleAccount')
        .map((row, i) => ({
          rank: 1 + offset + i,
          address: row.address,
          balance: row.sum ?? 0,
          percentage: row.sum
            ? Big(row.sum)
                .mul(100)
                .div(10 ** exponent)
                .div(supply.value)
                .toNumber()
            : 0,
        })),
    [data?.top_accounts, offset, supply.value]
  );

  const exists = useMemo(() => loading || !!items?.length, [loading, items]);

  return { items, loading, exists, page, setPage, rowsPerPage, setRowsPerPage };
};
