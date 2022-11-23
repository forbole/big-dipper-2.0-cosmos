import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@/tests/utils';
import MsgLinkChainAccount from '@/models/msg/profiles/msg_link_chain_account';
import LinkChainAccount from '@/components/msg/profiles/link_chain_account';

// ==================================
// mocks
// ==================================
jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/LinkChainAccount', () => {
  it('matches snapshot', () => {
    const message: MsgLinkChainAccount = {
      category: 'profiles',
      type: 'MsgCreateRelationship',
      signer: 'signer',
      chainConfig: {
        name: 'emoney',
      },
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <LinkChainAccount message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
