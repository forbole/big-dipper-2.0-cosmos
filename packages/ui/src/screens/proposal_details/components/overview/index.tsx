import Box from '@/components/box';
import Markdown from '@/components/markdown';
import Name from '@/components/name';
import SingleProposal from '@/components/single_proposal';
import { useProfileRecoil } from '@/recoil/profiles';
import { readDate } from '@/recoil/settings';
import ParamsChange from '@/screens/proposal_details/components/overview/components/params_change';
import SoftwareUpgrade from '@/screens/proposal_details/components/overview/components/software_upgrade';
import { useStyles } from '@/screens/proposal_details/components/overview/styles';
import type { OverviewType } from '@/screens/proposal_details/types';
import { getProposalType } from '@/screens/proposal_details/utils';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import * as R from 'ramda';
import React from 'react';
import { useRecoilValue } from 'recoil';

const Overview: React.FC<{ overview: OverviewType } & ComponentDefault> = ({
  className,
  overview,
}) => {
  const dateFormat = useRecoilValue(readDate);
  const classes = useStyles();
  const { t } = useTranslation('proposals');

  const type = getProposalType(R.pathOr('', ['@type'], overview.content));

  const proposer = useProfileRecoil(overview.proposer);
  const proposerMoniker = proposer ? proposer?.name : overview.proposer;

  const getExtraDetails = () => {
    let extraDetails = null;
    if (type === 'parameterChangeProposal') {
      extraDetails = (
        <>
          <Typography variant="body1" className="label">
            {t('changes')}
          </Typography>
          <ParamsChange changes={R.pathOr([], ['changes'], overview.content)} />
        </>
      );
    } else if (type === 'softwareUpgradeProposal') {
      extraDetails = (
        <>
          <Typography variant="body1" className="label">
            {t('plan')}
          </Typography>
          <SoftwareUpgrade
            height={R.pathOr('0', ['plan', 'height'], overview.content)}
            info={R.pathOr('', ['plan', 'info'], overview.content)}
            name={R.pathOr('', ['plan', 'name'], overview.content)}
          />
        </>
      );
    }

    return extraDetails;
  };

  const extra = getExtraDetails();

  return (
    <Box className={classnames(className, classes.root)}>
      <SingleProposal
        id={`#${numeral(overview.id).format('0,0')}`}
        title={overview.title}
        status={overview.status}
      />
      <Divider />
      <div className={classes.content}>
        <Typography variant="body1" className="label">
          {t('type')}
        </Typography>
        <Typography variant="body1" className="value">
          {t(type)}
        </Typography>
        <Typography variant="body1" className="label">
          {t('proposer')}
        </Typography>
        <Name name={proposerMoniker} address={proposer.address} />
        {!!overview.submitTime && (
          <>
            <Typography variant="body1" className="label">
              {t('submitTime')}
            </Typography>
            <Typography variant="body1" className="value">
              {formatDayJs(dayjs.utc(overview.submitTime), dateFormat)}
            </Typography>
          </>
        )}
        {!!overview.depositEndTime && (
          <>
            <Typography variant="body1" className="label">
              {t('depositEndTime')}
            </Typography>
            <Typography variant="body1" className="value">
              {formatDayJs(dayjs.utc(overview.depositEndTime), dateFormat)}
            </Typography>
          </>
        )}
        {!!overview.votingStartTime && (
          <>
            <Typography variant="body1" className="label">
              {t('votingStartTime')}
            </Typography>
            <Typography variant="body1" className="value">
              {formatDayJs(dayjs.utc(overview.votingStartTime), dateFormat)}
            </Typography>
          </>
        )}
        {!!overview.votingEndTime && (
          <>
            <Typography variant="body1" className="label">
              {t('votingEndTime')}
            </Typography>
            <Typography variant="body1" className="value">
              {formatDayJs(dayjs.utc(overview.votingEndTime), dateFormat)}
            </Typography>
          </>
        )}
        <Typography variant="body1" className="label">
          {t('description')}
        </Typography>
        <Markdown markdown={overview.description} />
        {extra}
      </div>
    </Box>
  );
};

export default Overview;
