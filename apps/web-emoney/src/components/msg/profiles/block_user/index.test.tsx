import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgBlockUser } from '@models';
import BlockUser from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/BlockUser', () => {
  it('matches snapshot', () => {
    const message = new MsgBlockUser({
      category: 'profiles',
      type: 'MsgBlockUser',
      blocked: 'blocked',
      blocker: 'blocker',
      subspace: 'subspace',
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <BlockUser
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
