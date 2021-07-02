export type Theme = 'light' | 'dark' | 'device' | 'deuteranopia' | 'tritanopia' | 'achromatopsia';

export interface ThemeState {
  theme: Theme;
  muiTheme: any;
  themeSelection: string;
  themeList: string[];
  changeTheme?: (value: string) => void;
}

export interface DateFormatState {
  dateFormat: 'locale' | 'utc';
  changeDateFormat?: (value: string) => void;
  dateFormatList: string[];
}

export type SettingsState = ThemeState & DateFormatState;
