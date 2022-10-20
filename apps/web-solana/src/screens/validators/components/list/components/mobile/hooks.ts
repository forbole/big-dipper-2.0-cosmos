import { useEffect } from 'react';

export const useMobile = (tab:number, listRef:any) => {
  useEffect(() => {
    if (listRef.current != null) {
      listRef.current.scrollToItem(0);
    }
  }, [tab]);
};
