import { jest } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';
import 'jest-localstorage-mock';
import nextConfig from './next.config.mjs';

const chainConfig = JSON.parse(nextConfig.env.NEXT_PUBLIC_CHAIN_CONFIG || '');
chainConfig.tokenUnits = {
  udaric: {
    display: 'daric',
    exponent: 6,
  },
  upotic: {
    display: 'potic',
    exponent: 0,
  },
  ubar: {
    display: 'bar',
    exponent: 8,
  },
  rowan: {
    display: 'rowan',
    exponent: 18,
  },
};
process.env = {
  ...process.env,
  ...nextConfig.env,
  NEXT_PUBLIC_CHAIN_CONFIG: JSON.stringify(chainConfig),
};

jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => null;
  DynamicComponent.displayName = 'LoadableComponent';
  DynamicComponent.preload = jest.fn();
  return DynamicComponent;
});
