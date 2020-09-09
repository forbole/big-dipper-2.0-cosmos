import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Desktop from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);

jest.mock('@components', () => ({
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
describe('screen: Home/Transactions/Desktop', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Desktop />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
