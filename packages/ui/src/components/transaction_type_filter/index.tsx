import React, { FC } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import FilterTxsIcon from 'shared-utils/assets/icon-filter-transactions.svg';
import { useTransactionTypeFilter, MessageType } from '@/components/transaction_type_filter/hooks';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TxTypeSearch from '@/components/transaction_type_filter/components/transaction_type_search';
import { useRecoilValue } from 'recoil';
import { readOpenDialog, readSelectedMsgTypes } from '@/recoil/transactions_filter';
import Checkbox from '@mui/material/Checkbox';
import Loading from '@/components/loading';
import useStyles from './styles';

const FilterTxsByType: FC = () => {
  const { classes } = useStyles();
  const { t } = useAppTranslation('common');
  const {
    loading,
    filteredTypes,
    txTypeSearchFilter,
    selectAllChecked,
    handleFilterTxs,
    handleTxTypeSelection,
    handleSelectAllTxTypes,
    handleCancel,
    handleOpen,
  } = useTransactionTypeFilter();

  const open = useRecoilValue(readOpenDialog) ?? false;
  const selectedMsgTypes = useRecoilValue(readSelectedMsgTypes);

  return (
    <>
      <div
        onClick={handleOpen}
        role="button"
        className={classes.icon}
        tabIndex={0}
        aria-label="filter-txs-by-type"
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
              callback={txTypeSearchFilter}
              placeholder={t('searchType') || ''} // Provide a default value
            />
          </div>
          <div className={classes.selectAll}>
            <Typography className={classes.selectAllText}>{t('selectAll')}</Typography>
            <Checkbox
              checked={selectAllChecked}
              onChange={handleSelectAllTxTypes}
              color="primary"
            />
          </div>
        </DialogTitle>
        <DialogContent>
          {!loading ? (
            filteredTypes?.map((msgData) => (
              <div key={msgData?.module}>
                <div className={classes.moduleName}>
                  <Typography>
                    {msgData?.module?.includes('ibc')
                      ? msgData.module.charAt(0).toUpperCase() +
                        msgData.module.charAt(1).toUpperCase() +
                        msgData.module.charAt(2).toUpperCase() +
                        msgData.module.slice(3)
                      : msgData?.module}
                  </Typography>
                </div>
                <div className={classes.columnContainer}>
                  <form className={classes.column}>
                    {msgData?.msgTypes
                      ?.slice(0, Math.ceil(msgData.msgTypes.length / 2))
                      .map((msg: MessageType) => (
                        <div key={msg?.type} className={classes.msgType}>
                          <span className={classes.msgOption}>
                            <Checkbox
                              id={`msg_type_${msg?.label}`}
                              name={`msg_type_${msg?.label}`}
                              value={msg?.type}
                              className={classes.checkBox}
                              checked={selectAllChecked || selectedMsgTypes.includes(msg.type)}
                              onChange={(e) => handleTxTypeSelection(e)}
                            />
                            <Typography className={classes.msgLabel}>
                              {msg?.label
                                ? msg?.label
                                    .substring(3)
                                    .match(/[A-Z][a-z]+|[0-9]+/g)
                                    ?.join(' ')
                                : ''}
                            </Typography>
                          </span>
                        </div>
                      ))}
                  </form>
                  <form className={classes.column}>
                    {msgData?.msgTypes
                      ?.slice(Math.ceil(msgData.msgTypes.length / 2))
                      .map((msg: MessageType) => (
                        <div key={msg?.type} className={classes.msgType}>
                          <span className={classes.msgOption}>
                            <Checkbox
                              id={`msg_type_${msg?.label}`}
                              name={`msg_type_${msg?.label}`}
                              value={msg?.type}
                              className={classes.checkBox}
                              checked={selectAllChecked || selectedMsgTypes.includes(msg.type)}
                              onChange={(e) => handleTxTypeSelection(e)}
                            />
                            <Typography className={classes.msgLabel}>
                              {msg?.label
                                ? msg?.label
                                    .substring(3)
                                    .match(/[A-Z][a-z]+|[0-9]+/g)
                                    ?.join(' ')
                                : ''}
                            </Typography>
                          </span>
                        </div>
                      ))}
                  </form>
                </div>
              </div>
            ))
          ) : (
            <div className={classes.loading}>
              <Loading />
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFilterTxs} color="primary">
            {t('filter')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FilterTxsByType;
