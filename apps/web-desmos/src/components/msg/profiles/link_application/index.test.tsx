import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgLinkApplication from '@models/desmos/msg/profiles/msg_link_application';
import LinkApplication from '.';

// ==================================
// mocks
// ==================================
jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgLinkApplication', () => {
  it('matches snapshot', () => {
    const message = {
      category: 'profiles',
      type: 'MsgLinkApplication',
      sender: 'sender',
      linkData: {
        application: 'application',
        username: 'username',
      },
    } as MsgLinkApplication;
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
