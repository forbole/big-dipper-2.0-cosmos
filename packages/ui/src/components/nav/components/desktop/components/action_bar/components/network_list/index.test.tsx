import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import NetworkList from '.';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
jest.mock('@components/nav/components/networks', () => 'Networks');

// ==================================
// unit tests
// ==================================
describe('screen: Nav/NetworkList', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <NetworkList actionHeight={30} />
      </MockTheme>
    );
  });

  it('it renders', () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
