import { IDENTITIES } from '@/api';
import { readFileSync } from 'fs';
import { GetServerSideProps } from 'next';
import { getServerSideSitemapLegacy } from 'next-sitemap';
import { basename } from 'path';

interface Result {
  identity: string;
}

function getSiteUrl() {
  const dir = JSON.parse(readFileSync('./package.json', 'utf8')).name;
  const [_match, chainName] = /web-(.+)$/.exec(basename(dir)) ?? ['', 'base'];
  const basePath = (process.env.BASE_PATH || `${`/${chainName}`}`).replace(/^(\/|\/base)$/, '');
  const siteUrl = process.env.SITE_URL || `https://bigdipper.live${basePath}`;
  return siteUrl;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const result = await fetch(IDENTITIES);
  if (!result.ok) {
    throw new Error('Could not fetch data');
  }

  const data: Result[] = await result.json();

  const identities = data.map((d) => d.identity).filter(Boolean);
  const siteUrl = getSiteUrl();
  const validators = identities.map((identity) => ({
    loc: `${siteUrl}/validators/${identity}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemapLegacy(ctx, validators);
};

// Default export to prevent next.js errors
export default function Sitemap() {
  return null;
}
