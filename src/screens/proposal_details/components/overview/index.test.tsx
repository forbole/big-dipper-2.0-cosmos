import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Overview from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  SingleProposal: (props) => <div id="SingleProposal" {...props} />,
  AvatarName: (props) => <div id="AvatarName" {...props} />,
  Box: (props) => <div id="Box" {...props} />,
  Tag: (props) => <div id="Tag" {...props} />,
}));

jest.mock('../../contexts/proposal', () => ({
  useProposalContext: () => ({
    tab: 0,
    rawData: {
      exists: true,
      loading: true,
      deposits: [],
      votes: [],
      voteCount: {
        yes: 0,
        no: 0,
        abstain: 0,
        veto: 0,
      },
      overview: {
        title: '',
        id: 0,
        description: '',
        status: '',
        submitTime: '',
        depositEndTime: '',
        votingEndTime: null,
        votingStartTime: null,
      },
    },
    uiData: {
      overview: {
        title: 'title',
        id: '3',
        description: 'description',
        status: <div>status</div>,
        submitTime: 'submitTime',
        depositEndTime: 'depositEndTime',
        votingEndTime: null,
        votingStartTime: null,
        type: 'type',
      },
    },
  }),
}));

// ==================================
// unit tests
// ==================================
describe('screen: BlockDetails/Overview', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Overview />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
