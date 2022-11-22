import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import Profile from '.';

// ==================================
// mocks
// ==================================
jest.mock('ui/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Box" {...props} />
));
jest.mock('ui/components/avatar', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Avatar" {...props} />
));
jest.mock('ui/components/tag', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Tag" {...props} />
));
jest.mock('ui/components/info_popover', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="InfoPopover" {...props} />
));
jest.mock('ui/components/markdown', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Markdown" {...props} />
));
jest.mock('ui/components/condition_explanation', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="ConditionExplanation" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: ValidatorDetails/Profile', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Profile
          profile={{
            validator: 'validator',
            operatorAddress: 'operatorAddress',
            selfDelegateAddress: 'selfDelegateAddress',
            description: 'description',
            website: '',
          }}
        />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
