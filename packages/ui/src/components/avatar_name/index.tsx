import Avatar from '@/components/avatar';
import useStyles from '@/components/avatar_name/styles';
import { ADDRESS_DETAILS } from '@/utils/go_to_page';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { FC } from 'react';

const AvatarName: FC<AvatarName> = ({
  className,
  address,
  name,
  imageUrl,
  href = ADDRESS_DETAILS,
}) => {
  const { classes, cx } = useStyles();

  return (
    <Link shallow prefetch={false} href={href(address)}>
      <div className={cx(classes.root, className)}>
        <Avatar address={address} imageUrl={imageUrl ?? undefined} />
        <Typography variant="body1">{name}</Typography>
      </div>
    </Link>
  );
};

export default AvatarName;
