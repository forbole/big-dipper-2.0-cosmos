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
ARG NODE_ENV
ARG PORT

# Generate env file
ENV NODE_ENV ${NODE_ENV}
ENV PORT ${PORT}

# Building app
RUN npm run build
EXPOSE ${PORT}

# Running the app
CMD ["pm2-runtime", "dist/index.js"]
