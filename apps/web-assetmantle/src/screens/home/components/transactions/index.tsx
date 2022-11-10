import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Typography, Divider } from '@material-ui/core';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { TRANSACTIONS } from 'ui/utils/go_to_page';
import Box from '@components/box';
import NoData from '@components/no_data';
import { useScreenSize } from '@hooks';
import { useStyles } from './styles';
import { useTransactions } from './hooks';
import type DesktopType from './components/desktop';
import type MobileType from './components/mobile';

const Desktop = dynamic(() => import('./components/desktop')) as typeof DesktopType;
const Mobile = dynamic(() => import('./components/mobile')) as typeof MobileType;

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
