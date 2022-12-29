import { useStyles } from '@/components/name/styles';
import { ADDRESS_DETAILS } from '@/utils/go_to_page';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import Link from 'next/link';
import React, { FC } from 'react';

type NameProps = {
  className?: string;
  address: string;
  name: string;
  href?: (address: string) => string;
};

const Name: FC<NameProps> = ({ className, address, name, href = ADDRESS_DETAILS }) => {
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
