import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Mobile from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Loading: (props) => <div id="Loading" {...props} />,
}));

jest.mock('react-virtualized-auto-sizer', () => ({ children }: any) => children({
  height: 600, width: 600,
}));

jest.mock('@src/screens/blocks/components/list/contexts/blocks', () => ({
  useBlocksContext: () => ({
    items: [{
      token: 'ETH',
      price: '$1,802',
      change: -25,
      volume: '$15,902,496,558',
      marketCap: '$515,912,496',
      holders: '2,178,994',
      address: '9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E',
    }],
    itemsCount: 2,
    loadMoreItems: jest.fn(),
    isItemLoaded: jest.fn(),
  }),
}));

// ==================================
// unit tests
// ==================================
describe('screen: Tokens/Mobile', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Mobile />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
