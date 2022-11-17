import {
  renderHook,
  cleanup,
  act,
} from '@testing-library/react-hooks';
import { useDesmosProfile } from './hooks';

describe('hook: useDesmosProfile', () => {
  test('handles open connections correctly', () => {
    const { result } = renderHook(() => useDesmosProfile());
    expect(result.current.connectionsOpen).toBe(false);

    act(() => result.current.handleConnectionsOpen());
    expect(result.current.connectionsOpen).toBe(true);
  });

  test('handles close connections correctly', () => {
    const { result } = renderHook(() => useDesmosProfile());
    expect(result.current.connectionsOpen).toBe(false);

    act(() => result.current.handleConnectionsOpen());
    expect(result.current.connectionsOpen).toBe(true);

    act(() => result.current.handleConnectionsClose());
    expect(result.current.connectionsOpen).toBe(false);
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
