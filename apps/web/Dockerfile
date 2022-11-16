FROM node:18-alpine AS builder
RUN apk add --no-cache libc6-compat \
  && apk update \
  && corepack enable
WORKDIR /app

ARG PROJECT_NAME

COPY . .
RUN yarn dlx turbo prune --scope=${PROJECT_NAME} --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:18-alpine AS runner
RUN apk add --no-cache libc6-compat \
  && apk update \
  && corepack enable
WORKDIR /app

ARG PROJECT_NAME
ENV PROJECT_NAME=${PROJECT_NAME}

ARG GENERAL_CONFIG
ENV GENERAL_CONFIG=${GENERAL_CONFIG}
ARG CHAIN_CONFIG
ENV CHAIN_CONFIG=${CHAIN_CONFIG}
ARG BASE_PATH
ENV BASE_PATH=${BASE_PATH}
ARG SENTRY_DSN
ENV SENTRY_DSN=${SENTRY_DSN}
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV TURBO_TEAM=
ENV TURBO_TOKEN=

# First install the dependencies (as they change less often)
COPY .gitignore ./.gitignore
COPY --from=builder /app/out/json/ ./
COPY --from=builder /app/out/yarn.lock ./yarn.lock
COPY --from=builder /app/.yarn ./.yarn
RUN yarn install --immutable

# Build the project
COPY --from=builder /app/out/full/ ./
COPY turbo.json ./turbo.json
RUN yarn turbo run build --filter=${PROJECT_NAME}...

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
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs \
  && mkdir -p /home/nextjs/.cache \
  && chown -R nextjs:nodejs /home/nextjs
USER nextjs

EXPOSE 3000
CMD yarn workspace ${PROJECT_NAME} start
