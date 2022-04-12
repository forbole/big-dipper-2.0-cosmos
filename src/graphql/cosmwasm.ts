export const CosmWasmInstantiateDocument = /* GraphQL */`
query CosmWasmInstantiate($address: String!) {
    cosmwasm_instantiate(where: {result_contract_address: {_eq: $address}}, limit: 1) {
        admin
        result_contract_address
        label
        sender
        success
        code_id
    }
}
`;

export const CosmWasmExecutesDocument = /* GraphQL */`
query CosmWasmExecutes($address: String!, $offset: Int, $limit: Int) {
    cosmwasm_execute(where: {contract: {_eq: $address}}, offset: $offset, limit: $limit) {
        method
        success
        transaction_hash
        transaction {
            block {
                timestamp
                height
            }
        }
    }
}
`;
