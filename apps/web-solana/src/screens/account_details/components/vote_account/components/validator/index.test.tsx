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
            validator="desmosvaloper1rzhewpmmdl72lhnxj6zmxr4v94f522s4hyz467"
            identity="desmosvaloper1rzhewpmmdl72lhnxj6zmxr4v94f522s4hyz467"
            voteKey="7VGU4ZwR1e1AFekqbqv2gvjeg47e1PwMPm4BfLt6rxNk"
            website="https://www.forbole.com"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et quam vestibulum, ullamcorper mauris ut, imperdiet quam. Donec sed fermentum ligula. Quisque et est sit amet augue cursus varius vitae in tortor."
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
