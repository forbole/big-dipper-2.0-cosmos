import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Details,
  AvatarName,
} from '@components';
import {
  formatToken, formatNumber,
} from '@utils/format_token';
import { chainConfig } from '@configs';
import { InstructionTransfer } from '@models';
import { getProgramLabel } from '../../../utils';

const Transfer: React.FC<{
  instruction: InstructionTransfer
} & ComponentDefault> = (props) => {
  const { t } = useTranslation('instructions');
  const lamports = formatToken(props.instruction.lamports, chainConfig.primaryTokenUnit);
  const formattedLamports = `${formatNumber(lamports.value, lamports.exponent)} ${lamports.displayDenom.toUpperCase()}`;

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
          name={props.instruction.source}
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
    {
      label: t('lamports'),
      detail: formattedLamports,
    },
  ];

  return (
    <Details details={details} />
  );
};

export default Transfer;
