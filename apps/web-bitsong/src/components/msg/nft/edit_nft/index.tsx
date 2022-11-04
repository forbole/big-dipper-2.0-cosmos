import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import { MsgEditNFT } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const EditNFT = (props: {
  message: MsgEditNFT;
}) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txEditNFTContent"
        components={[
          (
            <Name
              address={message.sender}
              name={senderMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          id: message.id,
        }}
      />
    </Typography>
  );
};

export default EditNFT;
