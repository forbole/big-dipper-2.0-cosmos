import { getThemeTemplate, readTheme } from '@/recoil/settings';
import { createTheme } from '@mui/material/styles';
import { useRecoilValue } from 'recoil';
import useShallowMemo from '@/hooks/useShallowMemo';

export const useTheme = (fontFamily: string) => {
  const theme = useRecoilValue(readTheme);
  const muiTheme = useShallowMemo(createTheme(getThemeTemplate(theme, fontFamily)));
  return { muiTheme };
};
