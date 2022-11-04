import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgUpdateGroupAdminRequest } from '@src/models';
import UpdateGroupAdminRequest from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

jest.mock('next-translate/Trans', () => (props) => <div id="Trans" {...props} />);

// ==================================
// unit tests
// ==================================

describe('screen: TransactionDetails/UpdateGroupAdminRequest', () => {
  it('matches snapshot', () => {
    const message = new MsgUpdateGroupAdminRequest({
      category: 'group',
      type: 'MsgUpdateGroupAdminRequest',
      admin: 'admin',
      newAdmin: 'newAdmin',
    });

    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <UpdateGroupAdminRequest message={message} />
        </MockTheme>
      </RecoilRoot>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgUpdateGroupAdminRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
