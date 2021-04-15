import React from 'react';
import { useTranslation } from 'i18n';
import { AddressDisplay } from '@components';
import { MsgUnjail } from '@models';
import { translationFormatter } from '../../utils';

const Unjail = (props: {
  message: MsgUnjail;
}) => {
  const { t } = useTranslation(['activities']);
  const { message } = props;

  return (
    <p>
      <span className="address">
        <AddressDisplay address={message.validatorAddress} />
      </span>
      {translationFormatter(t('txUnjailOne'), {
        after: false,
      })}
    </p>
  );
};

export default Unjail;
