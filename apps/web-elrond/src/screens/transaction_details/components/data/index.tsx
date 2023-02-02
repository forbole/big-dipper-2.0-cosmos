import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import Box from '@/components/box';
import CodeBlock from '@/screens/transaction_details/components/code_block';
import useStyles from '@/screens/transaction_details/components/data/styles';
import type { DataType } from '@/screens/transaction_details/types';
import { decodeBase64 } from '@/utils/base64';

const Data: FC<{ className?: string; data: DataType }> = (props) => {
  const { t } = useTranslation('transactions');
  const { classes, cx } = useStyles();
  const data = decodeBase64(props.data);
  return (
    <Box className={cx(classes.root, props.className)}>
      <Typography className={classes.title} variant="h2">
        {t('data')}
      </Typography>
      <CodeBlock message={data} />
    </Box>
  );
};

export default Data;
