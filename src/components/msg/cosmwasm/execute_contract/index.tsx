import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import Arguments from './arguments'
import { MsgExecuteContract } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const ExecuteContract = (props: {
    message: MsgExecuteContract;
}) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  const contract = useProfileRecoil(message.contract);
  const contractMoniker = contract ? contract?.name : message.contract;

  return (
    <>
      <Typography>
        <Trans
          i18nKey="message_contents:txExecuteContract"
          components={[
            (
              <Name
                address={message.sender}
                name={senderMoniker}
              />
            ),
            <b />,
            (
              <Name
                address={message.contract}
                name={contractMoniker}
              />
            ),
          ]}
          values={{
            method: message.method,
          }}
        />
      </Typography>
      {message.arguments && <Arguments args={message.arguments} />}
    </>
  );
};

export default ExecuteContract;
