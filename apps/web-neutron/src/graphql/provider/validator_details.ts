export const LastHundredBlocksDocument = /* GraphQL */ `
  subscription LastHundredBlocks($address: String) {
    block(offset: 1, order_by: { height: desc }, limit: 100) {
      height
      ccv_validator {
        validator {
          validatorInfo: validator_info {
            operatorAddress: operator_address
          }
        }
      }
      transactions {
        hash
      }
      precommits: pre_commits(where: { validator_address: { _eq: $address } }) {
        validatorAddress: validator_address
      }
    }
  }
`;

export const ValidatorLastSeenListenerDocument = /* GraphQL */ `
  subscription ValidatorLastSeenListener($address: String) {
    preCommit: pre_commit(
      limit: 1
      where: { validator_address: { _eq: $address } }
      order_by: { height: desc }
    ) {
      height
      timestamp
    }
  }
`;

export const ValidatorDetailsDocument = /* GraphQL */ `
  query ValidatorDetails($address: String) {
    ccv_validator(where: { consumer_operator_address: { _eq: $address } }) {
      consumer_operator_address
      consumer_self_delegate_address
      ccv_validator_info {
        validator {
          validatorDescriptions: validator_descriptions(order_by: { height: desc }, limit: 1) {
            details
            website
          }
          validatorStatuses: validator_statuses(order_by: { height: desc }, limit: 1) {
            status
            jailed
            height
          }
          validatorSigningInfos: validator_signing_infos(order_by: { height: desc }, limit: 1) {
            missedBlocksCounter: missed_blocks_counter
            tombstoned
          }
          validatorInfo: validator_info {
            operatorAddress: operator_address
            selfDelegateAddress: self_delegate_address
            maxRate: max_rate
          }
          validatorCommissions: validator_commissions(order_by: { height: desc }, limit: 1) {
            commission
          }
          validatorVotingPowers: validator_voting_powers(
            offset: 0
            limit: 1
            order_by: { height: desc }
          ) {
            height
            votingPower: voting_power
          }
        }
      }
    }
    bdjuno_provider {
      stakingPool: staking_pool(order_by: { height: desc }, limit: 1, offset: 0) {
        height
        bonded: bonded_tokens
      }
      slashingParams: slashing_params(order_by: { height: desc }, limit: 1) {
        params
      }
    }
  }
`;

export const ValidatorConsensusAddressesListDocument = /* GraphQL */ `
  query ValidatorConsensusAddressesList($address: String!) {
    ccv_validator(where: { consumer_consensus_address: { _eq: $address } }) {
      consumer_consensus_address
      consumer_operator_address
      consumer_self_delegate_address
      provider_consensus_address
      provider_operator_address
      provider_self_delegate_address
      validator {
        validator_commissions {
          commission
          validator_address
        }
        validator_descriptions {
          moniker
          avatar_url
          website
          details
        }
        validator_info {
          self_delegate_address
        }
      }
    }
  }
`;

export const ValidatorProviderOperatorAddressesListDocument = /* GraphQL */ `
  query ValidatorProviderOperatorAddressesList($address: String!) {
    ccv_validator(where: { provider_operator_address: { _eq: $address } }) {
      consumer_consensus_address
      consumer_operator_address
      consumer_self_delegate_address
      provider_consensus_address
      provider_operator_address
      provider_self_delegate_address
      validator {
        validator_commissions {
          commission
          validator_address
        }
        validator_descriptions {
          moniker
        }
        validator_info {
          self_delegate_address
        }
      }
    }
  }
`;
