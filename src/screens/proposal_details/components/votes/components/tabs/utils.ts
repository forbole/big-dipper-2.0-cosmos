export const tabLabels = (data: {
  yes: number;
  no: number;
  abstain: number;
  veto: number;
}) => {
  const {
    yes,
    no,
    abstain,
    veto,
  } = data;
  const total = yes + no + abstain + veto;
  // did not vote needs to get snapshot of validators
  return (
    [
      {
        key: 'all',
        num: total,
      },
      {
        key: 'yes',
        num: yes,
      },
      {
        key: 'no',
        num: no,
      },
      {
        key: 'veto',
        num: veto,
      },
      {
        key: 'abstain',
        num: abstain,
      },
      {
        key: 'didNotVote',
        num: 0,
      },
    ]
  );
};
