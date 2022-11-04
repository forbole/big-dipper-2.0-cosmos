import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgLinkChainAccount } from '@models';
import LinkChainAccount from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/LinkChainAccount', () => {
  it('matches snapshot', () => {
    const message = new MsgLinkChainAccount({
      category: 'profiles',
      type: 'MsgCreateRelationship',
      signer: 'signer',
      chainConfig: {
        name: 'emoney',
      },
    });
    const component = renderer.create(
      <MockTheme>
        <LinkChainAccount message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
