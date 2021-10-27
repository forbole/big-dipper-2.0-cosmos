import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgSaveProfile } from '@models';
import SaveProfile from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
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
      <MockTheme>
        <SaveProfile
          message={message}
        />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
