/* eslint-disable*/
import { MixinsOptions, Mixins } from '@material-ui/core/styles/createMixins';

declare module '@material-ui/core/styles/createMixins' {
  interface MixinsOptions {
    layout?: CSSProperties;
    tableCell?: CSSProperties;
  }

  interface Mixins {
    layout: CSSProperties;
    tableCell: CSSProperties;
  }
}
