import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import TransactionsList from '.';

// ==================================
// mocks
// ==================================
jest.mock('./components', () => ({
  Mobile: (props) => <div id="Mobile" {...props} />,
  Desktop: (props) => <div id="Desktop" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('components: TransactionsList', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <TransactionsList
          hasNextPage={false}
          isNextPageLoading={false}
          loadNextPage={jest.fn()}
          loadMoreItems={jest.fn()}
          isItemLoaded={jest.fn()}
          items={[
            {
              block: 123,
              hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
              messages: 123,
              success: false,
              time: 'time',
            },
          ]}
          rawDataTotal={10}
          itemCount={1}
          formatUi={jest.fn()}
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
