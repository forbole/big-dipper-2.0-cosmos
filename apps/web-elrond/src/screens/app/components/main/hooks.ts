import { getThemeTemplate, readTheme } from '@/recoil/settings';
import { createTheme } from '@mui/material/styles';
import { useRecoilValue } from 'recoil';

export const useTheme = (fontFamily: string) => {
  const theme = useRecoilValue(readTheme);
  const muiTheme = createTheme(getThemeTemplate(theme, fontFamily));
  return { muiTheme };
};
