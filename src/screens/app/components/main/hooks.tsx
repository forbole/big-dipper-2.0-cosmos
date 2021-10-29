import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { createMuiTheme } from '@material-ui/core/styles';
import {
  readTheme,
  getThemeTemplate,
} from '@recoil/settings';
import { chainConfig } from '@configs';
import dayjs from '@utils/dayjs';

export const useTheme = () => {
  const theme = useRecoilValue(readTheme);

  return ({
    muiTheme: createMuiTheme(getThemeTemplate(theme)),
  });
};

export const useGenesis = () => {
  const utcTimeNow = dayjs.utc().format('YYYY-MM-DDTHH:mm:ss');
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
