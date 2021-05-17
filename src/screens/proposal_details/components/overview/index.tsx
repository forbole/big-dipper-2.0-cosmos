import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Typography,
  Divider,
} from '@material-ui/core';
import {
  SingleProposal,
  Box,
} from '@components';

import { useStyles } from './styles';
import { useProposalContext } from '../../contexts/proposal';

const Overview: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();
  const { t } = useTranslation('proposals');
  const { uiData } = useProposalContext();

  return (
    <Box className={classnames(className)}>
      <SingleProposal
        id={uiData.overview.id}
        title={uiData.overview.title}
        status={uiData.overview.status}
      />
      <Divider />
      <div className={classes.content}>
        <Typography variant="body1" className="label">
          {t('type')}
        </Typography>
        <Typography variant="body1" className="value">
          {t(uiData.overview.type)}
        </Typography>
        <Typography variant="body1" className="label">
          {t('description')}
        </Typography>
        <Typography variant="body1" className="value">
          {uiData.overview.description}
        </Typography>
        {
          !!uiData.overview.submitTime && (
            <>
              <Typography variant="body1" className="label">
                {t('submitTime')}
              </Typography>
              <Typography variant="body1" className="value">
                {uiData.overview.submitTime}
              </Typography>
            </>
          )
        }
        {
          !!uiData.overview.depositEndTime && (
            <>
              <Typography variant="body1" className="label">
                {t('depositEndTime')}
              </Typography>
              <Typography variant="body1" className="value">
                {uiData.overview.depositEndTime}
              </Typography>
            </>
          )
        }
        {
          !!uiData.overview.votingStartTime && (
            <>
              <Typography variant="body1" className="label">
                {t('votingStartTime')}
              </Typography>
              <Typography variant="body1" className="value">
                {uiData.overview.votingStartTime}
              </Typography>
            </>
          )
        }
        {
          !!uiData.overview.votingEndTime && (
            <>
              <Typography variant="body1" className="label">
                {t('votingEndTime')}
              </Typography>
              <Typography variant="body1" className="value">
                {uiData.overview.votingEndTime}
              </Typography>
            </>
          )
        }
      </div>
    </Box>
  );
};

export default Overview;
