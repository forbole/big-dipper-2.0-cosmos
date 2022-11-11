import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import Networks from '.';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
jest.mock('recoil', () => ({
  ...(jest.requireActual('recoil') as any),
  useRecoilValue: jest.fn(),
}));

beforeEach(() => {
  (useRecoilValue as jest.Mock).mockImplementation(() => [
    {
      logo: 'logo',
      name: 'Cosmos',
      mainnet: [
        {
          name: 'Mainnet',
          chainId: 'cosmoshub-4',
          url: 'https://cosmos.bigdipper.live',
        },
      ],
      testnet: [
        {
          name: 'Testnet',
          chainId: 'stargate-final',
          url: 'https://gaia.bigdipper.live/',
        },
      ],
      retired: [
        {
          name: 'Retired',
          chainId: 'stargate-retired',
          url: 'https://stargate-retired.bigdipper.live/',
        },
      ],
      other: [
        {
          name: 'Other',
          chainId: 'other',
          url: '',
        },
      ],
    },
  ]);
});

// ==================================
// unit tests
// ==================================
describe('screen: Nav/Networks', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <Networks />
      </MockTheme>
    );
  });

  it('it renders', () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
