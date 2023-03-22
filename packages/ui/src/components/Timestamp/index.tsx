import dayjs from '@/utils/dayjs';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { FC, useEffect, useRef, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { readTimeFormat } from '@/recoil/settings';
import { useRecoilValue } from 'recoil';

/* styles */
const useStyles = makeStyles()(() => ({
  root: {
    textAlign: 'right',
  },
}));

/* types */
export type TimestampProps = {
  timestamp: Parameters<(typeof dayjs)['utc']>[0] | Parameters<(typeof dayjs)['unix']>[0];
  isUnix?: boolean;
};

const Timestamp: FC<TimestampProps> = ({ timestamp, isUnix }) => {
  const timeFormat = useRecoilValue(readTimeFormat);

  /* module variables */
  const format = timeFormat === '24-hour' ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD hh:mm:ss A';

  // eslint-disable-next-line no-nested-ternary
  const timestampDayJs = timestamp
    ? isUnix
      ? dayjs.unix(timestamp as number)
      : dayjs.utc(timestamp)
    : dayjs.utc();
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
