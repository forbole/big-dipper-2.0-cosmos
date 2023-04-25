import React from 'react';
import renderer from 'react-test-renderer';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { LATEST_BLOCK_HEIGHT, BLOCKS, NFTS, NFTS_COUNT } from '@/api';
import MockTheme from '@/tests/mocks/MockTheme';
import wait from '@/tests/utils/wait';
import List from '@/screens/nfts/components/list';

// ==================================
// unit tests
// ==================================

jest.mock('@/components/pagination', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Pagination" {...props} />
));
jest.mock('@/components/no_data', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="NoData" {...props} />
));
jest.mock('@/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Box" {...props} />
));
jest.mock('@/components/loading', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Loading" {...props} />
));
jest.mock('@/components/blocks_list', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="BlocksList" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: Blocks/List', () => {
  it('matches snapshot', async () => {
    const mockAxios = new MockAdapter(axios);
    mockAxios.onGet(LATEST_BLOCK_HEIGHT).reply(200, 5005);
    mockAxios.onGet(NFTS).reply(200, []);
    mockAxios.onGet(NFTS_COUNT).reply(200, 0);
    mockAxios.onGet(BLOCKS).reply(200, [
      {
        hash: '24b6a32c87896b6b529db9faf74dfed9d0972b62c632e60c08f014ebbbcb892b',
        epoch: 535,
        nonce: 7712359,
        prevHash: '08f4ecd7e013220f14df59391cbf62ff9d96970770fac9ff43cfb17f24260c99',
        proposer: 50,
        pubKeyBitmap: 'ffffffffffffff7f',
        round: 7713524,
        shard: 0,
        size: 832,
        sizeTxs: 3080,
        stateRootHash: '0e56c7177188b089a0b5eaa15ec32b88a030685aa705aa48b2618160de30e389',
        timestamp: 1642398744,
        txCount: 10,
        gasConsumed: 0,
        gasRefunded: 0,
        gasPenalized: 0,
        maxGasLimit: 1500000000,
      },
    ]);

    let component: renderer.ReactTestRenderer | undefined;
    renderer.act(() => {
      component = renderer.create(
        <MockTheme>
          <List />
        </MockTheme>
      );
    });
    await wait(renderer.act, 3000);

    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
