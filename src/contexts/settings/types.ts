export type Theme = 'light' | 'dark' | 'device' | 'deuteranopia' | 'tritanopia' | 'achromatopsia';

export interface SettingsState {
  theme: Theme;
  muiTheme: any;
  themeSelection: string;
  // toggleThemeMode?: () => void;
  themeList: string[];
  changeTheme?: (value: string) => void;
}
