import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Mobile from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('@components', () => ({
  SingleTransactionMobile: (props) => <div id="SingleTransactionMobile" {...props} />,
  Result: (props) => <div id="Result" {...props} />,
}));

jest.mock('@src/screens/home/components/transactions/contexts/transactions', () => ({
  useTransactionsContext: () => ({
    transactions: [{
      block: '812,768,640',
      hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
      messages: 12,
      success: true,
      time: 1615187146246,
    }],
  }),
}));

// ==================================
// unit tests
// ==================================
describe('screen: Home/Transactions/Mobile', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Mobile />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
