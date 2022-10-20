import React from 'react';
import classnames from 'classnames';
import { Box } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import {
  AccountsList,
} from './components';
import { AccountsType } from './types';

const Accounts: React.FC<AccountsType & ComponentDefault> = (props) => {
  const { t } = useTranslation('accounts');

  return (
    <Box className={classnames(props.className)}>
      <Typography variant="h2">
        {t('otherVoteAccounts')}
      </Typography>
      <AccountsList
        data={props.addresses}
        count={props.addresses.length}
      />
    </Box>
  );
};

export default Accounts;
