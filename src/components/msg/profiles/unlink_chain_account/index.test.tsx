import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgUnlinkApplication } from '@models';
import UnlinkApplication from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgUnlinkApplication', () => {
  it('matches snapshot', () => {
    const message = new MsgUnlinkApplication({
      category: 'profiles',
      type: 'MsgUnlinkChainAccount',
      signer: 'signer',
      application: 'application',
      username: 'username',
    });
    const component = renderer.create(
      <MockTheme>
        <UnlinkApplication
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
