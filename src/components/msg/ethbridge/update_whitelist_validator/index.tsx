import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgUpdateWhiteListValidator } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const UpdateWhiteListValidator = (props: {
  message: MsgUpdateWhiteListValidator;
}) => {
  const { message } = props;

  const cosmosSender = useProfileRecoil(message.cosmosSender);
  const cosmosSenderMoniker = cosmosSender ? cosmosSender?.name : message.cosmosSender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgUpdateWhiteListValidator"
        components={[
          (
            <Name
              address={message.cosmosSender}
              name={cosmosSenderMoniker}
            />
          ),
          <b />,
        ]}
      />
    </Typography>
  );
};

export default UpdateWhiteListValidator;
