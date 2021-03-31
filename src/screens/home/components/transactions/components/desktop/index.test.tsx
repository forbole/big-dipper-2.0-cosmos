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
    rawData: [{
      height: 2000,
      timestamp: '2021-02-18T09:02:28.668623',
      hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
      messages: 12,
      success: true,
    }],
    formatUi: jest.fn(() => [
      {
        block: <div>4,000</div>,
        hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
        result: <div>result</div>,
        time: 'moments ago',
        messages: '12',
      },
    ]),
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
