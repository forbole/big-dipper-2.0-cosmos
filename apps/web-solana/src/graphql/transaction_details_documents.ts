export const TokenAccountUnitDocument = /* GraphQL */`
query AccountWithdrawalAddress($address: String!) {
  tokenAccount: token_account(where: {address: {_eq: $address}}) {
    tokenUnit: token_unit {
      unitName: unit_name
    }
    tokenInfo: token_info {
      decimals
    }
  }
}
`;
