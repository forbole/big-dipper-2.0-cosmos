import Desktop from '@/screens/blocks/components/desktop';
import { MockTheme } from '@/tests/utils';
import renderer from 'react-test-renderer';
import type { AutoSizerProps } from 'react-virtualized-auto-sizer';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('@/components/loading', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Loading" {...props} />
));
jest.mock('@/components/avatar_name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="AvatarName" {...props} />
));

jest.mock(
  'react-virtualized-auto-sizer',
  () =>
    ({ children }: AutoSizerProps) =>
      children({
        height: 600,
        width: 600,
      })
);

// ==================================
// unit tests
// ==================================
describe('screen: Home/Blocks/Desktop', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Desktop
          items={[
            {
              height: 300,
              txs: 2,
              timestamp: '',
              proposer: {
                name: 'proposer',
                address: 'address',
              },
              hash: 'hash',
            },
            {
              height: 301,
              txs: 2,
              timestamp: '',
              proposer: {
                name: 'proposer',
                address: 'address',
              },
              hash: 'hash',
            },
          ]}
          itemCount={2}
          loadMoreItems={() => jest.fn()}
          isItemLoaded={() => true}
        />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
