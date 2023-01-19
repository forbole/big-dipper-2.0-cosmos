import Typography from '@mui/material/Typography';
import Trans from 'next-translate/Trans';
import { FC } from 'react';
import chainConfig from '@/chainConfig';
import Name from '@/components/name';
import MsgRemoveLiquidity from '@/models/msg/clp/msg_remove_liquidity';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const { tokenUnits } = chainConfig();

const RemoveLiquidity: FC<{ message: MsgRemoveLiquidity }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  const symbol = (tokenUnits?.[message.externalAsset.symbol]?.display ?? '').toUpperCase();
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
