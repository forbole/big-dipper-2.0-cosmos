import { jest } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';
import 'jest-localstorage-mock';

jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => null;
  DynamicComponent.displayName = 'LoadableComponent';
  DynamicComponent.preload = jest.fn();
  return DynamicComponent;
});

jest.mock('ui/chainConfig', () => ({
  __esModule: true,
  default: {
    ...(jest.requireActual('ui/chainConfig') as { default: object }).default,
    primaryTokenUnit: 'udaric',
    tokenUnits: {
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
    },
  },
}));
