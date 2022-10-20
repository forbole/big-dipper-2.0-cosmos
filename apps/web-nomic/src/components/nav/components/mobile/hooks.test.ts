import {
  renderHook,
  act,
  cleanup,
} from '@testing-library/react-hooks';
import { useMobile } from './hooks';

describe('hook: useMobile', () => {
  test('correctly toggles menu open', async () => {
    const { result } = renderHook(() => useMobile());
    // initial
    expect(result.current.isMenu).toBe(false);
    expect(result.current.isNetwork).toBe(false);
    expect(result.current.isOpen).toBe(false);

    // opens menu if nothing is open
    act(() => {
      result.current.toggleNavMenus();
    });
    expect(result.current.isMenu).toBe(true);
    expect(result.current.isNetwork).toBe(false);
    expect(result.current.isOpen).toBe(true);

    // turns off menu or network if something is opened
    act(() => {
      result.current.toggleNavMenus();
    });
    expect(result.current.isMenu).toBe(false);
    expect(result.current.isNetwork).toBe(false);
    expect(result.current.isOpen).toBe(false);

    // only opens network
    act(() => {
      result.current.openNetwork();
    });
    expect(result.current.isMenu).toBe(false);
    expect(result.current.isNetwork).toBe(true);
    expect(result.current.isOpen).toBe(true);

    // turns off menu or network if something is opened
    act(() => {
      result.current.toggleNavMenus();
    });
    expect(result.current.isMenu).toBe(false);
    expect(result.current.isNetwork).toBe(false);
    expect(result.current.isOpen).toBe(false);

    // prep for next test - opens menu
    act(() => {
      result.current.toggleNavMenus();
    });
    expect(result.current.isMenu).toBe(true);
    expect(result.current.isNetwork).toBe(false);
    expect(result.current.isOpen).toBe(true);

    // closes everything
    act(() => {
      result.current.closeAll();
    });
    expect(result.current.isMenu).toBe(false);
    expect(result.current.isNetwork).toBe(false);
    expect(result.current.isOpen).toBe(false);
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
