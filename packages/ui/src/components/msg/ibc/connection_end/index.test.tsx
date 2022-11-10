import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import { MsgConnectionEnd } from '@models';
import ConnectionEnd from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/IBCConnectionEnd', () => {
  it('matches snapshot', () => {
    const message = MsgConnectionEnd.fromJson({
      category: 'ibc',
      type: 'MsgConnectionEnd',
      signer: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      json: [
        {
          denom: 'udaric',
          amount: '2000000',
        },
      ],
    });
    const component = renderer.create(
      <MockTheme>
        <ConnectionEnd message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
