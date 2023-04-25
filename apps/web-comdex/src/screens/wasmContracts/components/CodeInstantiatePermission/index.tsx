import { InstantiatePermissionProps, zInstantiatePermission } from '@/screens/wasmContracts/types';
import { FC } from 'react';
import AvatarName from 'ui/src/components/avatar_name';

const CodeInstantiatePermission: FC<InstantiatePermissionProps> = ({ instantiatePermission }) => {
  const { permission, address, addresses } =
    zInstantiatePermission.optional().parse(instantiatePermission) ?? {};

  return (
    <span>
      Access Type: {permission || 'Unspecified'}
      {!!address && <AvatarName address={address} name={address} />}
      {!!addresses &&
        addresses
          .split(/[\n,\s]/g)
          .filter((a) => a)
          .map((a) => <AvatarName address={a} name={a} />)}
    </span>
  );
};

export default CodeInstantiatePermission;
