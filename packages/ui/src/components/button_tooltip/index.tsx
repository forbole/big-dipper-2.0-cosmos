import { FC } from 'react';
import AppTrans from '@/components/AppTrans';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import ToolTip, { TooltipProps } from '@mui/material/Tooltip';
import useButtonTooltipHook from '@/components/button_tooltip/hooks';
import useStyles from '@/components/button_tooltip/styles';

interface ButtonToolTipProps extends Omit<TooltipProps, 'title'> {
  highlightText?: string;
  text?: string;
  button?: boolean;
  buttonText?: string;
  accountPage?: boolean;
  accountText1?: string;
  accountText2?: string;
  onClick?: () => void;
}

const ButtonTooltip: FC<ButtonToolTipProps> = ({
  children,
  highlightText,
  text,
  button,
  buttonText,
  accountPage,
  accountText1,
  accountText2,
  onClick,
}) => {
  const { classes } = useStyles();
  const { open, handleClose } = useButtonTooltipHook();
  return (
    <ToolTip
      className={classes.tooltip}
      open={open}
      arrow
      placement="bottom-start"
      PopperProps={{ className: classes.popper }}
      title={
        <Box className={classes.root}>
          <Box className={classes.textWithIcon}>
            {accountPage ? (
              <div>
                {/* TODO: add Trans component to handle yello highlighting of accountText2 props */}
                <span className={classes.accountText1}>{`${accountText1}`}</span>
                <AppTrans
                  i18nKey={accountText2}
                  components={[
                    <span className={classes.highlightText} />,
                    <span className={classes.accountText} />,
                    <span className={classes.accountTextEnd} />,
                  ]}
                />
              </div>
            ) : (
              <div className={classes.alignSelf}>
                <span className={classes.highlightText}>{highlightText}</span>
                <span className={classes.text}>{` ${text}`}</span>
              </div>
            )}
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
