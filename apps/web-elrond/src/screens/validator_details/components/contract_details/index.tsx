import React from 'react';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import BoxDetails from '@components/box_details';
import AvatarName from '@components/avatar_name';
import { formatNumber } from '@utils/format_token';
import { ContractType } from '../../types';

const ContractDetails: React.FC<{contract: ContractType} & ComponentDefault> = (props) => {
  const { t } = useTranslation('validators');
  const details = [
    {
      label: t('address'),
      detail: (
        <AvatarName
          address={props.contract.address}
          name={props.contract.address}
        />
      ),
    },
    {
      label: t('commission'),
      detail: `${numeral(props.contract.commission * 100).format('0,0.[00]')}%`,
    },
    {
      label: t('delegators'),
      detail: numeral(props.contract.delegators).format('0,0'),
    },
    {
      label: t('nodes'),
      detail: numeral(props.contract.nodes).format('0,0'),
    },
    {
      label: t('apr'),
      detail: `${props.contract.apr}%`,
    },
    {
      label: t('locked'),
      detail: `${formatNumber(props.contract.locked.value, 2)} ${props.contract.locked.displayDenom.toUpperCase()}`,
    },
    {
      label: t('delegation'),
      detail: `${formatNumber(props.contract.locked.value, 2)} ${props.contract.locked.displayDenom.toUpperCase()} / ${formatNumber(props.contract.delegationCap.value, 2)} ${props.contract.delegationCap.displayDenom.toUpperCase()}`,
    },
  ];

  return (
    <BoxDetails
      className={props.className}
      title={t('contract')}
      details={details}
    />
  );
};

export default ContractDetails;
