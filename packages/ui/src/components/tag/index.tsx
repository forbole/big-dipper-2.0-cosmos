import React from 'react';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '@/components/tag/styles';

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
