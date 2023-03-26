import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { FC, ReactNode } from 'react';
import useStyles from '@/components/transactions_list_details/components/list/components/single_transaction/styles';
import HashIcon from 'shared-utils/assets/icon-hash.svg';
import { formatNumber } from '@/utils/format_token';

export type SingleTransactionProps = {
  className?: string;
  block: ReactNode;
  hash: ReactNode;
  type: ReactNode;
  time: string;
  messageCount: string;
  messages: Array<
    {
      type: ReactNode;
      message: ReactNode;
    } & JSX.IntrinsicAttributes
  >;
  result?: ReactNode;
  amount: number;
};

const SingleTransaction: FC<SingleTransactionProps> = ({
  className,
  block,
  hash,
  type,
  time,
  messages,
  result,
  messageCount,
  amount,
}) => {
  const { t } = useTranslation('transactions');
  const { classes, cx } = useStyles();

  return (
    <div>
      <div className={classes.infoDiv}>
        <div className={classes.innerDiv}>
          <div>{type}</div>
          <div className={classes.iconFlexDiv}>
            {hash}
            <HashIcon className={classes.icon} />
          </div>
          <div>{time}</div>
        </div>
        <div className={classes.innerDiv}>
          {Number.isInteger(amount) ? (
            <div className={classes.dsmDiv}>+ {formatNumber(amount.toString())} DSM</div>
          ) : (
            <div className={classes.dsmDiv}>+ {formatNumber(amount.toString(), 6)} DSM</div>
          )}
          <div>{result}</div>
        </div>
      </div>
      <div className={cx(classes.root, className)}>
        <div className={classes.itemContainer}>
          <Divider />
          <div className={classes.item}>
            <div className={classes.msgListContainer}>
              {messages.map((x, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={`${x.key}-${i}`} className={classes.msg}>
                  <div className={classes.tags}>{x.type}</div>
                  {x.message}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTransaction;
