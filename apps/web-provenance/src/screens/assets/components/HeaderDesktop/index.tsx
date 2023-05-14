import useStyles from '@/screens/assets/styles';
import { columns } from '@/screens/assets/utils';
import Grid2 from '@mui/material/Unstable_Grid2';
import useTranslationByApp from '@/hooks/useTranslationByApp';

const HeaderDesktop = () => {
  const { t } = useTranslationByApp('assets');
  const { classes } = useStyles();
  return (
    <Grid2 container className={classes.header} columnGap={4}>
      {columns.map((col) => (
        <Grid2
          key={col.columnKey}
          xs={col.width}
          justifyContent={col.justifyContent}
          textAlign={col.textAlign}
        >
          {t(col.columnKey)}
        </Grid2>
      ))}
      <Grid2 xs="auto" className={classes.showMore} />
    </Grid2>
  );
};

export default HeaderDesktop;
