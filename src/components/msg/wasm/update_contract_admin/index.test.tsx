import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgUpdateContractAdmin } from '@models';
import UpdateContractAdmin from '.';

// ==================================
// mocks
// ==================================
jest.mock('@contexts', () => ({
  useChainContext: () => ({
    findAddress: jest.fn(() => ({
      moniker: 'moniker',
      imageUrl: null,
    })),
  }),
}));

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/UpdateContractAdmin', () => {
  it('matches snapshot', () => {
    const message = new MsgUpdateContractAdmin({
      type: 'MsgExecuteContract',
      admin: 'admin',
      newAdmin: 'newAdmint',
      contract: 'contract',
    });
    const component = renderer.create(
      <MockTheme>
        <UpdateContractAdmin
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
