# Setup

## Setup the environment

```
git clone https://github.com/forbole/big-dipper-2.0-cosmos.git
npm ci
```

## Create .env

```
NODE_ENV=development
PORT=3000
NEXT_PUBLIC_GRAPHQL_URL=
NEXT_PUBLIC_GRAPHQL_WS=
NEXT_PUBLIC_URL=
NEXT_PUBLIC_WS_CHAIN_URL=
```

- `NODE_ENV` - `development` | `production`
- `PORT` - the port to run the app on
- `NEXT_PUBLIC_GRAPHQL_URL` - refers to the api hosted by [BDJuno](https://github.com/forbole/bdjuno)
- `NEXT_PUBLIC_GRAPHQL_WS` - refers to the websocket hosted by [BDJuno](https://github.com/forbole/bdjuno)
- `NEXT_PUBLIC_URL` - the api where you will be hosting the frontend of this explorer (make sure there is no `/` at the end ex: `https://morpheus.desmos.network` not `https://morpheus.desmos.network/`)
- `NEXT_PUBLIC_WS_CHAIN_URL` - refers to the rpc websocket

## Update chain_config.json
In `src/configs/chain_config.json` update the json to fit your needs.

If you have more than one native token please insert it as the following `the base token needs [x] exponents to display the following token unit`

```
"tokenUnits": {
    "udaric": {
      "display": "daric",
      "exponent": 6
    },
    "upretz": {
      "display": "pretz",
      "exponent": 3
    },
    "ubar": {
      "display": "pretz",
      "exponent": 6
    },
  },
```

::: tip
Turn `desmosProfile` on if your chain uses the desmos profile.

Turn `forboleX` on if your chain uses `Forbole X`.
:::

## Start Big Dipper
```
npm run dev
```

## Available Scripts
`npm run dev` - starts the app in development mode using nodemon \
`npm run build` - builds the app for production \
`npm run start` - runs the build app in production mode \
`npm run type-check` - typescript check \
`npm run lint` - lint check \
`npm run test` - jest \
`npm run graphql:codegen` - rebuilds gql types if anything in the `src/graphql` folder has changed

## Docker
If you want to use this with docker update update the following ENV Variables:

```
ENV NEXT_PUBLIC_GRAPHQL_URL https://gql.morpheus.desmos.network/v1/graphql
ENV NEXT_PUBLIC_GRAPHQL_WS wss://gql.morpheus.desmos.network/v1/graphql
ENV NEXT_PUBLIC_URL https://morpheus.desmos.network
ENV NEXT_PUBLIC_WS_CHAIN_URL wss://rpc.morpheus.desmos.network/websocket
ENV NODE_ENV production
ENV PORT 3000
```

```
docker build
```
