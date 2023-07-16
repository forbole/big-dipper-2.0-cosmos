import { FC } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import ToolTip, { TooltipProps } from '@mui/material/Tooltip';
import useButtonTooltipHook from '@/components/button_tooltip/hooks';
import useStyles from '@/components/button_tooltip/styles';

interface ButtonToolTipProps extends Omit<TooltipProps, 'title'> {
  highlightText: string;
  text: string;
  button?: boolean;
  buttonText?: string;
  onClick?: () => void;
}

const ButtonTooltip: FC<ButtonToolTipProps> = ({
  children,
  highlightText,
  text,
  button,
  buttonText,
  onClick,
}) => {
  const { classes } = useStyles();
  const { open, handleClose } = useButtonTooltipHook();
  return (
    <ToolTip
      className={classes.tooltip}
      open={open}
      arrow
      placement="top-start"
      PopperProps={{ className: classes.popper }}
      title={
        <Box className={classes.root}>
          <Box className={classes.textWithIcon}>
            <div>
              <span className={classes.highlightText}>{highlightText}</span>
              <span className={classes.text}>{` ${text}`}</span>
            </div>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
          {button && (
            <Button className={classes.button} onClick={onClick}>
              {buttonText}
            </Button>
          )}
        </Box>
      }
    >
      {children}
    </ToolTip>
  );
};

export default ButtonTooltip;
