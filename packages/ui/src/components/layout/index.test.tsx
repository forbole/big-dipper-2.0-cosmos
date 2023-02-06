import renderer from 'react-test-renderer';
import Layout from '@/components/layout';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
jest.mock('@/components/nav', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Nav" {...props} />
));
jest.mock('@/components/footer', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Footer" {...props} />
));
jest.mock('@/components/banner', () => ({
  default(props: JSX.IntrinsicElements['div']) {
    return <div id="Banner" {...props} />;
  },
  getBannersLinks() {
    return [];
  },
}));

jest.mock('next-seo', () => ({
  NextSeo: (props: JSX.IntrinsicElements['div']) => <div id="NextSeo" {...props} />,
}));

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    locales: ['en', 'zh'],
    pathname: '/app/home',
    query: {
      key: 'val',
    },
  }),
}));

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
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
