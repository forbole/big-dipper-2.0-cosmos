import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgRunDistribution from '@models/sifchain/msg/dispensation/msg_run_distribution';
import { useProfileRecoil } from 'ui/recoil/profiles';

const RunDistribution: React.FC<{ message: MsgRunDistribution }> = (props) => {
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
