import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Mobile from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Tag: (props) => <div id="Tag" {...props} />,
  SingleTransactionMobile: (props) => <div id="SingleTransactionMobile" {...props} />,
  Loading: (props) => <div id="Loading" {...props} />,
  Result: (props) => <div id="Result" {...props} />,
}));

jest.mock('react-virtualized-auto-sizer', () => ({ children }: any) => children({
  height: 600, width: 600,
}));

const props = {
  items: [
    {
      block: 123,
      hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
      messages: 123,
      success: false,
      time: 'time',
    },
  ],
  itemCount: 1,
  hasNextPage: false,
  isNextPageLoading: false,
  loadNextPage: () => null,
  loadMoreItems: () => null,
  isItemLoaded: () => true,
  formatUi: jest.fn(() => ([
    {
      block: <div>block</div>,
      hash: <div>76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857</div>,
      messages: '2',
      result: <div>success</div>,
      time: 'time',
    },
  ])),
};

// ==================================
// unit tests
// ==================================
describe('screen: Home/Blocks/Mobile', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Mobile
          {...props}
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
