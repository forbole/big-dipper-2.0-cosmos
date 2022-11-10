declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.svg?url';
declare module '*.gif';
declare module '*.woff2';

type TokenUnit = {
  displayDenom: string;
  baseDenom: string;
  exponent: number;
  value: string;
};

type MsgCoin = {
  denom: string;
  amount: string;
};

interface AvatarName {
  className?: string;
  imageUrl?: string | null;
  address: string;
  name: string;
  href?: (address: string) => string;
}

type DesmosProfile = {
  dtag: string;
  nickname: string;
  imageUrl: string;
  coverUrl: string;
  bio: string;
  connections: ProfileConnectionType[];
  validator?: ValidatorProfile;
};
