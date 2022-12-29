import Name from '@/components/name';
import { MsgDeposit } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatNumber, formatToken } from '@/utils/format_token';
import { PROPOSAL_DETAILS } from '@/utils/go_to_page';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React, { FC, useCallback } from 'react';

const DepositProposal: FC<{ message: MsgDeposit }> = (props) => {
  const { t } = useTranslation('transactions');
  const { message } = props;

  const parsedAmount = message?.amount
    ?.map((x) => {
      const amount = formatToken(x.amount, x.denom);
      return `${formatNumber(amount.value, amount.exponent)} ${amount.displayDenom.toUpperCase()}`;
    })
    .reduce(
      (text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value
    );

  const depositor = useProfileRecoil(message.depositor);
  const depositorMoniker = depositor ? depositor?.name : message.depositor;

  const Proposal = useCallback(
    () => (
      <Link href={PROPOSAL_DETAILS(message.proposalId)} passHref>
        <Typography component="a">#{message.proposalId}</Typography>
      </Link>
    ),
    [message.proposalId]
  );
  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txDepositContent"
        components={[
          <Name address={message.depositor} name={depositorMoniker} />,
          <b />,
          <Proposal />,
        ]}
        values={{
          amount: parsedAmount,
        }}
      />
    </Typography>
  );
};

export default DepositProposal;
