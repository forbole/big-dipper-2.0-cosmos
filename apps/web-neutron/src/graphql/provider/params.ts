export const OnlineVotingPowerDocument = /* GraphQL */ `
query Params {
  consumerParams: ccv_consumer_params(limit: 1, order_by: {height: desc}) {
    params
  }
  slashingParams: slashing_params(limit: 1, order_by: {height: desc}) {
  	params
  }
  wasmParams: wasm_params(limit: 1, order_by: {height: desc}) {
    instantiate_default_permission
    code_upload_access
  }
}
`;

