import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { MockTheme, wait } from 'ui/tests/utils';
import ProposalsList from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('ui/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Box" {...props} />
));
jest.mock('ui/components/loading', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Loading" />
));

jest.mock('./components', () => ({
  Mobile: (props: JSX.IntrinsicElements['div']) => <div id="Mobile" {...props} />,
  Desktop: (props: JSX.IntrinsicElements['div']) => <div id="Desktop" {...props} />,
  Total: (props: JSX.IntrinsicElements['div']) => <div id="Total" {...props} />,
}));

// jest.mock(
//   'react-virtualized-auto-sizer',
//   () =>
//     ({ children }: AutoSizerProps) =>
//       children({
//         height: 600,
//         width: 600,
//       })
// );

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
