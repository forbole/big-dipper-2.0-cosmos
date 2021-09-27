import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgAggregateExchangeRatePrevote } from '@models';
import AggregateExchangeRatePrevote from '.';

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
describe('screen: TransactionDetails/AggregateExchangeRatePrevote', () => {
  it('matches snapshot', () => {
    const message = new MsgAggregateExchangeRatePrevote({
      type: 'MsgAggregateExchangeRatePrevote',
      validator: 'validator',
      hash: 'hash',
    });
    const component = renderer.create(
      <MockTheme>
        <AggregateExchangeRatePrevote
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
