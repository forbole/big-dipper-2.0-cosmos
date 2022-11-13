import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import TransactionMessagesFilter from '.';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;
const callback = jest.fn();

// ==================================
// mocks
// ==================================
jest.mock('@material-ui/core/MenuItem', () => (props: JSX.IntrinsicElements['div']) => <div id="MenuItem" {...props} />);
jest.mock('@material-ui/core/Select', () => (props: JSX.IntrinsicElements['div']) => <div id="Select" {...props} />);
jest.mock('@material-ui/core/InputBase', () => (props: JSX.IntrinsicElements['div']) => <div id="InputBase" {...props} />);
jest.mock('@material-ui/core/Typography', () => (props: JSX.IntrinsicElements['div']) => <div id="Typography" {...props} />);

// ==================================
// unit tests
// ==================================
describe('component: TransactionMessagesFilter', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <TransactionMessagesFilter callback={callback} />
      </MockTheme>
    );
  });

  it('it renders', () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
