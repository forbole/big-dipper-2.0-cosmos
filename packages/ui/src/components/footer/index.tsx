import React from 'react';
import classnames from 'classnames';
import Trans from 'next-translate/Trans';
import { useRecoilValue } from 'recoil';
import useTranslation from 'next-translate/useTranslation';
import FooterLogoLight from 'shared-utils/assets/big-dipper-red.svg';
import FooterLogoDark from 'shared-utils/assets/big-dipper-white.svg';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import chainConfig from 'ui/chainConfig';
import generalConfig from 'ui/generalConfig';
import { readTheme } from '@recoil/settings';
import SocialMedia from './components/social_media';
import { footerLinks, donateLink } from './utils';
import { useStyles } from './styles';

const Footer: React.FC<{ className?: string }> = ({ className }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const theme = useRecoilValue(readTheme);

  // ============================
  // Footer
  // ============================
  const year = new Date().getFullYear();

  return (
    <div className={classnames(className, classes.root)}>
      <div className={classnames('footer')}>
        {/* ============================= */}
        {/* logo */}
        {/* ============================= */}
        <div className="footer__logo--container">
          {theme === 'light' ? (
            <FooterLogoLight className="footer__logo" />
          ) : (
            <FooterLogoDark className="footer__logo" />
          )}
          <p className="footer__slogan">{chainConfig.title}</p>
        </div>
        {/* ============================= */}
        {/* links */}
        {/* ============================= */}
        <div className="footer__links">
          {footerLinks.map((group) => (
              <div key={group.key} className={`${group.key} links__group`}>
                <h3>{t(`common:${group.key}`)}</h3>
                {group.links.map((x) => (
                    <a key={x.url} href={x.url} target="_blank" rel="noreferrer">
                      {t(`common:${x.key}`)}
                    </a>
                  ))}
              </div>
            ))}
          {/* ============================= */}
          {/* social */}
          {/* ============================= */}
          <div className="footer__social">
            <h3>{t('common:community')}</h3>
            <SocialMedia />
            <div>
              <p className="footer__donate--excerpt">{t('common:donateExcerpt')}</p>
              <a href={donateLink.url} target="_blank" rel="noreferrer">
                <Button className="footer__donate-button" variant="contained" color="primary">
                  {t('common:donate')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Divider />
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
              <a target="_blank" rel="noreferrer" href={generalConfig.maintainer.url}>
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
