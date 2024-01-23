import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC, useState, ChangeEvent, useMemo } from 'react';
import FilterTxsIcon from 'shared-utils/assets/icon-filter-transactions.svg';
import { useMsgFilter } from '@/components/transaction_message_filter_detailed/hooks';
import { SetterOrUpdater, useRecoilState, useRecoilCallback } from 'recoil';
import { writeFilterMsgTypes } from '@/recoil/settings';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
// import { useSearchBar } from '@/components/nav/components/search_bar/hooks';
import { useMsgSearchBar } from '@/components/transaction_message_filter_detailed/components/msg_search_bar/hooks';
import Search from '@/components/transaction_message_filter_detailed/components/search';
import useStyles from './styles';

type FilterTxsByTypeProps = ComponentDefault & {
  open?: boolean;
  handleOpen?: () => void;
  handleCancel?: () => void;
};

const FilterTxsByType: FC<FilterTxsByTypeProps> = ({ open, handleOpen, handleCancel }) => {
  const { classes, cx } = useStyles();
  const { t } = useAppTranslation('common');
  const {
    messageFilter,
    filterMsgTypeList,
    handleFilterTxs,
    handleMsgTypeSelection,
  } = useMsgFilter();

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
            <Search
              className={classes.searchBar}
              callback={filterMsgTypeList}
              placeholder={t('searchType') ?? undefined}
            />
          </div>
        </DialogTitle>
        <DialogContent dividers>
          {messageFilter.map(msgData => (
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
                  {msgData.msgTypes.map(msg => (
                    <div className={classes.msgType}>
                      <input
                        type="checkbox"
                        id={`msg_type_${msg.label}`}
                        name={`msg_type_${msg.label}`}
                        value={msg.type}
                        className={classes.checkbox}
                        onClick={e => handleMsgTypeSelection(e)}
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
