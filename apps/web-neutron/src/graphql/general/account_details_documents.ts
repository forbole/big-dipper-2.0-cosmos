export const AccountBalancesDocument = /* GraphQL */ `
  query AccountBalances($address: String!) {
    accountBalances: action_account_balance(address: $address) {
      coins
    }
  }
`;
