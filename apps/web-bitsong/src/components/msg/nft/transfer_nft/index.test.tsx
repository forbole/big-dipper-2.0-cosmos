import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgTransferNFT from '@models/bitsong/msg/nft/msg_transfer_nft';
import TransferNFT from '.';

// ==================================
// mocks
// ==================================
jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/TransferNFT', () => {
  it('matches snapshot', () => {
    const message = {
      category: 'nft',
      type: 'MsgMintNFT',
      sender: 'desmosvaloper14nfk5gm99gfrd7nwqtmtvzunzclz8720a6cqh7',
      id: 'goodGoodDayDay',
      recipient: 'desmosvaloper1rzhewpmmdl72lhnxj6zmxr4v94f522s4hyz467',
    } as MsgTransferNFT;
    const component = renderer.create(
      <MockTheme>
        <TransferNFT message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
