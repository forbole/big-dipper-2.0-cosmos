import React from 'react';
import renderer from 'react-test-renderer';
import {
  createMockClient,
} from 'mock-apollo-client';
import InnerApp from '.';
// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
const mockClient = createMockClient();

jest.mock('./hooks', () => ({
  useChainHealthCheck: () => mockClient,
}
));

// ==================================
// unit tests
// ==================================
describe('screen: _app/InnerApp', () => {
  it('matches snapshot', () => {
    renderer.act(() => {
      component = renderer.create(
        <InnerApp
          router={{
          } as any}
          Component={() => <div id="component" />}
          pageProps={{
            props: 'props',
          }}
        />,
      );
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
