import { act, cleanup, renderHook } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useSettingList } from '@/components/nav/components/desktop/components/action_bar/components/settings_list/hooks';

jest.mock('react-toastify', () => ({
  toast: jest.fn(),
}));

describe('hook: useSettingList', () => {
  test('handles open correctly', () => {
    const { result } = renderHook(() => useSettingList({ lang: 'en' }), {
      wrapper: RecoilRoot,
    });
    expect(result.current.open).toBe(false);

    act(() => result.current.handleOpen());
    expect(result.current.open).toBe(true);
  });

  test('handles close correctly', () => {
    const { result } = renderHook(() => useSettingList({ lang: 'en' }), {
      wrapper: RecoilRoot,
    });
    expect(result.current.open).toBe(false);

    act(() => result.current.handleOpen());
    expect(result.current.open).toBe(true);

    act(() => result.current.handleClose());
    expect(result.current.open).toBe(false);
  });

  test('handles cancel correctly', () => {
    const { result } = renderHook(() => useSettingList({ lang: 'en' }), {
      wrapper: RecoilRoot,
    });

    act(() => result.current.handleCancel());
    expect(result.current.state).toStrictEqual({
      dateFormat: 'locale',
      timeFormat: '12-hour',
      lang: 'en',
      txListFormat: 'compact',
    });
  });

  test('handles language change correctly', () => {
    const { result } = renderHook(() => useSettingList({ lang: 'en' }), {
      wrapper: RecoilRoot,
    });

    act(() => result.current.handleChange('lang', 'zht'));
    expect(result.current.state).toStrictEqual({
      dateFormat: 'locale',
      timeFormat: '12-hour',
      lang: 'zht',
      txListFormat: 'compact',
    });
  });

  test('handles time format change correctly', () => {
    const { result } = renderHook(() => useSettingList({ lang: 'en' }), {
      wrapper: RecoilRoot,
    });

    act(() => result.current.handleTimeFormatChange());
    expect(result.current.time).toStrictEqual('24-hour');
  });

  test('handles submit form correctly', () => {
    const { result } = renderHook(() => useSettingList({ lang: 'en' }), {
      wrapper: RecoilRoot,
    });

    act(() => result.current.handleFormSubmit({ preventDefault: jest.fn() }));
    expect(result.current.state).toStrictEqual({
      dateFormat: 'locale',
      timeFormat: '12-hour',
      lang: 'en',
      txListFormat: 'compact',
    });
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
