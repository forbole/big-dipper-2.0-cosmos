import React from 'react';
import * as R from 'ramda';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgRemoveLiquidity from '@models/sifchain/msg/clp/msg_remove_liquidity';
import { useProfileRecoil } from 'ui/recoil/profiles';
import chainConfig from 'ui/chainConfig';

const RemoveLiquidity: React.FC<{ message: MsgRemoveLiquidity }> = (props) => {
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
