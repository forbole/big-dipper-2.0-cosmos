import React, {
  useEffect, useRef, useState,
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
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    jdenticon.update(icon.current, address);
  }, [address, error, imageUrl]);

  const handleError = () => {
    setError(true);
  };

  const classes = useStyles();

  return (
    <div className={classnames(className, classes.root)}>
      {(imageUrl && !error) ? (
        <img
          src={imageUrl}
          alt="address avatar"
          onError={handleError}
        />
      ) : (
        <svg data-jdenticon-value={address} height="100%" ref={icon} width="100%" />
      )}
    </div>
  );
};

export default Avatar;
