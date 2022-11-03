import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Profile from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  ...jest.requireMock('@components'),
  Box: (props: JSX.IntrinsicElements['div']) => <div id="Box" {...props} />,
  Avatar: (props: JSX.IntrinsicElements['div']) => <div id="Avatar" {...props} />,
  Tag: (props: JSX.IntrinsicElements['div']) => <div id="Tag" {...props} />,
  InfoPopover: (props: JSX.IntrinsicElements['div']) => <div id="InfoPopover" {...props} />,
  Markdown: (props: JSX.IntrinsicElements['div']) => <div id="Markdown" {...props} />,
  ConditionExplanation: (props: JSX.IntrinsicElements['div']) => <div id="ConditionExplanation" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: ValidatorDetails/Profile', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Profile
            profile={
              {
                validator: 'validator',
                operatorAddress: 'operatorAddress',
                selfDelegateAddress: 'selfDelegateAddress',
                description: 'description',
                website: '',
              }
            }
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
