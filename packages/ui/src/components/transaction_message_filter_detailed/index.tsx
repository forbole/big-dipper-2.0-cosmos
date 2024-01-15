import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC, useState, ChangeEvent } from 'react';
import FilterTxsIcon from 'shared-utils/assets/icon-filter-transactions.svg';
import Search from '@/components/search';
import { useMsgFilter } from '@/components/transaction_message_filter_detailed/hooks';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { writeMsgTypes } from '@/recoil/settings';
import useStyles from './styles';
import { MsgTypeList } from './utils';

const FilterTxsByType: FC<ComponentDefault> = props => {
  const { classes, cx } = useStyles();
  const { t } = useAppTranslation('common');
  const { open, handleOpen, handleCancel } = useMsgFilter();
  const [queryMsgTypeList, setQueryMsgTypeList] = useState([] as string[]);
  const [msgTypes, setMsgTypes] = useRecoilState(writeMsgTypes) as [
    string,
    SetterOrUpdater<string>
  ];

  const handleMsgTypeSelection = (event: ChangeEvent<HTMLInputElement>) => {
    let msgList = queryMsgTypeList;
    if (!msgList.includes(event.target.value)) {
      msgList.push(event.target.value);
      setQueryMsgTypeList(msgList);
    } else {
      msgList = msgList.filter(v => v !== event.target.value);
      setQueryMsgTypeList(msgList);
    }
    setMsgTypes(() => event.target.value);
    console.log(msgTypes);
  };

  return (
    <>
      <div
        onClick={handleOpen}
        role="button"
        className={cx(props.className, classes.icon)}
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
              callback={null}
              placeholder={t('searchType') ?? undefined}
            />
          </div>
        </DialogTitle>
        <DialogContent dividers>
          {Object.entries(MsgTypeList).map(msgType => (
            <div>
              <div className={classes.moduleName}>
                <Typography>{msgType[0]}</Typography>
              </div>
              <div className="row">
                <form className="col-md-6">
                  {Object.values(msgType[1]).map((tp, ind) => (
                    <div className={classes.msgType}>
                      <input
                        type="checkbox"
                        id={`msg_type_${tp.display}`}
                        name={`msg_type_${tp.display}`}
                        value={tp.msg}
                        className={classes.checkbox}
                        onClick={e => handleMsgTypeSelection(e)}
                      />
                      <label htmlFor="messageType" className={classes.msgOption}>
                        <div className="col-md-6">{tp.display}</div>
                      </label>
                    </div>
                  ))}
                </form>
              </div>
            </div>
          ))}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FilterTxsByType;
