import renderer from 'react-test-renderer';
import LoadAndExist from '@/components/load_and_exist';
import MockTheme from '@/tests/mocks/MockTheme';

const mockPush = jest.fn();

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    push: mockPush,
  }),
}));

// ==================================
// unit tests
// ==================================
describe('components: LoadAndExist', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <LoadAndExist loading exists>
          <div>Test 1</div>
        </LoadAndExist>
        ,
        <LoadAndExist loading={false} exists={false}>
          <div>Test 2</div>
        </LoadAndExist>
        ,
        <LoadAndExist loading={false} exists>
          <div>Test 3</div>
        </LoadAndExist>
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
