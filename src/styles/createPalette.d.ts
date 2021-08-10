/* eslint-disable*/
import * as createPalette from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
    interface Custom {
        general: {
            background: string;
            surfaceOne: string;
            surfaceTwo: string;
            icon: string;
        },
        fonts: {
            fontOne: string;
            fontTwo: string;
            fontThree: string;
            fontFour: string;
            fontFive: string;
            highlight: string;
        },
        primaryData: {
            one: string;
            two: string;
            three: string;
            four: string;
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
        },
        charts: {
            zero: string;
            one: string;
            two: string;
            three: string;
            four: string;
            five: string;
        },
        condition: {
            zero: string;
            one: string;
            two: string;
            three: string;
        },
        tokenomics: {
            zero: string;
            one: string;
            two: string;
            three: string;
        },
        results: {
            pass: string;
            fail: string;
        }
    }

    interface PaletteOptions {
        custom?: Custom;
    }
    interface Palette {
        custom: Custom;
    }
}
