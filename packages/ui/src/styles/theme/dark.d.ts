import { ThemeOptions } from '@material-ui/core';
declare type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
/** Custom theme overrides for dark mode */
export declare const darkThemeOverride: DeepPartial<ThemeOptions>;
export {};
//# sourceMappingURL=dark.d.ts.map