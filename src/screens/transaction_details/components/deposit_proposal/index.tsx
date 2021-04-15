import React from 'react';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import numeral from 'numeral';
import { Name } from '@components';
import { MsgDeposit } from '@models';
import { chainConfig } from '@src/chain_config';
import { formatDenom } from '@utils/format_denom';
import { useChainContext } from '@contexts';
import { PROPOSAL_DETAILS } from '@utils/go_to_page';

const DepositProposal = (props: {
  message: MsgDeposit;
}) => {
  const { findAddress } = useChainContext();
  const { t } = useTranslation('transactions');
  const { message } = props;

  const parsedAmount = message?.amount?.map((x) => {
    return `${numeral(formatDenom(x.amount)).format('0,0.[0000]')} ${chainConfig.display.toUpperCase()}`;
  }).reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value);

  const depositor = findAddress(message.depositor);
  const depositorMoniker = depositor ? depositor?.moniker : message.depositor;

  const Proposal = () => {
    return (
      <Link href={PROPOSAL_DETAILS(message.proposalId)} passHref>
        <Typography component="a">
          #1
        </Typography>
      </Link>
    );
  };
  return (
    <Typography>
      <Trans
        i18nKey="transactions:txDepositContent"
        components={[
          (
            <Name
              address={message.depositor}
              name={depositorMoniker}
            />
          ),
          <b />,
          (
            <Proposal />
          ),
        ]}
        values={{
          amount: parsedAmount,
        }}
      />
    </Typography>
  );
};

export default DepositProposal;
