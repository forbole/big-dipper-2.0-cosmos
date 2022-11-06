import React from 'react';
import renderer from 'react-test-renderer';
import { createMockClient } from 'mock-apollo-client';
import { RecoilRoot } from 'recoil';
import App from '.';

const mockClient = createMockClient();

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
      <RecoilRoot>
        <App
          router={{} as any}
          Component={() => <div id="component" />}
          pageProps={{
            props: 'props',
          }}
        />
      </RecoilRoot>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
