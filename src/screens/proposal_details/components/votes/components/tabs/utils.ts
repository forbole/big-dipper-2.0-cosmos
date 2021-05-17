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
        key: 'noWithVeto',
        num: veto,
      },
      {
        key: 'abstain',
        num: abstain,
      },
    ]
  );
};
