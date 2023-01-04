import chainConfig from '@/chainConfig';
import { getThemeTemplate, readTheme } from '@/recoil/settings';
import dayjs from '@/utils/dayjs';
import { createTheme } from '@mui/material/styles';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';

const { genesis } = chainConfig();

export const useTheme = () => {
  const theme = useRecoilValue(readTheme);

  return {
    muiTheme: createTheme(getThemeTemplate(theme)),
  };
};

export const useGenesis = () => {
  const utcTimeNow = dayjs.utc().format('YYYY-MM-DDTHH:mm:ss');
  const [genesisStarted, setGenesis] = useState(genesis.time < utcTimeNow);

  const startGenesis = () => {
    setTimeout(() => {
      setGenesis(true);
    }, 10000);
  };

  return {
    genesisStarted,
    startGenesis,
  };
};
