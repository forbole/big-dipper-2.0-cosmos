import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgDeleteProfile from '@models/desmos/msg/profiles/msg_delete_profile';
import DeleteProfile from '.';

// ==================================
// mocks
// ==================================

jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/DeleteProfile', () => {
  it('matches snapshot', () => {
    const message: MsgDeleteProfile = {
      category: 'profiles',
      type: 'MsgDeleteProfile',
      creator: 'creator',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <DeleteProfile message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
