import useGrid from '@/hooks/useGrid';

const columns: Parameters<typeof useGrid>[0] = [
  {
    key: 'top_rank',
    width: 5,
  },
  {
    key: 'top_address',
    width: 35,
  },
  {
    key: 'top_dtag',
    width: 20,
  },
  {
    key: 'top_balance',
    width: 20,
  },
  {
    key: 'top_percentage',
    align: 'right',
    width: 20,
  },
];

export const useColumns = () => columns;
