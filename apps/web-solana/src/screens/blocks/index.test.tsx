/* eslint-disable */
import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import {
  MockTheme, wait,
} from '@tests/utils';
import {
  BlocksDocument,
} from '@graphql/types';
import Transactions from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
  Box: (props) => <div id="Box" {...props} />,
  LoadAndExist: (props) => <div id="LoadAndExist" {...props} />,
}));

jest.mock('./components', () => ({
  BlocksList: (props) => <div id="BlocksList" {...props} />,
}));

const mockBlocksDocument = jest.fn().mockResolvedValue({
  "data": {
    "blocks": [
      {
        "slot": 126456218,
        "hash": "9YVpJx9ftgbQQ3ZD9233on84UwLi6bGL7PntN2PpGMjZ",
        "timestamp": "2022-03-24T13:05:06",
        "numTxs": 1911,
        "validator": [
          {
            "address": "A8XYMkTzKNceJT7BKtRwGrg5KGgaXcjyoAYuthrjfKUi"
          }
        ]
      }
    ]
  }
});

// ==================================
// unit tests
// ==================================
describe('screen: Blocks', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();

    mockClient.setRequestHandler(
      BlocksDocument,
      mockBlocksDocument,
    );

    let component;

    renderer.act(() => {
      component = renderer.create(
        <RecoilRoot>
          <ApolloProvider client={mockClient}>
            <MockTheme>
              <Transactions />
            </MockTheme>
          </ApolloProvider>
        </RecoilRoot>,
      );
    });
    await wait();

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
