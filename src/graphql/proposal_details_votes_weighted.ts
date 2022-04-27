export const ProposalDetailsVotesWeightedDocument = /* GraphQL */`
query ProposalDetailsVotesWeighted($proposalId: Int) {
  proposalVoteWeighted: proposal_vote_weighted(where: {proposal_id: {_eq: $proposalId}} order_by: {height: desc}) {
    option
    weight
    voterAddress: voter_address
  }
  validatorStatuses: proposal_validator_status_snapshot(where: {proposal_id: {_eq: $proposalId}, status: {_eq: 3}}) {
    validator {
      validatorInfo: validator_info {
        selfDelegateAddress: self_delegate_address
      }
    }
  }
}
`; 