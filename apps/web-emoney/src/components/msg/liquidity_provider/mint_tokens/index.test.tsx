import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgMintTokens from '@models/emoney/msg/liquidity_provider/msg_mint_tokens';
import MintTokens from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MintTokens', () => {
  it('matches snapshot', () => {
    const message = new MsgMintTokens({
      category: 'liquidityProvider',
      type: 'MsgMintTokens',
      liquidityProvider: 'liquidityProvider',
      amount: [
        {
          denom: 'denom1',
          amount: 100000,
        },
        {
          denom: 'denom2',
          amount: 200000,
        },
      ],
    });
    const component = renderer.create(
      <MockTheme>
        <MintTokens message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
