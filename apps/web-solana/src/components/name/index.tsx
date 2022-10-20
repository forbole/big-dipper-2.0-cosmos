import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import { ACCOUNT_DETAILS } from '@utils/go_to_page';
import { useStyles } from './styles';

const Name: React.FC<{
  className?: string;
  address: string;
  name: string;
  href?: (address: string) => string;
}> = ({
  className, address, name, href = ACCOUNT_DETAILS,
}) => {
  const classes = useStyles();

  return (
    <Link href={href(address)} passHref>
      <Typography variant="body1" className={classnames(className, classes.root)} component="a">
        {name}
      </Typography>
    </Link>
  );
};

export default Name;
