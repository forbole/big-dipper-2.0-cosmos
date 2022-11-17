import React from 'react';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import ProposalsList from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
  Loading: () => <div id="Loading" />,
}));

jest.mock('./components', () => ({
  Mobile: (props) => <div id="Mobile" {...props} />,
  Desktop: (props) => <div id="Desktop" {...props} />,
  Total: (props) => <div id="Total" {...props} />,
  SingleProposal: (props) => <div id="SingleProposal" {...props} />,
}));

jest.mock('react-virtualized-auto-sizer', () => ({ children }: any) => children({
  height: 600, width: 600,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Proposals/List', () => {
  it('matches snapshot', async () => {
    const component = renderer.create(
      <MockTheme>
        <ProposalsList
          items={[
            {
              title: 'Staking Param Change Part Three',
              id: 3,
              status: 'PROPOSAL_STATUS_PASSED',
              description: 'Update max validators',
            },
            {
              title: 'Staking Param Change Part Two',
              id: 7,
              status: 'PROPOSAL_STATUS_REJECTED',
              description: 'Update max validators',
            },
          ]}
          rawDataTotal={2}
          isItemLoaded={() => true}
          itemCount={2}
          loadMoreItems={() => jest.fn()}
        />
      </MockTheme>,
    );
    await wait();

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot with empty proposal list', async () => {
    const component = renderer.create(
      <MockTheme>
        <ProposalsList
          items={[]}
          rawDataTotal={0}
          isItemLoaded={() => false}
          itemCount={0}
          loadMoreItems={() => jest.fn()}
        />
      </MockTheme>,
    );
    await wait();

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
