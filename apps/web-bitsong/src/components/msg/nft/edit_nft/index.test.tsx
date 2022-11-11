import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgEditNFT from '@models/bitsong/msg/nft/msg_edit_nft';
import EditNFT from '.';

// ==================================
// mocks
// ==================================
jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/EditNFT', () => {
  it('matches snapshot', () => {
    const message = new MsgEditNFT({
      category: 'nft',
      type: 'MsgEditNFT',
      sender: 'desmosvaloper14nfk5gm99gfrd7nwqtmtvzunzclz8720a6cqh7',
      id: 'goodGoodDayDay',
    });
    const component = renderer.create(
      <MockTheme>
        <EditNFT message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
