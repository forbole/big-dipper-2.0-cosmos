import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Typography,
} from '@material-ui/core';
import { useScreenSize } from '@hooks';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { Box } from '@components';
import { useStyles } from './styles';

const ContractOverview: React.FC<{
  className?: string;
  address: string;
  deployerAddress: string;
  label: string;
  codeId: string;
  block: string;
}> = ({
  className,
  address,
  deployerAddress,
  label,
  codeId,
  block,
}) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { t } = useTranslation('accounts');

  return (
    <>
      <Box className={classnames(className, classes.root)}>
        <div className={classnames(classes.item)}>
          <Typography variant="body1" className="label">
            {t('address')}
          </Typography>
          <div className="detail">
            <Typography variant="body1" className="value">
              {
                !isDesktop ? (
                  getMiddleEllipsis(address, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  address
                )
              }
            </Typography>
          </div>
        </div>

        <div className={classnames(classes.item)}>
          <Typography variant="body1" className="label">
            {t('deployer')}
          </Typography>
          <div className="detail">
            <Typography variant="body1" className="value">
              {
                !isDesktop ? (
                  getMiddleEllipsis(deployerAddress, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  deployerAddress
                )
              }
            </Typography>
          </div>
        </div>

        <div className={classnames(classes.item)}>
          <Typography variant="body1" className="label">
            {`${t('label')}: `}
            {
                !isDesktop ? (
                  getMiddleEllipsis(label, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  label
                )
            }
          </Typography>
        </div>

        <div className={classnames(classes.item)}>
          <Typography variant="body1" className="label">
            {`${t('codeId')}: `}
            {
                !isDesktop ? (
                  getMiddleEllipsis(codeId, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  codeId
                )
            }
          </Typography>
        </div>

        <div className={classnames(classes.item)}>
          <Typography variant="body1" className="label">
            {`${t('block')}: `}
            {
                !isDesktop ? (
                  getMiddleEllipsis(block, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  block
                )
            }
          </Typography>
        </div>
      </Box>
    </>
  );
};

export default ContractOverview;
