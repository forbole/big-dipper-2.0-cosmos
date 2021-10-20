import React from 'react';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgIssueDenom } from '@models';
import { useChainContext } from '@contexts';
import { ListNames } from './components';

const IssueDenom = (props: {
  message: MsgIssueDenom ;
}) => {
  const { message } = props;
  const { creators } = message;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txIssueDenomContent"
        components={[
          (
            <ListNames creators={creators} />
          ),
        ]}
      />

    </Typography>
  );
};

export default IssueDenom;
