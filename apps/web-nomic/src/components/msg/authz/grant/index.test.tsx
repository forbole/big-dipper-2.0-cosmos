import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgGrant } from '@models';
import Grant from '.';

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
describe('screen: TransactionDetails/Grant', () => {
  it('matches snapshot', () => {
    const message = new MsgGrant({
      category: 'authz',
      type: 'MsgGrant',
      granter: 'sponderbob',
      grantee: 'grantee',
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Grant
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgGrant');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
