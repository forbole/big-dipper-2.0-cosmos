import { useStyles } from '@/components/nav/components/networks/components/single_network/styles';
import Typography from '@mui/material/Typography';
import classnames from 'classnames';

const SingleNetwork = (props: {
  url: string;
  chainId: string;
  name: string;
  className: string;
}) => {
  const { url, chainId, name, className } = props;
  const classes = useStyles();
  return (
    <a href={url} target="_blank" rel="noreferrer" className={classes.root}>
      <div className={classes.item}>
        <p>{chainId}</p>
        <Typography
          className={classnames(className, classes.status)}
          component="div"
          variant="caption"
        >
          {name}
        </Typography>
      </div>
    </a>
  );
};

export default SingleNetwork;
