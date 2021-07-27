## Overview
You are free to change big dipper however you'd like to fit your needs. Below will be some basic changes available.

## Theme(s)
By default we offer `light`, `dark`, `deuteranopia` and `tritanopia` themes to make our explorer more accessible.

We recommend you only edit the `light` and `dark` modes. They are available in `src/styles/themes`.

`index` - holds the overall common usage for `light` and `dark`. They can easily be overwritten by copying and pasting their individual values in `dark.ts` or `light.ts`.


## TX Messages
By default, message types that don't exist on the base chain (cosmos in this case) will be displayed as `unknown` but you can easily customize your own by doing the following:

Setup a class model in `src/models/msg/<module>`. By default we have separated all tx msgs by their corresponding chain module making it easy to locate and associate. All messages must contain the following: `category` (module), `type` (message type), `json` prop and a `fromJson` static method.

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

Import and export your model in `src/models/index.ts`

```
import MsgUnjail from './msg/slashing/msg_unjail';

export {
  MsgUnjail
}
```

In `src/screens/transaction_details/components/msg` create a corresponding component for your newly created model.

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

import and export your component in `src/screens/transaction_details/components/index.ts`

```
import Unjail from './msg/slashing/unjail';

export {
  Unjail
}
```

In `src/screens/transaction_details/utils.tsx` go to `customTypeToModel` and add your model in the following format

```
<message type>: {
  model: <Model>,
  content: <Component>,
  tagTheme: <tag color>,
  tagDisplay: <tag value>,
}

## example

'/cosmos.slashing.v1beta1.MsgUnjail': {
  model: MODELS.MsgUnjail,
  content: COMPONENTS.Unjail,
  tagTheme: 'five',
  tagDisplay: 'txUnjailLabel',
}
```

Your newly added transaction message should be showing up correctly.
