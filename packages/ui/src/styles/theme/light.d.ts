import { ThemeOptions } from '@material-ui/core';
declare type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
/** Custom theme overrides for light mode */
export declare const lightThemeOverride: DeepPartial<ThemeOptions>;
export {};
//# sourceMappingURL=light.d.ts.map