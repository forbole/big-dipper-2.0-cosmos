import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import FilterTxsIcon from 'shared-utils/assets/icon-filter-transactions.svg';
import { useTransactionTypeFilter } from '@/components/transaction_type_filter/hooks';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TxTypeSearch from '@/components/transaction_type_filter/components/transaction_type_search';
import { useRecoilValue } from 'recoil';
import { readOpenDialog } from '@/recoil/transactions_filter';
import useStyles from './styles';

const FilterTxsByType: FC<ComponentDefault> = () => {
  const { classes } = useStyles();
  const { t } = useAppTranslation('common');
  const {
    filteredTypes,
    txTypeSearchFilter,
    handleFilterTxs,
    handleTxTypeSelection,
    handleCancel,
    handleOpen,
  } = useTransactionTypeFilter();

  const open = useRecoilValue(readOpenDialog);

  return (
    <>
      <div
        onClick={handleOpen}
        role="button"
        className={classes.icon}
        tabIndex={0}
        aria-label="filter-txs-by-type"
        key="filter-txs-by-type"
      >
        <FilterTxsIcon />
      </div>
      <Dialog maxWidth="md" onClose={handleCancel} open={open} className={classes.dialog}>
        <DialogTitle className={classes.header}>
          <div className={classes.title}>
            <Typography variant="h2">{t('filter')}</Typography>
          </div>
          <div>
            <TxTypeSearch
              className={classes.searchBar}
              callback={txTypeSearchFilter}
              placeholder={t('searchType') ?? undefined}
            />
          </div>
        </DialogTitle>
        <DialogContent dividers>
          {filteredTypes.map((msgData) => (
            <div>
              <div className={classes.moduleName}>
                {msgData.module.includes('ibc') ? (
                  <Typography>
                    {msgData.module.charAt(0).toUpperCase() +
                      msgData.module.charAt(1).toUpperCase() +
                      msgData.module.charAt(2).toUpperCase() +
                      msgData.module.slice(3)}
                  </Typography>
                ) : (
                  <Typography>{msgData.module}</Typography>
                )}
              </div>
              <div className="row">
                <form className="col-md-6">
                  {msgData.msgTypes.map((msg) => (
                    <div className={classes.msgType}>
                      <input
                        type="checkbox"
                        id={`msg_type_${msg.label}`}
                        name={`msg_type_${msg.label}`}
                        value={msg.type}
                        className={classes.checkbox}
                        onClick={(e) => handleTxTypeSelection(e)}
                        key={`msg_type_${msg.label}`}
                      />
                      <label htmlFor="messageType" className={classes.msgOption}>
                        <div className="col-md-6">
                          {msg.label
                            .substring(3)
                            .match(/[A-Z][a-z]+|[0-9]+/g)
                            .join(' ')}
                        </div>
                      </label>
                    </div>
                  ))}
                </form>
              </div>
            </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFilterTxs} color="primary">
            Filter
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FilterTxsByType;
