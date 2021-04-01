import React from 'react';
import Link from 'next/link';
import {
  Typography, Divider,
} from '@material-ui/core';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { TRANSACTIONS } from '@utils/go_to_page';
import {
  Box, NoData,
} from '@components';
import {
  Desktop, Mobile,
} from './components';
import { useStyles } from './styles';
import { TransactionsProvider } from './contexts/transactions';

const Transactions: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('home');
  const classes = useStyles();
  return (
    <TransactionsProvider>
      {({ isEmpty }) => {
        return (
          <Box className={classnames(className, classes.root)}>
            <div className={classes.label}>
              <Typography variant="h2">
                {t('latestTransactions')}
              </Typography>
              <Link href={TRANSACTIONS} passHref>
                <Typography variant="h4" className="button" component="a">
                  {t('seeMore')}
                </Typography>
              </Link>
            </div>
            {isEmpty ? (
              <NoData />
            ) : (
              <>
                <Mobile className={classes.mobile} />
                <Desktop className={classes.desktop} />
                <Divider className={classes.mobile} />
                <Link href={TRANSACTIONS} passHref>
                  <Typography variant="h4" component="a" className={classnames(classes.seeMoreFooter, classes.mobile, 'button')}>
                    {t('seeMore')}
                  </Typography>
                </Link>
              </>
            )}
          </Box>
        );
      }}
    </TransactionsProvider>
  );
};

export default Transactions;
