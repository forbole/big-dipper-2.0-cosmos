import useStyles from '@/screens/error/styles';
import { HOME } from '@/utils/go_to_page';
import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import useAppTranslation from '@/hooks/useAppTranslation';
import { useRouter } from 'next/router';
import { FC, useCallback } from 'react';
import generalConfig from 'shared-utils/configs/general.json';

const Error: FC = () => {
  const { classes } = useStyles();
  const { t } = useAppTranslation();
  const router = useRouter();
  const handleHomeClick = useCallback(() => {
    router.replace(HOME);
  }, [router]);

  return (
    <div className={classes.root}>
      <div className="container">
        <Typography variant="h2">{t('common:errorTitle')}</Typography>
        <Typography className="details">
          <AppTrans
            i18nKey="common:errorDetails"
            components={[
              // eslint-disable-next-line
              <a target="_blank" rel="noreferrer" href={generalConfig.github.reportIssue} />,
            ]}
            values={{
              issue: generalConfig.github.reportIssue,
            }}
          />
        </Typography>
        <Typography component="a" onClick={handleHomeClick}>
          {t('common:errorHome')}
        </Typography>
      </div>
    </div>
  );
};

export default Error;
