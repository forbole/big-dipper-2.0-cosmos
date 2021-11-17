import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgRescueCeth } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const RescueCeth = (props: {
  message: MsgRescueCeth;
}) => {
  const { message } = props;

  const cosmosSender = useProfileRecoil(message.cosmosSender);
  const cosmosSenderMoniker = cosmosSender ? cosmosSender?.name : message.cosmosSender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgRescueCeth"
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

export default RescueCeth;
