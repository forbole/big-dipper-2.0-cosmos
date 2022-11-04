import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgRevokeAllowance } from '@models';
import RevokeAllowance from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => <div id="Name" {...props} />);

jest.mock('next-translate/Trans', () => (
  (props) => <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/Revoke', () => {
  it('matches snapshot', () => {
    const message = new MsgRevokeAllowance({
      category: 'authz',
      type: 'MsgRevokeAllowance',
      granter: 'sponderbob',
      grantee: 'grantee',
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <RevokeAllowance
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgRevokeAllowance');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
