import React from 'react';
import renderer from 'react-test-renderer';
import TestRenderer from 'react-test-renderer';
import { MsgIssueDenom } from '@models';
import {
  render, screen,
} from '@testing-library/dom';
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

  // snapshot
  it('matches snapshot', () => {
    const component = renderer.create(
      <ListNames creators={message.creators} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  // findById
  it('matches html', () => {
    render(<ListNames creators={message.creators} />);
    const div = screen.findByTestId('desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93');

    const expectedHtml = (
      'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93'
    );
    expect(div).toMatch(expectedHtml);
  });

  // test on suffix
  it('creators is an empty array', () => {
    const creators1 = [];
    const component1 = renderer.create(
      <ListNames creators={creators1} />,
    );
    const tree = component1.toJSON();
    const render1 = tree.props;
    expect(render1).toMatch('');
  });

  it('creators is an array of one creator', () => {
    const creators2 = ['desmosvaloper14nfk5gm99gfrd7nwqtmtvzunzclz8720a6cqh7'];
    const component2 = renderer.create(
      <ListNames creators={creators2} />,
    );
    const tree = component2.toJSON();
    const render2 = tree.props;
    expect(render2).toMatch('AC Validator 🚀');
  });

  it('creators is an array of three creators', () => {
    const creators3 = [
      'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
      'desmosvaloper14nfk5gm99gfrd7nwqtmtvzunzclz8720a6cqh7',
      'desmosvaloper1jh753mzjy358jf86cfqqzkrrtqqefhjxctcre4',
    ];
    const component3 = renderer.create(
      <ListNames creators={creators3} />,
    );
    const tree = component3.toJSON();
    const render3 = tree.props;
    expect(render3).toMatch('desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93, AC Validator 🚀 and coolex');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
