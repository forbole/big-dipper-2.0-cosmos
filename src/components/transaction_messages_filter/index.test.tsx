import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import TransactionMessagesFilter from '.';

// ==================================
// global setup
// ==================================
let component:renderer.ReactTestRenderer;
const callback = jest.fn();

// ==================================
// mocks
// ==================================
jest.mock('@material-ui/core', () => ({
  MenuItem: (props) => <div id="MenuItem" {...props} />,
  Select: (props) => <div id="Select" {...props} />,
  InputBase: (props) => <div id="InputBase" {...props} />,
  Typography: (props) => <div id="Typography" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('component: TransactionMessagesFilter', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <TransactionMessagesFilter
          callback={callback}
        />
      </MockTheme>,
    );
  });

  it('it renders', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
