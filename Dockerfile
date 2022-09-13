FROM node:14.5.0-alpine

# Install git for ui and internal packages
RUN apk add --no-cache git

# Set app directory
WORKDIR /app

# Installing dependencies
COPY package*.json ./
RUN npm ci

# Copying source files
COPY . .

# Get env from secrets
ARG NEXT_PUBLIC_GRAPHQL_URL
ARG NEXT_PUBLIC_GRAPHQL_WS
ARG NEXT_PUBLIC_URL
ARG NEXT_PUBLIC_WS_CHAIN_URL
ARG NEXT_PUBLIC_CHAIN_TYPE
ARG NODE_ENV

# Generate env file
ENV NEXT_PUBLIC_GRAPHQL_URL ${NEXT_PUBLIC_GRAPHQL_URL}
ENV NEXT_PUBLIC_GRAPHQL_WS ${NEXT_PUBLIC_GRAPHQL_WS}
ENV NEXT_PUBLIC_URL ${NEXT_PUBLIC_URL}
ENV NEXT_PUBLIC_WS_CHAIN_URL ${NEXT_PUBLIC_WS_CHAIN_URL}
ENV NEXT_PUBLIC_CHAIN_TYPE ${NEXT_PUBLIC_CHAIN_TYPE}
ENV NODE_ENV ${NODE_ENV}
ENV PORT 3000

# Building app
RUN sed -i 's|<NEXT_PUBLIC_GRAPHQL_URL>|'"$NEXT_PUBLIC_GRAPHQL_URL"'|' codegen.yml
RUN npm run graphql:codegen
RUN npm run build
EXPOSE ${PORT}

#Run the application
CMD ["npm", "run", "start"]
