import { jest } from '@jest/globals';

function mockDynamicComponent() {
  const DynamicComponent = () => null;
  DynamicComponent.displayName = 'LoadableComponent';
  DynamicComponent.preload = jest.fn();
  jest.mock('next/dynamic', () => jest.fn(() => DynamicComponent));
}

export default mockDynamicComponent;
