import React from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import classnames from 'classnames';
import dayjs, { formatDayJs } from '@utils/dayjs';
import useTranslation from 'next-translate/useTranslation';
import { useRecoilValue } from 'recoil';
import { readDate } from '@recoil/settings';
import {
  Typography,
  Divider,
} from '@material-ui/core';
import {
  SingleProposal,
  Box,
  Markdown,
} from '@components';
import {
  ParamsChange,
  SoftwareUpgrade,
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
