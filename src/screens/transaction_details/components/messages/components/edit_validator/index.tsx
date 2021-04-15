import React from 'react';
import { useTranslation } from 'i18n';
import { AddressDisplay } from '@components';
import { MsgEditValidator } from '@models';
import { translationFormatter } from '../../utils';

const EditValidator = (props: {
  message: MsgEditValidator;
}) => {
  const { t } = useTranslation(['activities']);
  const { message } = props;

  return (
    <p>
      <span className="address">
        <AddressDisplay
          address={message.validatorAddress}
          display={message?.description?.moniker}
        />
      </span>
      {translationFormatter(t('txEditValidatorOne'), {
        after: false,
      })}
    </p>
  );
};

export default EditValidator;
