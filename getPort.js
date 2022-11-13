const networks = require('./packages/shared-utils/configs/networks.json');
const [_node, _script, pwd] = process.argv;
const [_match, name] = /\/web-([^/]+)$/.exec(pwd) ?? ['', 'base'];
const needle = name?.toLowerCase() ?? ''
const index = networks.findIndex(n => (n.chainName?.toLowerCase() ?? '') === needle);
const port = 3000 + (index >= 0 ? 1 + index : 0);
process.stdout.write(`${port}\n`);
