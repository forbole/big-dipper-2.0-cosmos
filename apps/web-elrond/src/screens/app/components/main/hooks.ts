import { getThemeTemplate, readTheme } from '@/recoil/settings';
import { createTheme } from '@material-ui/core/styles';
import { useRecoilValue } from 'recoil';

export const useTheme = () => {
  const theme = useRecoilValue(readTheme);

  return {
    muiTheme: createTheme(getThemeTemplate(theme)),
  };
};
