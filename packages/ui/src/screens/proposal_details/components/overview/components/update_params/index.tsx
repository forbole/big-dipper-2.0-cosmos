import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

type UpdateParamsProps = {
  changes: { params: JSON; type: string };
  className?: string;
};

const UpdateParams: FC<UpdateParamsProps> = ({ changes, className }) => {
  const { t } = useAppTranslation('proposals');

  return (
    <>
      <Typography variant="body1" className="label">
        {t('changes')}
      </Typography>
      <Accordion className={className}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="body1" className="value">
            {JSON.stringify(changes.type, null, 2).replace(/['"]+/g, '')}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" className="value">
            {JSON.stringify(changes.params, null, 2)}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default UpdateParams;
