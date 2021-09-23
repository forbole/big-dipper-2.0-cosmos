import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgActivate } from '@models';
import { useChainContext } from '@contexts';

const Activate = (props: {
  message: MsgActivate;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const validator = findAddress(message.validator);
  const validatorMoniker = validator ? validator?.moniker : message
    .validator;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txCreateDataSource"
        components={[
          (
            <Name
              address={message.validator}
              name={validatorMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default Activate;
