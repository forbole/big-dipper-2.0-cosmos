import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgAggregateExchangeRateVote } from '@models';
import AggregateExchangeRateVote from '.';

// ==================================
// mocks
// ==================================
jest.mock('@contexts', () => ({
  useChainContext: () => ({
    findAddress: jest.fn(() => ({
      moniker: 'moniker',
      imageUrl: null,
    })),
  }),
}));

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/AggregateExchangeRateVote', () => {
  it('matches snapshot', () => {
    const message = new MsgAggregateExchangeRateVote({
      type: 'MsgAggregateExchangeRatePrevote',
      validator: 'validator',
    });
    const component = renderer.create(
      <MockTheme>
        <AggregateExchangeRateVote
          message={message}
        />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
