import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgClearContractAdmin } from '@models';
import ClearContractAdmin from '.';

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
describe('screen: TransactionDetails/ClearContractAdmin', () => {
  it('matches snapshot', () => {
    const message = new MsgClearContractAdmin({
      type: 'MsgExecuteContract',
      admin: 'admin',
      contract: 'contract',
    });
    const component = renderer.create(
      <MockTheme>
        <ClearContractAdmin
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
