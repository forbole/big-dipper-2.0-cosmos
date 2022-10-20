import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import SingleNetwork from '.';
// ==================================
// global setup
// ==================================
let component:renderer.ReactTestRenderer;

// ==================================
// unit tests
// ==================================
describe('screen: Nav/SingleNetwork', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <SingleNetwork url="http://bigdipper.live/desmos" chainId="desmos-mainnet" name="desmos" className="" />
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
