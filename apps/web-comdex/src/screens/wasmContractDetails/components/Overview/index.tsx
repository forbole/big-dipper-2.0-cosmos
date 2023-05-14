import AvatarName from '@/components/avatar_name';
import BoxDetails from '@/components/box_details';
import Timestamp from '@/components/Timestamp';
import { OverviewProps } from '@/screens/wasmContractDetails/types';
import ContractName from '@/screens/wasmContracts/components/ContractName';
import ContractTypeName from '@/screens/wasmContracts/components/ContractTypeName';
import useAppTranslation from '@/hooks/useAppTranslation';
import numeral from 'numeral';
import * as R from 'ramda';
import { FC } from 'react';

const formatExecutes = R.pipe(R.defaultTo(0), numeral, (r) => r.format('0,0'));

const Overview: FC<OverviewProps> = ({ className, overview, codeId, count, executed_at }) => {
  const { t } = useAppTranslation('wasm_contracts');

  if (!overview) return null;
  return (
    <BoxDetails
      className={className}
      title={t('overview') ?? undefined}
      details={[
        {
          key: 'contractName',
          label: t('contractName'),
          detail: <ContractName name={overview.name || overview.label} codeId={codeId} />,
        },
        {
          key: 'contractTypeName',
          label: t('contractTypeName'),
          detail: <ContractTypeName contractInfo={overview.contract_info} />,
        },
        {
          key: 'contractAddress',
          label: t('contractAddress'),
          detail: (
            <AvatarName address={overview.contract_address} name={overview.contract_address} />
          ),
        },
        {
          key: 'height',
          label: t('height'),
          detail: numeral(overview.height).format('0,0'),
        },
        {
          key: 'creator',
          label: t('creator'),
          detail: <AvatarName address={overview.creator} name={overview.creator} />,
        },
        {
          key: 'executes',
          label: t('executes'),
          detail: formatExecutes(count),
        },
        {
          key: 'initiatedAt',
          label: t('initiatedAt'),
          detail: <Timestamp timestamp={overview.instantiated_at} />,
        },
        {
          key: 'lastExecuted',
          label: t('lastExecuted'),
          detail: <Timestamp timestamp={executed_at} />,
        },
      ]}
    />
  );
};

export default Overview;
