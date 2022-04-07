import React from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import classnames from 'classnames';
import dayjs, { formatDayJs } from '@utils/dayjs';
import useTranslation from 'next-translate/useTranslation';
import { useRecoilValue } from 'recoil';
import { readDate } from '@recoil/settings';
import JSONPretty from 'react-json-pretty';
var JSONPrettyMon = require('react-json-pretty/dist/monikai');
import {
  Typography,
  Divider,
} from '@material-ui/core';
import {
  SingleProposal,
  Box,
  Markdown,
  Name,
} from '@components';
import { useProfileRecoil } from '@recoil/profiles';
import {
  ParamsChange,
  SoftwareUpgrade,
  IbcUpgrade,
  CommunitySpend,
} from './components';
import { useStyles } from './styles';
import { getProposalType } from '../../utils';
import { OverviewType } from '../../types';

const Overview: React.FC<{ overview: OverviewType } & ComponentDefault> = ({
  className, overview,
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
          <ParamsChange
            changes={R.pathOr([], ['changes'], overview.content)}
          />
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
            {t('details')}
          </Typography>
          <CommunitySpend
            recipient={R.pathOr('', ['recipient'], props.content)}
            amount={R.pathOr('', ['amount', '0', 'amount'], props.content) + " " + R.pathOr('', ['amount', '0', 'denom'], props.content)}
          />
        </>
      );
    } else if (type === 'IbcUpgradeProposal') {
      extraDetails = (
        <>
          <Typography variant="body1" className="label">
            {t('details')}
          </Typography>
          <IbcUpgrade
            height={R.pathOr('0', ['plan', 'height'], props.content)}
            info={R.pathOr('', ['plan', 'info'], props.content)}
            name={R.pathOr('', ['plan', 'name'], props.content)}
          />
          <Typography variant="body1" className="label">
            {t('upgradedClientState')}
          </Typography>
          <JSONPretty id="json-pretty" data={JSON.stringify(R.pathOr('', ['upgraded_client_state'], props.content), null, 2)} theme={JSONPrettyMon}></JSONPretty>
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
        <Name
          name={proposerMoniker}
          address={proposer.address}
        />
        {
          !!overview.submitTime && (
            <>
              <Typography variant="body1" className="label">
                {t('submitTime')}
              </Typography>
              <Typography variant="body1" className="value">
                {formatDayJs(dayjs.utc(overview.submitTime), dateFormat)}
              </Typography>
            </>
          )
        }
        {
          !!overview.depositEndTime && (
            <>
              <Typography variant="body1" className="label">
                {t('depositEndTime')}
              </Typography>
              <Typography variant="body1" className="value">
                {formatDayJs(dayjs.utc(overview.depositEndTime), dateFormat)}
              </Typography>
            </>
          )
        }
        {
          !!overview.votingStartTime && (
            <>
              <Typography variant="body1" className="label">
                {t('votingStartTime')}
              </Typography>
              <Typography variant="body1" className="value">
                {formatDayJs(dayjs.utc(overview.votingStartTime), dateFormat)}
              </Typography>
            </>
          )
        }
        {
          !!overview.votingEndTime && (
            <>
              <Typography variant="body1" className="label">
                {t('votingEndTime')}
              </Typography>
              <Typography variant="body1" className="value">
                {formatDayJs(dayjs.utc(overview.votingEndTime), dateFormat)}
              </Typography>
            </>
          )
        }
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
