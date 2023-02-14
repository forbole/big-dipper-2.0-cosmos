import LinearLoading from '@/components/linear_loading';
import NotFound from '@/components/not_found';
import { useHeightStyles, useMaxHeightStyles, useVisiblityStyles } from '@/styles/useSharedStyles';
import { FC, PropsWithChildren } from 'react';
import { useStyles } from 'tss-react/mui';

type LoadAndExistProps = { loading: boolean; exists: boolean };

const LoadAndExist: FC<PropsWithChildren<LoadAndExistProps>> = (props) => {
  const { loading, exists, children } = props;
  const { cx } = useStyles();
  const visibility = useVisiblityStyles().classes;
  const height = useHeightStyles().classes;
  const maxHeight = useMaxHeightStyles().classes;

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (
    <>
      {loading && <LinearLoading className={maxHeight.maxHScreen} />}
      {!exists && !loading && <NotFound />}
      <div className={cx({ [visibility.invisible]: loading || !exists }, height.hFull)}>
        {children}
      </div>
    </>
  );
};

export default LoadAndExist;
