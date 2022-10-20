import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import {
  Details,
  AvatarName,
} from '@components';
import {
  formatToken, formatNumber,
} from '@utils/format_token';
import { chainConfig } from '@configs';
import { InstructionCreateAccount } from '@models';
import { getProgramLabel } from '../../../utils';

const CreateAccount: React.FC<{
  instruction: InstructionCreateAccount
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
      label: t('newAccount'),
      detail: (
        <AvatarName
          address={props.instruction.newAccount}
          name={props.instruction.newAccount}
        />
      ),
    },
    {
      label: t('lamports'),
      detail: formattedLamports,
    },
    {
      label: t('space'),
      detail: numeral(props.instruction.space).format('0,0'),
    },
    {
      label: t('owner'),
      detail: (
        <AvatarName
          address={props.instruction.owner}
          name={getProgramLabel(props.instruction.owner, props.instruction.owner)}
        />
      ),
    },
  ];

  return (
    <Details details={details} />
  );
};

export default CreateAccount;
