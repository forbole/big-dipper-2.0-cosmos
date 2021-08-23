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
  export NEXT_PUBLIC_GRAPHQL_URL=$(cat /run/secrets/NEXT_PUBLIC_GRAPHQL_URL) && \
  export NEXT_PUBLIC_GRAPHQL_WS=$(cat /run/secrets/NEXT_PUBLIC_GRAPHQL_WS) && \
  export NEXT_PUBLIC_URL=$(cat /run/secrets/NEXT_PUBLIC_URL) && \
  export NEXT_PUBLIC_WS_CHAIN_URL=$(cat /run/secrets/NEXT_PUBLIC_WS_CHAIN_URL) && \
  export NODE_ENV=$(cat /run/secrets/NODE_ENV) && \
  export PORT=$(cat /run/secrets/PORT)

# Generate env file
# ENV NEXT_PUBLIC_GRAPHQL_URL ${NEXT_PUBLIC_GRAPHQL_URL}
# ENV NEXT_PUBLIC_GRAPHQL_WS ${NEXT_PUBLIC_GRAPHQL_WS}
# ENV NEXT_PUBLIC_URL ${NEXT_PUBLIC_URL}
# ENV NEXT_PUBLIC_WS_CHAIN_URL ${NEXT_PUBLIC_WS_CHAIN_URL}
# ENV NODE_ENV ${NODE_ENV}
# ENV PORT ${PORT}

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD ["pm2-runtime", "dist/index.js"]
