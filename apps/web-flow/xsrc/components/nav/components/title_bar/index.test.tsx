import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import TitleBar from '.';

// ==================================
// global setup
// ==================================
let component:renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================

const mockUseNavContext = {
  title: undefined,
  price: 0,
  marketCap: 0,
  inflation: 0,
  communityPool: 0,
};

// ==================================
// unit tests
// ==================================
describe('screen: Nav/TitleBar', () => {
  beforeEach(() => {
    component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <TitleBar
            title="hello world"
          />
        </MockTheme>
      </RecoilRoot>,
    );
  });

  it('it renders', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('hook toggles correctly', () => {
    mockUseNavContext.title = 'Validators';
    component.update(
      <RecoilRoot>
        <MockTheme>
          <TitleBar title="hello world" />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(() => {
  mockUseNavContext.title = undefined;
  jest.clearAllMocks();
});
