import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { AddressDisplay } from '@components';
import { MsgCreateValidator } from '@models';

const CreateValidator = (props: {
  message: MsgCreateValidator;
}) => {
  const { t } = useTranslation(['activities']);
  const { message } = props;

  return (
    <p>
      <span className="address">
        <AddressDisplay address={message.delegatorAddress} />
      </span>
      {t('txCreateValidatorOne')}
      <span className="address">
        <AddressDisplay
          address={message.validatorAddress}
          display={message?.description?.moniker}
        />
      </span>
    </p>
  );
};

export default CreateValidator;
