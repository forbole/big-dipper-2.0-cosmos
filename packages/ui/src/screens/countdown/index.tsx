import Typography from '@mui/material/Typography';
import { FC, useCallback, useState } from 'react';
import chainConfig from '@/chainConfig';
import ChainIcon from '@/components/ChainIcon';
import Loading from '@/components/loading';
import { useInterval } from '@/hooks/use_interval';
import useStyles from '@/screens/countdown/styles';
import dayjs from '@/utils/dayjs';

const { genesis, network } = chainConfig();

type CountdownProps = {
  startGenesis: () => void;
};

const Countdown: FC<CountdownProps> = ({ startGenesis }) => {
  // const theme = useRecoilValue(readTheme);
  const { classes } = useStyles();
  const [state, setState] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
    interval: 1000,
    loading: false,
  });

  const intervalCallback = useCallback(() => {
    const genesisTime = dayjs.utc(genesis.time);
    const timeNow = dayjs.utc();
    const difference = genesisTime.diff(timeNow);
    if (difference > 0) {
      setState((prevState) => ({
        ...prevState,
        day: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hour: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minute: Math.floor((difference / 1000 / 60) % 60),
        second: Math.floor((difference / 1000) % 60),
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        interval: 0,
        loading: true,
      }));
      startGenesis();
    }
  }, [startGenesis]);

  useInterval(intervalCallback, state.interval);

  return (
    <div className={classes.root}>
      <ChainIcon type="logo" className={classes.logo} alt="logo" />
      <div className={classes.timeContainer}>
        <div className={classes.item}>
          <Typography variant="h1">{state.day}</Typography>
          <Typography variant="h3">Day</Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h1">{state.hour}</Typography>
          <Typography variant="h3">Hour</Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h1">{state.minute}</Typography>
          <Typography variant="h3">Min</Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h1">{state.second}</Typography>
          <Typography variant="h3">Sec</Typography>
        </div>
      </div>
      <Typography variant="h2" className={classes.chain}>
        {network}
      </Typography>
      {state.loading && <Loading />}
    </div>
  );
};

export default Countdown;
