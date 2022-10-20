import React from 'react';
import {
  Typography,
  Button,
  Divider,
} from '@material-ui/core';
import { convertCamelToTitle } from '@utils/camel_to_title';
import useTranslation from 'next-translate/useTranslation';
import { useStyles } from './styles';
import { FormattedInstructionType } from '../../types';
import { useInnerInstruction } from './hooks';
import { DisplayInstruction } from '..';

const InnerInstruction: React.FC<{
  info: FormattedInstructionType;
  parentRaw: boolean;
} & ComponentDefault> = (props) => {
  const { t } = useTranslation('instructions');
  const classes = useStyles();
  const {
    state, toggleRaw,
  } = useInnerInstruction();

  const typeName = convertCamelToTitle(props.info.data.type);
  const label = `${props.info.label}: ${typeName}`;

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className="header__content">
          <div className="header__flex">
            <Typography className="header__index">
              {`#${props.info.data.index + 1}.${props.info.data.innerIndex}`}
            </Typography>
            <Typography className="header__label--desktop">
              {label}
            </Typography>
          </div>
          <Button
            disableElevation
            size="small"
            variant="outlined"
            onClick={toggleRaw}
          >
            {t('raw')}
          </Button>
        </div>
        <Typography className="header__label--mobile">
          {label}
        </Typography>
      </div>
      <Divider className="divider" />
      <DisplayInstruction
        instruction={props.info}
        raw={state.raw || props.parentRaw}
      />
    </div>
  );
};

export default InnerInstruction;
