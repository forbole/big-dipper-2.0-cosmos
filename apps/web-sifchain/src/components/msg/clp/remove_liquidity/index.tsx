import React from 'react';
import * as R from 'ramda';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import { MsgRemoveLiquidity } from '@models';
import { useProfileRecoil } from '@recoil/profiles';
import chainConfig from 'ui/dist/chainConfig';

const RemoveLiquidity = (props: { message: MsgRemoveLiquidity }) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  const symbol = R.pathOr(
    '',
    ['tokenUnits', message.externalAsset.symbol, 'display'],
    chainConfig
  ).toUpperCase();
  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgRemoveLiquidity"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          symbol,
        }}
      />
    </Typography>
  );
};

export default RemoveLiquidity;
