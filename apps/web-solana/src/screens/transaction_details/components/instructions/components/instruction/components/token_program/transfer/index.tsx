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
import { TokenProgramTransfer } from '@models';
import { getProgramLabel } from '../../../utils';

const Transfer: React.FC<{
  instruction: TokenProgramTransfer
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
      label: t('authority'),
      detail: (
        <AvatarName
          address={props.instruction.authority}
          name={props.instruction.authority}
        />
      ),
    },
    {
      label: t('destination'),
      detail: (
        <AvatarName
          address={props.instruction.destination}
          name={props.instruction.destination}
        />
      ),
    },
  ];

  return (
    <Details details={details} />
  );
};

export default Transfer;
