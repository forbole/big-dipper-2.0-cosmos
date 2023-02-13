import Avatar from '@/components/avatar';
import useStyles from '@/components/avatar_name/styles';
import MiddleEllipsis from '@/components/MiddleEllipsis';
import { ADDRESS_DETAILS } from '@/utils/go_to_page';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
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
    <Tooltip
      TransitionComponent={Zoom}
      title={<pre>{address}</pre>}
      placement="bottom"
      arrow
      PopperProps={{ className: classes.popper }}
      slotProps={{ tooltip: { className: classes.tooltip } }}
    >
      <Link shallow href={href(address)} target={target}>
        <span className={cx(classes.root, className)} {...props}>
          <Avatar className={classes.avatar} address={address} imageUrl={imageUrl ?? undefined} />
          <MiddleEllipsis className={classes.text} content={name} />
        </span>
      </Link>
    </Tooltip>
  );
};

export default AvatarName;
