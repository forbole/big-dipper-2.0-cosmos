import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import Desktop from '.';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
jest.mock('./components', () => ({
  ActionBar: (props: JSX.IntrinsicElements['div']) => <div id="actionBar" {...props} />,
}));

jest.mock('..', () => ({
  MenuItems: (props: JSX.IntrinsicElements['div']) => <div id="MenuItems" {...props} />,
  TitleBar: (props: JSX.IntrinsicElements['div']) => <div id="TitleBar" {...props} />,
}));
// ==================================
// unit tests
// ==================================
describe('screen: Nav/Desktop', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <Desktop title="hello world" />
      </MockTheme>
    );
  });

  it('it renders', () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('hook toggles correctly', () => {
    renderer.act(() => {
      component.root.findByProps({ className: 'makeStyles-logo' }).props.onClick();
    });
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
