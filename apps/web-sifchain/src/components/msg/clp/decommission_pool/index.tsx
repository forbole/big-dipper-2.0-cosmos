import React from 'react';
import * as R from 'ramda';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgDecommissionPool from '@models/sifchain/msg/clp/msg_decommission_pool';
import { useProfileRecoil } from 'ui/recoil/profiles';
import chainConfig from 'ui/chainConfig';

const DecommissionPool: React.FC<{ message: MsgDecommissionPool }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  const symbol = R.pathOr('', ['tokenUnits', message.symbol, 'display'], chainConfig).toUpperCase();

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
