import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgMoveSection from '@/models/msg/subspaces/msg_move_section';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const MoveSection: FC<{ message: MsgMoveSection }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);

  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgMoveSection"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          signer: signerMoniker,
        }}
      />
    </Typography>
  );
};

export default MoveSection;
