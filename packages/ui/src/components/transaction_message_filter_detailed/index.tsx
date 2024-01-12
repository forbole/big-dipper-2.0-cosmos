import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { useRouter } from 'next/router';
import { FC } from 'react';
import FilterTxsIcon from 'shared-utils/assets/icon-filter-transactions.svg';
import Search from '@/components/search';
import { useMsgFiler } from '@/components/transaction_message_filter_detailed/hooks';
import useStyles from './styles';

const FilterTxsByType: FC<ComponentDefault> = (props) => {
  const { classes, cx } = useStyles();
  const router = useRouter();
  const { t } = useAppTranslation('common');
  const { open, handleOpen, handleCancel } = useMsgFiler();

  const sss3 = {
    Staking: ['Delegate', 'Redelegate', 'Undelegate', 'Withdraw Rewards'],
    Bank: ['Send', 'MultiSend'],
    Crisis: ['Verify Invariant'],
    Slashing: ['Unjail'],
    Distribution: [
      'Fund Community Pool',
      'Withdraw Delegator Rewards',
      'Set Withdraw Address',
      'Withdraw Validator Commission',
    ],
    Governance: ['Deposit', 'Submit Proposal', 'Vote'],
  };

  const categoryList = ['Staking', 'Bank', 'Crisis', 'Slashing', 'Distribution', 'Governance'];
  const msgTypeList = {
    Staking: {
      Delegate: {
        msg: '/cosmos.staking.v1beta1.MsgDelegate',
        display: 'Delegate',
      },
      Redelegate: {
        msg: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
        display: 'Redelegate',
      },
      Undelegate: {
        msg: '/cosmos.staking.v1beta1.MsgUndelegate',
        display: 'Undelegate',
      },
      CreateValidator: {
        msg: '/cosmos.staking.v1beta1.MsgCreateValidator',
        display: 'Create Validator',
      },
      EditValidator: {
        msg: '/cosmos.staking.v1beta1.MsgEditValidator',
        display: 'Edit Validator',
      },
    },
    Bank: {
      Send: {
        msg: '/cosmos.bank.v1beta1.MsgSend',
        display: 'Send',
      },
      MultiSend: {
        msg: '/cosmos.bank.v1beta1.MsgMultiSend',
        display: 'Multi Send',
      },
    },
    Crisis: ['Verify Invariant'],
    Slashing: ['Unjail'],
    Distribution: [
      'Fund Community Pool',
      'Withdraw Delegator Rewards',
      'Set Withdraw Address',
      'Withdraw Validator Commission',
    ],
    Governance: ['Deposit', 'Submit Proposal', 'Vote'],
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
          {categoryList.map((option) => (
            <div>
              <div className={classes.moduleName}>
                <Typography>{option}</Typography>
              </div>
              <div className="row">
                <form className="col-md-6">
                  {sss3[option]?.map((type) => (
                    <div className={classes.msgType}>
                      <input
                        type="checkbox"
                        id="messageType"
                        name="messageType"
                        value="messageType"
                      />
                      <label htmlFor="messageType" className={classes.msgOption}>
                        <div className="col-md-6">{type}</div>
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
