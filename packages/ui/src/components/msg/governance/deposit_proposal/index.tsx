import Name from '@/components/name';
import { MsgDeposit } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatNumber, formatToken } from '@/utils/format_token';
import { PROPOSAL_DETAILS } from '@/utils/go_to_page';
import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link, { LinkProps } from 'next/link';
import { FC, PropsWithChildren } from 'react';

const LinkText: FC<PropsWithChildren<{ href: LinkProps['href'] }>> = (props) => {
  const { href, children } = props;
  return (
    <Link shallow href={href || ''}>
      {children}
    </Link>
  );
};

const DepositProposal: FC<{ message: MsgDeposit }> = (props) => {
  const { t } = useAppTranslation('transactions');
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

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txDepositContent"
        components={[
          <Name address={message.depositor} name={depositorMoniker} />,
          <b />,
          <LinkText href={PROPOSAL_DETAILS(message.proposalId)}>#{message.proposalId}</LinkText>,
        ]}
        values={{
          amount: parsedAmount,
          proposal: message.proposalId,
        }}
      />
    </Typography>
  );
};

export default DepositProposal;
