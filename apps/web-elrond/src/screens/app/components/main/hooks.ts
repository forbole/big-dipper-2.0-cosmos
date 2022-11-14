import { useRecoilValue } from 'recoil';
import { createTheme } from '@material-ui/core/styles';
import { readTheme, getThemeTemplate } from '@recoil/settings';

export const useTheme = () => {
  const theme = useRecoilValue(readTheme);

  return {
    muiTheme: createTheme(getThemeTemplate(theme)),
  };
};
