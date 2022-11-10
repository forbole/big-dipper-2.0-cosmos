import nextTranslate from 'next-translate';

// for turborepo
import withTM from 'next-transpile-modules';
import withSentry from 'shared-utils/configs/withSentry.mjs';
import nextConfig from 'shared-utils/configs/next.mjs';

// each chain has its own chains/<chainName>.json
import { readFileSync } from 'fs';
import { resolve } from 'path';
const config = JSON.parse(readFileSync(resolve('../../packages/shared-utils/configs/chains/regen.json')));

export default withTM(['ui'])(withSentry(nextTranslate(nextConfig(config))));
