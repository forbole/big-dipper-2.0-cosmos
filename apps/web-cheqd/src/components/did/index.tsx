import React from 'react';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import { DID_URL } from '@/utils/go_to_page';
import useStyles from './styles';

const DID: React.FC<{ className?: string; did: string; href?: (did: string) => string }> = ({
  className,
  did,
  href = DID_URL,
}) => {
  const { classes, cx } = useStyles();

  return (
    <Link target="_blank" href={href(did)} passHref>
      <Typography variant="body1" className={cx(className, classes.root)} component="a">
        {did}
      </Typography>
    </Link>
  );
};

export default DID;
