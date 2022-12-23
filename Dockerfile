ARG BASE_IMAGE=node:18
ARG PROJECT_NAME=web

# Stage: base
FROM ${BASE_IMAGE} AS base
WORKDIR /app
RUN npm i -g turbo

# Stage: pruner
FROM base AS pruner

COPY ./ ./

ARG PROJECT_NAME
RUN corepack enable && yarn -v \
  && sed -i 's/nodeLinker: pnp/nodeLinker: node-modules/g' .yarnrc.yml \
  && turbo prune --scope=${PROJECT_NAME} --docker

################################################################################

# Stage: builder
FROM base AS builder

### First install the dependencies (as they change less often)
COPY .yarnrc.yml ./
COPY .yarn/ ./.yarn/
COPY --from=pruner /app/out/json/ /app/out/yarn.lock ./

## Setting up the environment variables for the docker container.
ARG PROJECT_NAME
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ARG NEXT_PUBLIC_SENTRY_DSN
ENV NEXT_PUBLIC_SENTRY_DSN=${NEXT_PUBLIC_SENTRY_DSN}
ARG SENTRY_AUTH_TOKEN
ENV SENTRY_AUTH_TOKEN=${SENTRY_AUTH_TOKEN}
ENV SENTRY_URL=https://sentry.io/
ENV SENTRY_ORG=forbole
ENV SENTRY_PROJECT=big-dipper
ENV SENTRY_ENVIRONMENT=production
ENV NEXT_TELEMETRY_DISABLED=1
ARG BASE_PATH
ENV BASE_PATH=${BASE_PATH}
ENV CI=1
ENV HUSKY=0
ARG TURBO_TEAM
ENV TURBO_TEAM=${TURBO_TEAM}
ARG TURBO_TOKEN
ENV TURBO_TOKEN=${TURBO_TOKEN}
ENV BUILD_STANDALONE=1

# add placeholder for env variables to be injected in web stage
ENV NEXT_PUBLIC_CHAIN_TYPE={{NEXT_PUBLIC_CHAIN_TYPE}}
ENV NEXT_PUBLIC_BANNERS_JSON={{NEXT_PUBLIC_BANNERS_JSON}}
ENV NEXT_PUBLIC_GRAPHQL_URL={{NEXT_PUBLIC_GRAPHQL_URL}}
ENV NEXT_PUBLIC_GRAPHQL_WS={{NEXT_PUBLIC_GRAPHQL_WS}}
ENV NEXT_PUBLIC_MATOMO_URL={{NEXT_PUBLIC_MATOMO_URL}}
ENV NEXT_PUBLIC_MATOMO_SITE_ID={{NEXT_PUBLIC_MATOMO_SITE_ID}}
ENV NEXT_PUBLIC_RPC_WEBSOCKET={{NEXT_PUBLIC_RPC_WEBSOCKET}}

RUN export SENTRYCLI_SKIP_DOWNLOAD=$([ -z "${NEXT_PUBLIC_SENTRY_DSN}" ] && echo 1) \
  && corepack enable && yarn -v \
  && yarn install --immutable \
  && yarn add sharp

## Build the project
COPY --from=pruner /app/out/full/ ./
RUN turbo run build --filter=${PROJECT_NAME}...

################################################################################

# Stage: web
FROM ${BASE_IMAGE} AS web
 
# Copying the files from the builder stage to the web stage.
ARG PROJECT_NAME
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ARG NEXT_PUBLIC_CHAIN_TYPE
ENV NEXT_PUBLIC_CHAIN_TYPE=${NEXT_PUBLIC_CHAIN_TYPE}
ARG NEXT_PUBLIC_BANNERS_JSON
ENV NEXT_PUBLIC_BANNERS_JSON=${NEXT_PUBLIC_BANNERS_JSON}
ARG NEXT_PUBLIC_GRAPHQL_URL
ENV NEXT_PUBLIC_GRAPHQL_URL=${NEXT_PUBLIC_GRAPHQL_URL}
ARG NEXT_PUBLIC_GRAPHQL_WS
ENV NEXT_PUBLIC_GRAPHQL_WS=${NEXT_PUBLIC_GRAPHQL_WS}
ARG NEXT_PUBLIC_MATOMO_URL
ENV NEXT_PUBLIC_MATOMO_URL=${NEXT_PUBLIC_MATOMO_URL}
ARG NEXT_PUBLIC_MATOMO_SITE_ID
ENV NEXT_PUBLIC_MATOMO_SITE_ID=${NEXT_PUBLIC_MATOMO_SITE_ID}
ARG NEXT_PUBLIC_RPC_WEBSOCKET
ENV NEXT_PUBLIC_RPC_WEBSOCKET=${NEXT_PUBLIC_RPC_WEBSOCKET}
ARG PORT
ENV PORT=${PORT:-3000}

WORKDIR /app/apps/${PROJECT_NAME}

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs \
  && chown -R nextjs:nodejs /home/nextjs /app

COPY --chown=nextjs:nodejs --from=builder \
  /app/package.json /app/.pnp.* /app/.yarnrc.yml /app/yarn.lock \
  ../../
COPY --chown=nextjs:nodejs --from=builder \
  /app/.yarn/ \
  ../../.yarn/
COPY --chown=nextjs:nodejs --from=builder \
  /app/apps/${PROJECT_NAME}/.next/apps/${PROJECT_NAME}/server.js /app/apps/${PROJECT_NAME}/package.json \
  ./
COPY --chown=nextjs:nodejs --from=builder \
  /app/apps/${PROJECT_NAME}/public/ \
  ./public/
COPY --chown=nextjs:nodejs --from=builder \
  /app/apps/${PROJECT_NAME}/.next/apps/${PROJECT_NAME}/.next/ \
  ./.next/
COPY --chown=nextjs:nodejs --from=builder \
  /app/apps/${PROJECT_NAME}/.next/static/ \
  ./.next/static/

# reference: https://github.com/vercel/next.js/discussions/34894
RUN printf 'const { readFileSync, writeFileSync } = require("fs");\n\
function inject(file) {\n\
  const code = readFileSync(file, "utf8").replace(/(['\
"'"\
'"`])[{][{](\
NEXT_PUBLIC_CHAIN_TYPE|\
NEXT_PUBLIC_BANNERS_JSON|\
NEXT_PUBLIC_GRAPHQL_URL|\
NEXT_PUBLIC_GRAPHQL_WS|\
NEXT_PUBLIC_MATOMO_URL|\
NEXT_PUBLIC_MATOMO_SITE_ID|\
NEXT_PUBLIC_RPC_WEBSOCKET\
)[}][}]\\1/gi, (match, quote, name) => {\n\
  console.log(`inject ${match} with ${JSON.stringify(process.env[name.toUpperCase()])} in ${file}`);\n\
  return JSON.stringify(process.env[name] ?? "")\n\
});\n\
  writeFileSync(file, code, "utf8");\n\
}\n' > ./inject.js \
  && egrep -ilr '[{][{](\
NEXT_PUBLIC_CHAIN_TYPE|\
NEXT_PUBLIC_BANNERS_JSON|\
NEXT_PUBLIC_GRAPHQL_URL|\
NEXT_PUBLIC_GRAPHQL_WS|\
NEXT_PUBLIC_MATOMO_URL|\
NEXT_PUBLIC_MATOMO_SITE_ID|\
NEXT_PUBLIC_RPC_WEBSOCKET\
)[}][}]' ./.next | xargs -I{} printf 'inject("'{}'");\n' | tee -a ./inject.js;

# Don't run production as root
USER nextjs

CMD node ./inject.js && yarn node ./server.js
