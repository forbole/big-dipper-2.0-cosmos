import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import { MsgRunDistribution } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const RunDistribution = (props: { message: MsgRunDistribution }) => {
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
