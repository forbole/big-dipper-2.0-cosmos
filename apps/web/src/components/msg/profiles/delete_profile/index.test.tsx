import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgDeleteProfile } from '@models';
import DeleteProfile from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/DeleteProfile', () => {
  it('matches snapshot', () => {
    const message = new MsgDeleteProfile({
      category: 'profiles',
      type: 'MsgDeleteProfile',
      creator: 'creator',
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <DeleteProfile
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
