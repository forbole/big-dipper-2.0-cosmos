import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgGrantAllowance } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const GrantAllowance: FC<{ message: MsgGrantAllowance }> = (props) => {
  const { message } = props;

  const granter = useProfileRecoil(message.granter);
  const granterMoniker = granter ? granter?.name : message.granter;

  const grantee = useProfileRecoil(message.grantee);
  const granteeMoniker = grantee ? grantee?.name : message.grantee;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:MsgGrantAllowance"
        components={[
          <Name address={message.granter} name={granterMoniker} />,
          <Name address={message.grantee} name={granteeMoniker} />,
        ]}
      />
    </Typography>
  );
};

export default GrantAllowance;
