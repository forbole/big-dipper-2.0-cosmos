import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgLinkApplication } from '@models';
import LinkApplication from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgLinkApplication', () => {
  it('matches snapshot', () => {
    const message = new MsgLinkApplication({
      category: 'profiles',
      type: 'MsgLinkApplication',
      sender: 'sender',
      linkData: {
        application: 'application',
        username: 'username',
      },
    });
    const component = renderer.create(
      <MockTheme>
        <LinkApplication message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
