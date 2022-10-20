/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import {
  MockTheme, wait,
} from '@tests/utils';
import { EpochDetailsDocument } from '@graphql/types';
import Epoch from '.';

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
  LoadAndExist: (props) => <div id="LoadAndExist" {...props} />,
}));

jest.mock('./components', () => ({
  EpochDetail: (props) => <div id="EpochDetail" {...props} />,
}));

const mockEpochDetailsDocument = jest.fn().mockResolvedValue({
  "data": {
    "inflationRate": {
      "epoch": 305,
      "foundation": 0,
      "total":0.06963020582432754,
      "validator": 0.06963020582432754,
    },
    "inflationGovernor": {
      "foundation": 0,
      "foundationTerm": 0,
      "initial": 0.08,
      "taper": 0.15,
      "terminal": 0.015,
    },
    "epochSchedule": {
      "firstNormalEpoch": 0,
      "firstNormalSlot": 0,
      "leaderScheduleSlotOffset": 432000,
      "slotsPerEpoch": 432000,
      "warmup": false,
    }
  }
});


// ==================================
// unit tests
// ==================================
describe('screen: Epoch', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();

    mockClient.setRequestHandler(
      EpochDetailsDocument,
      mockEpochDetailsDocument,
    );

console.log('mockEpochDocument', mockEpochDetailsDocument)

    let component;

    renderer.act(() => {
      component = renderer.create(
          <ApolloProvider client={mockClient}>
            <MockTheme>
              <Epoch />
            </MockTheme>
          </ApolloProvider>
      );
    });
    await wait();

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
