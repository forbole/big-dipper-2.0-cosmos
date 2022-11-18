import React from 'react';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import Box from 'ui/components/box';
import { usePagination, useScreenSize } from 'ui/hooks';
import { useProfilesRecoil } from 'ui/recoil/profiles';
import { useStyles } from './styles';
import Paginate from './components/paginate';
import { useDeposits } from './hooks';
import type DesktopType from './components/desktop';
import type MobileType from './components/mobile';

const Desktop = dynamic(() => import('./components/desktop')) as typeof DesktopType;
const Mobile = dynamic(() => import('./components/mobile')) as typeof MobileType;

const Deposits: React.FC<ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();
  const { t } = useTranslation('proposals');
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage, sliceItems } =
    usePagination({});
  const { state } = useDeposits();

  const classes = useStyles();

  let items = sliceItems(state.data);

  const dataProfiles = useProfilesRecoil(items.map((x) => x.user));
  items = items.map((x, i) => {
    return {
      ...(x as object),
      user: dataProfiles[i],
    };
  });

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
