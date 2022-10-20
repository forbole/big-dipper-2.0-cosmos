import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Desktop from '.';

// ==================================
// global setup
// ==================================
let component:renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
jest.mock('./components', () => ({
  ActionBar: (props) => <div id="actionBar" {...props} />,
}));

jest.mock('..', () => ({
  MenuItems: (props) => <div id="MenuItems" {...props} />,
  TitleBar: (props) => <div id="TitleBar" {...props} />,
}));
// ==================================
// unit tests
// ==================================
describe('screen: Nav/Desktop', () => {
  beforeEach(() => {
    component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Desktop title="hello world" />
        </MockTheme>
      </RecoilRoot>,
    );
  });

  it('it renders', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('hook toggles correctly', () => {
    renderer.act(() => {
      component.root.findByProps({ className: 'makeStyles-logo' }).props.onClick();
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
