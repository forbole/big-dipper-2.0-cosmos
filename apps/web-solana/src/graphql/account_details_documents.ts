export const AccountTypeDocument = /* GraphQL */`
query AccountType($address: String!) {
  actionsAccountInfo: actions_account_info(address: $address) {
    parsed
    programOwner: program_owner
  }
}
`;

export const NativeAccountDetailsDocument = /* GraphQL */`
query NativeAccountDetails($address: String!) {
  accountBalance: account_balance(where: {address: {_eq: $address}}) {
    balance
  }
  stake: stake_account_aggregate(where: {withdrawer: {_eq: $address}}) {
    nodes {
      nativeBalance: native_balance {
        balance
      }
    }
  }
  nonce: nonce_account_aggregate(where: {authority: {_eq: $address}}) {
    nodes {
      nativeBalance: native_balance {
        balance
      }
    }
  }
  validator: validator_aggregate(where: {withdrawer: {_eq: $address}}) {
    nodes {
      nativeBalance: native_balance {
        balance
      }
    }
  }
}
`;

export const NativeAccountCountDocument = /* GraphQL */`
query NativeRelatedAccountsCount($address: String) {
  stakeAccountAggregate: stake_account_aggregate(where: {withdrawer: {_eq: $address}}) {
    aggregate {
      count
    }
  }
  validatorAggregate: validator_aggregate(where: {withdrawer: {_eq: $address}}) {
    aggregate {
      count
    }
  }
  nonceAccountAggregate: nonce_account_aggregate(where: {authority: {_eq: $address}}) {
    aggregate {
      count
    }
  }
  tokenAccountAggregate: token_account_aggregate(where: {owner: {_eq: $address}}) {
    aggregate {
      count
    }
  }
}
`;

export const NativeRelatedAccountsDocument = /* GraphQL */`
query NativeRelatedAccounts($address: String) {
  stakeAccount: stake_account(where: {withdrawer: {_eq: $address}}) {
    address
  }
  validator(where: {withdrawer: {_eq: $address}}) {
    address
  }
  nonceAccount: nonce_account(where: {authority: {_eq: $address}}) {
    address
  }
  tokenAccount: token_account(where: {owner: {_eq: $address}}) {
    address
  }
}
`;

export const NativeAccountTokensDocument = /* GraphQL */`
query NativeAccountTokens($address: String) {
  tokens: token_account_balance(where: {token_account: {owner: {_eq: $address}}}) {
    balance
    tokenAccount: token_account {
      tokenUnit: token_unit {
        unitName: unit_name
        mint
      }
      tokenInfo: token_info {
        decimals
      }
    }
  }
}
`;

// token account

export const TokenAccountDetailsDocument = /* GraphQL */`
query TokenDetails($address: String!) {
  tokenUnit: token_unit(where: {mint: {_eq: $address}}) {
    mint
    unitName: unit_name
    logo: logo_uri
    tokenPrice: token_price {
      marketCap: market_cap
      price
    }
  }
  token(where: {mint: {_eq: $address}}) {
    mint
    freezeAuthority: freeze_authority
    decimals
    mintAuthority: mint_authority
  }
  tokenSupply: token_supply(where: {mint: {_eq: $address}}) {
    supply
  }
  tokenAccountAggregate: token_account_aggregate (where: {mint: {_eq: $address}}) {
    aggregate {
      count
    }
  }
}
`;

export const TokenAccountDetailsHoldersDocument = /* GraphQL */`
query TokenDetailsHolders($address: String!) {
  tokenAccountBalance: token_account_balance_ordering(where: {mint: {_eq: $address}, balance: {_gt: "0"}}, order_by: {balance: desc}, limit: 10) {
    address
    balance
  }
  token(where: {mint: {_eq: $address}}) {
    decimals
  }
}
`;

// nonce account
export const NonceAccountDetailsDocument = /* GraphQL */`
query NonceAccountDetails($address: String!) {
  nonceAccount: nonce_account(where: {address: {_eq: $address}}) {
    address
    authority
    lamportsPerSignature: lamports_per_signature
    blockhash
    nativeBalance: native_balance {
        balance
      }
  }
}
`;

// token detail account
export const TokenDetailsAccountDetailsDocument = /* GraphQL */`
query TokenDetailsAccountDetails($address: String!) {
  tokenAccount: token_account(where: {address: {_eq: $address}}) {
    address
    mint
    owner
    tokenInfo: token_info {
      decimals
    }
    tokenUnit: token_unit {
      unitName: unit_name
      logoUrl: logo_uri
    }
  }
  tokenAccountBalance: token_account_balance(where: {address: {_eq: $address}}) {
    balance
  }
}
`;

// stake detail account
export const StakeAccountDetailsDocument = /* GraphQL */`
query StakeAccountDetails($address: String) {
  block(order_by: {slot: desc}, limit: 1) {
    slot
  }
  stakeAccount: stake_account(where: {address: {_eq: $address}}) {
    address
    nativeBalance: native_balance {
      balance
    }
    staker
    withdrawer
    stakeDelegation: stake_delegation {
      stake
      activationEpoch: activation_epoch
      deactivationEpoch: deactivation_epoch
      voter
    }
  }
}
`;

// vote detail account
export const VoteAccountDetailsDocument = /* GraphQL */`
query VoteAccountDetails($address: String) {
  validator(where: {address: {_eq: $address}}) {
    address
    nativeBalance: native_balance {
      balance
    }
    commission
    voter
    withdrawer
    validatorStatus: validator_status {
      slot
      rootSlot: root_slot
      lastVote: last_vote
      active
    }
    validatorConfig: validator_config {
      details
      avatarUrl: avatar_url
      name
      website
    }
    validatorSkipRate: validator_skip_rate {
      epoch
      skip
      skipRate: skip_rate
      total
    }
  }
}
`;
