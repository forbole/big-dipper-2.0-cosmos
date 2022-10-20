/* eslint-disable*/
import * as createPalette from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
    interface Custom {
        general: {
            background: string;
            surfaceOne: string;
            surfaceTwo: string;
            surfaceThree: string;
            icon: string;
        },
        fonts: {
            fontOne: string;
            fontTwo: string;
            fontThree: string;
            fontFour: string;
            fontFive: string;
            highlight: string;
            skipOne: string;
            skipTwo: string;
            skipThree: string;
            skipFour: string;
        },
        primaryData: {
            one: string;
            two: string;
            three: string;
            four: string;
        },
        priceData: {
            positive: string;
            negative: string;
        },
        conditionData: {
            positive: string;
            negative: string;
        },
        chartData: {
            one: string;
            two: string;
            three: string;
            four: string;
            five: string;
        },
        tags: {
            zero: string;
            one: string;
            two: string;
            three: string;
            four: string;
            five: string;
            six: string;
            seven: string;
            eight: string;
            nine: string;
            ten: string;
            eleven: string;
            twelve: string;
            thirteen: string;
            fourteen: string;
            fifteen: string;
            sixteen: string;
            seventeen: string;
            eighteen: string;
            nineteen: string;
            twenty: string;
        },
        results: {
            pass: string;
            fail: string;
        },
        condition: {
            zero: string;
            one: string;
            two: string;
            three: string;
        },
        charts: {
            zero: string;
            one: string;
            two: string;
            three: string;
            four: string;
            five: string;
        },
    }

    interface PaletteOptions {
        tertiary?: PaletteColorOptions;
        custom?: Custom;
    }
    interface Palette {
        custom: Custom;
        tertiary?:PaletteColor;
    }
}
