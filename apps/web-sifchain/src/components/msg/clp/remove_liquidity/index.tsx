import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from '@/components/name';
import MsgRemoveLiquidity from '@/models/msg/clp/msg_remove_liquidity';
import { useProfileRecoil } from '@/recoil/profiles';
import chainConfig from '@/chainConfig';

const RemoveLiquidity: React.FC<{ message: MsgRemoveLiquidity }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  const symbol = (
    chainConfig?.tokenUnits?.[message.externalAsset.symbol]?.display ?? ''
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
