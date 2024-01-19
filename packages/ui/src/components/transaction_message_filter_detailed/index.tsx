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
import { writeFilterMsgTypes } from '@/recoil/settings';
import useStyles from './styles';

const FilterTxsByType: FC<ComponentDefault> = (props) => {
  const { classes, cx } = useStyles();
  const { t } = useAppTranslation('common');
  const { data, open, handleOpen, handleCancel } = useMsgFilter();
  const [queryMsgTypeList, setQueryMsgTypeList] = useState([] as string[]);
  const [msgTypes, setMsgTypes] = useRecoilState(writeFilterMsgTypes) as [
    string,
    SetterOrUpdater<string>
  ];

  const handleMsgTypeSelection = (event: ChangeEvent<HTMLInputElement>) => {
    let msgList = queryMsgTypeList;
    if (!msgList.includes(event.target.value)) {
      msgList.push(event.target.value);
      setQueryMsgTypeList(msgList);
    } else {
      msgList = msgList.filter((v) => v !== event.target.value);
      setQueryMsgTypeList(msgList);
    }
    setMsgTypes(() => event.target.value);
    console.log(msgTypes);
  };

  const formatMsgTypes = (msgTypes) => {
    const categories = [...new Set(msgTypes.map((msgType) => msgType.module))];
    return categories.reduce((acc, module) => {
      const msgs = msgTypes.filter((msgType) => msgType.module === module);
      return [...acc, { module, msgTypes: msgs }];
    }, []);
  };

  const formattedMsgData = formatMsgTypes(data.msgTypes);

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
          {formattedMsgData.map((msgData) => (
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
                        onClick={(e) => handleMsgTypeSelection(e)}
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
      </Dialog>
    </>
  );
};

export default FilterTxsByType;
