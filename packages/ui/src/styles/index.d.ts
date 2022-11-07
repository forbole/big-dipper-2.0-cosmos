import { ThemeOptions } from '@material-ui/core/styles';
declare type ThemeDictionaryType = {
    [theme: string]: ThemeOptions;
};
declare const themeDictionary: ThemeDictionaryType;
declare const defaultTheme: ThemeOptions;
declare function isThemeSupported(theme: string): boolean;
export { defaultTheme, isThemeSupported, themeDictionary };
//# sourceMappingURL=index.d.ts.map