import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Instructions from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
  Tag: (props) => <div id="Tag" {...props} />,
}));

jest.mock('react-virtualized-auto-sizer', () => ({ children }: any) => children({
  height: 600, width: 600,
}));

jest.mock('../../contexts/transaction', () => ({
  useTransactionContext: () => ({
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
  }),
}));

// ==================================
// unit tests
// ==================================
describe('screen: Home/Blocks/Mobile', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Instructions />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
