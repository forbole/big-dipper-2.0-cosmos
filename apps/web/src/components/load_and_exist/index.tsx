import React from 'react';
import {
  NotFound,
  LinearLoading,
} from '@components';

const LoadAndExist = (props: {
  loading: boolean;
  exists: boolean;
  children: React.ReactNode;
}) => {
  const {
    loading,
    exists,
    children,
  } = props;

  if (loading) {
    return <LinearLoading />;
  } if (!exists && !loading) {
    return <NotFound />;
  }
  return (
    <>
      {children}
    </>
  );
};

export default LoadAndExist;
