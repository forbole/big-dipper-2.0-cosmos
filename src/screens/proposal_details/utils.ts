export const getProposalType = (proposalType: string) => {
  let type = proposalType;
  if (proposalType === '/cosmos.gov.v1beta1.TextProposal') {
    type = 'textProposal';
  }

  if (proposalType === '/cosmos.params.v1beta1.ParameterChangeProposal') {
    type = 'parameterChangeProposal';
  }

  if (proposalType === '/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal') {
    type = 'softwareUpgradeProposal';
  }

  return type;
};
