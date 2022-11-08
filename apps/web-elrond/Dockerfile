FROM node:14.5.0-alpine

ENV PORT 3000

# Install git for ui and internal packages
RUN apk add --no-cache git

# Set app directory
WORKDIR /app

# Add PM2
RUN npm install pm2 -g

# Installing dependencies
COPY package*.json ./
RUN npm ci

# Copying source files
COPY . .

# Get env from secrets
ARG GRAPHQL_URL
ARG GRAPHQL_WS
ARG RPC_WEBSOCKET
ARG NEXT_PUBLIC_CHAIN_TYPE
ARG NODE_ENV
ARG PORT
ARG MATOMO_URL
ARG MATOMO_SITE_ID

# Generate env file
ENV GRAPHQL_URL ${GRAPHQL_URL}
ENV GRAPHQL_WS ${GRAPHQL_WS}
ENV RPC_WEBSOCKET ${RPC_WEBSOCKET}
ENV NEXT_PUBLIC_CHAIN_TYPE ${NEXT_PUBLIC_CHAIN_TYPE}
ENV NODE_ENV ${NODE_ENV}
ENV PORT ${PORT}
ENV MATOMO_URL ${MATOMO_URL}
ENV MATOMO_SITE_ID ${MATOMO_SITE_ID}

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD ["pm2-runtime", "dist/index.js"]
