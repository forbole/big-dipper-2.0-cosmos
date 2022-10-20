import React from 'react';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import {
  StakeWeightDocument,
} from '@graphql/types';
import StakeWeight from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);

const mockStakeWeight = jest.fn().mockResolvedValue({
  data: {
    validatorStatusAggregate: {
      aggregate: {
        sum: {
          activatedStake: 384573204910145540,
        },
      },
    },
    supplyInfo: [
      {
        total: 517013282309897200,
      },
    ],
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Home/StakeWeight', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
      StakeWeightDocument,
      mockStakeWeight,
    );

    const component = renderer.create(
      <ApolloProvider client={mockClient}>
        <MockTheme>
          <StakeWeight />
        </MockTheme>
      </ApolloProvider>,
    );

    await wait();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
