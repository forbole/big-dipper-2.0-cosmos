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
  Messages: (props) => <div id="Messages" {...props} />,
}));

const mockTransactionDetailsDocument = jest.fn().mockResolvedValue({
  data: {
    transaction: [
      {
        hash: '7D373DE5C5FB03EA72006F6CEC8F908545D435AE1C598A1B53AD0770C243822A',
        height: 54290,
        block: {
          timestamp: '2021-05-01T07:47:40.855759',
        },
        fee: {
          payer: '',
          amount: [
            {
              denom: 'udaric',
              amount: '50',
            },
          ],
          granter: '',
          gas_limit: '200000',
        },
        gasUsed: 149488,
        gasWanted: 200000,
        success: true,
        memo: '',
        messages: [
          {
            '@type': '/cosmos.staking.v1beta1.MsgDelegate',
            amount: {
              denom: 'udaric',
              amount: '8371578',
            },
            delegator_address: 'desmos18kvwy5hzcu3ss08lcfcnx0eajuecg69ujmkwjr',
            validator_address: 'desmosvaloper18kvwy5hzcu3ss08lcfcnx0eajuecg69uvk76c3',
          },
        ],
        logs: [
          {
            events: [
              {
                type: 'delegate',
                attributes: [
                  {
                    key: 'validator',
                    value: 'desmosvaloper18kvwy5hzcu3ss08lcfcnx0eajuecg69uvk76c3',
                  },
                  {
                    key: 'amount',
                    value: '8371578',
                  },
                ],
              },
              {
                type: 'message',
                attributes: [
                  {
                    key: 'action',
                    value: 'delegate',
                  },
                  {
                    key: 'sender',
                    value: 'desmos1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8n8fv78',
                  },
                  {
                    key: 'module',
                    value: 'staking',
                  },
                  {
                    key: 'sender',
                    value: 'desmos18kvwy5hzcu3ss08lcfcnx0eajuecg69ujmkwjr',
                  },
                ],
              },
              {
                type: 'transfer',
                attributes: [
                  {
                    key: 'recipient',
                    value: 'desmos18kvwy5hzcu3ss08lcfcnx0eajuecg69ujmkwjr',
                  },
                  {
                    key: 'sender',
                    value: 'desmos1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8n8fv78',
                  },
                  {
                    key: 'amount',
                    value: '3094654udaric',
                  },
                ],
              },
            ],
          },
        ],
        rawLog: '[{"events":[{"type":"delegate","attributes":[{"key":"validator","value":"desmosvaloper18kvwy5hzcu3ss08lcfcnx0eajuecg69uvk76c3"},{"key":"amount","value":"8371578"}]},{"type":"message","attributes":[{"key":"action","value":"delegate"},{"key":"sender","value":"desmos1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8n8fv78"},{"key":"module","value":"staking"},{"key":"sender","value":"desmos18kvwy5hzcu3ss08lcfcnx0eajuecg69ujmkwjr"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"desmos18kvwy5hzcu3ss08lcfcnx0eajuecg69ujmkwjr"},{"key":"sender","value":"desmos1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8n8fv78"},{"key":"amount","value":"3094654udaric"}]}]}]',
      },
    ],
  },
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
