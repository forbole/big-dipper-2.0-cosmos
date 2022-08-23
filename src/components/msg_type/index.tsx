import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
// import { useStyles } from './styles';
import useTranslation from 'next-translate/useTranslation';

const MsgType:React.FC<{
  className?: string;
  value: string;
  theme?: TagTheme;
}> = ({
  className, value, theme,
}) => {
  // const classes = useStyles();
  const { t } = useTranslation('message_labels');
  console.log(t(`message_labels:${'txDelegateLabel'}`));
  return (
    <div className={classnames(className, classes.root, classes[theme])}>
      <Typography variant="body1">
        {value}
      </Typography>
    </div>
  );
};

export default MsgType;
