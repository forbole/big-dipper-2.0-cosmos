ARG BASE_IMAGE=node:18
ARG PROJECT_NAME=web

# Stage: pruner
FROM ${BASE_IMAGE} AS pruner
WORKDIR /app

ARG BASE_IMAGE
ENV BASE_IMAGE=${BASE_IMAGE}
RUN npm i -g add turbo

COPY . .

ARG PROJECT_NAME
RUN turbo prune --scope=${PROJECT_NAME} --docker

################################################################################

# Stage: builder
FROM ${BASE_IMAGE} AS builder
WORKDIR /app

ARG BASE_IMAGE
ENV BASE_IMAGE=${BASE_IMAGE}
RUN corepack enable && yarn --version && \
  npm i -g turbo

### First install the dependencies (as they change less often)
COPY .yarnrc.yml ./
COPY .yarn/ ./.yarn/
COPY --from=pruner /app/out/json/ ./
COPY --from=pruner /app/out/yarn.lock ./

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
ENV NEXT_PUBLIC_CHAIN_TYPE={{NEXT_PUBLIC_CHAIN_TYPE}}
ENV NEXT_PUBLIC_BANNERS_JSON={{NEXT_PUBLIC_BANNERS_JSON}}
ENV NEXT_PUBLIC_GRAPHQL_URL={{NEXT_PUBLIC_GRAPHQL_URL}}
ENV NEXT_PUBLIC_GRAPHQL_WS={{NEXT_PUBLIC_GRAPHQL_WS}}
ENV NEXT_PUBLIC_MATOMO_URL={{NEXT_PUBLIC_MATOMO_URL}}
ENV NEXT_PUBLIC_MATOMO_SITE_ID={{NEXT_PUBLIC_MATOMO_SITE_ID}}
ENV NEXT_PUBLIC_RPC_WEBSOCKET={{NEXT_PUBLIC_RPC_WEBSOCKET}}
RUN SENTRYCLI_SKIP_DOWNLOAD=$([ -z "${NEXT_PUBLIC_SENTRY_DSN}" ] && echo 1) \
  yarn workspaces focus --production ${PROJECT_NAME} && \
  yarn add typescript -D

## Build the project
COPY --from=pruner /app/out/full/ ./
RUN turbo run build --filter=${PROJECT_NAME}...

################################################################################

ARG RIPGREP=ripgrep_13.0.0_amd64.deb

# Stage: web
FROM ${BASE_IMAGE} AS web
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs && \
  adduser --system --uid 1001 nextjs && \
  chown -R nextjs:nodejs /home/nextjs /app
 
# Copying the files from the builder stage to the web stage.
ARG PROJECT_NAME
ENV PROJECT_NAME=${PROJECT_NAME}
COPY --chown=nextjs:nodejs --from=builder /app/apps/${PROJECT_NAME}/.next/apps/${PROJECT_NAME}/.next/ ./.next/
COPY --chown=nextjs:nodejs --from=builder /app/apps/${PROJECT_NAME}/.next/static/ ./.next/static/
COPY --chown=nextjs:nodejs --from=builder /app/apps/${PROJECT_NAME}/public/ ./public/
COPY --chown=nextjs:nodejs --from=builder /app/node_modules/ ./node_modules/
COPY --chown=nextjs:nodejs --from=builder /app/apps/${PROJECT_NAME}/.next/apps/${PROJECT_NAME}/server.js ./

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

# Don't run production as root
USER nextjs

# reference: https://github.com/vercel/next.js/discussions/34894
RUN printf 'const { readFileSync, writeFileSync } = require("fs");\n\
function inject(file) {\n\
  const code = readFileSync(file, "utf8")\n\
    .replace(/(['"'"'"`])[{][{](\
NEXT_PUBLIC_CHAIN_TYPE|\
NEXT_PUBLIC_BANNERS_JSON|\
NEXT_PUBLIC_GRAPHQL_URL|\
NEXT_PUBLIC_GRAPHQL_WS|\
NEXT_PUBLIC_MATOMO_URL|\
NEXT_PUBLIC_MATOMO_SITE_ID|\
NEXT_PUBLIC_RPC_WEBSOCKET\
)[}][}]\\1/gi\
, (match, quote, name) => {\n\
  console.log(`inject ${match} with ${JSON.stringify(process.env[name.toUpperCase()])} in ${file}`);\n\
  return JSON.stringify(process.env[name] ?? "")\n\
});\n\
  writeFileSync(file, code, "utf8");\n\
}\n' > ./inject.js && \
  egrep -ilr \
  '[{][{](\
NEXT_PUBLIC_CHAIN_TYPE|\
NEXT_PUBLIC_BANNERS_JSON|\
NEXT_PUBLIC_GRAPHQL_URL|\
NEXT_PUBLIC_GRAPHQL_WS|\
NEXT_PUBLIC_MATOMO_URL|\
NEXT_PUBLIC_MATOMO_SITE_ID|\
NEXT_PUBLIC_RPC_WEBSOCKET\
)[}][}]' \
  ./.next | \
  xargs -I{} printf 'inject("'{}'");\n' | tee -a ./inject.js

ARG PORT=3000
ENV PORT=${PORT}
EXPOSE ${PORT}

CMD node /app/inject.js && node /app/server.js
