# Building the project.
FROM node:18-alpine AS builder
RUN apk add --no-cache libc6-compat && \
  apk update && \
  yarn global add turbo
WORKDIR /app

ARG PROJECT_NAME

COPY . .
RUN turbo prune --scope=${PROJECT_NAME} --docker


# Installing the project.
FROM node:18-alpine AS installer
RUN apk add --no-cache libc6-compat && \
  apk update && \
  corepack enable

WORKDIR /app

# Setting up the environment variables for the docker container.
ARG PROJECT_NAME
ENV PROJECT_NAME=${PROJECT_NAME}
ARG GENERAL_CONFIG
ENV GENERAL_CONFIG=${GENERAL_CONFIG}
ARG CHAIN_CONFIG
ENV CHAIN_CONFIG=${CHAIN_CONFIG}
ARG BASE_PATH
ENV BASE_PATH=${BASE_PATH}
ENV NEXT_TELEMETRY_DISABLED=1
ENV HUSKY=0
ENV NODE_ENV=production
ARG TURBO_TEAM
ENV TURBO_TEAM=${TURBO_TEAM}
ARG TURBO_TOKEN
ENV TURBO_TOKEN=${TURBO_TOKEN}
ARG NEXT_PUBLIC_SENTRY_DSN
ENV NEXT_PUBLIC_SENTRY_DSN=${NEXT_PUBLIC_SENTRY_DSN}

# First install the dependencies (as they change less often)
COPY .gitignore .yarnrc.yml ./
COPY .yarn/ ./.yarn/
COPY --from=builder /app/out/json/ ./
COPY --from=builder /app/out/yarn.lock ./
RUN yarn install --immutable

# Build the project
COPY --from=builder /app/out/full/ ./
COPY --from=builder /app/turbo.json ./
RUN yarn turbo run build --filter=${PROJECT_NAME}...


# Copy the built project to the final image
# Creating a docker image that will be used to run the app.
FROM node:18-alpine AS runner
WORKDIR /app

# Setting up the environment variables for the docker container.
ARG PROJECT_NAME
ENV PROJECT_NAME=${PROJECT_NAME}
ARG GENERAL_CONFIG
ENV GENERAL_CONFIG=${GENERAL_CONFIG}
ARG CHAIN_CONFIG
ENV CHAIN_CONFIG=${CHAIN_CONFIG}
ARG BASE_PATH
ENV BASE_PATH=${BASE_PATH}
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ARG TURBO_TEAM
ENV TURBO_TEAM=${TURBO_TEAM}
ARG TURBO_TOKEN
ENV TURBO_TOKEN=${TURBO_TOKEN}
ARG NEXT_PUBLIC_SENTRY_DSN
ENV NEXT_PUBLIC_SENTRY_DSN=${NEXT_PUBLIC_SENTRY_DSN}
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

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs && \
  adduser --system --uid 1001 nextjs && \
  mkdir -p /home/nextjs/.cache && \
  chown -R nextjs:nodejs /home/nextjs && \
  echo yarn workspace ${PROJECT_NAME} start > /app/start.sh && \
  chmod +x /app/start.sh && \
  chown nextjs:nodejs /app/start.sh
USER nextjs
 
# Copying the files from the installer stage to the runner stage.
COPY --from=installer --chown=nextjs:nodejs \
  //app/apps/${PROJECT_NAME}/i18n.js \
  /app/apps/${PROJECT_NAME}/next.config.js \
  /app/apps/${PROJECT_NAME}/package.json \
  /app/apps/${PROJECT_NAME}/sentry.client.config.js \
  /app/apps/${PROJECT_NAME}/sentry.properties \
  /app/apps/${PROJECT_NAME}/sentry.server.config.js \
  ./apps/${PROJECT_NAME}/

COPY --from=installer --chown=nextjs:nodejs /app/ ./

EXPOSE ${PORT:-3000}

CMD /app/start.sh
