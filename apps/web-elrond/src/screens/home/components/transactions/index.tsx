import Box from '@/components/box';
import NoData from '@/components/no_data';
import { useScreenSize } from '@/hooks';
import Desktop from '@/screens/home/components/transactions/components/desktop';
import Mobile from '@/screens/home/components/transactions/components/mobile';
import { useBlocks } from '@/screens/home/components/transactions/hooks';
import useStyles from '@/screens/home/components/transactions/styles';
import { TRANSACTIONS } from '@/utils/go_to_page';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { FC } from 'react';

const Transactions: FC<ComponentDefault> = (props) => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('home');
  const { isDesktop } = useScreenSize();
  const { state } = useBlocks();
  return (
    <Box className={props.className}>
      <div className={classes.label}>
        <Typography variant="h2">{t('latestTransactions')}</Typography>
        <Link href={TRANSACTIONS} className="button" aria-label="see more txs">
          {t('seeMore')}
        </Link>
      </div>
      {!state.items.length ? (
        <NoData />
      ) : (
        <>
          {isDesktop ? <Desktop items={state.items} /> : <Mobile items={state.items} />}
          <Divider className={classes.mobile} />
          <Link
            href={TRANSACTIONS}
            className={cx(classes.seeMoreFooter, classes.mobile, 'button')}
            aria-label="see more txs"
          >
            {t('seeMore')}
          </Link>
        </>
      )}
    </Box>
  );
};

export default Transactions;
