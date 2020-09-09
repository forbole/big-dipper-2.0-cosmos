import React from 'react';
import {
  Popover,
  Paper,
} from '@material-ui/core';
import { HelpOutline } from '@material-ui/icons';
import classnames from 'classnames';
import { useInfoPopover } from './hooks';
import { useStyles } from './styles';

const InfoPopover: React.FC<{
  className?: string;
  content?: string;
}> = ({
  className, content,
}) => {
  const {
    handlePopoverOpen,
    handlePopoverClose,
    anchorEl,
    open,
  } = useInfoPopover();

  const classes = useStyles();

  return (
    <>
      <HelpOutline
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        className={classnames(className, classes.icon)}
      />
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Paper
          elevation={0}
          className={classnames(className)}
        >
          {content}
        </Paper>
      </Popover>
    </>
  );
};

export default InfoPopover;
