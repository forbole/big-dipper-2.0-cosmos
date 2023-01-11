import useStyles from '@/components/avatar/styles';
import * as jdenticon from 'jdenticon';
import Image from 'next/image';
import React, { FC, useEffect, useRef, useState } from 'react';

type AvatarProps = {
  className?: string;
  imageUrl?: string;
  address: string;
};

const Avatar: FC<AvatarProps> = ({ className, address, imageUrl }) => {
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

  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root, className)}>
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
