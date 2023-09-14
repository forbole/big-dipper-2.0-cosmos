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
  type: string[];
  success: boolean;
  timestamp: string;
  messages: {
    count: number;
    items: unknown[];
  };
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
  status: number;
  jailed: boolean;
  condition: number;
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

interface TransactionMsgDelegate {
  typeUrl: '/cosmos.staking.v1beta1.MsgDelegate';
  value: {
    delegatorAddress: string;
    validatorAddress: string;
    amount: { amount: string; denom: string };
  };
}

interface TransactionMsgUndelegate {
  typeUrl: '/cosmos.staking.v1beta1.MsgUndelegate';
  value: {
    delegatorAddress: string;
    validatorAddress: string;
    amount: { amount: string; denom: string };
  };
}

interface TransactionMsgRedelegate {
  typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate';
  value: {
    delegatorAddress: string;
    validatorSrcAddress: string;
    validatorDstAddress: string;
    amount: { amount: string; denom: string };
  };
}

interface TransactionMsgWithdrawReward {
  typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward';
  value: {
    delegatorAddress: string;
    validatorAddress: string;
  };
}

type TransactionMsg =
  | TransactionMsgDelegate
  | TransactionMsgUndelegate
  | TransactionMsgRedelegate
  | TransactionMsgWithdrawReward;

interface Transaction {
  msgs: TransactionMsg[];
  memo: string;
  fee?: {
    amount: Array<{ amount: string; denom: string }>;
    gas: string;
  };
}
