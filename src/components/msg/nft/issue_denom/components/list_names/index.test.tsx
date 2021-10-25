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

  it('matches snapshot', () => {
    const component = renderer.create(
      <ListNames creators={message.creators} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

describe('div find by TestID matches html output', () => {
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

  it('matches html', async () => {
    // render(<ListNames creators={message.creators} data-testid={message.creators} />);
    const testRenderer = renderer.create(
      <ListNames creators={message.creators} data-testid={message.creators} />,
    );
    const testInstance = testRenderer.root;
    console.log('test test');
    console.log('testRenderer.root => ', testInstance);
    console.log('testRenderer.toJSON() => ', testRenderer.toJSON());
    console.log('testRenderer.toTree() => ', testRenderer.toTree());
    console.log('testInstance.props => ', testInstance.props);
    await console.log('screen => ', screen);
    console.log('screen => ', await screen);
    const div1 = await screen.getByTestId('desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93');
    const div2 = screen.findByTestId('desmosvaloper1jh753mzjy358jf86cfqqzkrrtqqefhjxctcre4');
    const div3 = screen.findByTestId('desmosvaloper1rzhewpmmdl72lhnxj6zmxr4v94f522s4hyz467');
    await console.log('screen => ', screen);
    await console.log('div1 => ', div1);

    // const expectedHtml1 = (
    //   'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93'
    // );
    const expectedHtml1 = (
      `<div
        address="desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93"
        id="Name"
        name="desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93"
      />`
    );
    const expectedHtml2 = (
      'coolex'
    );
    const expectedHtml3 = (
      'catboss'
    );

    // test getByTestId method
    // const div4 = screen.getByTestId('desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93');
    // expect(div4).toHaveTextContent('desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93');
    // expect(div4.textContent).toEqual('desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93');
    // test getByTestId method

    expect(div1).toEqual(expectedHtml1);
    expect(div2).toMatch(expectedHtml2);
    expect(div3).toMatch(expectedHtml3);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

// describe('edge cases of different array inputs', () => {
//   // test on suffix
//   it('creators is an empty array', () => {
//     const creators1 = [];
//     const component1 = renderer.create(
//       <ListNames creators={creators1} />,
//     );
//     console.log(component1);
//     const tree = component1.toJSON();
//     console.log(tree);

//     console.log('testing testing');
//     const render1 = tree.props;
//     expect(render1).toMatch('');
//   });

//   it('creators is an array of one creator', () => {
//     const creators2 = ['desmosvaloper14nfk5gm99gfrd7nwqtmtvzunzclz8720a6cqh7'];
//     const component2 = renderer.create(
//       <ListNames creators={creators2} />,
//     );
//     const tree = component2.toJSON();
//     const render2 = tree.props;
//     expect(render2).toMatch('AC Validator 🚀');
//   });

//   it('creators is an array of three creators', () => {
//     const creators3 = [
//       'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
//       'desmosvaloper14nfk5gm99gfrd7nwqtmtvzunzclz8720a6cqh7',
//       'desmosvaloper1jh753mzjy358jf86cfqqzkrrtqqefhjxctcre4',
//     ];
//     const component3 = renderer.create(
//       <ListNames creators={creators3} />,
//     );
//     const tree = component3.toJSON();
//     const render3 = tree.props;
//     expect(render3).toMatch('desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93, AC Validator 🚀 and coolex');
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });
// });
