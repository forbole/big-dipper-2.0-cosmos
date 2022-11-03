import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgMintNFT } from '@models';
import MintNFT from '.';

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
describe('screen: TransactionDetails/MintNFT', () => {
  it('matches snapshot', () => {
    const message = new MsgMintNFT({
      category: 'nft',
      type: 'MsgMintNFT',
      sender: 'desmosvaloper14nfk5gm99gfrd7nwqtmtvzunzclz8720a6cqh7',
      id: 'goodGoodDayDay',
    });
    const component = renderer.create(
      <MockTheme>
        <MintNFT
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
