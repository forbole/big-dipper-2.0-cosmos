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

jest.mock('@src/screens/home/components/blocks/contexts/blocks', () => ({
  useBlocksContext: () => ({
    rawData: [{
      height: 4000,
      txs: 12,
      timestamp: '2021-02-18T09:02:28.668623',
      proposer: 'desmosvalcons1why72hjk945yhckcy5hzk2z2w9d5h65t9am0kd',
      hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
    }],
    formatUi: jest.fn(() => [
      {
        height: <div>4,000</div>,
        txs: 12,
        time: 'moments ago',
        proposer: <div>proposer</div>,
        hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
      },
    ]),
  }),
}));

// ==================================
// unit tests
// ==================================
describe('screen: Home/Blocks/Desktop', () => {
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
