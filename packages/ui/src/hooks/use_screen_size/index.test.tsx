import { act, cleanup, renderHook } from '@testing-library/react';
import { useScreenSize } from '@/hooks/use_screen_size';

describe('hook: useScreenSize', () => {
  test('returns correct definitions', async () => {
    const { result } = renderHook(() => useScreenSize());

    await act(async () => {
      global.innerWidth = 300;
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current.isDesktop).toBe(false);
    expect(result.current.windowSize).toHaveProperty('height');
    expect(result.current.windowSize).toHaveProperty('width');
    expect(result.current.isMobile).toBe(true);

    await act(async () => {
      global.innerWidth = 960;
      global.dispatchEvent(new Event('resize'));
    });
    expect(result.current.isMobile).toBe(false);
    expect(result.current.isDesktop).toBe(false);
    expect(result.current.isTablet).toBe(true);

    await act(async () => {
      global.innerWidth = 1400;
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current.isMobile).toBe(false);
    expect(result.current.isDesktop).toBe(true);
    expect(result.current.isTablet).toBe(false);
    expect(result.current.windowSize.width).toBe(1400);
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
