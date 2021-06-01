import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import FooterLogo from '@assets/big-dipper-white.svg';
import { Button } from '@material-ui/core';
import { SocialMedia } from './components';
import {
  footerLinks, donateLink,
} from './utils';
import { useStyles } from './styles';

const Footer: React.FC<{className?: string}> = ({ className }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  // ============================
  // Footer
  // ============================
  const year = new Date().getFullYear();

  return (
    <div className={classnames(className, classes.root, 'footer')}>
      {/* ============================= */}
      {/* logo */}
      {/* ============================= */}
      <div className="footer__logo--container">
        <FooterLogo className="footer__logo" />
        <p className="footer__slogan">{t('common:slogan')}</p>
        <p className="footer__copyright">
          {t('common:copyright')}
          {' '}
          {year}
        </p>
      </div>
      {/* ============================= */}
      {/* links */}
      {/* ============================= */}
      <div className="footer__links">
        {footerLinks.map((group) => {
          return (
            <div key={group.key} className={`${group.key} links__group`}>
              <h3>{t(`common:${group.key}`)}</h3>
              {
                    group.links.map((x) => {
                      return (
                        <a
                          key={x.url}
                          href={x.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {t(`common:${x.key}`)}
                        </a>
                      );
                    })
                  }
            </div>
          );
        })}
        {/* ============================= */}
        {/* social */}
        {/* ============================= */}
        <div className="footer__social">
          <h3>{t('common:community')}</h3>
          <SocialMedia />
          <div>
            <p className="footer__donate--excerpt">{t('common:donateExcerpt')}</p>
            <a
              href={donateLink.url}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                className="footer__donate-button"
                variant="contained"
                color="primary"
              >
                {t('common:donate')}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
