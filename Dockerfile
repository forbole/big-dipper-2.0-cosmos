###############################################################
###        STAGE 1: Runtime BigDipper container        		###
###############################################################

FROM node:16-alpine AS builder

# Install pre-requisite packages
RUN apk update && apk add --no-cache git bash

# Set working directory & bash defaults
WORKDIR /home/node/app

# Copy source files
COPY . .

# Installing dependencies
RUN yarn install --frozen-lockfile

# Building app
RUN yarn build


###############################################################
###             STAGE 2: Build Miniflare runner             ###
###############################################################

FROM node:16-alpine AS runner

# Set working directory & bash defaults
WORKDIR /home/node/app

# Copy source/built folders
COPY --from=builder --chown=node:node /home/node/app/public ./public/
COPY --from=builder --chown=node:node /home/node/app/server ./server/
COPY --from=builder --chown=node:node /home/node/app/src ./src/
COPY --from=builder --chown=node:node /home/node/app/dist ./dist/

# Build-time arguments
ARG NODE_ENV="production"
ARG NPM_CONFIG_LOGLEVEL=warn
ARG NEXT_PUBLIC_GRAPHQL_URL
ARG NEXT_PUBLIC_GRAPHQL_WS
ARG NEXT_PUBLIC_RPC_WEBSOCKET
ARG NEXT_PUBLIC_CHAIN_TYPE
ARG PORT=3000

# Run-time environment variables
ENV NODE_ENV ${NODE_ENV}
ENV NPM_CONFIG_LOGLEVEL ${NPM_CONFIG_LOGLEVEL}
ENV PORT ${PORT}
ENV NEXT_PUBLIC_GRAPHQL_URL ${NEXT_PUBLIC_GRAPHQL_URL}
ENV NEXT_PUBLIC_GRAPHQL_WS ${NEXT_PUBLIC_GRAPHQL_WS}
ENV NEXT_PUBLIC_RPC_WEBSOCKET ${NEXT_PUBLIC_RPC_WEBSOCKET}
ENV NEXT_PUBLIC_CHAIN_TYPE ${NEXT_PUBLIC_CHAIN_TYPE}

# Install pre-requisite packages
RUN chown -R node:node /home/node/app && \
    apk update && \
    apk add --no-cache bash ca-certificates

# Specify default port
EXPOSE ${PORT}

# Set user and shell
USER node
SHELL ["/bin/bash", "-euo", "pipefail", "-c"]

# Run the application
CMD [ "yarn run start" ]
