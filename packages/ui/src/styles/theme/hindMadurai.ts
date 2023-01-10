import type { AtRule } from 'csstype';

const hindMadurai: AtRule.FontFace = {
  fontFamily: 'Hind Madurai',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('HindMadurai'),
    local('HindMadurai-Regular'),
    url(https://bigdipper.live/cosmos/fonts/HindMadurai-Regular.woff2) format('woff2')
  `,
};

export default hindMadurai;
