import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgSaveProfile } from '@models';
import SaveProfile from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  ...jest.requireMock('@components'),
  Name: (props: JSX.IntrinsicElements['div']) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/SaveProfile', () => {
  it('matches snapshot', () => {
    const message = new MsgSaveProfile({
      category: 'profiles',
      type: 'MsgSaveProfile',
      creator: 'creator',
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <SaveProfile
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
