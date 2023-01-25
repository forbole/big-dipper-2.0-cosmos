import renderer from 'react-test-renderer';
import SingleNetwork from '@/components/nav/components/networks/components/single_network';
import MockTheme from '@/tests/mocks/MockTheme';
// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// unit tests
// ==================================
describe('screen: Nav/SingleNetwork', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <SingleNetwork
          url="http://bigdipper.live/desmos"
          chainId="desmos-mainnet"
          name="desmos"
          className=""
        />
      </MockTheme>
    );
  });

  it('it renders', () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
