import { InstantiatePermissionProps, zInstantiatePermission } from '@/screens/wasmContracts/types';
import { FC } from 'react';
import AvatarName from 'ui/src/components/avatar_name';

// refer: https://github.com/CosmWasm/wasmd/blob/main/docs/proto/proto-docs.md
const AccessType = {
  ACCESS_TYPE_UNSPECIFIED: 0,
  // AccessTypeNobody forbidden
  ACCESS_TYPE_NOBODY: 1,
  // AccessTypeOnlyAddress restricted to a single address
  // Deprecated: use AccessTypeAnyOfAddresses instead
  ACCESS_TYPE_ONLY_ADDRESS: 2,
  // AccessTypeEverybody unrestricted
  ACCESS_TYPE_EVERYBODY: 3,
  // AccessTypeAnyOfAddresses allow any of the addresses
  ACCESS_TYPE_ANY_OF_ADDRESSES: 4,
};

const CodeInstantiatePermission: FC<InstantiatePermissionProps> = ({ instantiatePermission }) => {
  const { permission, address, addresses } =
    zInstantiatePermission.optional().parse(instantiatePermission) ?? {};
  switch (permission) {
    case AccessType.ACCESS_TYPE_NOBODY:
      return <span>Access Type: Forbidden</span>;
    case AccessType.ACCESS_TYPE_ONLY_ADDRESS:
      return (
        <span>
          Access Type: Restricted to
          {!!address && <AvatarName address={address} name={address} />}
          {!!addresses &&
            addresses
              .split(/[\n,\s]/g)
              .filter((a) => a)
              .map((a) => <AvatarName address={a} name={a} />)}
          {!address && 'a single address'}
        </span>
      );
    case AccessType.ACCESS_TYPE_EVERYBODY:
      return <span>Access Type: Evenybody</span>;
    case AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES:
      return (
        <span>
          Access Type: Any of addreses
          {!!address && <AvatarName address={address} name={address} />}
          {!!addresses &&
            addresses
              .split(/[\n,\s]/g)
              .filter((a) => a)
              .map((a) => <AvatarName address={a} name={a} />)}
        </span>
      );
    case AccessType.ACCESS_TYPE_UNSPECIFIED:
    default:
      return <span>Access Type: Unspecified</span>;
  }
};

export default CodeInstantiatePermission;
