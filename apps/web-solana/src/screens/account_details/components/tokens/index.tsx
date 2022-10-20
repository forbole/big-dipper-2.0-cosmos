import React from 'react';
import classnames from 'classnames';
import {
  Box, Loading,
} from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { useTokens } from './hooks';
import { TokensList } from './components';

const Tokens: React.FC<ComponentDefault> = (props) => {
  const { t } = useTranslation('accounts');
  const { state } = useTokens();

  if (!state.loading && !state.tokens.length) {
    return null;
  }

  return (
    <Box className={classnames(props.className)}>
      <Typography variant="h2">
        {t('tokens')}
      </Typography>
      {state.loading ? (
        <Loading />
      ) : (
        <TokensList
          data={state.tokens}
          count={state.tokens.length}
        />
      )}
    </Box>
  );
};

export default Tokens;
