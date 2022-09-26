import { getTemplates } from './utils';

const {
  lightTemplate,
  darkTemplate,
  deuteranopiaTemplate,
  tritanopiaTemplate,
} = getTemplates(process.env.CHAIN_NAME);

export {
  lightTemplate,
  darkTemplate,
  deuteranopiaTemplate,
  tritanopiaTemplate,
};
