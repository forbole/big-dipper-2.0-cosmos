import { useStyles } from '@/screens/error/styles';
import { HOME } from '@/utils/go_to_page';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import generalConfig from 'shared-utils/configs/general.json';
import { FC } from 'react';

const Error: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <div className="container">
        <Typography variant="h2">{t('common:errorTitle')}</Typography>
        <Typography className="details">
          <Trans
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
        <Link href={HOME} passHref>
          <Typography component="a">{t('common:errorHome')}</Typography>
        </Link>
      </div>
    </div>
  );
};

export default Error;
