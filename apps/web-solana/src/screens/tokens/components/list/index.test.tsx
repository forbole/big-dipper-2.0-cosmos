import React from 'react';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import List from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
  NoData: (props) => <div id="NoData" {...props} />,
  Search: (props) => <div id="Search" {...props} />,
}));

jest.mock('./components', () => ({
  Mobile: (props) => <div id="Mobile" {...props} />,
  Desktop: (props) => <div id="Desktop" {...props} />,
  Total: (props) => <div id="Total" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Proposals/List', () => {
  it('matches snapshot', async () => {
    let component;
    renderer.act(() => {
      component = renderer.create(
        <MockTheme>
          <List
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
            isItemLoaded={() => true}
            itemCount={1}
            loadMoreItems={() => null}
            handleSearch={jest.fn()}
            handleSort={jest.fn()}
            sortDirection="desc"
            sortKey="address"
          />
        </MockTheme>,
      );
    });
    await wait();

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
