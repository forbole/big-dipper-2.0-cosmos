import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    multisend: {
      marginTop: '1.5rem',
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {
        marginTop: '1rem',
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
