ARG BASE_IMAGE=node:18-alpine3.18
ARG PROJECT_NAME=web

# This is a multiple stage Dockerfile.
# - Stage 1: starter (base image with Node.js 18 and the turbo package installed globally)

# - Stage 2: builder (adds dependencies, environment variables, and builds the project using yarn)

# - Stage 3: runner (final image for the web project, sets environment variables, starts the server)

# Stage: starter
FROM ${BASE_IMAGE} AS starter
WORKDIR /app
RUN npm i -g turbo

################################################################################

# Stage: builder
FROM starter AS builder

### First install the dependencies (as they change less often)
COPY . .

## Setting up the environment variables for the docker container.
ARG PROJECT_NAME
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ARG NEXT_PUBLIC_CHAIN_TYPE
ENV NEXT_PUBLIC_CHAIN_TYPE=${NEXT_PUBLIC_CHAIN_TYPE}
ARG NEXT_PUBLIC_BANNERS_JSON
ENV NEXT_PUBLIC_BANNERS_JSON=${NEXT_PUBLIC_BANNERS_JSON}
ARG NEXT_PUBLIC_COINZILLA_ZONE
ENV NEXT_PUBLIC_COINZILLA_ZONE=${NEXT_PUBLIC_COINZILLA_ZONE}
ARG NEXT_PUBLIC_GRAPHQL_URL
ENV NEXT_PUBLIC_GRAPHQL_URL=${NEXT_PUBLIC_GRAPHQL_URL}
ARG NEXT_PUBLIC_GRAPHQL_WS
ENV NEXT_PUBLIC_GRAPHQL_WS=${NEXT_PUBLIC_GRAPHQL_WS}
ARG NEXT_PUBLIC_KEPLR_CHAIN_ID
ENV NEXT_PUBLIC_KEPLR_CHAIN_ID=${NEXT_PUBLIC_KEPLR_CHAIN_ID}
ARG NEXT_PUBLIC_KEPLR_CUSTOM_CHAIN_INFO
ENV NEXT_PUBLIC_KEPLR_CUSTOM_CHAIN_INFO=${NEXT_PUBLIC_KEPLR_CUSTOM_CHAIN_INFO}
ARG NEXT_PUBLIC_KEPLR_LCD_URL
ENV NEXT_PUBLIC_KEPLR_LCD_URL=${NEXT_PUBLIC_KEPLR_LCD_URL}
ARG NEXT_PUBLIC_MATOMO_URL
ENV NEXT_PUBLIC_MATOMO_URL=${NEXT_PUBLIC_MATOMO_URL}
ARG NEXT_PUBLIC_MATOMO_SITE_ID
ENV NEXT_PUBLIC_MATOMO_SITE_ID=${NEXT_PUBLIC_MATOMO_SITE_ID}
ARG NEXT_PUBLIC_NETWORK_NAME
ENV NEXT_PUBLIC_NETWORK_NAME=${NEXT_PUBLIC_NETWORK_NAME}
ARG NEXT_PUBLIC_RPC_WEBSOCKET
ENV NEXT_PUBLIC_RPC_WEBSOCKET=${NEXT_PUBLIC_RPC_WEBSOCKET}
ARG NEXT_PUBLIC_WC_BRIDGE_URL
ENV NEXT_PUBLIC_WC_BRIDGE_URL=${NEXT_PUBLIC_WC_BRIDGE_URL}
ARG NEXT_PUBLIC_SENTRY_DSN
ENV NEXT_PUBLIC_SENTRY_DSN=${NEXT_PUBLIC_SENTRY_DSN}
ARG SENTRY_AUTH_TOKEN
ENV SENTRY_AUTH_TOKEN=${SENTRY_AUTH_TOKEN}
ENV SENTRY_URL=https://sentry.io/
ENV SENTRY_ORG=forbole
ENV SENTRY_PROJECT=big-dipper
ENV SENTRY_ENVIRONMENT=production
ARG BASE_PATH
ENV BASE_PATH=${BASE_PATH}
ENV CI=1
ENV HUSKY=0
ARG TURBO_TEAM
ENV TURBO_TEAM=${TURBO_TEAM}
ARG TURBO_TOKEN
ENV TURBO_TOKEN=${TURBO_TOKEN}

RUN export SENTRYCLI_SKIP_DOWNLOAD=$([ -z "${NEXT_PUBLIC_SENTRY_DSN}" ] && echo 1) \
  && corepack enable && yarn -v \
  && yarn install --inline-builds

## Build the project
RUN ([ -z "${NEXT_PUBLIC_SENTRY_DSN}" ] || yarn node packages/shared-utils/configs/sentry/install.js) \
  && yarn workspace ${PROJECT_NAME} add sharp \
  && yarn workspace ${PROJECT_NAME} run build

################################################################################

# Stage: runner
FROM ${BASE_IMAGE} AS runner
 
# Copying the files from the builder stage to the runner stage.
ARG PROJECT_NAME
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
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
  /app/apps/${PROJECT_NAME}/ /app/apps/${PROJECT_NAME}/ \
  ./
COPY --chown=nextjs:nodejs --from=builder \
  /app/packages/ /app/packages/

# Don't run production as root
USER nextjs

CMD yarn next start -p ${PORT}
