import { act, renderHook } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import useThemeToggle from '@/components/nav/components/theme_toggle/hooks';

describe('hook: useThemeToggle', () => {
  test('change theme on called', () => {
    const { result } = renderHook(() => useThemeToggle(), { wrapper: RecoilRoot });
    act(() => result.current.themeChange());
    expect(result.current.theme).toBe('dark');
  });
});
