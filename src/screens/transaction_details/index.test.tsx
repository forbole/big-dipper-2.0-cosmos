import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import TransactionDetails from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
}));

jest.mock('./components', () => ({
  Overview: (props) => <div id="Overview" {...props} />,
  Instructions: (props) => <div id="Instructions" {...props} />,
}));

const mockTransactionContext = {
  item: {
    slot: '812,768,640',
    signature: '4SGxuRMcseNbwki3tGxXPpfz7iFnuo9FUpTfiM4gJ8rhH59uZYSBBK2zW27xRdGX8Sb2N4VkGUnBYt59SBKEhPfB',
    amount: 123,
    success: true,
    time: 1615187146246,
    instructions: Array(2).fill({
      parsed: {
        info: {
          destination: 'AXUChvpRwUUPMJhA4d23WcoyAL7W8zgAeo7KoH57c75F',
          lamports: 8287,
          source: 'AXUChvpRwUUPMJhA4d23WcoyAL7W8zgAeo7KoH57c75F',
        },
        type: 'transfer',
      },
      program: 'system',
      programId: '11111111111111111111111111111111',
    }),
  },
};

jest.mock('./contexts/transaction', () => ({
  TransactionProvider: 'TransactionProvider',
  TransactionContext: {
    Consumer: ({ children }) => children(mockTransactionContext),
  },
}));

// ==================================
// unit tests
// ==================================
describe('screen: Blocks/List', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <TransactionDetails />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
