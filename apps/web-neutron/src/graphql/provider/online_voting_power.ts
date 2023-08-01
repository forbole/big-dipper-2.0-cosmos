export const OnlineVotingPowerDocument = /* GraphQL */ `
  query OnlineVotingPower{
    bdjuno_provider {
    activeTotal: validator_status_aggregate(where: {status: {_eq: 3}}) {
      aggregate {
        count
      }
    }
    validatorVotingPowerAggregate: validator_voting_power_aggregate(where: {validator: {validator_statuses: {status: {_eq: 3}}}}) {
      aggregate {
        sum {
          votingPower: voting_power
        }
      }
    }
    stakingPool: staking_pool(order_by: {height: desc}, limit: 1) {
      bonded: bonded_tokens
    }
    stakingParams: staking_params(limit: 1) {
      params
    }
	}
  }
`;
