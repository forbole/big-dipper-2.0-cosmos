export const AccountCommissionDocument = /* GraphQL */ `
  query AccountCommission($validatorAddress: String!) {
    commission: action_validator_commission_amount(address: $validatorAddress) {
      coins
    }
  }
`;

export const AccountWithdrawalAddressDocument = /* GraphQL */ `
  query AccountWithdrawalAddress($address: String!) {
    withdrawalAddress: action_delegator_withdraw_address(address: $address) {
      address
    }
  }
`;

export const AccountBalancesDocument = /* GraphQL */ `
  query AccountBalances($address: String!) {
    accountBalances: action_account_balance(address: $address) {
      coins
    }
  }
`;

export const AccountDelegationBalanceDocument = /* GraphQL */ `
  query AccountDelegationBalance($address: String!) {
    delegationBalance: action_delegation_total(address: $address) {
      coins
    }
  }
`;

export const AccountUnbondingBalanceDocument = /* GraphQL */ `
  query AccountUnbondingBalance($address: String!) {
    unbondingBalance: action_unbonding_delegation_total(address: $address) {
      coins
    }
  }
`;

export const AccountDelegationRewardsDocument = /* GraphQL */ `
  query AccountDelegationRewards($address: String!) {
    delegationRewards: action_delegation_reward(address: $address) {
      validatorAddress: validator_address
      coins
    }
  }
`;

export const AccountDelegationsDocument = /* GraphQL */ `
  query AccountDelegations(
    $address: String!
    $offset: Int = 0
    $limit: Int = 10
    $pagination: Boolean! = true
  ) {
    delegations: action_delegation(
      address: $address
      limit: $limit
      offset: $offset
      count_total: $pagination
    ) {
      delegations
      pagination
    }
  }
`;

export const AccountRedelegationsDocument = /* GraphQL */ `
  query AccountRedelegations(
    $address: String!
    $offset: Int = 0
    $limit: Int = 10
    $pagination: Boolean! = true
  ) {
    redelegations: action_redelegation(
      address: $address
      limit: $limit
      offset: $offset
      count_total: $pagination
    ) {
      redelegations
      pagination
    }
  }
`;

export const AccountUndelegationsDocument = /* GraphQL */ `
  query AccountUndelegations(
    $address: String!
    $offset: Int = 0
    $limit: Int = 10
    $pagination: Boolean! = true
  ) {
    undelegations: action_unbonding_delegation(
      address: $address
      limit: $limit
      offset: $offset
      count_total: $pagination
    ) {
      undelegations: unbonding_delegations
      pagination
    }
  }
`;
