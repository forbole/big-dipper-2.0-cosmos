FROM node:16-alpine AS build
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Installing dependencies
COPY package*.json ./
RUN npm ci

# Copying source files
COPY . .

# Get env from secrets
ARG NEXT_PUBLIC_GRAPHQL_URL
ARG NEXT_PUBLIC_GRAPHQL_WS
ARG NEXT_PUBLIC_WS_CHAIN_URL
ARG NEXT_PUBLIC_RPC_WEBSOCKET
ARG NEXT_PUBLIC_CHAIN_STATUS
ARG NEXT_PUBLIC_CHAIN_TYPE
ARG NODE_ENV
ARG PORT
# Matomo
ARG NEXT_PUBLIC_MATOMO_URL
ARG NEXT_PUBLIC_MATOMO_SITE_ID

# Generate env file
ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_PUBLIC_GRAPHQL_URL ${NEXT_PUBLIC_GRAPHQL_URL}
ENV NEXT_PUBLIC_GRAPHQL_WS ${NEXT_PUBLIC_GRAPHQL_WS}
ENV NEXT_PUBLIC_WS_CHAIN_URL ${NEXT_PUBLIC_WS_CHAIN_URL}
ENV NEXT_PUBLIC_RPC_WEBSOCKET ${NEXT_PUBLIC_RPC_WEBSOCKET}
ENV NEXT_PUBLIC_CHAIN_STATUS ${NEXT_PUBLIC_CHAIN_STATUS}
ENV NEXT_PUBLIC_CHAIN_TYPE ${NEXT_PUBLIC_CHAIN_TYPE}
ENV NODE_ENV ${NODE_ENV}
ENV PORT ${PORT}
# Matomo
ENV NEXT_PUBLIC_MATOMO_URL ${NEXT_PUBLIC_MATOMO_URL}
ENV NEXT_PUBLIC_MATOMO_SITE_ID ${NEXT_PUBLIC_MATOMO_SITE_ID}

# Building app
RUN npm run build

# get rid of development dependencies.
RUN npm prune --production

# Start from scratch and include only relevant files
FROM node:16-alpine AS distribution
WORKDIR /app

COPY --from=build /app/node_modules node_modules
COPY --from=build /app/dist dist
COPY --from=build /app/.next .next

# Add PM2
RUN npm install pm2 -g

# args
ARG PORT

# Expose port and run application
EXPOSE ${PORT}
CMD ["pm2-runtime", "dist/index.js"]



# #############

# # Install dependencies only when needed
# FROM node:16-alpine AS deps
# # Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# RUN apk add --no-cache libc6-compat
# WORKDIR /app

# COPY package.json package-lock.json ./
# RUN npm ci

# # Rebuild the source code only when needed
# FROM node:16-alpine AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .

# # Next.js collects completely anonymous telemetry data about general usage.
# # Learn more here: https://nextjs.org/telemetry
# # Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

# # Add PM2

# RUN npm run build

# # Production image, copy all the files and run next
# FROM node:16-alpine AS runner
# WORKDIR /app

# ENV NODE_ENV production
# # Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs

# # You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/package.json ./package.json

# # Automatically leverage output traces to reduce image size
# # https://nextjs.org/docs/advanced-features/output-file-tracing
# COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# # Add PM2
# RUN npm install pm2 -g

# USER nextjs

# # Get env from secrets
# ARG NEXT_PUBLIC_GRAPHQL_URL
# ARG NEXT_PUBLIC_GRAPHQL_WS
# ARG NEXT_PUBLIC_WS_CHAIN_URL
# ARG NEXT_PUBLIC_RPC_WEBSOCKET
# ARG NEXT_PUBLIC_CHAIN_STATUS
# ARG NEXT_PUBLIC_CHAIN_TYPE
# ARG NODE_ENV
# ARG PORT
# # Matomo
# ARG NEXT_PUBLIC_MATOMO_URL
# ARG NEXT_PUBLIC_MATOMO_SITE_ID

# # Generate env file
# ENV NEXT_PUBLIC_GRAPHQL_URL ${NEXT_PUBLIC_GRAPHQL_URL}
# ENV NEXT_PUBLIC_GRAPHQL_WS ${NEXT_PUBLIC_GRAPHQL_WS}
# ENV NEXT_PUBLIC_WS_CHAIN_URL ${NEXT_PUBLIC_WS_CHAIN_URL}
# ENV NEXT_PUBLIC_RPC_WEBSOCKET ${NEXT_PUBLIC_RPC_WEBSOCKET}
# ENV NEXT_PUBLIC_CHAIN_STATUS ${NEXT_PUBLIC_CHAIN_STATUS}
# ENV NEXT_PUBLIC_CHAIN_TYPE ${NEXT_PUBLIC_CHAIN_TYPE}
# ENV NODE_ENV ${NODE_ENV}
# ENV PORT ${PORT}
# # Matomo
# ENV NEXT_PUBLIC_MATOMO_URL ${NEXT_PUBLIC_MATOMO_URL}
# ENV NEXT_PUBLIC_MATOMO_SITE_ID ${NEXT_PUBLIC_MATOMO_SITE_ID}

# EXPOSE ${PORT}

# # CMD ["pm2-runtime", "server.js"]
# CMD ["pm2-runtime", "dist/index.js"]


# # FROM node:14.5.0-alpine

# # ENV PORT 3000

# # # Install git for ui and internal packages
# RUN apk add --no-cache git

# # # Set app directory
# # WORKDIR /app

# # # Add PM2
# # RUN npm install pm2 -g

# # Installing dependencies
# # COPY package*.json ./
# # RUN npm ci

# # Copying source files
# # COPY . .

# # # Get env from secrets
# # ARG NEXT_PUBLIC_GRAPHQL_URL
# # ARG NEXT_PUBLIC_GRAPHQL_WS
# # ARG NEXT_PUBLIC_WS_CHAIN_URL
# # ARG NEXT_PUBLIC_RPC_WEBSOCKET
# # ARG NEXT_PUBLIC_CHAIN_STATUS
# # ARG NEXT_PUBLIC_CHAIN_TYPE
# # ARG NODE_ENV
# # ARG PORT

# # # Generate env file
# # ENV NEXT_PUBLIC_GRAPHQL_URL ${NEXT_PUBLIC_GRAPHQL_URL}
# # ENV NEXT_PUBLIC_GRAPHQL_WS ${NEXT_PUBLIC_GRAPHQL_WS}
# # ENV NEXT_PUBLIC_WS_CHAIN_URL ${NEXT_PUBLIC_WS_CHAIN_URL}
# # ENV NEXT_PUBLIC_RPC_WEBSOCKET ${NEXT_PUBLIC_RPC_WEBSOCKET}
# # ENV NEXT_PUBLIC_CHAIN_STATUS ${NEXT_PUBLIC_CHAIN_STATUS}
# # ENV NEXT_PUBLIC_CHAIN_TYPE ${NEXT_PUBLIC_CHAIN_TYPE}
# # ENV NODE_ENV ${NODE_ENV}
# # ENV PORT ${PORT}

# # Building app
# # RUN npm run build
# # EXPOSE 3000

# # # Running the app
# # CMD ["pm2-runtime", "dist/index.js"]
