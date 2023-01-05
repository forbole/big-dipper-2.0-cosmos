import App from '@/screens/app';
import 'react-toastify/dist/ReactToastify.css';
import 'shared-utils/assets/styles/global.css';
import { createEmotionSsrAdvancedApproach } from 'tss-react/next';

const { augmentDocumentWithEmotionCache, withAppEmotionCache } = createEmotionSsrAdvancedApproach({
  key: 'css',
});

export { augmentDocumentWithEmotionCache };

export default withAppEmotionCache(App);
