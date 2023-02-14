import { Theme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import { CSSObject } from 'tss-react/types';

type ResponsiveStyleKeys<N extends string> =
  | `${N}UntilXl`
  | `${N}WhenXl`
  | `${N}UntilLg`
  | `${N}WhenLg`
  | `${N}UntilMd`
  | `${N}WhenMd`
  | `${N}UntilSm`
  | `${N}WhenSm`
  | `${N}UntilXs`
  | `${N}WhenXs`;

type ResponsiveStyles<N extends string> = {
  [N1 in ResponsiveStyleKeys<N> | N]: N1 extends N
    ? CSSObject
    : { [breakpoint: string]: CSSObject };
};

const makeResponsiveStyles = <N extends string>(name: N, style: CSSObject, theme: Theme) =>
  ({
    [`${name}UntilXl`]: { [theme.breakpoints.down('xl')]: style },
    [`${name}WhenXl`]: { [theme.breakpoints.up('xl')]: style },
    [`${name}UntilLg`]: { [theme.breakpoints.down('lg')]: style },
    [`${name}WhenLg`]: { [theme.breakpoints.up('lg')]: style },
    [`${name}UntilMd`]: { [theme.breakpoints.down('md')]: style },
    [`${name}WhenMd`]: { [theme.breakpoints.up('md')]: style },
    [`${name}UntilSm`]: { [theme.breakpoints.down('sm')]: style },
    [`${name}WhenSm`]: { [theme.breakpoints.up('sm')]: style },
    [`${name}UntilXs`]: { [theme.breakpoints.down('xs')]: style },
    [`${name}WhenXs`]: { [theme.breakpoints.up('xs')]: style },
    [name]: style,
  } as ResponsiveStyles<N>);

export const useDisplayStyles = makeStyles()((theme: Theme) => ({
  ...makeResponsiveStyles('hidden', { display: 'none' }, theme),
  ...makeResponsiveStyles('block', { display: 'block' }, theme),
  ...makeResponsiveStyles('inlineBlock', { display: 'inline-block' }, theme),
  ...makeResponsiveStyles('flex', { display: 'flex' }, theme),
  ...makeResponsiveStyles('inlineFlex', { display: 'inline-flex' }, theme),
  ...makeResponsiveStyles('inline', { display: 'inline' }, theme),
  ...makeResponsiveStyles('table', { display: 'table' }, theme),
  ...makeResponsiveStyles('inlineTable', { display: 'inline-table' }, theme),
  ...makeResponsiveStyles('tableCaption', { display: 'table-caption' }, theme),
  ...makeResponsiveStyles('tableCell', { display: 'table-cell' }, theme),
  ...makeResponsiveStyles('tableColumn', { display: 'table-column' }, theme),
  ...makeResponsiveStyles('tableColumnGroup', { display: 'table-column-group' }, theme),
}));
export const useIsolationStyles = makeStyles()((theme: Theme) => ({
  ...makeResponsiveStyles('isolate', { isolate: 'isolate' }, theme),
  ...makeResponsiveStyles('isolationAuto', { isolate: 'auto' }, theme),
}));
export const useOverflowStyles = makeStyles()((theme: Theme) => ({
  ...makeResponsiveStyles('overflowAuto', { overflow: 'auto' }, theme),
  ...makeResponsiveStyles('overflowHidden', { overflow: 'hidden' }, theme),
  ...makeResponsiveStyles('overflowVisible', { overflow: 'visible' }, theme),
  ...makeResponsiveStyles('overflowScroll', { overflow: 'scroll' }, theme),
  ...makeResponsiveStyles('overflowXAuto', { overflowX: 'auto' }, theme),
  ...makeResponsiveStyles('overflowXHidden', { overflowX: 'hidden' }, theme),
  ...makeResponsiveStyles('overflowXVisible', { overflowX: 'visible' }, theme),
  ...makeResponsiveStyles('overflowXScroll', { overflowX: 'scroll' }, theme),
  ...makeResponsiveStyles('overflowYAuto', { overflowY: 'auto' }, theme),
  ...makeResponsiveStyles('overflowYHidden', { overflowY: 'hidden' }, theme),
  ...makeResponsiveStyles('overflowYVisible', { overflowY: 'visible' }, theme),
  ...makeResponsiveStyles('overflowYScroll', { overflowY: 'scroll' }, theme),
}));
export const usePositionStyles = makeStyles()((theme: Theme) => ({
  ...makeResponsiveStyles('static', { position: 'static' }, theme),
  ...makeResponsiveStyles('fixed', { position: 'fixed' }, theme),
  ...makeResponsiveStyles('absolute', { position: 'absolute' }, theme),
  ...makeResponsiveStyles('relative', { position: 'relative' }, theme),
  ...makeResponsiveStyles('sticky', { position: 'sticky' }, theme),
}));
export const useVisiblityStyles = makeStyles()((theme: Theme) => ({
  ...makeResponsiveStyles('visible', { visibility: 'visible' }, theme),
  ...makeResponsiveStyles('invisible', { visibility: 'hidden' }, theme),
}));
export const usePaddingStyles = makeStyles()((theme: Theme) => ({
  ...makeResponsiveStyles('p0', { padding: theme.spacing(0) }, theme),
  ...makeResponsiveStyles('p1', { padding: theme.spacing(1) }, theme),
  ...makeResponsiveStyles('p2', { padding: theme.spacing(2) }, theme),
  ...makeResponsiveStyles('p3', { padding: theme.spacing(3) }, theme),
  ...makeResponsiveStyles('p4', { padding: theme.spacing(4) }, theme),
  ...makeResponsiveStyles('p5', { padding: theme.spacing(5) }, theme),
  ...makeResponsiveStyles('p6', { padding: theme.spacing(6) }, theme),
  ...makeResponsiveStyles('p7', { padding: theme.spacing(7) }, theme),
  ...makeResponsiveStyles('p8', { padding: theme.spacing(8) }, theme),
  ...makeResponsiveStyles('p9', { padding: theme.spacing(9) }, theme),
  ...makeResponsiveStyles('p10', { padding: theme.spacing(10) }, theme),
  ...makeResponsiveStyles('p11', { padding: theme.spacing(11) }, theme),
}));
export const useMarginStyles = makeStyles()((theme: Theme) => ({
  ...makeResponsiveStyles('m0', { margin: theme.spacing(0) }, theme),
  ...makeResponsiveStyles('m1', { margin: theme.spacing(1) }, theme),
  ...makeResponsiveStyles('m2', { margin: theme.spacing(2) }, theme),
  ...makeResponsiveStyles('m3', { margin: theme.spacing(3) }, theme),
  ...makeResponsiveStyles('m4', { margin: theme.spacing(4) }, theme),
  ...makeResponsiveStyles('m5', { margin: theme.spacing(5) }, theme),
  ...makeResponsiveStyles('m6', { margin: theme.spacing(6) }, theme),
  ...makeResponsiveStyles('m7', { margin: theme.spacing(7) }, theme),
  ...makeResponsiveStyles('m8', { margin: theme.spacing(8) }, theme),
  ...makeResponsiveStyles('m9', { margin: theme.spacing(9) }, theme),
  ...makeResponsiveStyles('m10', { margin: theme.spacing(10) }, theme),
  ...makeResponsiveStyles('m11', { margin: theme.spacing(11) }, theme),
}));
export const useWidthStyles = makeStyles()((theme: Theme) => ({
  ...makeResponsiveStyles('wAuto', { width: 'auto' }, theme),
  ...makeResponsiveStyles('wPx', { width: '1px' }, theme),
  ...makeResponsiveStyles('w1of2', { width: '50%' }, theme),
  ...makeResponsiveStyles('w1of3', { width: '33.333333%' }, theme),
  ...makeResponsiveStyles('w2of3', { width: '66.666667%' }, theme),
  ...makeResponsiveStyles('w1of4', { width: '25%' }, theme),
  ...makeResponsiveStyles('w3of4', { width: '75%' }, theme),
  ...makeResponsiveStyles('w1of5', { width: '20%' }, theme),
  ...makeResponsiveStyles('w2of5', { width: '40%' }, theme),
  ...makeResponsiveStyles('w3of5', { width: '60%' }, theme),
  ...makeResponsiveStyles('w4of5', { width: '80%' }, theme),
  ...makeResponsiveStyles('w1of6', { width: '16.666667%' }, theme),
  ...makeResponsiveStyles('w5of6', { width: '83.333333%' }, theme),
  ...makeResponsiveStyles('w1of12', { width: '8.333333%' }, theme),
  ...makeResponsiveStyles('w5of12', { width: '41.666667%' }, theme),
  ...makeResponsiveStyles('w7of12', { width: '58.333333%' }, theme),
  ...makeResponsiveStyles('w11of12', { width: '91.666667%' }, theme),
  ...makeResponsiveStyles('wFull', { width: '100%' }, theme),
  ...makeResponsiveStyles('wScreen', { width: '100vw' }, theme),
  ...makeResponsiveStyles('wMin', { width: 'min-content' }, theme),
  ...makeResponsiveStyles('wMax', { width: 'max-content' }, theme),
}));
export const useMinWidthStyles = makeStyles()((theme: Theme) => ({
  ...makeResponsiveStyles('minWAuto', { minWidth: 'auto' }, theme),
  ...makeResponsiveStyles('minWPx', { minWidth: '1px' }, theme),
  ...makeResponsiveStyles('minW1of2', { minWidth: '50%' }, theme),
  ...makeResponsiveStyles('minW1of3', { minWidth: '33.333333%' }, theme),
  ...makeResponsiveStyles('minW2of3', { minWidth: '66.666667%' }, theme),
  ...makeResponsiveStyles('minW1of4', { minWidth: '25%' }, theme),
  ...makeResponsiveStyles('minW3of4', { minWidth: '75%' }, theme),
  ...makeResponsiveStyles('minW1of5', { minWidth: '20%' }, theme),
  ...makeResponsiveStyles('minW2of5', { minWidth: '40%' }, theme),
  ...makeResponsiveStyles('minW3of5', { minWidth: '60%' }, theme),
  ...makeResponsiveStyles('minW4of5', { minWidth: '80%' }, theme),
  ...makeResponsiveStyles('minW1of6', { minWidth: '16.666667%' }, theme),
  ...makeResponsiveStyles('minW5of6', { minWidth: '83.333333%' }, theme),
  ...makeResponsiveStyles('minW1of12', { minWidth: '8.333333%' }, theme),
  ...makeResponsiveStyles('minW5of12', { minWidth: '41.666667%' }, theme),
  ...makeResponsiveStyles('minW7of12', { minWidth: '58.333333%' }, theme),
  ...makeResponsiveStyles('minW11of12', { minWidth: '91.666667%' }, theme),
  ...makeResponsiveStyles('minWFull', { minWidth: '100%' }, theme),
  ...makeResponsiveStyles('minWScreen', { minWidth: '100vw' }, theme),
  ...makeResponsiveStyles('minWMin', { minWidth: 'min-content' }, theme),
  ...makeResponsiveStyles('minWMax', { minWidth: 'max-content' }, theme),
}));
export const useMaxWidthStyles = makeStyles()((theme: Theme) => ({
  ...makeResponsiveStyles('maxWAuto', { maxWidth: 'auto' }, theme),
  ...makeResponsiveStyles('maxWPx', { maxWidth: '1px' }, theme),
  ...makeResponsiveStyles('maxW1of2', { maxWidth: '50%' }, theme),
  ...makeResponsiveStyles('maxW1of3', { maxWidth: '33.333333%' }, theme),
  ...makeResponsiveStyles('maxW2of3', { maxWidth: '66.666667%' }, theme),
  ...makeResponsiveStyles('maxW1of4', { maxWidth: '25%' }, theme),
  ...makeResponsiveStyles('maxW3of4', { maxWidth: '75%' }, theme),
  ...makeResponsiveStyles('maxW1of5', { maxWidth: '20%' }, theme),
  ...makeResponsiveStyles('maxW2of5', { maxWidth: '40%' }, theme),
  ...makeResponsiveStyles('maxW3of5', { maxWidth: '60%' }, theme),
  ...makeResponsiveStyles('maxW4of5', { maxWidth: '80%' }, theme),
  ...makeResponsiveStyles('maxW1of6', { maxWidth: '16.666667%' }, theme),
  ...makeResponsiveStyles('maxW5of6', { maxWidth: '83.333333%' }, theme),
  ...makeResponsiveStyles('maxW1of12', { maxWidth: '8.333333%' }, theme),
  ...makeResponsiveStyles('maxW5of12', { maxWidth: '41.666667%' }, theme),
  ...makeResponsiveStyles('maxW7of12', { maxWidth: '58.333333%' }, theme),
  ...makeResponsiveStyles('maxW11of12', { maxWidth: '91.666667%' }, theme),
  ...makeResponsiveStyles('maxWFull', { maxWidth: '100%' }, theme),
  ...makeResponsiveStyles('maxWScreen', { maxWidth: '100vw' }, theme),
  ...makeResponsiveStyles('maxWMin', { maxWidth: 'min-content' }, theme),
  ...makeResponsiveStyles('maxWMax', { maxWidth: 'max-content' }, theme),
}));
export const useHeightStyles = makeStyles()((theme: Theme) => ({
  ...makeResponsiveStyles('hAuto', { height: 'auto' }, theme),
  ...makeResponsiveStyles('hPx', { height: '1px' }, theme),
  ...makeResponsiveStyles('h1of2', { height: '50%' }, theme),
  ...makeResponsiveStyles('h1of3', { height: '33.333333%' }, theme),
  ...makeResponsiveStyles('h2of3', { height: '66.666667%' }, theme),
  ...makeResponsiveStyles('h1of4', { height: '25%' }, theme),
  ...makeResponsiveStyles('h3of4', { height: '75%' }, theme),
  ...makeResponsiveStyles('h1of5', { height: '20%' }, theme),
  ...makeResponsiveStyles('h2of5', { height: '40%' }, theme),
  ...makeResponsiveStyles('h3of5', { height: '60%' }, theme),
  ...makeResponsiveStyles('h4of5', { height: '80%' }, theme),
  ...makeResponsiveStyles('h1of6', { height: '16.666667%' }, theme),
  ...makeResponsiveStyles('h5of6', { height: '83.333333%' }, theme),
  ...makeResponsiveStyles('h1of12', { height: '8.333333%' }, theme),
  ...makeResponsiveStyles('h5of12', { height: '41.666667%' }, theme),
  ...makeResponsiveStyles('h7of12', { height: '58.333333%' }, theme),
  ...makeResponsiveStyles('h11of12', { height: '91.666667%' }, theme),
  ...makeResponsiveStyles('hFull', { height: '100%' }, theme),
  ...makeResponsiveStyles('hScreen', { height: '100vh' }, theme),
  ...makeResponsiveStyles('hMin', { height: 'min-content' }, theme),
  ...makeResponsiveStyles('hMax', { height: 'max-content' }, theme),
}));
export const useMinHeightStyles = makeStyles()((theme: Theme) => ({
  ...makeResponsiveStyles('minHAuto', { minHeight: 'auto' }, theme),
  ...makeResponsiveStyles('minHPx', { minHeight: '1px' }, theme),
  ...makeResponsiveStyles('minH1of2', { minHeight: '50%' }, theme),
  ...makeResponsiveStyles('minH1of3', { minHeight: '33.333333%' }, theme),
  ...makeResponsiveStyles('minH2of3', { minHeight: '66.666667%' }, theme),
  ...makeResponsiveStyles('minH1of4', { minHeight: '25%' }, theme),
  ...makeResponsiveStyles('minH3of4', { minHeight: '75%' }, theme),
  ...makeResponsiveStyles('minH1of5', { minHeight: '20%' }, theme),
  ...makeResponsiveStyles('minH2of5', { minHeight: '40%' }, theme),
  ...makeResponsiveStyles('minH3of5', { minHeight: '60%' }, theme),
  ...makeResponsiveStyles('minH4of5', { minHeight: '80%' }, theme),
  ...makeResponsiveStyles('minH1of6', { minHeight: '16.666667%' }, theme),
  ...makeResponsiveStyles('minH5of6', { minHeight: '83.333333%' }, theme),
  ...makeResponsiveStyles('minH1of12', { minHeight: '8.333333%' }, theme),
  ...makeResponsiveStyles('minH5of12', { minHeight: '41.666667%' }, theme),
  ...makeResponsiveStyles('minH7of12', { minHeight: '58.333333%' }, theme),
  ...makeResponsiveStyles('minH11of12', { minHeight: '91.666667%' }, theme),
  ...makeResponsiveStyles('minHFull', { minHeight: '100%' }, theme),
  ...makeResponsiveStyles('minHScreen', { minHeight: '100vh' }, theme),
  ...makeResponsiveStyles('minHMin', { minHeight: 'min-content' }, theme),
  ...makeResponsiveStyles('minHMax', { minHeight: 'max-content' }, theme),
}));
export const useMaxHeightStyles = makeStyles()((theme: Theme) => ({
  ...makeResponsiveStyles('maxHAuto', { maxHeight: 'auto' }, theme),
  ...makeResponsiveStyles('maxHPx', { maxHeight: '1px' }, theme),
  ...makeResponsiveStyles('maxH1of2', { maxHeight: '50%' }, theme),
  ...makeResponsiveStyles('maxH1of3', { maxHeight: '33.333333%' }, theme),
  ...makeResponsiveStyles('maxH2of3', { maxHeight: '66.666667%' }, theme),
  ...makeResponsiveStyles('maxH1of4', { maxHeight: '25%' }, theme),
  ...makeResponsiveStyles('maxH3of4', { maxHeight: '75%' }, theme),
  ...makeResponsiveStyles('maxH1of5', { maxHeight: '20%' }, theme),
  ...makeResponsiveStyles('maxH2of5', { maxHeight: '40%' }, theme),
  ...makeResponsiveStyles('maxH3of5', { maxHeight: '60%' }, theme),
  ...makeResponsiveStyles('maxH4of5', { maxHeight: '80%' }, theme),
  ...makeResponsiveStyles('maxH1of6', { maxHeight: '16.666667%' }, theme),
  ...makeResponsiveStyles('maxH5of6', { maxHeight: '83.333333%' }, theme),
  ...makeResponsiveStyles('maxH1of12', { maxHeight: '8.333333%' }, theme),
  ...makeResponsiveStyles('maxH5of12', { maxHeight: '41.666667%' }, theme),
  ...makeResponsiveStyles('maxH7of12', { maxHeight: '58.333333%' }, theme),
  ...makeResponsiveStyles('maxH11of12', { maxHeight: '91.666667%' }, theme),
  ...makeResponsiveStyles('maxHFull', { maxHeight: '100%' }, theme),
  ...makeResponsiveStyles('maxHScreen', { maxHeight: '100vh' }, theme),
  ...makeResponsiveStyles('maxHMin', { maxHeight: 'min-content' }, theme),
  ...makeResponsiveStyles('maxHMax', { maxHeight: 'max-content' }, theme),
}));
