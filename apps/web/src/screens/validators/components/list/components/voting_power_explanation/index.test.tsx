import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import VotingPowerExplanation from '.';

// ==================================
// unit tests
// ==================================
describe('screen: Validators/VotingPowerExplanation', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <VotingPowerExplanation />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
