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
