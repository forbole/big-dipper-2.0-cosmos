import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@/tests/utils';
import TitleBar from '@/components/nav/components/title_bar';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================

const mockUseNavContext = {
  title: undefined as string | undefined,
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
      <MockTheme>
        <TitleBar title="hello world" />
      </MockTheme>
    );
  });

  it('it renders', () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('hook toggles correctly', () => {
    mockUseNavContext.title = 'Validators';
    component.update(
      <MockTheme>
        <TitleBar title="hello world" />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(() => {
  mockUseNavContext.title = undefined;
  jest.clearAllMocks();
});
