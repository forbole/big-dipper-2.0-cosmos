import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@/tests/utils';
import Transactions from '@/screens/block_details/components/transactions';

// ==================================
// mocks
// ==================================
jest.mock('@/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Box" {...props} />
));
jest.mock('@/components/transactions_list', () => (props: JSX.IntrinsicElements['div']) => (
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
