import * as R from 'ramda';
import z from 'zod';

// Define a Zod schema for a link object
export const zLink = z.array(
  z
    .object({
      chain_id: z.coerce.string().default('').catch(''),
      url: z.coerce.string().default('').catch(''),
      name: z.coerce.string().default('').catch(''),
    })
    .transform(({ chain_id, url, name }) => ({ chainId: chain_id, url, name }))
);
export type Link = z.infer<typeof zLink>;

const isNotNetwork = (regExp: RegExp) => R.complement(R.test(regExp));
const isMainnet = R.test(/mainnet/i);
const isTestnet = R.allPass([isNotNetwork(/mainnet/i), R.test(/testnet/i)]);
const isRetired = R.allPass([isNotNetwork(/mainnet|testnet/i), R.test(/retired/i)]);
const isOther = isNotNetwork(/mainnet|testnet|retired/i);

// Define a Zod schema for a BigDipperNetwork object
export const zBigDipperNetwork = z
  .object({
    name: z.coerce.string().default('').catch(''),
    logo: z.coerce.string().default('').catch(''),
    links: zLink
      .transform((lst) => lst.filter((l) => l.name))
      .default([])
      .catch([]),
  })
  .transform(({ name, logo, links }) => ({
    logo,
    name,
    mainnet: links.filter((l) => isMainnet(l.name)),
    testnet: links.filter((l) => isTestnet(l.name)),
    retired: links.filter((l) => isRetired(l.name)),
    other: links.filter((l) => isOther(l.name)),
  }));
export type BigDipperNetwork = z.infer<typeof zBigDipperNetwork>;
