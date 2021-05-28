import React from 'react';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import Transactions from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
  TransactionsList: (props) => <div id="TransactionsList" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Transactions/List', () => {
  it('matches snapshot', async () => {
    let component;

    renderer.act(() => {
      component = renderer.create(
        <MockTheme>
          <Transactions
            data={[
              {
                height: 300,
                hash: 'hash1',
                success: true,
                timestamp: '',
                messages: 10,
              },
            ]}
            loadNextPage={jest.fn()}
            hasNextPage={false}
            isNextPageLoading={false}
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
