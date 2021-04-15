import React from 'react';
import numeral from 'numeral';
import { useTranslation } from 'i18n';
import Link from 'next/link';
import { handleClick } from './utils';
import { ProposalDisplayProps } from './types';

const ProposalDisplay = (props: ProposalDisplayProps) => {
  const { t } = useTranslation(['proposals']);
  const {
    title,
    proposalId,
  } = props;

  const display = title ?? `${t('proposal')} #${numeral(proposalId).format('0,0')}`;

  return (
    <Link href={`/proposals/${proposalId}`}>
      <a onClick={handleClick} role="button">
        {display}
      </a>
    </Link>
  );
};

export default ProposalDisplay;
