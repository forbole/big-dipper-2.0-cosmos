import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import { ValidatorsDocument } from '@graphql/types';
import List from '.';

// ==================================
// mocks
// ==================================
jest.mock('./components', () => ({
  Mobile: (props) => <div id="Mobile" {...props} />,
  Desktop: (props) => <div id="Desktop" {...props} />,
  Tabs: (props) => <div id="Tabs" {...props} />,
}));

jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
  NoData: (props) => <div id="NoData" {...props} />,
  LoadAndExist: (props) => <div id="LoadAndExist" {...props} />,
}));

const mockValidatorsDocument = jest.fn().mockResolvedValue({
  data: {
    stakingParams: [
      {
        params: {},
      },
    ],
    stakingPool: [
      {
        bondedTokens: 3932987528498,
      },
    ],
    validator: [
      {
        validatorStatuses: [
          {
            status: 3,
            jailed: false,
            height: 437042,
          },
        ],
        validatorSigningInfos: [
          {
            missedBlocksCounter: 1,
          },
        ],
        validatorInfo: {
          operatorAddress: 'desmosvaloper1njm853h4h9vh8xge3v9mf7nnukzhgt6z6dwsr3',
          selfDelegateAddress: 'desmos1njm853h4h9vh8xge3v9mf7nnukzhgt6zyqxyfr',
        },
        validatorVotingPowers: [
          {
            votingPower: 22,
          },
        ],
        validatorCommissions: [
          {
            commission: 0.1,
          },
        ],
        delegations: [
          {
            amount: {
              denom: 'udaric',
              amount: '1704000',
            },
            delegatorAddress: 'desmos12mu43g2qvdddfc3tpgr3pekkrdx23jgv36jlta',
          },
          {
            amount: {
              denom: 'udaric',
              amount: '21000000',
            },
            delegatorAddress: 'desmos1njm853h4h9vh8xge3v9mf7nnukzhgt6zyqxyfr',
          },
        ],
      },
    ],
    slashingParams: [
      {
        params: {

        },
      },
    ],
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Validators/List', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
      ValidatorsDocument,
      mockValidatorsDocument,
    );

    let component;

    renderer.act(() => {
      component = renderer.create(
        <RecoilRoot>
          <ApolloProvider client={mockClient}>
            <MockTheme>
              <List />
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
