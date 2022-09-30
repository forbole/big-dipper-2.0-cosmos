import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgGrantAllowance } from '@models';
import GrantAllowance from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

jest.mock('next-translate/Trans', () => (
  function (props) {
    return <div id="Trans" {...props} />;
  }
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/Grant', () => {
  it('matches snapshot', () => {
    const message = new MsgGrantAllowance({
      category: 'feegrant',
      type: 'MsgGrant',
      granter: 'sponderbob',
      grantee: 'grantee',
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <GrantAllowance
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgGrantAllowance');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
