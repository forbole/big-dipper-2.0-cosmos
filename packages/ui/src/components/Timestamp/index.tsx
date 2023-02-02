import dayjs from '@/utils/dayjs';
import { FC, useEffect, useRef, useState } from 'react';

export type TimestampProps = {
  timestamp: Parameters<typeof dayjs['utc']>[0];
};

const format = 'YYYY-MM-DD HH:mm:ss';

const Timestamp: FC<TimestampProps> = ({ timestamp }) => {
  const timestampDayJs = dayjs.utc(timestamp);
  const [output, setOutput] = useState(() => timestampDayJs.fromNow());
  const interval = useRef<NodeJS.Timer>();
  const local =
    dayjs().format('Z') !== '00:00' ? ` Local: ${timestampDayJs.local().format(format)}` : ``;
  const label = `UTC: ${timestampDayJs.format(format)}${local}`;
  useEffect(() => {
    interval.current = setInterval(() => setOutput(timestampDayJs.fromNow()), 1000);
    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  });
  return (
    <span aria-label={label} title={label}>
      {output}
    </span>
  );
};

export default Timestamp;
