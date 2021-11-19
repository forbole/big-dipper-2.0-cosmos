import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgLock } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const Lock = (props: {
  message: MsgLock;
}) => {
  const { message } = props;

  const cosmosSender = useProfileRecoil(message.cosmosSender);
  const cosmosSenderMoniker = cosmosSender ? cosmosSender?.name : message.cosmosSender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgLock"
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

export default Lock;
