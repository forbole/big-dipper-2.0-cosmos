import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { useChainHealthCheck } from '@/screens/app/components/inner_app/hooks';

function InnerApp({ Component, pageProps }: AppProps) {
  useChainHealthCheck();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default InnerApp;
