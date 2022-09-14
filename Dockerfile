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
ENV NODE_ENV ${NODE_ENV}

# Build the app
RUN npm run build

# Run-time environment variables
ENV NEXT_PUBLIC_GRAPHQL_URL ${NEXT_PUBLIC_GRAPHQL_URL}
ENV NEXT_PUBLIC_GRAPHQL_WS ${NEXT_PUBLIC_GRAPHQL_WS}
ENV NEXT_PUBLIC_URL ${NEXT_PUBLIC_URL}
ENV NEXT_PUBLIC_WS_CHAIN_URL ${NEXT_PUBLIC_WS_CHAIN_URL}
ENV NEXT_PUBLIC_CHAIN_TYPE ${NEXT_PUBLIC_CHAIN_TYPE}
ENV NODE_ENV ${NODE_ENV}
ENV PORT ${PORT}

# Specify default port
EXPOSE ${PORT}

# Set user and shell
USER node
SHELL ["/bin/bash", "-euo", "pipefail", "-c"]

# Run the application
CMD [ "npm start" ]
