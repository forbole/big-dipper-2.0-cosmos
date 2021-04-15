import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import { Avatar } from '@components';
import { VALIDATOR_DETAILS } from '@utils/go_to_page';
import { useStyles } from './styles';

const AvatarName: React.FC<{
  className?: string;
  imageUrl?: string;
  address: string;
  name: string;
  href?: (address: string) => string;
}> = ({
  className, address, name, imageUrl, href = VALIDATOR_DETAILS,
}) => {
  const classes = useStyles();

  return (
    <Link href={href(address)}>
      <a>
        <div className={classnames(className, classes.root)}>
          <Avatar address={address} imageUrl={imageUrl} />
          <Typography variant="body1">
            {name}
          </Typography>
        </div>
      </a>
    </Link>
  );
};

export default AvatarName;
