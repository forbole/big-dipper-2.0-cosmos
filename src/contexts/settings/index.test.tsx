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
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
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
