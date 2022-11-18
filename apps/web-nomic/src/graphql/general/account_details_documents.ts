export const AccountBalancesDocument = /* GraphQL */ `
  query AccountBalances($address: String!) {
    accountBalances: action_account_balance(address: $address) {
      coins
    }
  }
`;

// export const AccountWithdrawalAddressDocument = /* GraphQL */ `
//   query AccountWithdrawalAddress($address: String!) {
//     withdrawalAddress: action_delegator_withdraw_address(address: $address) {
//       address
//     }
//   }
// `;

export const AccountDelegationBalanceDocument = /* GraphQL */ `
  query AccountDelegationBalance($address: String!) {
    delegationBalance: action_delegation_total(address: $address) {
      coins
    }
  }
`;
