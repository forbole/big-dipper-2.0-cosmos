import Avatar from '@/components/avatar';
import useStyles from '@/components/avatar_name/styles';
import AddressEllipsis from '@/components/AddressEllipsis';
import { ADDRESS_DETAILS } from '@/utils/go_to_page';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import Link from 'next/link';
import { FC } from 'react';
import { AvatarNameProps } from '@/components/avatar_name/types';

const AvatarName: FC<AvatarNameProps> = ({
  className,
  address,
  name,
  imageUrl,
  href = ADDRESS_DETAILS,
  image,
  target,
  location,
  noLink,
  ...props
}) => {
  const { classes, cx } = useStyles();

  const content = (
    <span className={cx(classes.root, { [classes.noLink]: noLink }, className)} {...props}>
      <Avatar className={classes.avatar} address={address} imageUrl={imageUrl ?? undefined} />
      <AddressEllipsis className={cx(classes.text, { [classes.noLink]: noLink })} content={name} />
    </span>
  );

  return (
    <Tooltip
      TransitionComponent={Zoom}
      title={<pre>{address}</pre>}
      placement="bottom"
      arrow
      PopperProps={{ className: classes.popper }}
      slotProps={{ tooltip: { className: classes.tooltip } }}
    >
      {noLink ? (
        <div>{content}</div>
      ) : (
        <Link shallow href={href(address)} target={target}>
          {content}
        </Link>
      )}
    </Tooltip>
  );
};

export default AvatarName;
