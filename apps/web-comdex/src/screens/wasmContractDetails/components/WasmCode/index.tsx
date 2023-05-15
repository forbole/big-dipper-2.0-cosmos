import AvatarName from '@/components/avatar_name';
import BoxDetails from '@/components/box_details';
import { WasmCodeProps } from '@/screens/wasmContractDetails/types';
import CodeId from '@/screens/wasmContracts/components/CodeId';
import CodeInstantiatePermission from '@/screens/wasmContracts/components/CodeInstantiatePermission';
import useAppTranslation from '@/hooks/useAppTranslation';
import numeral from 'numeral';
import { FC } from 'react';

const WasmCode: FC<WasmCodeProps> = ({ className, wasmCode }) => {
  const { t } = useAppTranslation('wasm_contracts');

  return (
    <BoxDetails
      className={className}
      title={t('wasmCode') ?? undefined}
      details={[
        {
          key: 'id',
          label: t('id'),
          detail: <CodeId codeId={wasmCode.code_id} />,
        },
        {
          key: 'height',
          label: t('height'),
          detail: numeral(wasmCode.height).format('0,0'),
        },
        {
          key: 'instantiatePermission',
          label: t('instantiatePermission'),
          detail: (
            <CodeInstantiatePermission instantiatePermission={wasmCode.instantiate_permission} />
          ),
        },
        {
          key: 'sender',
          label: t('sender'),
          detail: !!wasmCode.sender && (
            <AvatarName address={wasmCode.sender} name={wasmCode.sender} />
          ),
        },
      ]}
    />
  );
};

export default WasmCode;
