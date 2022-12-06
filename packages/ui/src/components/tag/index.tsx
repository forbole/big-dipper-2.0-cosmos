import { useStyles } from '@/components/tag/styles';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import React from 'react';

const Tag: React.FC<{
  className?: string;
  value: string;
  theme?: TagTheme;
}> = ({ className, value, theme }) => {
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.root, theme ? classes[theme] : undefined)}>
      <Typography variant="body1">{value}</Typography>
    </div>
  );
};

export default Tag;
