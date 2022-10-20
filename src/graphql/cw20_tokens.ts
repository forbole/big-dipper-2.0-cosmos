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

// query cw20_token_info {
//   cw20token_info_by_pk(address: "") {
//     circulating_supply
//     code_id
//     decimals
//     description
//     logo
//     marketing_admin
//     max_supply
//     minter
//     name
//     project_url
//     symbol
//     balances {
//       address
//       balance
//     }
//   }
// }
