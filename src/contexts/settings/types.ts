export type Theme = 'light' | 'dark' | 'device';

export interface SettingsState {
  theme: Theme;
  muiTheme: any;
  themeSelection: string;
  toggleThemeMode?: () => void;
}
