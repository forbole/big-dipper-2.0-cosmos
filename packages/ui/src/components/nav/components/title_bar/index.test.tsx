import renderer, { act } from 'react-test-renderer';
import TitleBar from '@/components/nav/components/title_bar';
import MockTheme from '@/tests/mocks/MockTheme';
import axios from 'axios';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================

const mockUseNavContext = {
  title: undefined as string | undefined,
  price: 0,
  marketCap: 0,
  inflation: 0,
  communityPool: 0,
};

// ==================================
// unit tests
// ==================================
describe.skip('screen: Nav/TitleBar', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <TitleBar />
      </MockTheme>
    );
  });

  const mAxiosResponse = {
    data: { coreum: { usd: 1 } },
  };

  jest.spyOn(axios, 'get').mockResolvedValueOnce(mAxiosResponse);

  it('it renders', () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  act(() => {
    it('hook toggles correctly', () => {
      mockUseNavContext.title = 'Validators';
      component.update(
        <MockTheme>
          <TitleBar />
        </MockTheme>
      );
      const tree = component?.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

afterEach(() => {
  mockUseNavContext.title = undefined;
  jest.clearAllMocks();
});
