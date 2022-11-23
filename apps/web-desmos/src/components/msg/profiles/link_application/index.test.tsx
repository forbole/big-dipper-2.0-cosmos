import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@/tests/utils';
import MsgLinkApplication from '@/models/msg/profiles/msg_link_application';
import LinkApplication from '@/components/msg/profiles/link_application';

// ==================================
// mocks
// ==================================
jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgLinkApplication', () => {
  it('matches snapshot', () => {
    const message: MsgLinkApplication = {
      category: 'profiles',
      type: 'MsgLinkApplication',
      sender: 'sender',
      linkData: {
        application: 'application',
        username: 'username',
      },
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <LinkApplication message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
