import useStyles from '@/components/name/styles';
import { ADDRESS_DETAILS } from '@/utils/go_to_page';
import Link from 'next/link';
import { FC } from 'react';

type NameProps = {
  className?: string;
  address: string;
  name: string;
  href?: (address: string) => string;
};

const Name: FC<NameProps> = ({ className, address, name, href = ADDRESS_DETAILS }) => {
  const { classes, cx } = useStyles();
  return (
    <Link shallow prefetch={false} href={href(address)} className={cx(classes.root, className)}>
      {name}
    </Link>
  );
};

export default Name;
