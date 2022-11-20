import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import Transactions from '.';

// ==================================
// mocks
// ==================================
jest.mock('ui/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Box" {...props} />
));
jest.mock('ui/components/transactions_list', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="TransactionsList" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: BlockDetails/Transactions', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Transactions
          transactions={[
            {
              height: 300,
              hash: 'hash',
              timestamp: '',
            },
            {
              height: 300,
              hash: 'hash1',
              timestamp: '',
            },
          ]}
        />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
