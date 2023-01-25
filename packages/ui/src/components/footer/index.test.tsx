import renderer from 'react-test-renderer';
import Footer from '@/components/footer';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// unit tests
// ==================================
describe('component: layout/footer', () => {
  it('matches snapshot', () => {
    const mockDate = new Date(2017, 11, 10);
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

    const component = renderer.create(
      <MockTheme>
        <Footer />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
