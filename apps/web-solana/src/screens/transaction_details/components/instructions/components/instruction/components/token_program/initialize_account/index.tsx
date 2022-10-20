import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Details,
  AvatarName,
} from '@components';
import { TokenProgramInitializeAccount } from '@models';
import { getProgramLabel } from '../../../utils';

const InitializeAccount: React.FC<{
  instruction: TokenProgramInitializeAccount
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
      label: t('owner'),
      detail: (
        <AvatarName
          address={props.instruction.owner}
          name={props.instruction.owner}
        />
      ),
    },
    {
      label: t('account'),
      detail: (
        <AvatarName
          address={props.instruction.account}
          name={props.instruction.account}
        />
      ),
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
  ];

  return (
    <Details details={details} />
  );
};

export default InitializeAccount;
