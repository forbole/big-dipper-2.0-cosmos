import numeral from 'numeral';

export const formatGraphData = (data) => {
  const {
    rawData,
  } = data;
  return ([
    {
      name: 'yes',
      value: rawData.voteTally.yes,
      display: numeral(rawData.voteTally.yes).format('0,0.[000000]'),
      percentage: `${numeral((rawData.voteTally.yes / rawData.voteTally.total) * 100).format('0.[00]')}%`,
      color: '#355070',
    },
    {
      name: 'no',
      value: rawData.voteTally.no,
      display: numeral(rawData.voteTally.no).format('0,0.[000000]'),
      percentage: `${numeral((rawData.voteTally.no / rawData.voteTally.total) * 100).format('0.[00]')}%`,
      color: '#6d597a',
    },
    {
      name: 'veto',
      value: rawData.voteTally.veto,
      display: numeral(rawData.voteTally.veto).format('0,0.[000000]'),
      percentage: `${numeral((rawData.voteTally.veto / rawData.voteTally.total) * 100).format('0.[00]')}%`,
      color: '#b56576',
    },
    {
      name: 'abstain',
      value: rawData.voteTally.abstain,
      display: numeral(rawData.voteTally.abstain).format('0,0.[000000]'),
      percentage: `${numeral((rawData.voteTally.abstain / rawData.voteTally.total) * 100).format('0.[00]')}%`,
      color: '#e56b6f',
    },
  ]);
};
