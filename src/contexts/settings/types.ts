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

export interface TxListFormatState {
  txListFormat: 'compact' | 'detailed';
  changeTxListFormat?: (value: string) => void;
  txListFormatList: string[];
}

export type SettingsState = DateFormatState
& TxListFormatState;
