import React from 'react';
import renderer from 'react-test-renderer';
import { MsgIssueDenom } from '@models';
import ListNames from '.';

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
describe('screen: TransactionDetails/IssueDenom', () => {
  it('matches snapshot', () => {
    const message = new MsgIssueDenom({
      category: 'nft',
      type: 'MsgIssueDenom',
      creators: [
        'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
        'desmosvaloper14nfk5gm99gfrd7nwqtmtvzunzclz8720a6cqh7',
        'desmosvaloper1jh753mzjy358jf86cfqqzkrrtqqefhjxctcre4',
        'desmosvaloper1rzhewpmmdl72lhnxj6zmxr4v94f522s4hyz467',
      ],
    });
    const component = renderer.create(
      <ListNames creators={message.creators} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches moniker', () => {
    const { findAddress } = useChainContext();
    const creator1 = 'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93';
    const creator2 = 'desmosvaloper14nfk5gm99gfrd7nwqtmtvzunzclz8720a6cqh7';
    const creator3 = 'desmosvaloper1jh753mzjy358jf86cfqqzkrrtqqefhjxctcre4';
    const output1 = findAddress(creator1);
    const output2 = findAddress(creator2);
    const output3 = findAddress(creator3);

    expect(output1).toMatch('desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93');
    expect(output2).toMatch('AC Validator 🚀');
    expect(output3).toMatch('coolex');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
