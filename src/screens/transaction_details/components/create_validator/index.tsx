import React from 'react';
import { useTranslation } from 'i18n';
import { AddressDisplay } from '@components';
import { MsgCreateValidator } from '@models';
import { translationFormatter } from '../../utils';

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
      {translationFormatter(t('txCreateValidatorOne'))}
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
