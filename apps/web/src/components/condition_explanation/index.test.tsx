import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import ConditionExplanation from '.';

// ==================================
// unit tests
// ==================================
describe('components: ConditionExplanation', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <ConditionExplanation />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});