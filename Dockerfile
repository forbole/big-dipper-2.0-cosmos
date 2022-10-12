FROM node:18.10.0-alpine

ENV PORT 3000

# Install git for ui and internal packages
RUN apk add --no-cache git

# Set app directory
WORKDIR /app

# Add PM2
RUN yarn add pm2 -g

# Installing dependencies
COPY package*.json ./
RUN yarn install

# Copying source files
COPY . .

# Get env from secrets
ARG NODE_ENV
ARG PORT
ARG CHAIN_NAME
ARG CHAIN_TYPE
ARG SENTRY_DSN

# Generate env file
ENV NODE_ENV ${NODE_ENV}
ENV PORT ${PORT}
ENV CHAIN_NAME ${CHAIN_NAME}
ENV CHAIN_TYPE ${CHAIN_TYPE}
ENV SENTRY_DSN ${ENTRY_DSN}

# Building app
RUN yarn install && yarn build --chainname=${CHAIN_NAME} --chaintype=${CHAIN_TYPE} 
EXPOSE ${PORT}

# Running the app
CMD ["pm2-runtime", "dist/index.js"]
