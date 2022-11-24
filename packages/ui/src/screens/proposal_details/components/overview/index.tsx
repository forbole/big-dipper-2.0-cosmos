import React from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import classnames from 'classnames';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import useTranslation from 'next-translate/useTranslation';
import { useRecoilValue } from 'recoil';
import { readDate } from '@/recoil/settings';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import SingleProposal from '@/components/single_proposal';
import Box from '@/components/box';
import Markdown from '@/components/markdown';
import Name from '@/components/name';
import { useProfileRecoil } from '@/recoil/profiles';
import { getProposalType } from '@/screens/proposal_details/utils';
import type { OverviewType } from '@/screens/proposal_details/types';
import ParamsChange from '@/screens/proposal_details/components/overview/components/params_change';
import SoftwareUpgrade from '@/screens/proposal_details/components/overview/components/software_upgrade';
import CommunityPoolSpend from '@/screens/proposal_details/components/overview/components/community_pool_spend';
import { useStyles } from '@/screens/proposal_details/components/overview/styles';
import { formatToken, formatNumber } from '@/utils/format_token';

const Overview: React.FC<{ overview: OverviewType } & ComponentDefault> = ({
  className,
  overview,
}) => {
  const dateFormat = useRecoilValue(readDate);
  const classes = useStyles();
  const { t } = useTranslation('proposals');

  const type = getProposalType(R.pathOr('', ['@type'], overview.content));

  const proposer = useProfileRecoil(overview.proposer);
  const recipient = overview?.content?.recipient
    ? useProfileRecoil(overview?.content?.recipient)
    : null;
  const proposerMoniker = proposer ? proposer?.name : overview.proposer;
  const recipientMoniker = recipient ? recipient?.name : overview?.content?.recipient;
  const amountRequested = overview.content?.amount
    ? formatToken(overview.content?.amount[0]?.amount, overview.content?.amount[0]?.denom)
    : null;
  const parsedAmountRequested = amountRequested
    ? `${formatNumber(
        amountRequested.value,
        amountRequested.exponent
      )} ${amountRequested.displayDenom.toUpperCase()}`
    : '';

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
    } else if (type === 'communityPoolSpendProposal') {
      extraDetails = (
        <>
          <Typography variant="body1" className="label">
            {t('content')}
          </Typography>
          <CommunityPoolSpend
            recipient={overview?.content?.recipient}
            recipientMoniker={recipientMoniker}
            amountRequested={parsedAmountRequested}
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
