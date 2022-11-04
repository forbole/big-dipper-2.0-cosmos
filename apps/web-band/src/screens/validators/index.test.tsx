import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Validators from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components/layout', () => (props: JSX.IntrinsicElements['div']) => <div id="Layout" {...props} />);

jest.mock('./components', () => ({
  List: (props: JSX.IntrinsicElements['div']) => <div id="List" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Validators', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Validators />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
