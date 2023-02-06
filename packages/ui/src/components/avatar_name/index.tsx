import Avatar from '@/components/avatar';
import useStyles from '@/components/avatar_name/styles';
import { ADDRESS_DETAILS } from '@/utils/go_to_page';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { FC } from 'react';

const AvatarName: FC<AvatarName & JSX.IntrinsicElements['div']> = ({
  className,
  address,
  name,
  imageUrl,
  href = ADDRESS_DETAILS,
  image,
  target,
  ...props
}) => {
  const { classes, cx } = useStyles();

  return (
    <Link shallow href={href(address)} target={target}>
      <div className={cx(classes.root, className)} {...props}>
        <Avatar address={address} imageUrl={imageUrl ?? undefined} />
        <Typography variant="body1">{name}</Typography>
      </div>
    </Link>
  );
};

export default AvatarName;
