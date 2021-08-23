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
RUN --mount=type=secret,id=NEXT_PUBLIC_GRAPHQL_URL \
  --mount=type=secret,id=NEXT_PUBLIC_GRAPHQL_WS \
  --mount=type=secret,id=NEXT_PUBLIC_URL \
  --mount=type=secret,id=NEXT_PUBLIC_WS_CHAIN_URL \
  --mount=type=secret,id=NODE_ENV \
  --mount=type=secret,id=PORT \
  ENV NEXT_PUBLIC_GRAPHQL_URL=$(cat /run/secrets/NEXT_PUBLIC_GRAPHQL_URL) && \
  ENV NEXT_PUBLIC_GRAPHQL_WS=$(cat /run/secrets/NEXT_PUBLIC_GRAPHQL_WS) && \
  ENV NEXT_PUBLIC_URL=$(cat /run/secrets/NEXT_PUBLIC_URL) && \
  ENV NEXT_PUBLIC_WS_CHAIN_URL=$(cat /run/secrets/NEXT_PUBLIC_WS_CHAIN_URL) && \
  ENV NODE_ENV=$(cat /run/secrets/NODE_ENV) && \
  ENV PORT=$(cat /run/secrets/PORT)

# Generate env file
# ENV NEXT_PUBLIC_GRAPHQL_URL https://gql.morpheus.desmos.network/v1/graphql
# ENV NEXT_PUBLIC_GRAPHQL_WS wss://gql.morpheus.desmos.network/v1/graphql
# ENV NEXT_PUBLIC_URL https://morpheus.desmos.network
# ENV NEXT_PUBLIC_WS_CHAIN_URL wss://rpc.morpheus.desmos.network/websocket
# ENV NODE_ENV production
# ENV PORT 3000

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD ["pm2-runtime", "dist/index.js"]
