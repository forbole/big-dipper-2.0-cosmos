import { RowProps } from '@/components/InfiniteList/types';
import { WasmContractQuery } from '@/graphql/types/general_types';
import { useWasmContractsByOffset } from '@/screens/wasmContracts/hooks';
import useStyles from '@/screens/wasmContracts/styles';
import { WasmContractQueryVariable, WasmContractType } from '@/screens/wasmContracts/types';
import { columnsContract } from '@/screens/wasmContracts/utils';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Skeleton from '@mui/material/Skeleton';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useState } from 'react';

const ContractRowDesktop = ({
  index,
  style,
  variables,
  items: preloadedItems,
  itemsPerPage,
  rowHeight,
  cursor,
}: RowProps<WasmContractQuery, WasmContractQueryVariable, WasmContractType>) => {
  const offset = index - (index % itemsPerPage);
  const { items } = useWasmContractsByOffset(cursor, variables, offset);
  const { classes, cx } = useStyles();

  const item = items?.[index - offset] ?? (offset === 0 ? preloadedItems[index] : undefined);
  const height = rowHeight(index);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  return (
    <div className={cx(classes.row, { [classes.odd]: index % 2 === 0 })} style={style}>
      <Grid2 container columnGap={1}>
        {columnsContract.map((col) => (
          <Grid2
            key={col.columnKey}
            xs={col.width}
            justifyContent={col.justifyContent}
            textAlign={col.textAlign}
            height={height}
          >
            <div className={classes.cell}>
              {!item ? <Skeleton className={classes.skeleton} /> : item?.[col.columnKey]}
            </div>
          </Grid2>
        ))}
        <Grid2 xs="auto" className={classes.showMore}>
          <IconButton color="primary" onClick={handleOpen}>
            {!item ? (
              <Skeleton className={classes.skeleton} />
            ) : (
              <ExpandMoreIcon className={cx({ [classes.showMoreButtonActive]: !!anchorEl })} />
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
            vertical: 'bottom',
            horizontal: 'left',
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

export default ContractRowDesktop;
