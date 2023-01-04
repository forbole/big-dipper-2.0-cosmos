import { getThemeTemplate, readTheme } from '@/recoil/settings';
import { createTheme, adaptV4Theme } from '@mui/material/styles';
import { useRecoilValue } from 'recoil';

export const useTheme = () => {
  const theme = useRecoilValue(readTheme);

  return {
    muiTheme: createTheme(adaptV4Theme(getThemeTemplate(theme))),
  };
};
