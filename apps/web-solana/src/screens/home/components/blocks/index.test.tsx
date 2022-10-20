/* eslint-disable */
import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import {
  createMockClient, createMockSubscription,
} from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import {
  BlocksListenerDocument,
} from '@graphql/types';
import Blocks from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
  NoData: (props) => <div id="NoData" {...props} />,
}));

jest.mock('./components', () => ({
  Mobile: (props) => <div id="Mobile" {...props} />,
  Desktop: (props) => <div id="Desktop" {...props} />,
}));

const mockBlocksListenerDocument = {
  data: {
    blocks: [
      {
        "slot": 109782707,
        "leader": "AjfUXpuPLBFwB9NbhS8vYFgvf1tU5Xt7LG7yKAQpBTNE",
        "hash": "BBj6jSFyRZNNY2SPcfTcHjMHzAWdBtZewtonV29Fn2Y",
        "timestamp": "2021-12-02T23:33:46",
        "numTxs": 1255,
      },
    ],
  },
};

// ==================================
// unit tests
// ==================================
describe('screen: Home/Blocks/Mobile', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    const mockSubscription = createMockSubscription();
    mockClient.setRequestHandler(
      BlocksListenerDocument,
      () => mockSubscription,
    );

    let component;

    renderer.act(() => {
      component = renderer.create(
        <RecoilRoot>
          <ApolloProvider client={mockClient}>
            <MockTheme>
              <Blocks />
            </MockTheme>
          </ApolloProvider>
        </RecoilRoot>,
      );
    });

    await wait();

    renderer.act(() => {
      mockSubscription.next(mockBlocksListenerDocument);
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
