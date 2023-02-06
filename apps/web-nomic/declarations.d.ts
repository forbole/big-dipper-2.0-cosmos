declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.svg?url';
declare module '*.gif';
declare module '*.woff2';

type Override<T1, T2> = Omit<T1, keyof T2> & T2;

interface ComponentDefault {
  className?: string;
}
interface AvatarName {
  className?: string;
  imageUrl?: string | null;
  address: string;
  name: string;
  href?: (address: string) => string;
  image?: React.ReactNode;
  target?: JSX.IntrinsicElements['a']['target'];
}

type Transactions = {
  height: number;
  hash: string;
  timestamp: string;
};

type TokenUnit = {
  displayDenom: string;
  baseDenom: string;
  exponent: number;
  value: string;
};

type ProfileConnectionType = {
  network: string;
  identifier: string;
  creationTime: string;
};

type ValidatorProfile = {
  inActiveSet: string;
  jailed: string;
  commission: number;
  signedBlockWindow: number;
  missedBlockCounter: number;
  lastSeen: string;
};

type DesmosProfile = {
  dtag: string;
  nickname: string;
  imageUrl: string;
  coverUrl: string;
  bio: string;
  connections: ProfileConnectionType[];
  validator?: ValidatorProfile;
};

type TagTheme =
  | 'zero'
  | 'one'
  | 'two'
  | 'three'
  | 'four'
  | 'five'
  | 'six'
  | 'seven'
  | 'eight'
  | 'nine'
  | 'ten'
  | 'eleven'
  | 'twelve'
  | 'thirteen'
  | 'fourteen'
  | 'fifteen'
  | 'sixteen'
  | 'seventeen'
  | 'eighteen'
  | 'nineteen'
  | 'twenty';

type MsgCoin = {
  denom: string;
  amount: string;
};
