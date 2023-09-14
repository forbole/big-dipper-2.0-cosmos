import Image, { type ImageProps } from 'next/image';
import Link from 'next/link';
import SnackBar from '@mui/material/Snackbar';
import type { SnackbarCloseReason, SnackbarOrigin, SnackbarProps } from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import type { AlertColor } from '@mui/material/Alert';
import useStyles from '@/components/snackbar/styles';
import successIcon from 'shared-utils/assets/icon-snackbar-success.svg?url';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import type { TFunction } from '@/hooks/useAppTranslation';
import { TRANSACTION_DETAILS } from '@/utils/go_to_page';
import useAppTranslation from '@/hooks/useAppTranslation';

interface SnackbarInputProps extends SnackbarProps {
  open: boolean;
  onClose: (event: React.SyntheticEvent<any> | Event, reason?: SnackbarCloseReason) => void;
  msg: string;
  anchorOrigin?: SnackbarOrigin;
  actionMsg: string;
  type: AlertColor;
  link: string;
  trans: string;
}

interface SnackbarMessageProps extends Omit<ImageProps, 'id' | 'src'> {
  type: AlertColor;
  msg: string;
  t: TFunction;
}

interface SnackbarActionProps {
  link: string;
  action: string;
  onClose: (event: React.SyntheticEvent<any> | Event, reason?: SnackbarCloseReason) => void;
  t: TFunction;
}

// message component: svg icon, different cases ('success' case for now to output the success svg) and message which is a string
const SnackbarMessage = ({ className, type, msg, t, ...props }: SnackbarMessageProps) => {
  const { classes } = useStyles();
  let icon = successIcon;
  switch (type) {
    case 'success':
      icon = successIcon;
      break;
    default:
      throw new Error(`message type not supported`);
  }
  return (
    <span className={classes.message}>
      <span className={classes.container}>
        <Image width={0} height={0} src={icon} {...props} className={classes.img} unoptimized />
      </span>
      <span>
        <Typography variant="h2">{t(type)}</Typography>
        <Typography variant="body1">{t(msg)}</Typography>
      </span>
    </span>
  );
};

const SnackbarAction = ({ link, action, onClose, t }: SnackbarActionProps) => {
  const { classes } = useStyles();

  return (
    <span className={classes.action}>
      <IconButton size="small" aria-label="close" color="inherit" onClick={onClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
      <Link shallow href={TRANSACTION_DETAILS(link)} className={classes.link}>
        {t(action)}
      </Link>
    </span>
  );
};

const CustomSnackbar = ({
  className,
  msg,
  open,
  onClose,
  anchorOrigin,
  actionMsg,
  type,
  link,
  trans,
}: SnackbarInputProps) => {
  const { t } = useAppTranslation(trans);
  const { classes, cx } = useStyles();

  return (
    <SnackBar
      className={cx(className, classes.bar)}
      key={msg}
      onClose={onClose}
      open={open}
      anchorOrigin={anchorOrigin}
      message={<SnackbarMessage type={type} msg={msg} t={t} alt="" />}
      action={<SnackbarAction link={link} action={actionMsg} onClose={onClose} t={t} />}
    />
  );
};

export default CustomSnackbar;
