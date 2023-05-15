import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgEditSubspace from '@/models/msg/subspaces/msg_edit_subspace';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const EditSubspace: FC<{ message: MsgEditSubspace }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);

  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgEditSubspace"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          signer: signerMoniker,
          description: message.description,
        }}
      />
    </Typography>
  );
};

export default EditSubspace;
