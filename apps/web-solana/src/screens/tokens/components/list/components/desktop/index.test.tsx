import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Desktop from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('@components', () => ({
  Loading: (props) => <div id="Loading" {...props} />,
  SortArrows: (props) => <div id="SortArrows" {...props} />,
  AvatarName: (props) => <div id="AvatarName" {...props} />,
}));

jest.mock('react-virtualized-auto-sizer', () => ({ children }: any) => children({
  height: 600, width: 600,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Home/Blocks/Desktop', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Desktop
          items={[
            {
              token: 'BTC',
              logo: null,
              price: 1802,
              marketCap: 515912496,
              volume: 18333060,
              address: '9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E',
            },
          ]}
          itemCount={1}
          loadMoreItems={() => jest.fn()}
          isItemLoaded={() => true}
          handleSort={jest.fn()}
          sortDirection="asc"
          sortKey="token"
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
