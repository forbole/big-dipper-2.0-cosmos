import ProposalsList from '@/screens/proposals/components/list';
import MockTheme from '@/tests/mocks/MockTheme';
import wait from '@/tests/utils/wait';
import { ComponentProps } from 'react';
import renderer from 'react-test-renderer';
import AutoSizer from 'react-virtualized-auto-sizer';

// ==================================
// mocks
// ==================================
jest.mock('@/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Box" {...props} />
));
jest.mock('@/components/loading', () => () => <div id="Loading" />);

// jest.mock('@/screens/proposals/components/list/components/mobile', () => (props: JSX.IntrinsicElements['div']) => (
//   <div id="Mobile" {...props} />
// ));
// jest.mock('@/screens/proposals/components/list/components/desktop', () => (props: JSX.IntrinsicElements['div']) => (
//   <div id="Desktop" {...props} />
// ));
jest.mock(
  '@/screens/proposals/components/list/components/total',
  () => (props: JSX.IntrinsicElements['div']) => <div id="Total" {...props} />
);

jest.mock(
  'react-virtualized-auto-sizer',
  () =>
    ({ children }: ComponentProps<typeof AutoSizer>) =>
      children({
        height: 600,
        width: 600,
      })
);

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
      </MockTheme>
    );
    await wait(renderer.act);

    const tree = component?.toJSON();

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
      </MockTheme>
    );
    await wait(renderer.act);

    const tree = component?.toJSON();

    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
