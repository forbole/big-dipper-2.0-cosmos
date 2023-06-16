export const ValidatorDelegationsDocument = /* GraphQL */ `
  query ValidatorDelegations(
    $validatorAddress: String!
    $offset: Int = 0
    $limit: Int = 10
    $pagination: Boolean! = true
  ) {
    delegations: action_validator_delegations(
      address: $validatorAddress
      limit: $limit
      offset: $offset
      count_total: $pagination
    ) {
      delegations
      pagination
    }
  }
`;

export const ValidatorRedelegationsDocument = /* GraphQL */ `
  query ValidatorRedelegations(
    $validatorAddress: String!
    $offset: Int = 0
    $limit: Int = 10
    $pagination: Boolean! = true
  ) {
    redelegations: action_validator_redelegations_from(
      address: $validatorAddress
      limit: $limit
      offset: $offset
      count_total: $pagination
    ) {
      redelegations
      pagination
    }
  }
`;

export const ValidatorUndelegationsDocument = /* GraphQL */ `
  query ValidatorUndelegations(
    $validatorAddress: String!
    $offset: Int = 0
    $limit: Int = 10
    $pagination: Boolean! = true
  ) {
    undelegations: action_validator_unbonding_delegations(
      address: $validatorAddress
      limit: $limit
      offset: $offset
      count_total: $pagination
    ) {
      undelegations: unbonding_delegations
      pagination
    }
  }
`;
