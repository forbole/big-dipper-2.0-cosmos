import Box from '@/components/box';
import NoData from '@/components/no_data';
import { useScreenSize } from '@/hooks';
import { useTransactions } from '@/screens/home/components/transactions/hooks';
import { useStyles } from '@/screens/home/components/transactions/styles';
import { TRANSACTIONS } from '@/utils/go_to_page';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';

const Desktop = dynamic(() => import('@/screens/home/components/transactions/components/desktop'));
const Mobile = dynamic(() => import('@/screens/home/components/transactions/components/mobile'));

const Transactions: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { isDesktop } = useScreenSize();
  const { t } = useTranslation('home');
  const { state } = useTransactions();
  const classes = useStyles();
  return (
    <Box className={classnames(className, classes.root)}>
      <div className={classes.label}>
        <Typography variant="h2">{t('latestTransactions')}</Typography>
        <Link href={TRANSACTIONS} passHref>
          <Typography variant="h4" className="button" component="a" aria-label="see more txs">
            {t('seeMore')}
          </Typography>
        </Link>
      </div>
      {!state.items.length ? (
        <NoData />
      ) : (
        <>
          {isDesktop ? (
            <Desktop className={classes.desktop} items={state.items} />
          ) : (
            <Mobile className={classes.mobile} items={state.items} />
          )}
          <Divider className={classes.mobile} />
          <Link href={TRANSACTIONS} passHref>
            <Typography
              variant="h4"
              component="a"
              aria-label="see more txs"
              className={classnames(classes.seeMoreFooter, classes.mobile, 'button')}
            >
              {t('seeMore')}
            </Typography>
          </Link>
        </>
      )}
    </Box>
  );
};

export default Transactions;
