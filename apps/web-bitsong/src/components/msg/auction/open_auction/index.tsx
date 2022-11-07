import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import { MsgOpenAuction } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const OpenAuction = (props: { message: MsgOpenAuction }) => {
  const { message } = props;

  const owner = useProfileRecoil(message.owner);
  const ownerMoniker = owner ? owner?.name : message.owner;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgOpenAuction"
        components={[<Name address={message.owner} name={ownerMoniker} />, <b />]}
        values={{
          nftId: message.nftId,
        }}
      />
    </Typography>
  );
};

export default OpenAuction;