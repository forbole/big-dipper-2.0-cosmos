import { FC, useMemo } from 'react';
import { makeStyles } from 'tss-react/mui';

/* styles */
const useStyles = makeStyles()(() => ({
  root: {
    display: 'inline-flex',
    flexFlow: 'row nowrap',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textAlign: 'left',
  },
  ellipsis: {
    display: 'inline-block',
    flex: 'unset',
    height: '1lh',
    letterSpacing: 0,
    lineHeight: '1lh',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  clip: {
    letterSpacing: 0,
    display: 'flex',
    flex: '1',
    overflow: 'hidden',
    height: '1lh',
    lineHeight: '1lh',
    maxWidth: 'max-content',
    minWidth: 'fit-content',
    whiteSpace: 'normal',
    overflowWrap: 'anywhere',
  },
}));

/* types */
type AddressEllipsisProps = JSX.IntrinsicElements['span'] & {
  content?: string;
};

/* components */
const AddressEllipsis: FC<AddressEllipsisProps> = ({ className, content, ...rest }) => {
  const beginning = useMemo(() => {
    const midIndex = (content?.length ?? 0) / 2;

    if (!content) return '';

    const index = (() => {
      if (content.length < 10) return midIndex - 3;
      if (content.length < 30) return midIndex + 3;
      return midIndex + 9;
    })();

    return (content ?? '').substring(0, Math.max(0, index));
  }, [content]);

  const ending = (content ?? '').substring(beginning.length);
  const { classes, cx } = useStyles();
  return (
    <span className={cx(classes.root, className)} {...rest}>
      <span className={classes.ellipsis}>{beginning}</span>
      <span className={classes.clip}>{ending}</span>
    </span>
  );
};

export default AddressEllipsis;
