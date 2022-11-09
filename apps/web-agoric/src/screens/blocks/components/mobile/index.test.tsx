import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import Mobile from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components/single_block_mobile', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="SingleBlockMobile" {...props} />
));
jest.mock('@components/loading', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Loading" {...props} />
));
jest.mock('@components/avatar_name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="AvatarName" {...props} />
));

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
describe('screen: Home/Blocks/Mobile', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Mobile
          items={[
            {
              height: 300,
              txs: 2,
              timestamp: '',
              proposer: {
                name: 'proposer',
                address: 'address',
              },
              hash: 'hash',
            },
            {
              height: 301,
              txs: 2,
              timestamp: '',
              proposer: {
                name: 'proposer',
                address: 'address',
              },
              hash: 'hash',
            },
          ]}
          itemCount={2}
          loadMoreItems={() => jest.fn()}
          isItemLoaded={() => true}
        />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
