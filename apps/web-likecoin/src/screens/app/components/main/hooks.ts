import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { createTheme } from '@material-ui/core/styles';
import { readTheme, getThemeTemplate } from 'ui/recoil/settings';
import chainConfig from 'ui/chainConfig';
import dayjs from 'ui/utils/dayjs';

export const useTheme = () => {
  const theme = useRecoilValue(readTheme);

  return {
    muiTheme: createTheme(getThemeTemplate(theme)),
  };
};

export const useGenesis = () => {
  const utcTimeNow = (dayjs as any).utc().format('YYYY-MM-DDTHH:mm:ss');
  const [genesisStarted, setGenesis] = useState(chainConfig.genesis.time < utcTimeNow);

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
