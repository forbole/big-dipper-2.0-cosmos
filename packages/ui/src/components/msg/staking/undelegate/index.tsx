import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import { MsgUndelegate } from '@models';
import { useProfileRecoil } from 'ui/recoil/profiles';
import { formatToken, formatNumber } from 'ui/utils/format_token';

const Undelegate: React.FC<{ message: MsgUndelegate }> = (props) => {
  const { message } = props;
  const amount = formatToken(message.amount.amount, message.amount.denom);

  const parsedAmount = `${formatNumber(
    amount.value,
    amount.exponent
  )} ${amount.displayDenom.toUpperCase()}`;

  const delegator = useProfileRecoil(message.delegatorAddress);
  const delegatorMoniker = delegator ? delegator?.name : message.delegatorAddress;

  const validator = useProfileRecoil(message.validatorAddress);
  const validatorMoniker = validator ? validator?.name : message.validatorAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txUndelegateContent"
        components={[
          <Name address={message.delegatorAddress} name={delegatorMoniker} />,
          <b />,
          <Name address={message.validatorAddress} name={validatorMoniker} />,
        ]}
        values={{
          amount: parsedAmount,
        }}
      />
    </Typography>
  );
};

export default Undelegate;
