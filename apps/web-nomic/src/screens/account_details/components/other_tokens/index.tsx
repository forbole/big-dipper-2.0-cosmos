import React from 'react';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import useTranslation from 'next-translate/useTranslation';
import Pagination from '@/components/pagination';
import Box from '@/components/box';

import { usePagination, useScreenSize } from '@/hooks';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '@/screens/account_details/components/other_tokens/styles';
import type { OtherTokenType } from '@/screens/account_details/types';
import type DesktopType from '@/screens/account_details/components/other_tokens/components/desktop';
import type MobileType from '@/screens/account_details/components/other_tokens/components/mobile';

const Desktop = dynamic(
  () => import('@/screens/account_details/components/other_tokens/components/desktop')
) as typeof DesktopType;
const Mobile = dynamic(
  () => import('@/screens/account_details/components/other_tokens/components/mobile')
) as typeof MobileType;

const OtherTokens: React.FC<{
  className?: string;
  otherTokens: {
    data: OtherTokenType[];
    count: number;
  };
}> = ({ className, otherTokens }) => {
  const { t } = useTranslation('accounts');
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage, sliceItems } =
    usePagination({});

  const { data } = otherTokens;
  const count = data.length;
  if (!data.length) {
    return null;
  }

  const items = sliceItems(data);

  return (
    <Box className={classnames(className)}>
      <Typography variant="h2">{t('otherTokens')}</Typography>

      {isDesktop ? (
        <Desktop className={classes.desktop} items={items as any} />
      ) : (
        <Mobile className={classes.mobile} items={items as any} />
      )}
      <Pagination
        className={classes.paginate}
        total={count}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        rowsPerPageOptions={[10, 25, 50, 100]}
      />
    </Box>
  );
};

export default OtherTokens;
