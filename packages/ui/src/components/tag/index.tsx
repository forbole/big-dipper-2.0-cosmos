import Typography from '@mui/material/Typography';
import { FC } from 'react';
import useStyles from '@/components/tag/styles';

type TagProps = {
  className?: string;
  value: string;
  theme?: TagTheme;
};

const Tag: FC<TagProps> = ({ className, value, theme }) => {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.root, className, theme ? classes[theme] : undefined)}>
      <Typography variant="body1">{value}</Typography>
    </div>
  );
};

export default Tag;
