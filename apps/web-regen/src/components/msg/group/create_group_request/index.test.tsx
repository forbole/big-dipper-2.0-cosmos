import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgCreateGroupRequest } from '@models';
import CreateGroupRequest from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

jest.mock('next-translate/Trans', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/CreateGroupRequest', () => {
  it('matches snapshot', () => {
    const message = new MsgCreateGroupRequest({
      category: 'group',
      type: 'MsgCreateGroupRequest',
      admin: 'admin',
    });

    const component = renderer.create(
      <MockTheme>
        <CreateGroupRequest message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgCreateGroupRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
