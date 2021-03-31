export type Theme = 'light' | 'dark' | 'device';

export interface SettingsState {
  theme: Theme;
  muiTheme: any;
  themeSelection: string;
  toggleThemeMode?: () => void;
  validatorsAddresses: {
    validators: {
      [key: string]: {
        moniker: string;
        imageUrl?: string;
      }
    };
    selfDelegateAddresses: {
      [key: string]: {
        moniker: string;
        imageUrl?: string;
      }
    };
  }
}
