import React from 'react';
import Box from '@/components/box';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import { decodeBase64 } from '@/utils/base64';
import CodeBlock from '@/screens/transaction_details/components/code_block';
import type { DataType } from '@/screens/transaction_details/types';
import { useStyles } from '@/screens/transaction_details/components/data/styles';

const Data: React.FC<{ data: DataType } & ComponentDefault> = (props) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const data = decodeBase64(props.data);
  return (
    <Box className={classnames(props.className, classes.root)}>
      <Typography className={classes.title} variant="h2">
        {t('data')}
      </Typography>
      <CodeBlock message={data} />
    </Box>
  );
};

export default Data;
