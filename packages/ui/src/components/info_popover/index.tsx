import { useInfoPopover } from '@/components/info_popover/hooks';
import { useStyles } from '@/components/info_popover/styles';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import HelpOutline from '@material-ui/icons/HelpOutline';
import classnames from 'classnames';
import React from 'react';

const InfoPopover: React.FC<{
  className?: string;
  content?: string | React.ReactNode;
  display?: string | React.ReactNode;
}> = ({ className, content, display }) => {
  const { handlePopoverOpen, handlePopoverClose, anchorEl, open } = useInfoPopover();

  const classes = useStyles();

  return (
    <>
      <span
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        className={classes.root}
      >
        {display || <HelpOutline className={classnames(className, classes.icon)} />}
      </span>
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
        <Paper elevation={0} className={classnames(className)}>
          {content}
        </Paper>
      </Popover>
    </>
  );
};

export default InfoPopover;
