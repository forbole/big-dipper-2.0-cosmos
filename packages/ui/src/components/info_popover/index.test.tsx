import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import InfoPopover from 'ui/components/info_popover';
import ConditionExplanation from 'ui/components/condition_explanation';

// ==================================
// unit tests
// ==================================
describe('component: InfoPopover', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <InfoPopover content={ConditionExplanation} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
