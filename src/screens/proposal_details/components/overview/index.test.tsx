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
    item: {
      id: 3,
      proposer: {
        image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
        moniker: 'Forbole',
        identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
      },
      type: 'text proposal',
      title: 'Enable IBC transfers',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat velit ipsum, tempus tristique tellus rhoncus tempus. Duis elementum varius neque, eu pharetra eros porttitor in.',
      submissionTime: 1615187146246,
      votingTimeStart: 1615187146246,
      status: 1,
      votes: [
        {
          voter: {
            image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
            moniker: 'Forbole',
            identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
          },
          votingPower: '34,000,300',
          vote: 2,
        },
      ],
      deposits: [
        {
          depositor: {
            image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
            moniker: 'Forbole',
            identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
          },
          amount: '12',
          time: 1615187146246,
        },
      ],
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
