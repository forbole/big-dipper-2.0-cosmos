import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgTransferNFT } from '@models';
import TransferNFT from '.';

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
describe('screen: TransactionDetails/TransferNFT', () => {
  it('matches snapshot', () => {
    const message = new MsgTransferNFT({
      category: 'nft',
      type: 'MsgMintNFT',
      sender: 'desmosvaloper14nfk5gm99gfrd7nwqtmtvzunzclz8720a6cqh7',
      id: 'goodGoodDayDay',
      recipient: 'desmosvaloper1rzhewpmmdl72lhnxj6zmxr4v94f522s4hyz467',
    });
    const component = renderer.create(
      <MockTheme>
        <TransferNFT
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
