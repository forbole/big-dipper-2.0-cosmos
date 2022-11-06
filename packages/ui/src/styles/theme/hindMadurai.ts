import { AtRule } from 'csstype';
import HindMaduraiWoff2 from '@public/fonts/HindMadurai-Regular.woff2';

const hindMadurai: AtRule.FontFace = {
  fontFamily: 'Hind Madurai',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('HindMadurai'),
    local('HindMadurai-Regular'),
    url(${HindMaduraiWoff2}) format('woff2')
  `,
};

export default hindMadurai;
