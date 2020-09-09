import React, {
  useEffect, useRef,
} from 'react';
import classnames from 'classnames';
import * as jdenticon from 'jdenticon';
import { useStyles } from './styles';

const Avatar: React.FC<{
  className?: string;
  imageUrl?: string;
  address: string;
}> = ({
  className,
  address,
  imageUrl,
}) => {
  const icon = useRef(null);
  useEffect(() => {
    jdenticon.update(icon.current, address);
  }, [address]);
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.root)}>
      {imageUrl ? (
        <img src={imageUrl} alt="address avatar" />
      ) : (
        <svg data-jdenticon-value={address} height="100%" ref={icon} width="100%" />
      )}
    </div>
  );
};

export default Avatar;
