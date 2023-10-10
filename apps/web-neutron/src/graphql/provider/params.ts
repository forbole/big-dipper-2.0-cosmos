export const OnlineVotingPowerDocument = /* GraphQL */ `
query Params {
  slashingParams: slashing_params(limit: 1, order_by: {height: desc}) {
    params
  }
  wasmParams: wasm_params(limit: 1, order_by: {height: desc}) {
    instantiate_default_permission
    code_upload_access
  }
  ccv_consumer_params {
        params
  }
  bdjuno_provider {
    distribution_params {
      params
    }
    mint_params {
      params
    }
    gov_params {
      deposit_params
      height
      one_row_id
      tally_params
      voting_params
    }
    staking_params {
      params
    }
  }
}
`;

