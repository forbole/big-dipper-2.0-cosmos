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
  displayAddress,
  ...props
}) => {
  const { classes, cx } = useStyles();

  const adx = displayAddress || address;

  return (
    <Tooltip
      TransitionComponent={Zoom}
      title={<pre>{adx}</pre>}
      placement="bottom"
      arrow
      PopperProps={{ className: classes.popper }}
      slotProps={{ tooltip: { className: classes.tooltip } }}
    >
      <Link shallow href={href(adx)} target={target}>
        <span className={cx(classes.root, className)} {...props}>
          <Avatar className={classes.avatar} address={address} imageUrl={imageUrl ?? undefined} />
          <AddressEllipsis className={classes.text} content={name} />
        </span>
      </Link>
    </Tooltip>
  );
};

export default AvatarName;
