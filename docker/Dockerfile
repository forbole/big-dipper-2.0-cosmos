ARG BASE_IMAGE=node:18
ARG PROJECT_NAME=web

# Stage: pruner
FROM ${BASE_IMAGE} AS pruner
WORKDIR /app

ARG BASE_IMAGE
ENV BASE_IMAGE=${BASE_IMAGE}
RUN [ "${BASE_IMAGE}" == "node:18" ] && \
  apk add --no-cache libc6-compat && apk update; \
  yarn global add turbo

ARG PROJECT_NAME

COPY . .

RUN turbo prune --scope=${PROJECT_NAME} --docker


# Stage: builder
FROM ${BASE_IMAGE} AS builder
WORKDIR /app

ARG BASE_IMAGE
ENV BASE_IMAGE=${BASE_IMAGE}
RUN [ "${BASE_IMAGE}" == "node:18" ] && \
  apk add --no-cache libc6-compat && apk update; \
  corepack enable && yarn --version

### First install the dependencies (as they change less often)
COPY .yarnrc.yml ./
COPY .yarn/ ./.yarn/
COPY --from=pruner /app/out/json/ ./
COPY --from=pruner /app/out/yarn.lock ./

## Setting up the environment variables for the docker container.
ARG PROJECT_NAME
ENV PROJECT_NAME=${PROJECT_NAME}
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
ARG NEXT_PUBLIC_CHAIN_TYPE
ENV NEXT_PUBLIC_CHAIN_TYPE=${NEXT_PUBLIC_CHAIN_TYPE}
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
RUN yarn install --immutable


## Build the project
COPY turbo.json ./
COPY --from=pruner /app/out/full/ ./
RUN yarn turbo run build --filter=${PROJECT_NAME}...


# Stage: web
FROM ${BASE_IMAGE} AS web
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs && \
  adduser --system --uid 1001 nextjs && \
  chown -R nextjs:nodejs /home/nextjs

# Don't run production as root
USER nextjs
 
# Copying the files from the builder stage to the web stage.
ARG PROJECT_NAME
ENV PROJECT_NAME=${PROJECT_NAME}
COPY --from=builder --chown=nextjs:nodejs \
  /app/apps/${PROJECT_NAME}/i18n.js \
  /app/apps/${PROJECT_NAME}/next.config.js \
  /app/apps/${PROJECT_NAME}/package.json \
  /app/apps/${PROJECT_NAME}/sentry.client.config.ts \
  /app/apps/${PROJECT_NAME}/sentry.server.config.ts \
  ./apps/${PROJECT_NAME}/

COPY --from=builder --chown=nextjs:nodejs /app/ ./

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app/apps/${PROJECT_NAME}
EXPOSE ${PORT:-3000}
CMD yarn run next start


# Stage: e2e
FROM ${BASE_IMAGE} AS e2e
WORKDIR /app

# Copying the files from the builder stage to the e2e stage.
ARG PROJECT_NAME
ENV PROJECT_NAME=${PROJECT_NAME}
COPY --from=builder --chown=nextjs:nodejs \
  /app/apps/${PROJECT_NAME}/i18n.js \
  /app/apps/${PROJECT_NAME}/next.config.js \
  /app/apps/${PROJECT_NAME}/package.json \
  /app/apps/${PROJECT_NAME}/sentry.client.config.ts \
  /app/apps/${PROJECT_NAME}/sentry.server.config.ts \
  ./apps/${PROJECT_NAME}/

COPY --from=builder --chown=nextjs:nodejs /app/ ./
COPY playwright.config.ts ./
COPY e2e/ ./e2e/

# Setting up the environment variables for the docker container.
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV DEBUG=pw:webserver
ENV CI=1

CMD yarn playwright test
