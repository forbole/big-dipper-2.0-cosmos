import Avatar from '@/components/avatar';
import useStyles from '@/components/avatar_name/styles';
import MiddleEllipsis from '@/components/MiddleEllipsis';
import { ADDRESS_DETAILS } from '@/utils/go_to_page';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import Link from 'next/link';
import { FC } from 'react';

const AvatarName: FC<
  AvatarName & JSX.IntrinsicElements['div'] & { displayAddress?: string; omitEnd?: boolean }
> = ({
  className,
  address,
  name,
  imageUrl,
  href = ADDRESS_DETAILS,
  image,
  target,
  displayAddress,
  omitEnd,
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
          <MiddleEllipsis
            className={classes.text}
            content={name}
            omitEnd={omitEnd && name.length > 45}
          />
        </span>
      </Link>
    </Tooltip>
  );
};

export default AvatarName;
