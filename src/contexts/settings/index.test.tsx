import {
  renderHook,
  act,
  cleanup,
} from '@testing-library/react-hooks';
import {
  SettingsProvider,
  useSettingsContext,
} from '@contexts';
import {
  lightTheme,
  darkTheme,
} from '@styles';

// ==================================
// unit tests
// ==================================
describe('context: SettingsContext', () => {
  it('changes theme when toggleThemeMode is called', async () => {
    const wrapper: React.FC = ({ children }) => {
      return (
        <SettingsProvider>{children}</SettingsProvider>
      );
    };
    const { result } = renderHook(() => useSettingsContext(), {
      wrapper,
    });
    expect(result.current.theme).toBe('light');
    expect(result.current.muiTheme).toBe(lightTheme);
    await act(async () => {
      await result.current.toggleThemeMode();
    });
    expect(result.current.theme).toBe('dark');
    expect(result.current.muiTheme).toBe(darkTheme);
    await act(async () => {
      await result.current.toggleThemeMode();
    });
    expect(result.current.theme).toBe('light');
    expect(result.current.muiTheme).toBe(lightTheme);
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
