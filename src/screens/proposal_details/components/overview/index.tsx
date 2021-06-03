import React from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import classnames from 'classnames';
import dayjs from '@utils/dayjs';
import useTranslation from 'next-translate/useTranslation';
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
} from './components';
import { useStyles } from './styles';
import { getProposalType } from '../../utils';

const Overview: React.FC<{
  className?: string;
  title: string;
  id: number;
  description: string;
  status: string;
  submitTime: string;
  depositEndTime: string;
  votingStartTime: string | null;
  votingEndTime: string | null;
  content: string;
}> = ({
  className, ...props
}) => {
  const classes = useStyles();
  const { t } = useTranslation('proposals');

  const type = getProposalType(R.pathOr('', ['@type'], props.content));

  return (
    <Box className={classnames(className)}>
      <SingleProposal
        id={`#${numeral(props.id).format('0,0')}`}
        title={props.title}
        status={props.status}
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
          {t('description')}
        </Typography>
        <Markdown>
          {props.description}
        </Markdown>
        {type === 'parameterChangeProposal' && (
          <>
            <Typography variant="body1" className="label">
              {t('changes')}
            </Typography>
            <ParamsChange
              changes={R.pathOr([], ['changes'], props.content)}
            />
          </>
        )}
        {
          !!props.submitTime && (
            <>
              <Typography variant="body1" className="label">
                {t('submitTime')}
              </Typography>
              <Typography variant="body1" className="value">
                {dayjs.utc(props.submitTime).local().format('MMMM DD, YYYY hh:mm A')}
              </Typography>
            </>
          )
        }
        {
          !!props.depositEndTime && (
            <>
              <Typography variant="body1" className="label">
                {t('depositEndTime')}
              </Typography>
              <Typography variant="body1" className="value">
                {dayjs.utc(props.depositEndTime).local().format('MMMM DD, YYYY hh:mm A')}
              </Typography>
            </>
          )
        }
        {
          !!props.votingStartTime && (
            <>
              <Typography variant="body1" className="label">
                {t('votingStartTime')}
              </Typography>
              <Typography variant="body1" className="value">
                {dayjs.utc(props.votingStartTime).local().format('MMMM DD, YYYY hh:mm A')}
              </Typography>
            </>
          )
        }
        {
          !!props.votingEndTime && (
            <>
              <Typography variant="body1" className="label">
                {t('votingEndTime')}
              </Typography>
              <Typography variant="body1" className="value">
                {dayjs.utc(props.votingEndTime).local().format('MMMM DD, YYYY hh:mm A')}
              </Typography>
            </>
          )
        }
      </div>
    </Box>
  );
};

export default Overview;
