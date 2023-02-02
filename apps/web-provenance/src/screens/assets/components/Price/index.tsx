import chainConfig from '@/chainConfig';
import { atomState } from '@/recoil/market';
import { PriceProps } from '@/screens/assets/types';
import { formatNumber } from '@/utils/format_token';
import CircularProgress from '@mui/material/CircularProgress';
import Big from 'big.js';
import { memo, ReactNode } from 'react';
import { useRecoilValue } from 'recoil';

const { tokenUnits } = chainConfig();

const Price = memo(({ denom }: PriceProps) => {
  const { price } = useRecoilValue(atomState);
  let content: ReactNode = null;
  if (denom in tokenUnits) {
    if (price === null) {
      content = <CircularProgress disableShrink />;
    } else {
      content = `$${formatNumber(Big(price).toString(), 2)}`;
    }
  }
  return <div>{content}</div>;
});

export default Price;
