/* eslint-disable object-curly-newline, react/require-default-props */
import classnames from 'classnames';
import React from 'react';
import { Row } from './components/Row';
import { useStyles } from './styles';
import { MobileProps } from './types';

const Mobile: React.FC<MobileProps> = ({ className, items }) => {
  const classes = useStyles();

  return (
    <div className={classnames(className, classes.root)}>
      {items?.map((item, i) => (
        <Row key={item?.address} data={item} index={i} itemCount={items?.length} />
      ))}
    </div>
  );
};

export default Mobile;
