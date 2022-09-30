import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgRevoke } from '@models';
import Revoke from '.';

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
describe('screen: TransactionDetails/Revoke', () => {
  it('matches snapshot', () => {
    const message = new MsgRevoke({
      category: 'authz',
      type: 'MsgRevoke',
      granter: 'sponderbob',
      grantee: 'grantee',
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Revoke
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgRevoke');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
