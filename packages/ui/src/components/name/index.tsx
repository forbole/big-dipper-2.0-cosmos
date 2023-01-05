import useStyles from '@/components/name/styles';
import { ADDRESS_DETAILS } from '@/utils/go_to_page';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React, { FC } from 'react';

type NameProps = {
  className?: string;
  address: string;
  name: string;
  href?: (address: string) => string;
};

const Name: FC<NameProps> = ({ className, address, name, href = ADDRESS_DETAILS }) => {
  const { classes, cx } = useStyles();
  return (
    <Link href={href(address)} passHref>
      <Typography variant="body1" className={cx(className, classes.root)} component="a">
        {name}
      </Typography>
    </Link>
  );
};

export default Name;
