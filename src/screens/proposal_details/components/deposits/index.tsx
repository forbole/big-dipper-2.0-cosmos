import React from 'react';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { Box } from '@components';
import {
  usePagination, useScreenSize,
} from '@hooks';
import {
  useProfilesRecoil,
} from '@recoil/profiles';
import { useStyles } from './styles';
import { Paginate } from './components';
import { DepositType } from '../../types';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const Deposits: React.FC<{
  className?: string;
  data: DepositType[];
}> = ({
  className, data,
}) => {
  const { isDesktop } = useScreenSize();
  const { t } = useTranslation('proposals');
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    sliceItems,
  } = usePagination({});

  const classes = useStyles();

  const dataProfiles = useProfilesRecoil(data.map((x) => x.user));
  const mergedDataWithProfiles = data.map((x, i) => {
    return ({
      ...x,
      user: dataProfiles[i],
    });
  });

  const items = sliceItems(mergedDataWithProfiles);

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography className={classes.title} variant="h2">{t('deposits')}</Typography>
      <div className={classes.list}>
        {isDesktop ? (
          <>
            {isDesktop ? (
              <Desktop
                className={classes.desktop}
                items={items}
              />
            ) : (
              <div>-</div>
            )}
          </>
        ) : (
          <>
            <Mobile
              className={classes.mobile}
              items={items}
            />
          </>
        )}

        {classes ? classes.desktop : items}
        {console.log('test')}
        {console.log(!classes ? classes.desktop : items)}

        {/* {
        if (address) {
          return (
            <Link href={href(address)}>
              <a>
                <div className={classnames(className, classes.root)}>
                  <Avatar address={address} imageUrl={imageUrl} />
                  <Typography variant="body1">
                    {name}
                  </Typography>
                </div>
              </a>
            </Link>
          );
        }
        return <div>-</div>;
        } */}
      </div>
      <Paginate
        total={data.length}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default Deposits;
