import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import * as jdenticon from 'jdenticon';
import Image from 'next/future/image';
import { useStyles } from '@/components/avatar/styles';

const Avatar: React.FC<{
  className?: string;
  imageUrl?: string;
  address: string;
}> = ({ className, address, imageUrl }) => {
  const icon = useRef(null);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    if (!icon.current) return;
    jdenticon.update(icon.current, address);
  }, [address, error, imageUrl]);

  useEffect(() => {
    setError(false);
  }, [address]);

  const handleError = () => {
    setError(true);
  };

  const classes = useStyles();

  return (
    <div className={classnames(className, classes.root)}>
      {imageUrl && !error ? (
        <Image
          width={0}
          height={0}
          className={classes.img}
          src={imageUrl}
          alt="address avatar"
          onError={handleError}
          unoptimized
        />
      ) : (
        <svg data-jdenticon-value={address} height="100%" ref={icon} width="100%" />
      )}
    </div>
  );
};

export default Avatar;
