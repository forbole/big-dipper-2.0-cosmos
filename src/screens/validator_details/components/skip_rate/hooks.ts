import {
  useEffect, useState,
} from 'react';

export const useSkipRate = () => {
  const [epoch, setEpoch] = useState<0 | 1 |2>(0);
  const [percentage, setPercentage] = useState(40);

  useEffect(() => {
    if (epoch === 0) {
      setPercentage(40);
    }
    if (epoch === 1) {
      setPercentage(30);
    }
    if (epoch === 2) {
      setPercentage(70);
    }
  }, [epoch]);

  return {
    epoch,
    setEpoch,
    percentage,
  };
};
