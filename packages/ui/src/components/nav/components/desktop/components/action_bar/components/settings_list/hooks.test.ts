import { renderHook, cleanup, act } from '@testing-library/react-hooks';
import { RecoilRoot } from 'recoil';
import { useSettingList } from './hooks';

const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);

jest.mock('react-toastify', () => ({
  toast: jest.fn(),
}));

describe('hook: useSettingList', () => {
  test('handles open correctly', () => {
    const { result } = renderHook(() => useSettingList({ lang: mockI18n.lang }), {
      wrapper: RecoilRoot,
    });
    expect(result.current.open).toBe(false);

    act(() => result.current.handleOpen());
    expect(result.current.open).toBe(true);
  });

  test('handles close correctly', () => {
    const { result } = renderHook(() => useSettingList({ lang: mockI18n.lang }), {
      wrapper: RecoilRoot,
    });
    expect(result.current.open).toBe(false);

    act(() => result.current.handleOpen());
    expect(result.current.open).toBe(true);

    act(() => result.current.handleClose());
    expect(result.current.open).toBe(false);
  });

  test('handles cancel correctly', () => {
    const { result } = renderHook(() => useSettingList({ lang: mockI18n.lang }), {
      wrapper: RecoilRoot,
    });

    act(() => result.current.handleCancel());
    expect(result.current.state).toStrictEqual({
      dateFormat: 'locale',
      lang: 'en',
      theme: 'light',
      txListFormat: 'compact',
    });
  });

  test('handles language change correctly', () => {
    const { result } = renderHook(() => useSettingList({ lang: mockI18n.lang }), {
      wrapper: RecoilRoot,
    });

    act(() => result.current.handleChange('lang', 'zht'));
    expect(result.current.state).toStrictEqual({
      dateFormat: 'locale',
      lang: 'zht',
      theme: 'light',
      txListFormat: 'compact',
    });
  });

  test('handles submit form correctly', () => {
    const { result } = renderHook(() => useSettingList({ lang: mockI18n.lang }), {
      wrapper: RecoilRoot,
    });

    act(() => result.current.handleFormSubmit({ preventDefault: jest.fn() }));
    expect(result.current.state).toStrictEqual({
      dateFormat: 'locale',
      lang: 'en',
      theme: 'light',
      txListFormat: 'compact',
    });
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
