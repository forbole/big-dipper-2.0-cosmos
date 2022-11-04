import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgIssueDenom } from '@models';
import IssueDenom from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => <div id="Name" {...props} />);

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
      <MockTheme>
        <IssueDenom message={message} />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
