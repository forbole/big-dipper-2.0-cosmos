import useStyles from '@/components/footer/styles';
import generalConfig from '@/generalConfig';
import { readTheme } from '@/recoil/settings';
import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';

const Footer: FC<{ className?: string }> = ({ className }) => {
  const { classes, cx } = useStyles();

  // ============================
  // Footer
  // ============================
  const year = new Date().getFullYear();

  return (
    <div className={cx(classes.root, className)}>
      <div className="footer__closing--container">
        <Typography className="footer__closing--text">
          {/* ============================= */}
          {/*
            WARNING: WE ARE USING APACHE 2.0 LICENSE
            DO YOUR RESEARCH BEFORE TRYING TO REMOVE/ EDIT THE FOLLOWING LINE(S)
            RESPECT OPEN SOURCE!!
          */}
          {/* ============================= */}
          <Trans
            i18nKey="common:copyright"
            components={[
              // eslint-disable-next-line
              <a
                target="_blank"
                rel="noreferrer noopener"
                title="LICENSE"
                href="https://raw.githubusercontent.com/forbole/big-dipper-2.0-cosmos/master/LICENSE"
              />,
            ]}
            values={{
              name: generalConfig.maintainer.name,
            }}
          />{' '}
          {year}
        </Typography>
        <Typography className="footer__closing--text">
          <Trans
            i18nKey="common:maintainBy"
            components={[
              <a href={generalConfig.maintainer.url} target="_blank" rel="noreferrer">
                {}
              </a>,
            ]}
            values={{
              name: generalConfig.maintainer.name,
            }}
          />
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
