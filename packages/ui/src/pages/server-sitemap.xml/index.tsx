import chainConfig from '@/chainConfig';
import { readFileSync } from 'fs';
import { GetServerSideProps } from 'next';
import { getServerSideSitemapLegacy } from 'next-sitemap';
import { basename } from 'path';

function getSiteUrl() {
  const dir = JSON.parse(readFileSync('./package.json', 'utf8')).name;
  const [_match, chainName] = /web-(.+)$/.exec(basename(dir)) ?? ['', 'base'];
  const basePath = (process.env.BASE_PATH || `${`/${chainName}`}`).replace(/^(\/|\/base)$/, '');
  const siteUrl = process.env.SITE_URL || `https://bigdipper.live${basePath}`;
  return siteUrl;
}

function getEndpoint() {
  const { endpoints } = chainConfig();
  const urlEndpoints = [
    process.env.NEXT_PUBLIC_GRAPHQL_URL,
    endpoints.graphql,
    'http://localhost:3000/v1/graphql',
  ];
  return urlEndpoints.find(Boolean);
}

const query = `
query ValidatorsAndProposals {
  validator {
    validatorInfo: validator_info {
      operatorAddress: operator_address
    }
  }
  proposals: proposal {
    proposalId: id
  }
}
`;

interface Result {
  data: {
    validator: Array<{
      validatorInfo: {
        operatorAddress: string;
      };
    }>;
    proposals: Array<{
      proposalId: string;
    }>;
  };
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const urlEndpoint = getEndpoint();
  if (!urlEndpoint) {
    throw new Error('No url endpoint found');
  }

  const result = await fetch(urlEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      operationName: 'ValidatorsAndProposals',
      query,
    }),
  });
  if (!result.ok) {
    throw new Error('Could not fetch data');
  }

  const { data }: Result = await result.json();
  if (!data?.validator && !data?.proposals) {
    throw new Error('No data');
  }

  const siteUrl = getSiteUrl();
  const operatorAddresses = data.validator
    .map((d) => d.validatorInfo?.operatorAddress)
    .filter(Boolean);
  const validators = operatorAddresses.map((operatorAddress) => ({
    loc: `${siteUrl}/validators/${operatorAddress}`,
    lastmod: new Date().toISOString(),
  }));

  const proposalIds = data.proposals.map((d) => d.proposalId);
  const proposals = proposalIds.map((proposalId) => ({
    loc: `${siteUrl}/proposals/${proposalId}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemapLegacy(ctx, validators.concat(proposals));
};

// Default export to prevent next.js errors
export default function Sitemap() {
  return null;
}
