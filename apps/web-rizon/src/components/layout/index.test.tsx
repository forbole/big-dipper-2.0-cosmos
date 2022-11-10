import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import Layout from '.';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================

jest.mock('ui/components/nav', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Nav" {...props} />
));
jest.mock('ui/components/footer', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Footer" {...props} />
));

const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};

jest.mock('next-seo', () => ({
  NextSeo: (props: JSX.IntrinsicElements['div']) => <div id="NextSeo" {...props} />,
}));

jest.mock('next-translate/useTranslation', () => () => mockI18n);

// ==================================
// unit tests
// ==================================
describe('component: Layout', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <Layout>
          <div>hello world</div>
        </Layout>
      </MockTheme>
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
