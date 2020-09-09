import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Home from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
}));

jest.mock('./components', () => ({
  DataBlocks: (props) => <div id="DataBlocks" {...props} />,
  OnlineVotingPower: (props) => <div id="OnlineVotingPower" {...props} />,
  Consensus: (props) => <div id="Consensus" {...props} />,
  Tokenomics: (props) => <div id="Tokenomics" {...props} />,
  Blocks: (props) => <div id="Blocks" {...props} />,
  Transactions: (props) => <div id="Transactions" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Home', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Home />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
