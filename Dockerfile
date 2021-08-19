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

# Generate env file
ENV NEXT_PUBLIC_GRAPHQL_URL https://gql.likecoin.forbole.com/v1/graphql
ENV NEXT_PUBLIC_GRAPHQL_WS wss://gql-ws.likecoin.forbole.com/v1/graphql
ENV NEXT_PUBLIC_URL https://likecoin.bigdipper.live
ENV NEXT_PUBLIC_WS_CHAIN_URL wss://ws.likecoin.forbole.com/websocket
ENV NODE_ENV production
ENV PORT 3000

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD ["pm2-runtime", "dist/index.js"]
