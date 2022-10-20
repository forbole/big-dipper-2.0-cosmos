import { useEffect } from 'react';

export const useDesktop = (tab: number, ref: any) => {
  useEffect(() => {
    if (ref.current != null) {
      ref.current.scrollToItem({
        rowIndex: 0,
      });
    }
  }, [tab]);
};
