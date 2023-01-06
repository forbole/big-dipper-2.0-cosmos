import useStyles from '@/components/single_proposal/styles';
import { getStatusInfo } from '@/components/single_proposal/utils';
import Tag from '@/components/tag';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import React, { ComponentProps, FC, isValidElement, ReactNode } from 'react';

type SingleproposalProps = {
  className?: string;
  id: string;
  title: string | ReactNode;
  status: string;
  description?: string;
};

const SingleProposal: FC<SingleproposalProps> = ({ className, id, title, status, description }) => {
  const { t } = useTranslation('proposals');
  const { classes, cx } = useStyles();
  const statusInfo = getStatusInfo(status, t);

  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.header}>
        <Typography variant="h4" className={classes.id}>
          {id}
        </Typography>
        <span className={classes.mobile}>
          <Tag
            theme={statusInfo.tag as ComponentProps<typeof Tag>['theme']}
            value={statusInfo.value}
          />
        </span>
      </div>
      {/* ================= */}
      {/* ================= */}
      <div>
        <div className={classes.title}>
          {isValidElement(title) ? (
            title
          ) : (
            <Typography variant="h3" className="value">
              {title}
            </Typography>
          )}
        </div>
        {!!description && (
          <Typography variant="body2" className={classes.content}>
            {description}
          </Typography>
        )}
      </div>
      {/* ================= */}
      {/* ================= */}
      <span className={classes.desktop}>
        <Tag
          theme={statusInfo.tag as ComponentProps<typeof Tag>['theme']}
          value={statusInfo.value}
        />
      </span>
    </div>
  );
};

export default SingleProposal;
