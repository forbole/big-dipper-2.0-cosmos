import { ThemeOptions } from '@material-ui/core';
declare type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
/** Custom theme overrides for tritanopia mode */
export declare const tritanopiaThemeOverride: DeepPartial<ThemeOptions>;
export {};
//# sourceMappingURL=tritanopia.d.ts.map