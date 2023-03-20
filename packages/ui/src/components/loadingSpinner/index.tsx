import useStyles from '@/components/loadingSpinner/styles';
import SpinnerSvg from './spinner.svg';

const Spinner = ({ custom_style = {} }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.root} style={{ ...custom_style }}>
      <SpinnerSvg
        className={'spinner'}
        style={{
          animation: 'spin 1s infinite linear',
        }}
      />
    </div>
  );
};

export default Spinner;
