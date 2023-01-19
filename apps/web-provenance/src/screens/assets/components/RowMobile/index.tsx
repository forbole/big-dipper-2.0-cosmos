import { RowProps } from '@/components/InfiniteList/types';
import { MarkerAccountQuery } from '@/graphql/types/general_types';
import { useAssetsByOffset } from '@/screens/assets/hooks';
import useStyles from '@/screens/assets/styles';
import { AssetQueryVariable, AssetType } from '@/screens/assets/types';
import { columns } from '@/screens/assets/utils';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2';
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';

const RowMobile = ({
  index,
  style,
  variables,
  items: preloadedItems,
  itemsPerPage,
  rowHeight,
}: RowProps<MarkerAccountQuery, AssetQueryVariable, AssetType>) => {
  const offset = index - (index % itemsPerPage);
  const { items } = useAssetsByOffset(variables, offset);
  const { classes, cx } = useStyles();
  const { t } = useTranslation('assets');

  const item = items?.[index - offset] ?? (offset === 0 ? preloadedItems[index] : undefined);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  return (
    <div className={cx(classes.row, { [classes.odd]: index % 2 === 1 })} style={style}>
      <Grid2 container style={{ height: rowHeight(index) }}>
        {columns.map((col) => (
          <Grid2
            key={col.columnKey}
            xs={col.widthMobile}
            justifyContent={col.justifyContent}
            textAlign={col.textAlign}
            order={col.orderMobile}
          >
            <Typography className={classes.label} variant="h4">
              {t(col.columnKey)}
            </Typography>
            {!item ? (
              <Skeleton className={classes.skeleton} />
            ) : (
              <Box className={classes.value}>{(item as unknown as AssetType)?.[col.columnKey]}</Box>
            )}
            <Divider />
          </Grid2>
        ))}
        <Grid2 xs={6} className={classes.showMore} order={1} justifyContent="flex-end">
          <IconButton color="primary" onClick={handleOpen} size="large">
            {!item ? (
              <Skeleton className={classes.skeleton} />
            ) : (
              <ExpandMoreIcon sx={{ transform: !anchorEl ? 'rotate(0deg)' : 'rotate(180deg)' }} />
            )}
          </IconButton>
        </Grid2>
      </Grid2>
      {!!item && (
        <Popover
          open={!!anchorEl}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          {item.showMore}
        </Popover>
      )}
    </div>
  );
};

export default RowMobile;
