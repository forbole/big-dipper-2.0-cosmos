import Mobile from '@/components/desmos_profile/components/connections/components/mobile';
import { MockTheme } from '@/tests/utils';
import renderer from 'react-test-renderer';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// unit tests
// ==================================
describe('screen: DesmosProfile/Mobile', () => {
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
        <Mobile items={connection} />
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
