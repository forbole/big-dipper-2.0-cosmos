import Typography from '@mui/material/Typography';
import TransByApp from '@/components/TransByApp';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgRevokeAllowance } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const RevokeAllowance: FC<{ message: MsgRevokeAllowance }> = (props) => {
  const { message } = props;

  const granter = useProfileRecoil(message.granter);
  const granterMoniker = granter ? granter?.name : message.granter;

  const grantee = useProfileRecoil(message.grantee);
  const granteeMoniker = grantee ? grantee?.name : message.grantee;

  return (
    <Typography>
      <TransByApp
        i18nKey="message_contents:MsgRevokeAllowance"
        components={[
          <Name address={message.granter} name={granterMoniker} />,
          <Name address={message.grantee} name={granteeMoniker} />,
        ]}
      />
    </Typography>
  );
};

export default RevokeAllowance;
