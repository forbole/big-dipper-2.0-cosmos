import Name from '@/components/name';
import { MsgDeposit } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatNumber, formatToken } from '@/utils/format_token';
import { PROPOSAL_DETAILS } from '@/utils/go_to_page';
import Typography from '@mui/material/Typography';
import { Trans, useTranslation } from 'next-i18next';
import Link from 'next/link';
import { FC, useMemo } from 'react';

const DepositProposal: FC<{ message: MsgDeposit }> = (props) => {
  const { t } = useTranslation('transactions');
  const { message } = props;

  const parsedAmount = message?.amount
    ?.map((x) => {
      const amount = formatToken(x.amount, x.denom);
      //Kept the "toUpperCase()" in order to show the token symbol in uppercase
      return `${formatNumber(amount.value, amount.exponent)} ${amount.displayDenom.toUpperCase()}`;
    })
    .reduce(
      (text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value
    );

  const depositor = useProfileRecoil(message.depositor);
  const depositorMoniker = depositor ? depositor?.name : message.depositor;

  const Proposal = useMemo(
    () => (
      <Link shallow href={PROPOSAL_DETAILS(message.proposalId)}>
        #{message.proposalId}
      </Link>
    ),
    [message.proposalId]
  );
  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txDepositContent"
        components={[<Name address={message.depositor} name={depositorMoniker} />, <b />, Proposal]}
        values={{
          amount: parsedAmount,
        }}
      />
    </Typography>
  );
};

export default DepositProposal;
