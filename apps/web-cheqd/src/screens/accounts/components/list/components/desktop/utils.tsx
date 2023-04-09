import useGrid from '@/hooks/use_cheqd_react_window';

const columns: Parameters<typeof useGrid>[0] = [
  {
    key: 'top_rank',
    width: 5,
  },
  {
    key: 'top_address',
    width: 25,
  },
  {
    key: 'top_dtag',
    width: 30,
  },
  {
    key: 'top_balance',
    width: 30,
  },
  {
    key: 'top_percentage',
    align: 'right',
    width: 15,
  },
];

export const useColumns = () => columns;
