import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import List from './components/list';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
}));

jest.mock('./components/list', () => (props) => <div id="List" {...props} />);

// ==================================
// unit tests
// ==================================
describe('screen: Accounts', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <List />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
