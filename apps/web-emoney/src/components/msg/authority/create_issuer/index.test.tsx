import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgCreateIssuer from '@models/emoney/msg/authority/msg_create_issuer';
import CreateIssuer from '.';

// ==================================
// mocks
// ==================================
jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgCreateIssuer', () => {
  it('matches snapshot', () => {
    const message = {
      category: 'authority',
      type: 'MsgCreateIssuer',
      authority: 'authority',
      issuer: 'issuer',
      denominations: ['donom 1', 'denom 2'],
    } as MsgCreateIssuer;
    const component = renderer.create(
      <MockTheme>
        <CreateIssuer message={message} />
      </MockTheme>
    );

    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
