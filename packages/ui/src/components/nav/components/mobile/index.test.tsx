import Mobile from '@/components/nav/components/mobile';
import { MockTheme, wait } from '@/tests/utils';
import renderer from 'react-test-renderer';
// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// global setup
// ==================================
jest.mock(
  '@/components/nav/components/mobile/components/menu',
  () => (props: JSX.IntrinsicElements['div']) => <div id="menu" {...props} />
);
jest.mock(
  '@/components/nav/components/mobile/components/navbar',
  () => (props: JSX.IntrinsicElements['div']) => <div id="navbar" {...props} />
);
jest.mock('@/components/nav/components/search_bar', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="searchBar" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: Nav/Mobile', () => {
  beforeEach(async () => {
    component = renderer.create(
      <MockTheme>
        <Mobile title="hello world" />
      </MockTheme>
    );
    await wait(renderer.act);
  });

  it('it renders', async () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
