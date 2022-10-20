/* eslint-disable */
import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import { ValidatorsDocument } from '@graphql/types';
import List from '.';

// ==================================
// mocks
// ==================================
jest.mock('./components', () => ({
  Mobile: (props) => <div id="Mobile" {...props} />,
  Desktop: (props) => <div id="Desktop" {...props} />,
  Tabs: (props) => <div id="Tabs" {...props} />,
}));

jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
  NoData: (props) => <div id="NoData" {...props} />,
  LoadAndExist: (props) => <div id="LoadAndExist" {...props} />,
}));

const mockValidatorsDocument = jest.fn().mockResolvedValue({
  data: {
    "validator": [
      {
        "address": "BxTUwfMiokzimVDLDupGfVPmWXfLSGVpkGr9TUmetn6b",
        "commission": 10,
        "validatorStatus": {
          "active": true,
          "activatedStake": 96138469659982,
          "lastVote": 133152621,
          "rootSlot": 133152575,
          "slot": 133152624,
        },
        "validatorSkipRate": {
          "skip": 5,
          "skipRate": 0.06944444444444445,
          "total": 72
        }
      }
    ]
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Validators/List', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
      ValidatorsDocument,
      mockValidatorsDocument,
    );

    let component;

    renderer.act(() => {
      component = renderer.create(
        <RecoilRoot>
          <ApolloProvider client={mockClient}>
            <MockTheme>
              <List />
            </MockTheme>
          </ApolloProvider>
        </RecoilRoot>,
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
