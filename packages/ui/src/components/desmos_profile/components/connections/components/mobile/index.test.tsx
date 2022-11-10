import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import Mobile from '.';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// unit tests
// ==================================
describe('screen: DesmosProfile/Mobile', () => {
  const connection: ProfileConnectionType[] = [
    {
      network: '',
      identifier: '',
      creationTime: '',
    },
  ];
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <Mobile items={connection} />
      </MockTheme>
    );
  });

  it('it renders', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
