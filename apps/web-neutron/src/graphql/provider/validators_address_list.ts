export const ValidatorsAddressListDocument = /* GraphQL */ `
  query ValidatorsAddressList {
  ccv_validator {
    validator {
      validatorInfo: validator_info {
        operatorAddress: operator_address
        selfDelegateAddress: self_delegate_address
        consensusAddress: consensus_address
      }
      validatorDescriptions: validator_descriptions(limit: 1, order_by: {height: desc}) {
        moniker
        identity
        avatarUrl: avatar_url
      }
    }
  }
}
`;

export const ValidatorAddressesDocument = /* GraphQL */ `
query ValidatorAddresses {
  ccv_validator(
    where: {consumer_consensus_address: {_is_null: false}, provider_consensus_address: {_is_null: false}}
  ) {
    consumer_self_delegate_address
    consumer_consensus_address
    provider_self_delegate_address
    provider_operator_address
    validator {
      validatorInfo: validator_info {
        operatorAddress: operator_address
        selfDelegateAddress: self_delegate_address
        consensusAddress: consensus_address
        account {
          address
        }
      }
      validatorDescriptions: validator_descriptions(
        limit: 1
        order_by: {height: desc}
      ) {
        moniker
        avatarUrl: avatar_url
      }
    }
  }
}
`;
