import { useRecoilValue } from 'recoil';
import { createMuiTheme } from '@material-ui/core/styles';
import {
  readTheme,
  getThemeTemplate,
} from '@recoil/settings';

export const useTheme = () => {
  const theme = useRecoilValue(readTheme);

  return ({
    muiTheme: createMuiTheme(getThemeTemplate(theme)),
  });
};
