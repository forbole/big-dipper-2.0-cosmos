import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgUnjail } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const Unjail = (props: {
  message: MsgUnjail;
}) => {
  const { message } = props;
  const validator = useProfileRecoil(message.validatorAddress);
  const validatorMoniker = validator ? validator?.name : message.validatorAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txUnjailContent"
        components={[
          (
            <Name
              address={message.validatorAddress}
              name={validatorMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default Unjail;
