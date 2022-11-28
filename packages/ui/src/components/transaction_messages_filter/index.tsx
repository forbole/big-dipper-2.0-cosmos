import { useTransactionsFilter } from '@/components/transaction_messages_filter/hooks';
import { useStyles } from '@/components/transaction_messages_filter/styles';
import { getFilterLabels } from '@/components/transaction_messages_filter/utils';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import FilterIcon from 'shared-utils/assets/icon-filter.svg';

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
