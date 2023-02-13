import dayjs from '@/utils/dayjs';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { FC, useEffect, useRef, useState } from 'react';
import { makeStyles } from 'tss-react/mui';

/* styles */
const useStyles = makeStyles()(() => ({
  root: {
    textAlign: 'right',
  },
}));

/* types */
export type TimestampProps = {
  timestamp: Parameters<typeof dayjs['utc']>[0];
};

/* module variables */
const format = 'YYYY-MM-DD HH:mm:ss';

const Timestamp: FC<TimestampProps> = ({ timestamp }) => {
  const timestampDayJs = timestamp ? dayjs.utc(timestamp) : dayjs.utc();
  const [output, setOutput] = useState(() => timestampDayJs?.fromNow());
  const interval = useRef<NodeJS.Timer>();
  useEffect(() => {
    if (timestamp) interval.current = setInterval(() => setOutput(timestampDayJs.fromNow()), 1000);
    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  });
  const { classes } = useStyles();
  if (!timestamp) return null;
  const label = (
    <pre className={classes.root}>
      UTC: {timestampDayJs.format(format)}
      {dayjs().format('Z') !== '00:00' && <pre>Local: {timestampDayJs.local().format(format)}</pre>}
    </pre>
  );
  return (
    <Tooltip TransitionComponent={Zoom} title={label} placement="left" arrow>
      <span>{output}</span>
    </Tooltip>
  );
};

export default Timestamp;
