import React from 'react';
import renderer from 'react-test-renderer';
import { createMockClient } from 'mock-apollo-client';
import App from '.';

// ==================================
// mocks
// ==================================
const mockThemeContext = {
  theme: 'light',
};

const mockNetworksContext = {
  loading: false,
};

const mockChainContext = {
  loading: false,
};

const mockClient = createMockClient();

jest.mock('@contexts', () => ({
  useSettingsContext: () => mockThemeContext,
  useNetworksContext: () => mockNetworksContext,
  useChainContext: () => mockChainContext,
  SettingsProvider: 'SettingsProvider',
  SettingsContext: {
    Consumer: ({ children }) => children(mockThemeContext),
  },
  NetworksProvider: 'NetworksProvider',
  NetworksContext: {
    Consumer: ({ children }) => children,
  },
  ChainProvider: 'ChainProvider',
  ChainContext: {
    Consumer: ({ children }) => children,
  },
}));
jest.mock('@styles', () => ({
  GlobalCss: 'GlobalCss',
}));
jest.mock('@material-ui/core/styles', () => ({
  ThemeProvider: 'ThemeProvider',
  createMuiTheme: jest.fn(),
}));
jest.mock('next-translate/useTranslation', () => () => ({
  lang: 'en',
}));
jest.mock('@src/graphql/client', () => ({
  useApollo: () => mockClient,
}));

const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);

// ==================================
// unit tests
// ==================================
describe('screen: _app', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <App
        router={{
        } as any}
        Component={() => <div id="component" />}
        pageProps={{
          props: 'props',
        }}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('removes server-side injected CSS', () => {
    const removeChild = jest.fn();
    document.querySelector = jest.fn().mockReturnValue({
      parentElement: {
        removeChild,
      },
    });

    renderer.create(
      <App
        router={{
        } as any}
        Component={() => <div id="component" />}
        pageProps={{
          props: 'props',
        }}
      />,
    );
    renderer.act(() => undefined);
    expect(document.querySelector).toBeCalledWith('#jss-server-side');
    expect(removeChild).toBeCalledWith({
      parentElement: {
        removeChild,
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
