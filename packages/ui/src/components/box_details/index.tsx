import Box from '@/components/box';
import { useStyles } from '@/components/box_details/styles';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import React, { FC, isValidElement, ReactNode } from 'react';

type BoxDetailsProps = {
  className?: string;
  title?: string | ReactNode;
  titleAction?: ReactNode;
  details: {
    key: string;
    label: string | number | ReactNode;
    detail?: string | number | ReactNode;
    className?: string;
  }[];
};

const BoxDetails: FC<BoxDetailsProps> = ({ className, title, titleAction, details }) => {
  const classes = useStyles();
  return (
    <Box className={classnames(className, classes.root)}>
      {!!title && (
        <div className={classnames(classes.header, classes.item)}>
          {isValidElement(title) ? title : <Typography variant="h2">{title}</Typography>}
          {!!titleAction && titleAction}
        </div>
      )}
      {details.map((x) => (
        <div key={x.key} className={classnames(classes.item, x.className)}>
          {isValidElement(x.label) ? (
            <div className="label">{x.label}</div>
          ) : (
            <Typography variant="body1" className="label">
              {x.label}
            </Typography>
          )}

          {isValidElement(x.detail) ? (
            <div className="detail">{x.detail}</div>
          ) : (
            <Typography variant="body1" className="detail">
              {x.detail}
            </Typography>
          )}
        </div>
      ))}
    </Box>
  );
};

export default BoxDetails;
