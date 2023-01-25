import renderer from 'react-test-renderer';
import Name from '@/components/name';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// unit tests
// ==================================
describe('components: Name', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Name address="desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz" name="name" />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
