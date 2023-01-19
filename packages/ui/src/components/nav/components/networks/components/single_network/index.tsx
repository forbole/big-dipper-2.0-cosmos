import Typography from '@mui/material/Typography';
import useStyles from '@/components/nav/components/networks/components/single_network/styles';

const SingleNetwork = (props: {
  url: string;
  chainId: string;
  name: string;
  className: string;
}) => {
  const { url, chainId, name, className } = props;
  const { classes, cx } = useStyles();
  return (
    <a href={url} target="_blank" rel="noreferrer" className={classes.root}>
      <div className={classes.item}>
        <p>{chainId}</p>
        <Typography className={cx(className, classes.status)} component="div" variant="caption">
          {name}
        </Typography>
      </div>
    </a>
  );
};

export default SingleNetwork;
