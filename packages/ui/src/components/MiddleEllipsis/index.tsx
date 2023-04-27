import { FC } from 'react';
import { makeStyles } from 'tss-react/mui';

/* styles */
const useStyles = makeStyles<{ length: number }>()((theme, { length }) => ({
  root: {
    display: 'inline-flex',
    flexFlow: 'row nowrap',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    maxWidth: '100%',
    textAlign: 'left',
  },
  ellipsis: {
    '&&': {
      letterSpacing: 0,
      display: 'inline-block',
      flex: `0 1 auto`,
      overflow: 'hidden',
      height: '1lh',
      lineHeight: '1lh',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      [theme.breakpoints.up('sm')]: {
        maxWidth: length > 24 ? '20%' : '50%',
      },
      [theme.breakpoints.up('md')]: {
        maxWidth: '50%',
      },
    },
  },
  clip: {
    '&&': {
      letterSpacing: 0,
      display: 'inline-block',
      flex: '0 1 auto',
      overflow: 'hidden',
      height: '1lh',
      lineHeight: '1lh',
      maxWidth: 'max-content',
      whiteSpace: 'normal',
      overflowWrap: 'anywhere',
    },
  },
  ellipsisEnd: {
    '&&': {
      letterSpacing: 0,
      display: 'inline-block',
      flex: `0 1 auto`,
      overflow: 'hidden',
      height: '1lh',
      lineHeight: '1lh',
      maxWidth: '50%',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      direction: 'rtl',
    },
  },
}));

/* types */
type MiddleEllipsisProps = JSX.IntrinsicElements['span'] & {
  content?: string;
  ellipsisOnEnd?: boolean;
};

/* components */
const MiddleEllipsis: FC<MiddleEllipsisProps> = ({
  className,
  content,
  ellipsisOnEnd,
  ...rest
}) => {
  const midIndex = (content?.length ?? 0) / 2;
  const beginning = (content ?? '').substring(0, Math.max(0, midIndex - 3));
  const ending = (content ?? '').substring(beginning.length);
  const { classes, cx } = useStyles({ length: ending.length ?? 0 });
  const [begin, end] = ellipsisOnEnd
    ? [classes.clip, classes.ellipsisEnd]
    : [classes.ellipsis, classes.clip];
  return (
    <span className={cx(classes.root, className)} {...rest}>
      <span className={begin}>{beginning}</span>
      <span className={end}>{ending}</span>
    </span>
  );
};

export default MiddleEllipsis;
