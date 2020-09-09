import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import List from '.';

// ==================================
// mocks
// ==================================
jest.mock('./components', () => ({
  Mobile: (props) => <div id="Mobile" {...props} />,
  Desktop: (props) => <div id="Desktop" {...props} />,
  Tabs: (props) => <div id="Tabs" {...props} />,
}));

jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
}));

jest.mock('./contexts/validators', () => ({
  ValidatorsProvider: 'ValidatorsProvider',
  ValidatorsContext: {
    Consumer: ({ children }) => children,
  },
}));

// ==================================
// unit tests
// ==================================
describe('screen: Validators/List', () => {
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
