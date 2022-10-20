import React from 'react';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import dayjs, { formatDayJs } from '@utils/dayjs';
import {
  Details,
  AvatarName,
} from '@components';
import { VoteProgramVote } from '@models';
import { useRecoilValue } from 'recoil';
import { readDate } from '@recoil/settings';
import { getProgramLabel } from '../../../utils';

const Vote: React.FC<{
  instruction: VoteProgramVote
} & ComponentDefault> = (props) => {
  const { t } = useTranslation('instructions');
  const dateFormat = useRecoilValue(readDate);

  const slots = props.instruction.slots.map((x) => {
    return numeral(x).format('0,0');
  }).reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('common:and')} `) + value);

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
      label: t('voteAccount'),
      detail: (
        <AvatarName
          address={props.instruction.voteAccount}
          name={props.instruction.voteAccount}
        />
      ),
    },
    {
      label: t('slotHashesSysvar'),
      detail: (
        <AvatarName
          address={props.instruction.slotHashesSysvar}
          name={props.instruction.slotHashesSysvar}
        />
      ),
    },
    {
      label: t('clockSysvar'),
      detail: (
        <AvatarName
          address={props.instruction.clockSysvar}
          name={props.instruction.clockSysvar}
        />
      ),
    },
    {
      label: t('voteAuthority'),
      detail: (
        <AvatarName
          address={props.instruction.voteAuthority}
          name={props.instruction.voteAuthority}
        />
      ),
    },
    {
      label: t('hash'),
      detail: props.instruction.hash,
    },
    {
      label: t('timestamp'),
      detail: formatDayJs(dayjs.utc(dayjs.unix(props.instruction.timestamp)), dateFormat),
    },
    {
      label: t('slots'),
      detail: slots,
    },
  ];

  return (
    <Details details={details} />
  );
};

export default Vote;
