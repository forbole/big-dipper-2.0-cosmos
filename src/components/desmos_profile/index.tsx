import React from 'react';
import numeral from 'numeral';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Typography,
  Divider,
} from '@material-ui/core';
import dayjs, { formatDayJs } from '@utils/dayjs';
import { useSettingsContext } from '@contexts';
import {
  Box,
  Avatar,
  Markdown,
  Tag,
  ConditionExplanation,
  InfoPopover,
} from '@components';
import { useStyles } from './styles';
import { useDesmosProfile } from './hooks';
import { Connections } from './components';
import {
  getStatusTheme, getCondition,
} from './utils';

const DesmosProfile: React.FC<{
  className?: string;
} & DesmosProfile> = (props) => {
  const { dateFormat } = useSettingsContext();
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const {
    connectionsOpen,
    handleConnectionsClose,
    handleConnectionsOpen,
  } = useDesmosProfile();

  const { validator } = props;

  const statusTheme = validator ? getStatusTheme(validator.status, validator.jailed) : null;
  const condition = validator ? getCondition(validator.condition, validator.status) : null;
  console.log(props.coverUrl, 'props');
  return (
    <Box className={classnames(props.className, classes.root)}>
      <div>
        <div className={classes.cover}>
          {/* <img src={props.coverUrl} alt="cover" /> */}
        </div>
        <Avatar
          address={props.dtag}
          imageUrl={props.imageUrl}
          className={classes.avatar}
        />
      </div>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac ligula ipsum. Pellentesque vestibulum iaculis velit eu rutrum. Mauris eget ultricies enim, congue eleifend magna. Donec vel ex viverra tortor scelerisque mattis non id sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut fermentum leo, quis pellentesque risus. Nam dapibus, odio in dapibus ullamcorper, nibh risus pharetra justo, eget pellentesque felis velit ut quam. Maecenas aliquam nisi ornare orci dignissim venenatis.
      </div>
    </Box>
  );

  // return (
  //   <>
  //     <Box className={props.className}>
  //       <div className={classes.profile}>
  //         {validator && (
  //           <Tag
  //             value={t(`validators:${statusTheme.status}`)}
  //             theme={statusTheme.theme as any}
  //             className={classnames(classes.tag, classes.validatorStatus, 'mobile')}
  //           />
  //         )}
  // <Avatar
  //   address={props.dtag}
  //   imageUrl={props.imageUrl}
  //   className={classes.avatar}
  // />
  //         <div className={classes.description}>
  //           <div>
  //             <div className={classes.nicknameWrapper}>
  //               <Typography variant="h2">
  //                 {props.nickname}
  //               </Typography>
  //               {validator && (
  //               <Tag
  //                 value={t(`validators:${statusTheme.status}`)}
  //                 theme={statusTheme.theme as any}
  //                 className={classnames(classes.tag, classes.validatorStatus, 'tablet')}
  //               />
  //               )}
  //             </div>
  //             <Typography variant="body1" className="tag">
  //               @
  //               {props.dtag}
  //             </Typography>
  //           </div>
  //           {
  //           !!props.connections.length && (
  //           <Typography
  //             variant="body1"
  //             className={classes.link}
  //             onClick={handleConnectionsOpen}
  //             role="button"
  //           >
  //             {t('connections', {
  //               connections: numeral(props.connections.length).format('0,0'),
  //             })}
  //           </Typography>
  //           )
  //         }
  //         </div>
  //       </div>
  //       {(validator || props.bio) && (
  //         <Divider className={classes.divider} />
  //       )}
  //       {validator && (
  //         <div className={classes.validatorDetails}>
  //           <div className={classes.item}>
  //             <Typography variant="h4" className="label">
  //               {t('validators:commission')}
  //             </Typography>
  //             <Typography
  //               variant="body1"
  //               className="value"
  //             >
  //               {`${numeral(validator.commission * 100).format('0.00')}%`}
  //             </Typography>
  //           </div>
  //           <div className={classes.item}>
  //             <Typography variant="h4" className="label condition">
  //               {t('validators:condition')}
  //               <InfoPopover
  //                 content={<ConditionExplanation />}
  //               />
  //             </Typography>
  //             {validator.status === 3 ? (
  //               <div className="condition__body">
  //                 <InfoPopover
  //                   content={(
  //                     <>
  //                       <Typography variant="body1">
  //                         {t('validators:missedBlockCounter', {
  //                           amount: numeral(validator.missedBlockCounter).format('0,0'),
  //                         })}
  //                       </Typography>
  //                       <Typography variant="body1">
  //                         {t('validators:signedBlockWindow', {
  //                           amount: numeral(validator.signedBlockWindow).format('0,0'),
  //                         })}
  //                       </Typography>
  //                     </>
  //                   )}
  //                   display={(
  //                     <Typography
  //                       variant="body1"
  //                       className={classnames('value', condition)}
  //                     >
  //                       {t(`validators:${condition}`)}
  //                     </Typography>
  //                   )}
  //                 />
  //               </div>
  //             ) : (
  //               <Typography
  //                 variant="body1"
  //                 className={classnames('value', 'condition', condition)}
  //               >
  //                 {t(condition)}
  //               </Typography>
  //             )}
  //           </div>
  //           <div className={classnames(classes.item, 'last-seen')}>
  //             <Typography variant="h4" className="label">
  //               {t('validators:lastSeen')}
  //             </Typography>
  //             <Typography
  //               variant="body1"
  //               className="value"
  //             >
  //               {validator.lastSeen ? formatDayJs(dayjs.utc(validator.lastSeen), dateFormat) : t('validators:na')}
  //             </Typography>
  //           </div>
  //         </div>
  //       )}
  //       {props.bio && (
  //         <div>
  //           <Markdown markdown={props.bio} />
  //         </div>
  //       )}
  //     </Box>
  //     <Connections
  //       open={connectionsOpen}
  //       handleClose={handleConnectionsClose}
  //       data={props.connections}
  //     />
  //   </>
  // );
};

export default DesmosProfile;
