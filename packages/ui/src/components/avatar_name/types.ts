export type AvatarNameProps = AvatarName &
  JSX.IntrinsicElements['div'] & {
    location?: 'delegationRow' | 'redelegationRow' | 'unbondingRow';
    noLink?: boolean;
  };
