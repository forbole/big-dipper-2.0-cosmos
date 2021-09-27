import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgExecuteContract } from '@models';
import ExecuteContract from '.';

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
describe('screen: TransactionDetails/ExecuteContract', () => {
  it('matches snapshot', () => {
    const message = new MsgExecuteContract({
      type: 'MsgExecuteContract',
      sender: 'sender',
      contract: 'contract',
    });
    const component = renderer.create(
      <MockTheme>
        <ExecuteContract
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
