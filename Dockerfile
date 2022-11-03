###############################################################
###        STAGE 1: Runtime BigDipper container        		###
###############################################################

FROM node:18-alpine AS runner

# Set working directory & bash defaults
WORKDIR /home/node/app

# Copy source files
COPY . .

# Default build-time arguments 
# Actual values passed via environment variables in DO Apps
ARG NODE_ENV="production"
ARG NPM_CONFIG_LOGLEVEL="warn"
ARG NEXT_PUBLIC_GRAPHQL_URL="https://testnet-gql.cheqd.io/v1/graphql"
ARG NEXT_PUBLIC_GRAPHQL_WS="wss://testnet-gql.cheqd.io/v1/graphql"
ARG NEXT_PUBLIC_RPC_WEBSOCKET="wss://rpc.cheqd.network/websocket"
ARG NEXT_PUBLIC_CHAIN_TYPE="testnet"
ARG PORT=3000

# Run-time environment variables
ENV NODE_ENV ${NODE_ENV}
ENV NPM_CONFIG_LOGLEVEL ${NPM_CONFIG_LOGLEVEL}
ENV PORT ${PORT}
ENV NEXT_PUBLIC_GRAPHQL_URL ${NEXT_PUBLIC_GRAPHQL_URL}
ENV NEXT_PUBLIC_GRAPHQL_WS ${NEXT_PUBLIC_GRAPHQL_WS}
ENV NEXT_PUBLIC_RPC_WEBSOCKET ${NEXT_PUBLIC_RPC_WEBSOCKET}
ENV NEXT_PUBLIC_CHAIN_TYPE ${NEXT_PUBLIC_CHAIN_TYPE}

# Installing dependencies
RUN yarn install --immutable

# Build app
RUN yarn build

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
CMD [ "yarn", "start" ]
