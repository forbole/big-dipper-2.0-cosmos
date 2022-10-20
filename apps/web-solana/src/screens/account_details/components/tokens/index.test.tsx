/* eslint-disable */
import React from 'react';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import { NativeAccountTokensDocument } from '@graphql/types';
import Tokens from '.';

// ==================================
// mocks
// ==================================
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      address: "9XfsbcUJ8qM4esLtMocrMGLqRPkgYNbcmKLebtBzSjjZ",
    },
  }),
}));

jest.mock('./components', () => ({
  TokensList: (props) => <div id="TokensList" {...props} />,
}));

const mockData = jest.fn().mockResolvedValue({
  "data": {
    "tokens": []
  }
});

// ==================================
// unit tests
// ==================================
describe('screen: Tokens', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
      NativeAccountTokensDocument,
      mockData,
    );

    let component;
    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <Tokens />
          </MockTheme>
        </ApolloProvider>,
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
