import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import useStyles from '@/components/condition_explanation/styles';

const ConditionExplanation = () => {
  const { t } = useAppTranslation('validators');
  const { classes, cx } = useStyles();

  const conditions = [
    {
      display: '90% - 100%',
      className: 'green',
    },
    {
      display: '70% - 90%',
      className: 'yellow',
    },
    {
      display: '1% - 70%',
      className: 'red',
    },
    {
      display: '0%',
      className: '',
    },
  ];
  return (
    <div className={classes.root}>
      <Typography>{t('conditionExplanation')}</Typography>
      <div className={classes.itemWrapper}>
        {conditions.map((x) => (
          <div key={x.display} className={classes.item}>
            <Typography>{x.display}</Typography>
            <div className={cx(classes.condition, x.className)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConditionExplanation;
