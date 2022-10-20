import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Profile from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
  Avatar: (props) => <div id="Avatar" {...props} />,
  Tag: (props) => <div id="Tag" {...props} />,
  InfoPopover: (props) => <div id="InfoPopover" {...props} />,
  Markdown: (props) => <div id="Markdown" {...props} />,
  ConditionExplanation: (props) => <div id="ConditionExplanation" {...props} />,
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
            validator="validator"
            operatorAddress="operatorAddress"
            selfDelegateAddress="selfDelegateAddress"
            description="description"
            website=""
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
