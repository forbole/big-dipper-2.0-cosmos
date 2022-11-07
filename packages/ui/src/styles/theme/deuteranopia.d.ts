import { ThemeOptions } from '@material-ui/core';
declare type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
/** Custom theme overrides for deuteranopia mode */
export declare const deuteranopiaThemeOverride: DeepPartial<ThemeOptions>;
export {};
//# sourceMappingURL=deuteranopia.d.ts.map