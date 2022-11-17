import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Name from '.';

// ==================================
// unit tests
// ==================================
describe('components: Name', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Name
          address="desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz"
          name="name"
        />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
