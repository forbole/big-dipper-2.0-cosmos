import {
  useEffect,
  useState,
  useRef,
} from 'react';

/**
 * Nav hook helper to get the component height
 */
export const useGetComponentDimension = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const ref: any = useRef(null);
  useEffect(() => {
    if (ref?.current?.clientHeight) {
      setHeight(ref.current.clientHeight);
    }
    if (ref?.current?.clientWidth) {
      setWidth(ref.current.clientWidth);
    }
  }, [ref?.current?.clientHeight]);

  return {
    width,
    height,
    ref,
  };
};
