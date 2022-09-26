import { desmosThemes } from './theme/desmos';
import { agoricThemes } from './theme/agoric';
import { akashThemes } from './theme/akash';

export const getTemplates = (chainName: string) => {
  switch (chainName) {
    case 'desmos':
      return {
        lightTemplate: desmosThemes.lightTemplate,
        darkTemplate: desmosThemes.darkTemplate,
        deuteranopiaTemplate: desmosThemes.deuteranopiaTemplate,
        tritanopiaTemplate: desmosThemes.tritanopiaTemplate,
      };
    case 'agoric':
      return {
        lightTemplate: agoricThemes.lightTemplate,
        darkTemplate: agoricThemes.darkTemplate,
        deuteranopiaTemplate: agoricThemes.deuteranopiaTemplate,
        tritanopiaTemplate: agoricThemes.tritanopiaTemplate,
      };
    case 'akash':
      return {
        lightTemplate: akashThemes.lightTemplate,
        darkTemplate: akashThemes.darkTemplate,
        deuteranopiaTemplate: akashThemes.deuteranopiaTemplate,
        tritanopiaTemplate: akashThemes.tritanopiaTemplate,
      };

    default:
      return {
        lightTemplate: desmosThemes.lightTemplate,
        darkTemplate: desmosThemes.darkTemplate,
        deuteranopiaTemplate: desmosThemes.deuteranopiaTemplate,
        tritanopiaTemplate: desmosThemes.tritanopiaTemplate,
      };
  }
};
