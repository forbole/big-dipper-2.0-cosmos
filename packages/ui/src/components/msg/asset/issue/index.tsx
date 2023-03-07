import { FC } from 'react';
import { useProfileRecoil } from '@/recoil/profiles';
import { Typography } from '@mui/material';
import { Trans } from 'react-i18next';
import Name from '@/components/name';
import { MsgIssue } from '@/models';

const Issue: FC<{ message: MsgIssue }> = (props) => {
  const { message } = props;

  const issuer = useProfileRecoil(message.issuer);

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:msgIssueContent"
        components={[<Name address={message.issuer} name={issuer.name ?? message.issuer} />, <b />]}
        values={{
          issuer: message.issuer,
          amount: message.initial_amount,
          symbol: message.symbol,
        }}
      />
    </Typography>
  );
};

export default Issue;
