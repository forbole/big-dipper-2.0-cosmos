import React from 'react';
import axios from 'axios';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Consensus from '.';

// ==================================
// mocks
// ==================================
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

export const mockData = {
  data: [
    {
      result: {
        round_state: {
          'height/round/step': '10/0/2',
          proposer: {
            address: 'address',
          },
          height_vote_set: [
            {
              precommits_bit_array: ' = 0.50',
              prevotes_bit_array: ' = 0.50',
            },
          ],
        },
      },
    },
  ],
};

jest.mock('@contexts', () => ({
  useChainContext: () => ({
    findAddress: jest.fn(() => null),
  }),
}));

const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);

jest.mock('@components', () => ({
  Box: (props) => <div id="box" {...props} />,
  AvatarName: (props) => <div id="AvatarName" {...props} />,
}));

jest.mock('recharts', () => ({
  RadialBarChart: (props) => <div id="RadialBarChart" {...props} />,
  PolarAngleAxis: (props) => <div id="PolarAngleAxis" {...props} />,
  RadialBar: (props) => <div id="RadialBar" {...props} />,
  Tooltip: (props) => <div id="Tooltip" {...props} />,
}));
// ==================================
// unit tests
// ==================================
describe('screen: Home/Consensus', () => {
  it('matches snapshot', () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(mockData));
    const component = renderer.create(
      <MockTheme>
        <Consensus />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
