import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
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
describe('screen: BlockDetails/Transactions', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Transactions
            transactions={[
              {
                slot: 123548722,
                signature: '4SGxuRMcseNbwki3tGxXPpfz7iFnuo9FUpTfiM4gJ8rhH59uZYSBBK2zW27xRdGX8Sb2N4VkGUnBYt59SBKEhPfB',
                success: true,
                timestamp: '2021-09-13T20:06:17.363145',
                numInstructions: 13,
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
