import ListItem from '@/components/InfiniteList/components/ListItem';
import Pagination from '@/components/InfiniteList/components/Pagination';
import useStyles from '@/components/InfiniteList/styles';
import { InfiniteListProps, ItemData, UNKNOWN_ITEM_COUNT } from '@/components/InfiniteList/types';
import NotFound from '@/components/not_found';
import LinearProgress from '@mui/material/LinearProgress';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {
  MutableRefObject,
  startTransition,
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ListOnScrollProps, VariableSizeList, VariableSizeListProps } from 'react-window';
import { useElementSize } from 'usehooks-ts';

function handleAutoScrollElement(
  scrollUpdateWasRequested: ListOnScrollProps['scrollUpdateWasRequested'] | undefined,
  scrollOffset: ListOnScrollProps['scrollOffset'] | undefined,
  lastScrollTime: MutableRefObject<number>,
  autoScrollElement?: Element | null
) {
  if (!autoScrollElement || typeof window === 'undefined') return;
  if (lastScrollTime.current && lastScrollTime.current + 2000 > new Date().getTime()) return;
  if (scrollUpdateWasRequested || !scrollOffset) return;
  lastScrollTime.current = new Date().getTime();
  const top = autoScrollElement.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, behavior: 'smooth' });
}

function handleAutoRefetch(
  refetchTimer: MutableRefObject<NodeJS.Timeout | undefined>,
  reloadOnScollTop: boolean | undefined,
  scrollProps: ListOnScrollProps,
  refetch: () => void
) {
  const { scrollOffset, scrollUpdateWasRequested, scrollDirection } = scrollProps;
  clearTimeout(refetchTimer.current);

  if (
    reloadOnScollTop &&
    scrollOffset === 0 &&
    (scrollUpdateWasRequested || scrollDirection === 'backward')
  ) {
    refetchTimer.current = setTimeout(() => refetch(), 300);
  }
}

function calculatePage(
  offsetToReduce: number,
  rowHeight: (index: number) => number,
  itemsPerPage: number
) {
  let index = 0;
  while (offsetToReduce > 0) {
    offsetToReduce -= rowHeight(index);
    index += 1;
  }
  return Math.floor(index / itemsPerPage);
}

const InfiniteList = <TData, TVariables, TItem>({
  className,
  cursor,
  variables,
  items,
  itemsPerPage,
  itemCount,
  maxFetched,
  refetch,
  reloadOnScollTop,
  disablePagination,
  rowHeight,
  HeaderComponent,
  RowComponent,
  autoScrollElement,
}: InfiniteListProps<TData, TVariables, TItem>) => {
  const listRef = useRef<VariableSizeList>(null);
  const [page, setPage] = useState(0);
  const { classes, cx } = useStyles();
  const [elementRef, { width, height }] = useElementSize();
  const refetchTimer = useRef<NodeJS.Timeout>();
  const [scrollProps, setScrollProps] = useState<ListOnScrollProps>();
  const handleScroll = (props: ListOnScrollProps) => setScrollProps(props);
  const scrollPropsDefer = useDeferredValue(scrollProps);
  const lastScrollTime = useRef(0);

  useEffect(() => {
    handleAutoScrollElement(
      scrollProps?.scrollUpdateWasRequested,
      scrollProps?.scrollOffset,
      lastScrollTime,
      autoScrollElement
    );
  }, [autoScrollElement, scrollProps]);

  useEffect(() => {
    startTransition(() => {
      if (scrollPropsDefer)
        handleAutoRefetch(refetchTimer, reloadOnScollTop, scrollPropsDefer, refetch);
    });
  }, [reloadOnScollTop, refetch, scrollPropsDefer]);

  useEffect(() => {
    if (scrollPropsDefer)
      setPage(calculatePage(scrollPropsDefer.scrollOffset, rowHeight, itemsPerPage));
  }, [itemsPerPage, rowHeight, scrollPropsDefer]);

  const itemData = useMemo<ItemData<TData, TVariables, TItem>>(
    () => ({ cursor, variables, items, itemsPerPage, rowHeight, RowComponent }),
    [cursor, variables, rowHeight, items, itemsPerPage, RowComponent]
  );

  const prefix = JSON.stringify(variables);
  const itemKey = useCallback((index: number) => `${prefix}${index}`, [prefix]);

  useEffect(() => {
    setPage(0);
    if (listRef.current) listRef.current.scrollTo(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(variables)]);

  const handlePageChange = useCallback(
    (p: number) => {
      listRef.current?.scrollToItem(p * itemsPerPage, 'start');
    },
    [itemsPerPage]
  );

  return (
    <Paper className={cx(className, classes.root)}>
      <TableContainer>
        <Table stickyHeader>
          {!!HeaderComponent && (
            <TableHead>
              <TableRow>
                <TableCell className={classes.th}>
                  <HeaderComponent variables={variables} width={width ?? 0} height={height ?? 0} />
                </TableCell>
              </TableRow>
            </TableHead>
          )}
        </Table>
      </TableContainer>
      <div ref={elementRef} className={classes.listContainer}>
        {itemCount === 0 && (
          <div className={classes.notfound}>
            <NotFound />
          </div>
        )}
        <div className={classes.listBg}>
          <LinearProgress />
        </div>
        <div className={classes.list}>
          <VariableSizeList
            ref={listRef}
            itemCount={itemCount ?? UNKNOWN_ITEM_COUNT}
            itemData={itemData as VariableSizeListProps['itemData']}
            width={width ?? 0}
            height={height ?? 0}
            itemSize={rowHeight}
            itemKey={itemKey}
            onScroll={handleScroll}
            useIsScrolling
          >
            {ListItem}
          </VariableSizeList>
        </div>
      </div>
      {!disablePagination && (
        <Pagination
          className={classes.pagination}
          itemsPerPage={itemsPerPage}
          itemCount={itemCount ?? UNKNOWN_ITEM_COUNT}
          maxFetched={maxFetched}
          page={page}
          onPageChange={handlePageChange}
        />
      )}
    </Paper>
  );
};

export default InfiniteList;
