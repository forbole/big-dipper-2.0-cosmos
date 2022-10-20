export const getStatusInfo = (status: string, t: any) => {
  const statusDict = {
    PROPOSAL_STATUS_DEPOSIT_PERIOD: {
      value: t('deposit'),
      tag: 'one',
    },
    PROPOSAL_STATUS_INVALID: {
      value: t('invalid'),
      tag: 'two',
    },
    PROPOSAL_STATUS_VOTING_PERIOD: {
      value: t('voting'),
      tag: 'three',
    },
    PROPOSAL_STATUS_PASSED: {
      value: t('passed'),
      tag: 'four',
    },
    PROPOSAL_STATUS_REJECTED: {
      value: t('rejected'),
      tag: 'five',
    },
    PROPOSAL_STATUS_FAILED: {
      value: t('failed'),
      tag: 'six',
    },
  };

  if (statusDict[status]) {
    return statusDict[status];
  }
  return {
    value: status,
    tag: 'zero',
  };
};
