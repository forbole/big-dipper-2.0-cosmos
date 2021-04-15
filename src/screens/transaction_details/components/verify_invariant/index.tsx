import React from 'react';
import { useTranslation } from 'i18n';
import { AddressDisplay } from '@components';
import { MsgVerifyInvariant } from '@models';
import { translationFormatter } from '../../utils';

const VerifyInvariant = (props: {
  message: MsgVerifyInvariant;
}) => {
  const { t } = useTranslation(['activities']);
  const { message } = props;

  return (
    <p>
      <span className="address">
        <AddressDisplay address={message.sender} />
      </span>
      {translationFormatter(t('txVerifyInvariantOne'), {
        after: false,
      })}
    </p>
  );
};

export default VerifyInvariant;
