import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import List from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
}));

jest.mock('./components', () => ({
  Mobile: (props) => <div id="Mobile" {...props} />,
  Desktop: (props) => <div id="Desktop" {...props} />,
  Total: (props) => <div id="Total" {...props} />,
  Search: (props) => <div id="Search" {...props} />,
}));

const mockContext = {
  hasNextPage: true,
  isNextPageLoading: false,
  items: [],
  loadNextPage: jest.fn(),
  itemCount: jest.fn(),
  loadMoreItems: jest.fn(),
  isItemLoaded: jest.fn(),
};

jest.mock('./contexts/tokens', () => ({
  TokensProvider: 'TokensProvider',
  TokenssContext: {
    Consumer: ({ children }) => children(mockContext),
  },
}));

// ==================================
// unit tests
// ==================================
describe('screen: Tokens/List', () => {
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
