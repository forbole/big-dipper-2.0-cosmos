import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Mobile from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  SingleBlockMobile: (props) => <div id="SingleBlockMobile" {...props} />,
  Loading: (props) => <div id="Loading" {...props} />,
  AvatarName: (props) => <div id="AvatarName" {...props} />,
}));

jest.mock('react-virtualized-auto-sizer', () => ({ children }: any) => children({
  height: 600, width: 600,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Home/Blocks/Mobile', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Mobile
          items={[
            {
              token: 'BTC',
              price: 1802,
              marketCap: 515912496,
              volume: 18333060,
              address: '9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E',
              logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/G2jrxYSoCSzmohxERa2JzSJMuRM4kiNvRA3DnCv7Lzcz/logo.png',
            },
          ]}
          itemCount={2}
          loadMoreItems={() => jest.fn()}
          isItemLoaded={() => true}
        />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
