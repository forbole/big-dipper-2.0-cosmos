import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgBurnNFT } from '@models';
import BurnNFT from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  Name: (props: JSX.IntrinsicElements['div']) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/BurnNFT', () => {
  it('matches snapshot', () => {
    const message = new MsgBurnNFT({
      category: 'nft',
      type: 'MsgBurnNFT',
      sender: 'desmosvaloper14nfk5gm99gfrd7nwqtmtvzunzclz8720a6cqh7',
      id: 'goodGoodDayDay',
    });
    const component = renderer.create(
      <MockTheme>
        <BurnNFT
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
