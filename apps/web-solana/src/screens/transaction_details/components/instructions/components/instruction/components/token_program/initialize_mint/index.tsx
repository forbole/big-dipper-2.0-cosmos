import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Details,
  AvatarName,
} from '@components';
import { TokenProgramInitializeMint } from '@models';
import { getProgramLabel } from '../../../utils';

const InitializeMint: React.FC<{
  instruction: TokenProgramInitializeMint
} & ComponentDefault> = (props) => {
  const { t } = useTranslation('instructions');

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
      label: t('mint'),
      detail: (
        <AvatarName
          address={props.instruction.mint}
          name={props.instruction.mint}
        />
      ),
    },
    {
      label: t('decimals'),
      detail: props.instruction.decimals,
    },
    {
      label: t('rentSysvar'),
      detail: (
        <AvatarName
          address={props.instruction.rentSysvar}
          name={props.instruction.rentSysvar}
        />
      ),
    },
    {
      label: t('mintAuthority'),
      detail: (
        <AvatarName
          address={props.instruction.mintAuthority}
          name={props.instruction.mintAuthority}
        />
      ),
    },
  ];

  return (
    <Details details={details} />
  );
};

export default InitializeMint;
