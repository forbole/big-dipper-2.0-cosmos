import useStyles from '@/components/avatar/styles';
import * as jdenticon from 'jdenticon';
import Image from 'next/image';
import { FC, startTransition, useEffect, useRef, useState } from 'react';

type AvatarProps = {
  className?: string;
  imageUrl?: string;
  address: string;
};

const Avatar: FC<AvatarProps> = ({ className, address, imageUrl }) => {
  const icon = useRef(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    startTransition(() => {
      if (!icon.current) return;
      jdenticon.update(icon.current, address);
      setError(false);
    });
  }, [address]);

  const handleError = () => {
    setError(true);
  };

  const { classes, cx } = useStyles();

  const hasImageUrl = !!imageUrl && !error;
  const hasNoImage = !hasImageUrl;

  return (
    <span className={cx(classes.root, className)}>
      {hasImageUrl && (
        <Image
          width={0}
          height={0}
          className={classes.img}
          src={imageUrl}
          alt="address avatar"
          onError={handleError}
          unoptimized
        />
      )}
      {hasNoImage && <svg data-jdenticon-value={address} height="100%" ref={icon} width="100%" />}
    </span>
  );
};

export default Avatar;
