import LinearLoading from '@/components/linear_loading';
import NotFound from '@/components/not_found';
import { FC, PropsWithChildren } from 'react';

type Props = { loading: boolean; exists: boolean };

const LoadAndExist: FC<PropsWithChildren<Props>> = (props) => {
  const { loading, exists, children } = props;

  if (loading) {
    return <LinearLoading />;
  }
  if (!exists && !loading) {
    return <NotFound />;
  }
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default LoadAndExist;
