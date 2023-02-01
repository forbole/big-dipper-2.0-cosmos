import chainConfig from '@/chainConfig';
import { atomState } from '@/recoil/market';
import useStyles from '@/screens/assets/styles';
import { formatNumber } from '@/utils/format_token';
import CircularProgress from '@mui/material/CircularProgress';
import Big from 'big.js';
import yaml from 'js-yaml';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';

const { tokenUnits } = chainConfig();

const Supply: FC<{ supply: string }> = ({ supply }) => {
  const { classes } = useStyles();
  const { price } = useRecoilValue(atomState);

  try {
    const [{ Amount, Denom }] = JSON.parse(supply) as Array<{ Amount: number; Denom: string }>;
    if (Denom in tokenUnits) {
      return (
        <div className={classes.supply}>
          {formatNumber(
            Big(Amount)
              .div(10 ** tokenUnits[Denom].exponent)
              .toString()
          )}
          {price === null ? (
            <CircularProgress disableShrink />
          ) : (
            <>
              <br />
              {`$${formatNumber(
                Big(price)
                  .mul(Amount)
                  .div(10 ** tokenUnits[Denom].exponent)
                  .toString(),
                2
              )}`}
            </>
          )}
        </div>
      );
    }
    return <div className={classes.supply}>{formatNumber(Big(Amount).toString())}</div>;
  } catch (error) {
    try {
      return <pre className={classes.supply}>{yaml.dump(JSON.parse(supply))}</pre>;
    } catch (error2) {
      return <pre className={classes.supply}>{supply}</pre>;
    }
  }
};

export default Supply;
