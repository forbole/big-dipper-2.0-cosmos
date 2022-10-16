import React from 'react';
import classnames from 'classnames';
import { Box } from '@components';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

const BoxDetails: React.FC<{
  className?: string;
  title?: string | React.ReactNode;
  titleAction?: React.ReactNode;
  details: {
    label: string | number | React.ReactNode;
    detail: string | number | React.ReactNode;
    className?: string;
  }[];
}> = ({
  className, title, titleAction, details,
}) => {
  const classes = useStyles();
  return (
    <Box className={classnames(className, classes.root)}>
      {!!title && (
        <div className={classnames(classes.header, classes.item)}>
            {React.isValidElement(title) ? (
              title
            ) : (
              <Typography variant="h2">
                {title}
              </Typography>
            )}
            {!!titleAction && titleAction}
        </div>
      )}
      {details.map((x, i) => {
        return (
          <div
            className={classnames(classes.item, x.className)}
            key={`box-detail__item--${i}`}
          >
            {React.isValidElement(x.label) ? (
              <div className="label">
                {x.label}
              </div>
            ) : (
              <Typography variant="body1" className="label">
                {x.label}
              </Typography>
            )}

            {React.isValidElement(x.detail) ? (
              <div className="detail">
                {x.detail}
              </div>
            ) : (
              <Typography variant="body1" className="detail">
                {x.detail}
              </Typography>
            )}
          </div>
        );
      })}
    </Box>
  );
};

export default BoxDetails;
