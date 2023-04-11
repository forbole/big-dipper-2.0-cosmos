/* eslint-disable turbo/no-undeclared-env-vars, camelcase, object-curly-newline */
import chainConfig from '@/chainConfig';
import { useTopAccountsQuery } from '@/graphql/types/general_types';
import { UseAccountsState } from '@/screens/accounts/components/list/types';
import Big from 'big.js';
import { useEffect, useMemo, useState } from 'react';

const { primaryTokenUnit, tokenUnits } = chainConfig();
const { exponent } = tokenUnits[primaryTokenUnit] ?? {};
const TOTAL_SUPPLY = Big(process.env.NEXT_PUBLIC_CHEQD_TOTAL_SUPPLY || 163_255_708).toNumber();

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

  /* If there is an error, refetch the data. */
  useEffect(() => {
    if (error) refetch();
  }, [error, refetch]);

  // Format the data returned from the query.
  const items = useMemo(
    () =>
      data?.top_accounts.map((row, i) => ({
        rank: 1 + offset + i,
        address: row.address,
        balance: row.sum ?? 0,
        percentage: Big(row.sum)
          .div(10 ** exponent)
          .div(TOTAL_SUPPLY)
          .toNumber(),
      })),
    [data?.top_accounts, offset]
  );

  const exists = useMemo(() => loading || !!items?.length, [loading, items]);

  return { items, loading, exists, page, setPage, rowsPerPage, setRowsPerPage };
};
