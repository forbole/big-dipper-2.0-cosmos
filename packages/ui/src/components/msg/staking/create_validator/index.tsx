import Name from '@/components/name';
import { MsgCreateValidator } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import Typography from '@mui/material/Typography';
import Trans from 'next-translate/Trans';
import React, { FC } from 'react';

const CreateValidator: FC<{ message: MsgCreateValidator }> = (props) => {
  const { message } = props;

  const delegator = useProfileRecoil(message.delegatorAddress);
  const delegatorMoniker = delegator ? delegator?.name : message.delegatorAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txCreateValidatorContent"
        components={[
          <Name address={message.delegatorAddress} name={delegatorMoniker} />,
          <Name
            address={message.validatorAddress}
            name={message?.description?.moniker || message.validatorAddress}
          />,
        ]}
      />
    </Typography>
  );
};

export default CreateValidator;
