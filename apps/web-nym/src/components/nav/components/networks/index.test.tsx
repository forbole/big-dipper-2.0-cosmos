import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Networks from '.';

// ==================================
// global setup
// ==================================
let component:renderer.ReactTestRenderer;

// ==================================
// unit tests
// ==================================
describe('screen: Nav/Networks', () => {
  beforeEach(() => {
    component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Networks />
        </MockTheme>
      </RecoilRoot>,
    );
  });

  it('it renders', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
