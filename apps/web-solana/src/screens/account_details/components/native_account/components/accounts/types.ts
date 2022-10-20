export type AddressesType = string[];

export type AccountsType = {
  stake: AddressesType;
  nonce: AddressesType;
  vote: AddressesType;
  token: AddressesType;
}

export type AccountsState = {
  loading: boolean;
  stake: AddressesType;
  nonce: AddressesType;
  vote: AddressesType;
  token: AddressesType;
}
