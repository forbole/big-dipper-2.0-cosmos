import renderer from 'react-test-renderer';
import Desktop from '@/components/desmos_profile/components/connections/components/desktop';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// unit tests
// ==================================
describe('screen: DesmosProfile/Desktop', () => {
  const connection: ProfileConnectionType[] = [
    {
      network: '',
      identifier: '',
      creationTime: '',
    },
  ];
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <Desktop items={connection} />
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
