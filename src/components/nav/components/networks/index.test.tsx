import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Networks from '.';

// ==================================
// global setup
// ==================================
let component:renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
jest.mock('@src/contexts/networks', () => ({
  useNetworksContext: () => ({
    networks: [{
      logo: 'logo',
      name: 'name',
      mainnet: [{
        chainId: 'chain id',
        url: 'url',
        name: 'name',
      }],
      testnet: [],
      retired: [],
      other: [],
    }],
  }),
}));

// ==================================
// unit tests
// ==================================
describe('screen: Nav/Networks', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <Networks />
      </MockTheme>,
    );
  });

  it('it renders', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
