import React from 'react';
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
      <MockTheme>
        <Profile
          validator={{
            moniker: 'moniker',
            imageUrl: '',
          }}
          operatorAddress="operatorAddress"
          selfDelegateAddress="selfDelegateAddress"
          description="description"
          status={3}
          jailed={false}
          website=""
          condition={70}
          commission={10}
          signedBlockWindow={7200}
          missedBlockCounter={0}
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
