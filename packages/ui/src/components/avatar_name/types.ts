export type AvatarNameProps = AvatarName &
  JSX.IntrinsicElements['div'] & {
    location?: 'delegationRow' | 'redelegationRow' | 'unboundingRow';
    noLink?: boolean;
  };
