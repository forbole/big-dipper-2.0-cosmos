import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Transactions from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Box: (props: JSX.IntrinsicElements['div']) => <div id="Box" {...props} />,
  TransactionsList: (props: JSX.IntrinsicElements['div']) => <div id="TransactionsList" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: BlockDetails/Transactions', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Transactions
            transactions={[
              {
                height: 300,
                hash: 'hash',
                success: false,
                timestamp: '',
                messages: {
                  count: 3,
                  items: [],
                },
              },
              {
                height: 300,
                hash: 'hash1',
                success: true,
                timestamp: '',
                messages: {
                  count: 13,
                  items: [],
                },
              },
            ]}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
