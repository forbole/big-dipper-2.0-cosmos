import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Details,
  AvatarName,
} from '@components';
import {
  formatNumber,
  formatTokenByExponent,
} from '@utils/format_token';
import { TokenProgramApprove } from '@models';
import { getProgramLabel } from '../../../utils';

const Approve: React.FC<{
  instruction: TokenProgramApprove
} & ComponentDefault> = (props) => {
  const { t } = useTranslation('instructions');
  const amount = formatTokenByExponent(props.instruction.amount, props.instruction.decimal);
  const formattedAmount = `${formatNumber(amount, props.instruction.decimal)} ${props.instruction.denom.toUpperCase()}`;

  const details = [
    {
      label: t('program'),
      detail: (
        <AvatarName
          address={props.instruction.program}
          name={getProgramLabel(props.instruction.program)}
        />
      ),
    },
    {
      label: t('source'),
      detail: (
        <AvatarName
          address={props.instruction.source}
          name={props.instruction.denom.toUpperCase()}
        />
      ),
    },
    {
      label: t('amount'),
      detail: formattedAmount,
    },
    {
      label: t('delegate'),
      detail: (
        <AvatarName
          address={props.instruction.delegate}
          name={props.instruction.delegate}
        />
      ),
    },
    {
      label: t('owner'),
      detail: (
        <AvatarName
          address={props.instruction.owner}
          name={props.instruction.owner}
        />
      ),
    },
  ];

  return (
    <Details details={details} />
  );
};

export default Approve;
