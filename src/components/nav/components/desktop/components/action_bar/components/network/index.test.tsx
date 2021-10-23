import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Network from '.';

// ==================================
// global setup
// ==================================
let component:renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
const mockToggleNetwork = jest.fn();

// ==================================
// unit tests
// ==================================
describe('screen: Nav/Network', () => {
  beforeEach(() => {
    component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Network
            toggleNetwork={mockToggleNetwork}
          />
        </MockTheme>
      </RecoilRoot>,
    );
  });

  it('it renders', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it calls toggle on click', () => {
    renderer.act(() => {
      component.root.findByProps({ className: 'makeStyles-root' }).props.onClick();
    });
    expect(mockToggleNetwork).toHaveBeenCalledTimes(1);
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
