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

# # Get env from secrets
# ARG NODE_ENV
# ARG PORT
# ARG CHAIN_NAME
# ARG CHAIN_TYPE

# Generate env file
ENV NODE_ENV=production
ENV PORT=3000
ENV CHAIN_NAME=agoric
ENV CHAIN_TYPE=mainnet

# Building app
RUN npm run build --chaintype=${CHAIN_TYPE} --chainname=${CHAIN_NAME}
EXPOSE ${PORT}

# Running the app
CMD ["pm2-runtime", "dist/index.js"]
