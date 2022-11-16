import { AtRule } from 'csstype';
import chainConfig from 'ui/chainConfig';

const basePath = (process.env.BASE_PATH || `${`/${chainConfig.chainName}`}`).replace(
  /^\/(|base)$/,
  ''
);

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
