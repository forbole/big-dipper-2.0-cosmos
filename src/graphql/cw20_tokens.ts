export const Cw20TokenBalancesDocument = /* GraphQL */`
query Cw20TokenBalances($address: String!) {
  cw20token_balance(where: {address: {_eq: $address}}) {
    balance
    cw20token_info {
      address
      name
      symbol
      decimals
      logo
    }
  }
}
`;

export const Cw20TokenInfoDocument = /* GraphQL */`
query Cw20TokenInfo($address: String!) {
  cw20token_info_by_pk(address: $address) {
    circulating_supply
    decimals
    max_supply
    minter
    name
    project_url
    symbol
  }
}
`;
