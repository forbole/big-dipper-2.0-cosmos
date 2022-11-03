import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgBurnTokens } from '@models';
import BurnTokens from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Name: (props: JSX.IntrinsicElements['div']) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/BurnTokens', () => {
  it('matches snapshot', () => {
    const message = new MsgBurnTokens({
      category: 'liquidityProvider',
      type: 'MsgBurnTokens',
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
        <BurnTokens
          message={message}
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
