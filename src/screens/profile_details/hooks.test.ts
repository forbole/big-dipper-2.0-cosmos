import {
  renderHook,
  act,
  cleanup,
} from '@testing-library/react-hooks';
import { useProfileDetails } from './hooks';

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      dtag: '@dtag',
    },
    replace: jest.fn(() => '/'),
    push: jest.fn(() => ('/@dtag')),
  }),
}));

describe('hook: useProfileDetails', () => {
  test('correctly toggles profile open', async () => {
    const { result } = renderHook(() => useProfileDetails());
    // initial state
    expect(result.current.state.loading).toBe(true);
    expect(result.current.state.exists).toBe(true);
    expect(result.current.state.desmosProfile).toBe(null);

    // render profile UI if shouldShowProfile returns true
    act(() => {
      result.current.shouldShowProfile();
    });
    expect(result.current.state.loading).toBe(false);
    expect(result.current.state.exists).toBe(true);
    expect(result.current.state.desmosProfile).toBe(true);

    // update url if renders profile UI but dtag and input is same in case insensitive
    act(() => {
      result.current.shouldShowProfile();
    });
    expect(jest.fn(() => ('/@dtag'))).toBeCalledWith('/@dtag');
    expect(result.current.state.loading).toBe(false);
    expect(result.current.state.exists).toBe(true);
    expect(result.current.state.desmosProfile).toBe(true);

    // don't render profile UI if shouldShowProfile returns false
    act(() => {
      result.current.shouldShowProfile();
    });
    expect(result.current.state.loading).toBe(true);
    expect(result.current.state.exists).toBe(false);
    expect(result.current.state.desmosProfile).toBe(true);
  });

  it('correctly update url', () => {
    // return to homepage if chainConfig profile is false

    // return to homepage if url dtag is not start with @

    // look up profile data in graphql if profile is true and dtag search is start with @
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
