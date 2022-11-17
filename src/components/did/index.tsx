import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import { DID_RESOLVER_URL } from '@utils/go_to_page';
import { useStyles } from './styles';

const DID: React.FC<{ className?: string; did: string; href?: (did: string) => string;
}> = ({
  className, did, href = DID_RESOLVER_URL,
}) => {
  const classes = useStyles();

  return (
    <Link target="_blank" href={href(did)} passHref>
      <Typography variant="body1" className={classnames(className, classes.root)} component="a">
        {did}
      </Typography>
    </Link>
  );
};

export default DID;
