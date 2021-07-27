# Big Dipper Interface ✨ Cosmos 2.0

## About
Big Dipper is an open-source block explorer and token management tool serving over 10 proof-of-stake blockchains. It has been forked more than 100 times on GitHub and has served audiences from 140 countries and regions.

Visit [Big Dipper](https://bigdipper.live/) to see a complete list of chains.

## What's New
While the original [Big Dipper](https://github.com/forbole/big-dipper) was a fullstack application, we have decided to break down the components and make it a view only explorer in **v2.0+**. This repo (**Big Dipper Interface ✨ Cosmos 2.0**) will primarily focus only on the frontend aspect.

## Quick Start (development mode)
In this quick start we assume you are running [BDJuno](https://github.com/forbole/bdjuno), our default indexer.

1) `npm ci`

2) Create a `.env` file and fill it with the following

```
NODE_ENV=development
PORT=3000
NEXT_PUBLIC_GRAPHQL_URL=
NEXT_PUBLIC_GRAPHQL_WS=
NEXT_PUBLIC_URL=
NEXT_PUBLIC_WS_CHAIN_URL=
```

`NODE_ENV` - `development` | `production` \
`PORT` - the port to run the app on \
`NEXT_PUBLIC_GRAPHQL_URL` - refers to the api hosted by [BDJuno](https://github.com/forbole/bdjuno) \
`NEXT_PUBLIC_GRAPHQL_WS` - refers to the websocket hosted by [BDJuno](https://github.com/forbole/bdjuno) \
`NEXT_PUBLIC_URL` - the api where you will be hosting the frontend of this explorer (make sure there is no `/` at the end ex: `https://morpheus.desmos.network` not `https://morpheus.desmos.network/`) \
`NEXT_PUBLIC_WS_CHAIN_URL` - refers to the rpc websocket hosted by the node \

3) In `src/configs/chain_config.json` update the json to fit your needs

- If you have more than one native token please insert it as the following `the base token needs [x] exponents to display the following token unit`

ex:
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

- Turn `desmosProfile` on if your chain uses the desmos profile
- Turn `forboleX` on if your chain uses `Forbole X`

4) `npm run dev`

## Additional Configuration
You are free to change big dipper however you'd like to fit your needs. Below will be some basic changes available.

### Themes
By default we offer `light`, `dark`, `deuteranopia` and `tritanopia` themes to make our explorer more accessible.

We recommend you only edit the `light` and `dark` modes. They are available in `src/styles/themes`.

`index` - holds the overall common usage for `light` and `dark`. They can easily be overwritten by copying and pasting their individual values in `dark.ts` or `light.ts`.

### TX Messages
By default, message types that don't exist on the base chain (cosmos in this case) will be displayed as `unknown` but you can easily customize your own by doing the following:

1) Setup a class model in `src/models/msg/<module>`. By default we have separated all tx msgs by their corresponding chain module making it easy to locate and associate. All messages must contain the following: `category` (module), `type` (message type), `json` prop and a `fromJson` static method. Below is an example

```
class MsgUnjail {
  public category: Categories; // required
  public type: string; // required
  public json: any; // required
  public validatorAddress: string;

  constructor(payload: any) {
    this.category = 'slashing'; // required
    this.type = payload.type; // required
    this.json = payload.json; // required
    this.validatorAddress = payload.validatorAddress;
  }

  static fromJson(json: any) {
    return new MsgUnjail({
      json,
      type: json['@type'],
      validatorAddress: json.validator_addr,
    });
  }
}
```

2. import and export your model in `src/models/index.ts`

3. In `src/screens/transaction_details/components/msg` create a corresponding component for your newly created model.

ex: we will be using `MsgUnjail` again

```
const Unjail = (props: {
  message: MsgUnjail;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;
  const validator = findAddress(message.validatorAddress);
  const validatorMoniker = validator ? validator?.moniker : message.validatorAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txUnjailContent"
        components={[
          (
            <Name
              address={message.validatorAddress}
              name={validatorMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};
```

4. import and export your component in `src/screens/transaction_details/components/index.ts`

5. in `src/screens/transaction_details/utils.tsx` go to `customTypeToModel` and add your model in the following format

```
<message type>: {
  model: <Model>,
  content: <Component>,
  tagTheme: <tag color>,
  tagDisplay: <tag value>,
},
```

ex:
```
'/desmos.profiles.v1beta1.MsgSaveProfile': {
  model: MODELS.MsgSaveProfile,
  content: COMPONENTS.SaveProfile,
  tagTheme: 'four',
  tagDisplay: 'txSaveProfileLabel',
}
```

## Docker
`docker build`

## Github Actions
By default we care using github actions to run our ci/cd. Feel free to delete it if you do not need it.

## Available Scripts

`npm run dev` - starts the app in development mode using nodemon \
`npm run build` - builds the app for production \
`npm run start` - runs the build app in production mode \
`npm run type-check` - typescript check \
`npm run lint` - lint check \
`npm run test` - jest \
`npm run graphql:codegen` - rebuilds gql types if anything in the `src/graphql` folder has changed

