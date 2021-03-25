import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import ProposalDetails from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
}));

jest.mock('./components', () => ({
  Overview: (props) => <div id="Overview" {...props} />,
  Votes: (props) => <div id="Votes" {...props} />,
  Deposits: (props) => <div id="Deposits" {...props} />,
  VotesGraph: (props) => <div id="VotesGraph" {...props} />,
}));

jest.mock('./contexts/proposal', () => ({
  ProposalProvider: 'ProposalProvider',
  ProposalContext: {
    Consumer: ({ children }) => children,
  },
}));

// ==================================
// unit tests
// ==================================
describe('screen: ProposalDetails', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <ProposalDetails />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
