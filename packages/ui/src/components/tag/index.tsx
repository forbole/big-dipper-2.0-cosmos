import { useStyles } from '@/components/tag/styles';
import Typography from '@mui/material/Typography';
import classnames from 'classnames';
import React, { FC } from 'react';

type TagProps = {
  className?: string;
  value: string;
  theme?: TagTheme;
};

const Tag: FC<TagProps> = ({ className, value, theme }) => {
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.root, theme ? classes[theme] : undefined)}>
      <Typography variant="body1">{value}</Typography>
    </div>
  );
};

export default Tag;
