import {
  renderHook,
  act,
  cleanup,
} from '@testing-library/react-hooks';
import { createMuiTheme } from '@material-ui/core/styles';
import { MockTheme } from '@tests/utils';
import {
  SettingsProvider,
  useSettingsContext,
} from '@contexts';
import {
  // lightTemplate,
  darkTemplate,
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
        <SettingsProvider>
          {() => {
            return (
              <MockTheme>
                {children}
              </MockTheme>
            );
          }}
        </SettingsProvider>
      );
    };
    const { result } = renderHook(() => useSettingsContext(), {
      wrapper,
    });
    // const lightTheme = JSON.stringify(createMuiTheme(lightTemplate));
    const darkTheme = JSON.stringify(createMuiTheme(darkTemplate));

    expect(result.current.theme).toBe('dark');
    expect(JSON.stringify(result.current.muiTheme)).toEqual(darkTheme);
    await act(async () => {
      await result.current.changeTheme('dark');
    });
    // expect(result.current.theme).toBe('dark');
    expect(JSON.stringify(result.current.muiTheme)).toBe(darkTheme);
    // await act(async () => {
    //   await result.current.changeTheme('dark');
    // });
    // expect(result.current.theme).toBe('dark');
    // expect(JSON.stringify(result.current.muiTheme)).toBe(darkTheme);
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
