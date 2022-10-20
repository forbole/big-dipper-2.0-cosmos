import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Details,
  AvatarName,
} from '@components';
import { TokenProgramRevoke } from '@models';
import { getProgramLabel } from '../../../utils';

const Approve: React.FC<{
  instruction: TokenProgramRevoke
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
      label: t('source'),
      detail: (
        <AvatarName
          address={props.instruction.source}
          name={props.instruction.source}
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
