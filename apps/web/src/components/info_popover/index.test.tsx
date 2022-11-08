import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import {
  InfoPopover,
  ConditionExplanation,
} from '@components';

// ==================================
// unit tests
// ==================================
describe('component: InfoPopover', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <InfoPopover
          content={ConditionExplanation}
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