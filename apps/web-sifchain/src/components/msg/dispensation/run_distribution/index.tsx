import Name from '@/components/name';
import MsgRunDistribution from '@/models/msg/dispensation/msg_run_distribution';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import Typography from '@mui/material/Typography';
import Trans from 'next-translate/Trans';
import React, { FC } from 'react';

const RunDistribution: FC<{ message: MsgRunDistribution }> = (props) => {
  const { message } = props;

  const runner = useProfileRecoil(message.authorizedRunner);
  const runnerMoniker = runner ? runner?.name : message.authorizedRunner;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgRunDistribution"
        components={[<Name address={message.authorizedRunner} name={runnerMoniker} />, <b />]}
        values={{
          distributionType: message.distributionType,
        }}
      />
    </Typography>
  );
};

export default RunDistribution;
