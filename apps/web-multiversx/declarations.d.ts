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
interface AvatarName extends ComponentDefault {
  imageUrl?: string | null;
  address: string;
  name: string;
  href?: (address: string) => string;
}

type TransactionType = {
  hash: string;
  fromShard: number;
  toShard: number;
  from: string;
  to: string;
  timestamp: number;
  status: string;
};

type BlockType = {
  block: number; // round
  timestamp: number;
  txs: number;
  shard: number;
  size: number;
  hash: string;
};

// type Transactions = {
//   height: number;
//   hash: string;
//   success: boolean;
//   timestamp: string;
//   messages: {
//     count: number;
//     items: unknown[];
//   };
// }

type TokenUnit = {
  displayDenom: string;
  baseDenom: string;
  exponent: number;
  value: string;
};

// type DesmosProfile = {
//   dtag: string;
//   nickname: string;
//   imageUrl: string;
//   coverUrl: string;
//   bio: string;
//   connections: ProfileConnectionType[];
//   validator?: ValidatorProfile;
// }

// type ProfileConnectionType = {
//   network: string;
//   identifier: string;
//   creationTime: string;
// }

// type ValidatorProfile = {
//   status: number;
//   jailed: boolean;
//   condition: number;
//   commission: number;
//   signedBlockWindow: number;
//   missedBlockCounter: number;
//   lastSeen: string;
// }

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
