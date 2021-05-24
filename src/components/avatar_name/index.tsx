import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import { Avatar } from '@components';
import { PROFILE_DETAILS } from '@utils/go_to_page';
import { useStyles } from './styles';

const AvatarName: React.FC<AvatarName> = ({
  className, address, name, imageUrl, href = PROFILE_DETAILS,
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
