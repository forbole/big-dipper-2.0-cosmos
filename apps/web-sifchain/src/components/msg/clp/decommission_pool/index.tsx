import chainConfig from '@/chainConfig';
import Name from '@/components/name';
import MsgDecommissionPool from '@/models/msg/clp/msg_decommission_pool';
import { useProfileRecoil } from '@/recoil/profiles';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React from 'react';

const { tokenUnits } = chainConfig();

const DecommissionPool: React.FC<{ message: MsgDecommissionPool }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  const symbol = (tokenUnits?.[message.symbol]?.display ?? '').toUpperCase();

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgDecommissionPool"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          symbol,
        }}
      />
    </Typography>
  );
};

export default DecommissionPool;
