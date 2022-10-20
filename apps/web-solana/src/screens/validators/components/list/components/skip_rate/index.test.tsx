import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import SkipRate from '.';

// ==================================
// mocks
// ==================================

// ==================================
// unit tests
// ==================================
describe('screen: Validators/SkipRate', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <SkipRate
          skipRate={{
            rate: 0.4,
            skip: 100,
            total: 200,
          }}
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
