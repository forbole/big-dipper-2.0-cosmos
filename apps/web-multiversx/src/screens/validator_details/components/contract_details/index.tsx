import { FC } from 'react';
import numeral from 'numeral';
import useAppTranslation from '@/hooks/useAppTranslation';
import BoxDetails from '@/components/box_details';
import AvatarName from '@/components/avatar_name';
import { formatNumber } from '@/utils/format_token';
import type { ContractType } from '@/screens/validator_details/types';

const ContractDetails: FC<{ className?: string; contract: ContractType }> = (props) => {
  const { t } = useAppTranslation('validators');
  const details = [
    {
      key: 'address',
      label: t('address'),
      detail: <AvatarName address={props.contract.address} name={props.contract.address} />,
    },
    {
      key: 'commission',
      label: t('commission'),
      detail: `${numeral(props.contract.commission * 100).format('0,0.[00]')}%`,
    },
    {
      key: 'delegators',
      label: t('delegators'),
      detail: numeral(props.contract.delegators).format('0,0'),
    },
    {
      key: 'nodes',
      label: t('nodes'),
      detail: numeral(props.contract.nodes).format('0,0'),
    },
    {
      key: 'apr',
      label: t('apr'),
      detail: `${props.contract.apr}%`,
    },
    {
      key: 'locked',
      label: t('locked'),
      detail: `${formatNumber(
        props.contract.locked.value,
        2
      )} ${props.contract.locked.displayDenom.toUpperCase()}`,
    },
    {
      key: 'delegation',
      label: t('delegation'),
      detail: `${formatNumber(
        props.contract.locked.value,
        2
      )} ${props.contract.locked.displayDenom.toUpperCase()} / ${formatNumber(
        props.contract.delegationCap.value,
        2
      )} ${props.contract.delegationCap.displayDenom.toUpperCase()}`,
    },
  ];

  return (
    <BoxDetails className={props.className} title={t('contract') ?? undefined} details={details} />
  );
};

export default ContractDetails;
