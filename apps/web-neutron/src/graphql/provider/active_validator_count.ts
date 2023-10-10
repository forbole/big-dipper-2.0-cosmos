export const ActiveValidatorCountDocument = /* GraphQL */ `
  query ActiveValidatorCount{
    bdjuno_provider {
    activeTotal: validator_status_aggregate(where: {status: {_eq: 3}}) {
      aggregate {
        count
      }
    }
    inactiveTotal: validator_status_aggregate(where: {status: {_neq: 3}}) {
      aggregate {
        count
      }
    }
    total: validator_status_aggregate {
      aggregate {
        count
      }
    }
  }
  }
`;

