import { getThemeTemplate, readTheme } from '@/recoil/settings';
import { createTheme } from '@mui/material/styles';
import { useRecoilValue } from 'recoil';

export const useTheme = () => {
  const theme = useRecoilValue(readTheme);

  return {
    muiTheme: createTheme(getThemeTemplate(theme)),
  };
};
