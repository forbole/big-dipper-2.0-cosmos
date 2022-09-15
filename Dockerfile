###############################################################
###        STAGE 1: Runtime BigDipper container        		###
###############################################################

FROM node:16-alpine AS bigdipper

# Install pre-requisite packages
RUN apk update && apk add --no-cache git bash

# Set working directory & bash defaults
WORKDIR /home/node/app

# Copy source files
COPY . .

# Installing dependencies
RUN npm ci

# Build-time arguments
ARG NODE_ENV="production"
ARG NEXT_PUBLIC_GRAPHQL_URL
ARG NEXT_PUBLIC_GRAPHQL_WS
ARG NEXT_PUBLIC_RPC_WEBSOCKET
ARG NEXT_PUBLIC_CHAIN_TYPE
ARG NPM_CONFIG_LOGLEVEL
ARG PORT=3000

# Build the app
RUN npm run build

# Run-time environment variables
ENV NEXT_PUBLIC_GRAPHQL_URL ${NEXT_PUBLIC_GRAPHQL_URL}
ENV NEXT_PUBLIC_GRAPHQL_WS ${NEXT_PUBLIC_GRAPHQL_WS}
ENV NEXT_PUBLIC_RPC_WEBSOCKET ${NEXT_PUBLIC_RPC_WEBSOCKET}
ENV NEXT_PUBLIC_CHAIN_TYPE ${NEXT_PUBLIC_CHAIN_TYPE}
ENV NPM_CONFIG_LOGLEVEL ${NPM_CONFIG_LOGLEVEL}
ENV NODE_ENV ${NODE_ENV}
ENV PORT ${PORT}

# Specify default port
EXPOSE ${PORT}

# Set user and shell
USER node
SHELL ["/bin/bash", "-euo", "pipefail", "-c"]

# Run the application
CMD [ "npm start" ]
