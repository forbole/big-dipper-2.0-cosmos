import chainConfig from '@/chainConfig';
import SocialMedia from '@/components/footer/components/social_media';
import useStyles from '@/components/footer/styles';
import { donateLink, footerLinks } from '@/components/footer/utils';
import generalConfig from '@/generalConfig';
import { readTheme } from '@/recoil/settings';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import FooterLogoLight from 'shared-utils/assets/big-dipper-red.svg';
import FooterLogoDark from 'shared-utils/assets/big-dipper-white.svg';

const { title } = chainConfig();

const Footer: FC<{ className?: string }> = ({ className }) => {
  const { t } = useAppTranslation();
  const { classes, cx } = useStyles();
  const theme = useRecoilValue(readTheme);

  // ============================
  // Footer
  // ============================
  const year = new Date().getFullYear();

  return (
    <div className={cx(classes.root, className)}>
      <div className="footer">
        {/* ============================= */}
        {/* logo */}
        {/* ============================= */}
        <div className="footer__logo--container">
          {theme === 'light' ? (
            <FooterLogoLight className="footer__logo" />
          ) : (
            <FooterLogoDark className="footer__logo" />
          )}
          <p className="footer__slogan">{title}</p>
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
          <AppTrans
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
          <AppTrans
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
