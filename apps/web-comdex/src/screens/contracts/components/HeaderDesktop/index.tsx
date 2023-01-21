import useStyles from '@/screens/contracts/styles';
import { columns } from '@/screens/contracts/utils';
import Grid2 from '@mui/material/Unstable_Grid2';
import useTranslation from 'next-translate/useTranslation';

const HeaderDesktop = () => {
  const { t } = useTranslation('contracts');
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
