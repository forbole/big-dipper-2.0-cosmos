FROM node:14.5.0-alpine

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
ARG NEXT_PUBLIC_GRAPHQL_URL
ARG NEXT_PUBLIC_GRAPHQL_WS
ARG NEXT_PUBLIC_URL
ARG NODE_ENV
ARG PORT
ARG NEXT_PUBLIC_MATOMO_URL
ARG NEXT_PUBLIC_MATOMO_SITE_ID

# Generate env file
ENV NEXT_PUBLIC_GRAPHQL_URL ${NEXT_PUBLIC_GRAPHQL_URL}
ENV NEXT_PUBLIC_GRAPHQL_WS ${NEXT_PUBLIC_GRAPHQL_WS}
ENV NEXT_PUBLIC_URL ${NEXT_PUBLIC_URL}
ENV NODE_ENV ${NODE_ENV}
ENV PORT ${PORT}
ENV NEXT_PUBLIC_MATOMO_URL ${NEXT_PUBLIC_MATOMO_URL}
ENV NEXT_PUBLIC_MATOMO_SITE_ID ${NEXT_PUBLIC_MATOMO_SITE_ID}

# Building app
RUN npm run build
EXPOSE ${PORT}

# Running the app
CMD ["pm2-runtime", "dist/index.js"]
