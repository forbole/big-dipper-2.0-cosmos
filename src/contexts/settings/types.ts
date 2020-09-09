export type Theme = 'light' | 'dark';

export interface SettingsState {
  theme: Theme;
  muiTheme: any;
  firstTime: boolean;
  toggleThemeMode?: () => void;
}
