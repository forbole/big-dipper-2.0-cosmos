import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Overview from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  BoxDetails: (props) => <div id="BoxDetails" {...props} />,
  AvatarName: (props) => <div id="BoxDetailAvatarName" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: BlockDetails/Overview', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Overview
            overview={{
              mint: '9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E',
              decimals: 6,
              mintAuthority: '9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E',
              freezeAuthority: '9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E',
            }}
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
