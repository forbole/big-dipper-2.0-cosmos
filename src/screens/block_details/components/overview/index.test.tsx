import React from 'react';
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

jest.mock('../../contexts/block', () => ({
  useBlockContext: () => {
    return ({
      uiData: {
        block: [
          {
            label: 'label',
            detail: <div>detail</div>,
          },
        ],
      },
    });
  },
}));

// ==================================
// unit tests
// ==================================
describe('screen: BlockDetails/Overview', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Overview />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
