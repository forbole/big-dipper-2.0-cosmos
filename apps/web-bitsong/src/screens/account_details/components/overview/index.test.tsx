import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Overview from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  BoxDetails: (props: JSX.IntrinsicElements['div']) => <div id="BoxDetails" {...props} />,
  Box: (props: JSX.IntrinsicElements['div']) => <div id="Box" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: AccountDetails/Overview', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Overview
          withdrawalAddress="withdrawalAddress"
          address="address"
        />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
