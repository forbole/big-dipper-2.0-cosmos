import Avatar from '@/components/avatar';
import { useStyles } from '@/components/avatar_name/styles';
import { ADDRESS_DETAILS } from '@/utils/go_to_page';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import Link from 'next/link';
import React from 'react';

const AvatarName: React.FC<AvatarName> = ({
  className,
  address,
  name,
  imageUrl,
  href = ADDRESS_DETAILS,
}) => {
  const classes = useStyles();

  return (
    <Link href={href(address)}>
      <a>
        <div className={classnames(className, classes.root)}>
          <Avatar address={address} imageUrl={imageUrl ?? undefined} />
          <Typography variant="body1">{name}</Typography>
        </div>
      </a>
    </Link>
  );
};

export default AvatarName;
