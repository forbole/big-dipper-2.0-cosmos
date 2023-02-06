import React from 'react';
import renderer from 'react-test-renderer';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { TRANSACTIONS, TRANSACTIONS_COUNT } from '@/api';
import MockTheme from '@/tests/mocks/MockTheme';
import wait from '@/tests/utils/wait';
import List from '@/screens/transactions/components/list';

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

// ==================================
// unit tests
// ==================================
describe('screen: Transactions/List', () => {
  it('matches snapshot', async () => {
    const mockAxios = new MockAdapter(axios);
    mockAxios.onGet(TRANSACTIONS_COUNT).reply(200, 5005);

    mockAxios.onGet(TRANSACTIONS).reply(200, [
      {
        txHash: '21cb1c8040f0359e574015093747796bc5c9789a9b2a527d8edcf9e61dbdd308',
        gasLimit: 50000,
        gasPrice: 1000000000,
        gasUsed: 50000,
        miniBlockHash: '94dc70bae3dccf4438d773f261308f0dd7ea32572719fb0a54995181748b8df3',
        nonce: 884866,
        receiver: 'erd18d87czmgxunrwgwfptrnz37dlcgr7e2xahpf585qavwawwwj9tuq7mhfwk',
        receiverShard: 0,
        round: 7714228,
        sender: 'erd16x7le8dpkjsafgwjx0e5kw94evsqw039rwp42m2j9eesd88x8zzs75tzry',
        senderShard: 1,
        signature:
          '35f1d32fc3b94ab9eab1c2527bb16ce903511a6039fbfbc4c0ab7d9783d33288c40de2725231a20bfa73a051c471935e819f73f08e1d041748ad88f736ef260c',
        status: 'pending',
        value: '115180000000000000',
        fee: '50000000000000',
        timestamp: 1642402968,
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
