import React from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import classnames from 'classnames';
import dayjs, { formatDayJs } from 'ui/utils/dayjs';
import useTranslation from 'next-translate/useTranslation';
import { useRecoilValue } from 'recoil';
import { readDate } from 'ui/recoil/settings';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import SingleProposal from 'ui/components/single_proposal';
import Box from 'ui/components/box';
import Markdown from 'ui/components/markdown';
import Name from 'ui/components/name';
import { useProfileRecoil } from 'ui/recoil/profiles';
import ParamsChange from './components/params_change';
import SoftwareUpgrade from './components/software_upgrade';
import { useStyles } from './styles';
import { getProposalType } from '../../utils';
import type { OverviewType } from '../../types';

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
              {formatDayJs((dayjs as any).utc(overview.submitTime), dateFormat)}
            </Typography>
          </>
        )}
        {!!overview.depositEndTime && (
          <>
            <Typography variant="body1" className="label">
              {t('depositEndTime')}
            </Typography>
            <Typography variant="body1" className="value">
              {formatDayJs((dayjs as any).utc(overview.depositEndTime), dateFormat)}
            </Typography>
          </>
        )}
        {!!overview.votingStartTime && (
          <>
            <Typography variant="body1" className="label">
              {t('votingStartTime')}
            </Typography>
            <Typography variant="body1" className="value">
              {formatDayJs((dayjs as any).utc(overview.votingStartTime), dateFormat)}
            </Typography>
          </>
        )}
        {!!overview.votingEndTime && (
          <>
            <Typography variant="body1" className="label">
              {t('votingEndTime')}
            </Typography>
            <Typography variant="body1" className="value">
              {formatDayJs((dayjs as any).utc(overview.votingEndTime), dateFormat)}
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
