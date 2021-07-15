declare module 'react-spring';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';

type ComponentDefault = {
  className?: string;
}
interface AvatarName {
  className?: string;
  imageUrl?: string | null;
  address: string;
  name: string;
  href?: (address: string) => string;
}

type Transactions = {
  height: number;
  hash: string;
  success: boolean;
  timestamp: string;
  messages: number;
}

type TokenUnit = {
  value: number;
  denom: string;
}

type DesmosProfile = {
  dtag: string;
  nickname: string;
  imageUrl: string;
  bio: string;
  connections: ConnectionType[];
  validator?: ValidatorProfile;
}

type ConnectionType = {
  network: string;
  identifier: string;
  creationTime: string;
}

type ValidatorProfile = {
  status: number;
  jailed: boolean;
  condition: number;
  commission: number;
  signedBlockWindow: number;
  missedBlockCounter: number;
}
