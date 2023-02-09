import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import MsgDeleteSubspace from '@/models/msg/subspaces/msg_delete_subspace';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const DeleteReport: FC<{ message: MsgDeleteSubspace }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);

  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgDeleteSubspace"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          signer: signerMoniker,
        }}
      />
    </Typography>
  );
};

export default DeleteReport;
