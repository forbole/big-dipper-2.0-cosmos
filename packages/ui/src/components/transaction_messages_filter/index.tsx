import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import FilterIcon from 'shared-utils/assets/icon-filter.svg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getFilterLabels } from './utils';
import { useStyles } from './styles';
import { useTransactionsFilter } from './hooks';

const TransactionMessagesFilter: React.FC<{
  className?: string;
  callback: (value: string) => void;
}> = ({ className, callback }) => {
  const filterLabels = getFilterLabels();
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const { handleSelect, selectedFilter } = useTransactionsFilter(callback);

  return (
    <Select
      IconComponent={ExpandMoreIcon}
      className={classnames(classes.select, className)}
      displayEmpty
      MenuProps={{
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        getContentAnchorEl: null,
      }}
      value={selectedFilter}
      renderValue={
        selectedFilter !== ''
          ? undefined
          : () => (
              <Typography variant="body1" noWrap component="div" className={classes.filterLabel}>
                <FilterIcon className={classes.filterIcon} />
                {t('filterBy')}
              </Typography>
            )
      }
      input={<InputBase />}
    >
      {filterLabels.map((x) => (
        <MenuItem
          key={x.key}
          onClick={() => handleSelect(x)}
          value={x.key}
          className={classes.item}
        >
          <Typography variant="body1" noWrap>
            {t(x.display)}
          </Typography>
        </MenuItem>
      ))}
    </Select>
  );
};

export default TransactionMessagesFilter;
