import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgCreateGroupAccountRequest } from '@models';
import CreateGroupAccountRequest from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

jest.mock('next-translate/Trans', () => (
  (props) => <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/Grant', () => {
  it('matches snapshot', () => {
    const message = new MsgCreateGroupAccountRequest({
      category: 'group',
      type: 'MsgCreateGroupAccountRequest',
      admin: 'admin',
    });

    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <CreateGroupAccountRequest
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgCreateGroupAccountRequest');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
