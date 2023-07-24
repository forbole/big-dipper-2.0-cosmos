export const AccountCommissionDocument = /* GraphQL */ `
  query AccountCommission($validatorAddress: String!) {
    bdjuno_provider {
      commission: action_validator_commission_amount(address: $validatorAddress) {
        coins
      }
    }
  }
`;

export const AccountWithdrawalAddressDocument = /* GraphQL */ `
  query AccountWithdrawalAddress($address: String!) {
    bdjuno_provider {
      withdrawalAddress: action_delegator_withdraw_address(address: $address) {
        address
      }
    }
  }
`;

export const AccountBalancesDocument = /* GraphQL */ `
  query AccountBalances($address: String!) {
    bdjuno_provider {
      accountBalances: action_account_balance(address: $address) {
        coins
      }
    }
  }
`;

export const AccountDelegationBalanceDocument = /* GraphQL */ `
  query AccountDelegationBalance($address: String!) {
    bdjuno_provider {
      delegationBalance: action_delegation_total(address: $address) {
        coins
      }
    }
  }
`;

export const AccountUnbondingBalanceDocument = /* GraphQL */ `
  query AccountUnbondingBalance($address: String!) {
    bdjuno_provider {
      unbondingBalance: action_unbonding_delegation_total(address: $address) {
        coins
      }
    }
  }
`;

export const AccountDelegationRewardsDocument = /* GraphQL */ `
  query AccountDelegationRewards($address: String!) {
    bdjuno_provider { 
      delegationRewards: action_delegation_reward(address: $address) {
        validatorAddress: validator_address
        coins
      }
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
    bdjuno_provider {
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
  }
`;

export const AccountRedelegationsDocument = /* GraphQL */ `
  query AccountRedelegations(
    $address: String!
    $offset: Int = 0
    $limit: Int = 10
    $pagination: Boolean! = true
  ) {
    bdjuno_provider {
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
  }
`;

export const AccountUndelegationsDocument = /* GraphQL */ `
  query AccountUndelegations(
    $address: String!
    $offset: Int = 0
    $limit: Int = 10
    $pagination: Boolean! = true
  ) {
    bdjuno_provider {
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
  }
`;
