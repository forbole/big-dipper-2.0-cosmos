import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import { MsgRedelegate } from '@models';
import { useProfileRecoil } from '@recoil/profiles';
import { formatToken, formatNumber } from 'ui/utils/format_token';

const Redelegate: React.FC<{ message: MsgRedelegate }> = (props) => {
  const { message } = props;
  const amount = formatToken(message.amount.amount, message.amount.denom);

  const parsedAmount = `${formatNumber(
    amount.value,
    amount.exponent
  )} ${amount.displayDenom.toUpperCase()}`;

  const delegator = useProfileRecoil(message.delegatorAddress);
  const delegatorMoniker = delegator ? delegator?.name : message.delegatorAddress;

  const from = useProfileRecoil(message.validatorSrcAddress);
  const fromMoniker = from ? from?.name : message.validatorSrcAddress;

  const to = useProfileRecoil(message.validatorDstAddress);
  const toMoniker = to ? to?.name : message.validatorDstAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txRedelegateContent"
        components={[
          <Name address={message.delegatorAddress} name={delegatorMoniker} />,
          <b />,
          <Name address={message.validatorSrcAddress} name={fromMoniker} />,
          <Name address={message.validatorDstAddress} name={toMoniker} />,
        ]}
        values={{
          amount: parsedAmount,
        }}
      />
    </Typography>
  );
};

export default Redelegate;
