import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import { FC, LegacyRef } from 'react';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';
import CopyIcon from 'shared-utils/assets/icon-copy.svg';
import EmailIcon from 'shared-utils/assets/icon-email.svg';
import WebArrowIcon from 'shared-utils/assets/icon-web-arrow.svg';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { useAddress } from '@/utils/copy_to_clipboard';
import type { ProviderInfo } from '@/screens/providers/types';
import useStyles from '@/screens/providers/components/providers_list/components/mobile/styles';
import SingleProvider from '@/screens/providers/components/providers_list/components/mobile/component/single_provider';
import useShallowMemo from '@/hooks/useShallowMemo';
import { useList, useListRow } from '@/hooks/use_react_window';

type ListItemProps = Pick<ListChildComponentProps, 'index' | 'style'> & {
  setRowHeight: Parameters<typeof useListRow>[1];
  classes: ReturnType<typeof useStyles>['classes'];
  item: ProviderInfo;
  isLast: boolean;
};

const ListItem: FC<ListItemProps> = ({ index, style, setRowHeight, classes, item, isLast }) => {
  const { rowRef } = useListRow(index, setRowHeight);
  const { t } = useAppTranslation('providers');
  const { handleCopyToClipboard } = useAddress(t);
  const itemNew = {
    key: item.ownerAddress,
    ownerAddress: (
      <>
        <Typography variant="body1" component="a">
          {getMiddleEllipsis(item.ownerAddress, {
            beginning: 20,
            ending: 5,
          })}
        </Typography>
        <CopyIcon
          onClick={() => handleCopyToClipboard(item.ownerAddress)}
          className={classes.actionIcons}
        />
      </>
    ),
    hostUri: (
      <>
        <Typography variant="body1" component="a">
          {/* {getMiddleEllipsis(eachProvider.hostURI, {
            beginning: 30, ending: 0,
          })} */}
          {item.hostURI}
        </Typography>
        <CopyIcon
          onClick={() => handleCopyToClipboard(item.hostURI)}
          className={classes.actionIcons}
        />
      </>
    ),
    region: item.region ? (
      <Typography variant="body1" component="a">
        {item.region}
      </Typography>
    ) : (
      'Null'
    ),
    organization: item.organization ? (
      <Typography variant="body1" component="a">
        {item.organization}
      </Typography>
    ) : (
      'Null'
    ),
    email: item.emailAddress ? (
      <a href={`mailto:${item.emailAddress}`}>
        <EmailIcon className={classes.emailIcon} />
      </a>
    ) : (
      'Null'
    ),
    website: item.website ? (
      <Link
        prefetch={false}
        href={item.website.startsWith('https://') ? item.website : `https://${item.website}`}
      >
        <div>
          <Typography variant="body1" component="a">
            {item.website.length <= 13
              ? item.website
              : getMiddleEllipsis(item.website, {
                  beginning: 13,
                  ending: 0,
                })}
          </Typography>
          <WebArrowIcon className={classes.actionIcons} />
        </div>
      </Link>
    ) : (
      'Null'
    ),
  };
  return (
    <div style={style} className={index % 2 ? classes.even : ''}>
      <div ref={rowRef}>
        <SingleProvider {...itemNew} />
        {!isLast && <Divider />}
      </div>
    </div>
  );
};

const Mobile: FC<{ list: ProviderInfo[]; className?: string }> = ({ list, className }) => {
  const { classes } = useStyles();

  const { listRef, getRowHeight, setRowHeight } = useList();
  const listMemo = useShallowMemo(list);

  return (
    <div className={className}>
      <List
        width="auto"
        height={900}
        itemCount={listMemo.length}
        itemSize={getRowHeight}
        ref={listRef as LegacyRef<List>}
      >
        {({ index, style }) => (
          <ListItem
            key={listMemo[index].ownerAddress}
            index={index}
            style={style}
            setRowHeight={setRowHeight}
            classes={classes}
            item={listMemo[index]}
            isLast={index === listMemo.length - 1}
          />
        )}
      </List>
    </div>
  );
};

export default Mobile;
