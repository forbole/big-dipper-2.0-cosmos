import React from 'react';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import Box from '@/components/box';
import { usePagination, useScreenSize } from '@/hooks';
import { useProfilesRecoil } from '@/recoil/profiles';
import { useStyles } from '@/screens/proposal_details/components/deposits/styles';
import Paginate from '@/screens/proposal_details/components/deposits/components/paginate';
import { useDeposits } from '@/screens/proposal_details/components/deposits/hooks';
import type DesktopType from '@/screens/proposal_details/components/deposits/components/desktop';
import type MobileType from '@/screens/proposal_details/components/deposits/components/mobile';

const Desktop = dynamic(
  () => import('@/screens/proposal_details/components/deposits/components/desktop')
) as typeof DesktopType;
const Mobile = dynamic(
  () => import('@/screens/proposal_details/components/deposits/components/mobile')
) as typeof MobileType;

const Deposits: React.FC<ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();
  const { t } = useTranslation('proposals');
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage, sliceItems } =
    usePagination({});
  const { state } = useDeposits();

  const classes = useStyles();

  let items = sliceItems(state.data);

  const dataProfiles = useProfilesRecoil(items.map((x) => x.user));
  items = items.map((x, i) => ({
    ...(x as object),
    user: dataProfiles[i],
  }));

  return (
    <Box className={classnames(props.className, classes.root)}>
      <Typography className={classes.title} variant="h2">
        {t('deposits')}
      </Typography>
      <div className={classes.list}>
        {isDesktop ? (
          <Desktop className={classes.desktop} items={items as any} />
        ) : (
          <Mobile className={classes.mobile} items={items as any} />
        )}
      </div>
      <Paginate
        total={state.data.length}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default Deposits;
