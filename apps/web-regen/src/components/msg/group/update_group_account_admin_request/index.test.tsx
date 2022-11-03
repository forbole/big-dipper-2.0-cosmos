import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgUpdateGroupAccountAdminRequest } from '@models';
import UpdateGroupAccountAdminRequest from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  ...jest.requireMock('@components'),
  Name: (props: JSX.IntrinsicElements['div']) => <div id="Name" {...props} />,
}));

jest.mock('next-translate/Trans', () => (
  (props) => <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/UpdateGroupAccountAdminRequest', () => {
  it('matches snapshot', () => {
    const message = new MsgUpdateGroupAccountAdminRequest({
      category: 'group',
      type: 'MsgUpdateGroupAccountAdminRequest',
      admin: 'admin',
      newAdmin: 'newAdmin',
    });

    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <UpdateGroupAccountAdminRequest
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgUpdateGroupAccountAdminRequest');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
