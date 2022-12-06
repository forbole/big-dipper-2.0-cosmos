import chainConfig from '@/chainConfig';
import type { AtRule } from 'csstype';

const { basePath } = chainConfig();
const hindMadurai: AtRule.FontFace = {
  fontFamily: 'Hind Madurai',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('HindMadurai'),
    local('HindMadurai-Regular'),
    url(${basePath}/fonts/HindMadurai-Regular.woff2) format('woff2')
  `,
};

export default hindMadurai;
