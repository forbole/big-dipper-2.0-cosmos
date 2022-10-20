/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import {
  MockTheme, wait,
} from '@tests/utils';
import {
TransactionDetailsDocument,
} from '@graphql/types';
import TransactionDetails from '.';

// ==================================
// mocks
// ==================================
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      tx: 3,
    },
  }),
}));

const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
  LoadAndExist: (props) => <div id="LoadAndExist" {...props} />,
}));

jest.mock('./components', () => ({
  Overview: (props) => <div id="Overview" {...props} />,
  Logs: (props) => <div id="Logs" {...props} />,
  Instructions: (props) => <div id="Instructions" {...props} />,
}));

const mockTransactionDetailsDocument = jest.fn().mockResolvedValue({
  "data": {
    "transaction": [
      {
        "slot": 127369547,
        "success": true,
        "signature": "2Rmxi1EouXEDtWWL525SiNXATTsyhcWzGak8tWnnhur8u6Zw68befaFHTMxy7avdP96gabsfjpEKJ5su9owyec7r",
        "fee": 10000,
        "logs": [
          "Program Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo invoke [1]",
          "Program Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo consumed 374 of 200000 compute units",
          "Program Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo success",
          "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [1]",
          "Program log: Instruction: Transfer",
          "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 2842 of 200000 compute units",
          "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success"
        ],
        "block": {
          "timestamp": "2022-03-30T08:02:15"
        },
        "instructions": [
          {
            "type": "unknown",
            "index": 0,
            "innerIndex": 0,
            "program": "Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo",
            "value": null,
            "rawData": "TTfFhc6NAqmBD2SBbgyxRC1oxAhBvXXU8eoGEjL6abFPpNd26V9AbT2cKG9r"
          },
          {
            "type": "transfer",
            "index": 1,
            "innerIndex": 0,
            "program": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            "value": {
              "source": "7uCywL8j7jhN8YoFvpSyPZrKbYELkkQAYRZuumzSUyAS",
              "destination": "Bo6qknJzJKZwG6P51SL9fF7ewYy9k7TtjPKaVxpheoiA",
              "amount": "100000",
              "authority": "31vSgwrQ6AGpCamqAeTfs3JJ77pycnwUj1yixJ77exU9"
            },
            "rawData": "3gJqkocMWaMm"
          }
        ]
      }
    ]
  }
});

// ==================================
// unit tests
// ==================================
describe('screen: Blocks/List', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
      TransactionDetailsDocument,
      mockTransactionDetailsDocument,
    );

    let component;
    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <TransactionDetails />
          </MockTheme>
        </ApolloProvider>,
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
