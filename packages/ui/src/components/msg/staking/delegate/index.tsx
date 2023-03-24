import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import { type MsgDelegate } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatNumber, formatToken } from '@/utils/format_token';

const Delegate: FC<{ message: MsgDelegate }> = (props) => {
  const { message } = props;
  const delegator = useProfileRecoil(message.delegatorAddress);
  const delegatorMoniker = delegator ? delegator?.name : message.delegatorAddress;

  const validator = useProfileRecoil(message.validatorAddress);
  const validatorMoniker = validator ? validator?.name : message.validatorAddress;
  const amount = formatToken(message.amount?.amount, message.amount?.denom);

  const parsedAmount = `${formatNumber(
    amount.value,
    amount.exponent
    //Kept the "toUpperCase()" in order to show the token symbol in uppercase
  )} ${amount.displayDenom.toUpperCase()}`;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txDelegateContent"
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

export default Delegate;
