/* eslint-disable object-curly-newline, react/require-default-props */
import React, { FC } from 'react';
import Row from '@/screens/accounts/components/list/components/mobile/components/Row';
import useStyles from '@/screens/accounts/components/list/components/mobile/styles';
import { MobileProps } from '@/screens/accounts/components/list/components/mobile/types';

const Mobile: FC<MobileProps> = ({ className, items }) => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(className, classes.root)}>
      {items?.map((item, i) => (
        <Row key={item?.address} data={item} index={i} itemCount={items?.length} />
      ))}
    </div>
  );
};

export default Mobile;
