/**
 * NOTE: This requires `@sentry/nextjs` version 7.3.0 or higher.
 *
 * NOTE: If using this with `next` version 12.2.0 or lower, uncomment the
 * penultimate line in `CustomErrorComponent`.
 *
 * This page is loaded by Nextjs:
 *  - on the server, when data-fetching methods throw or reject
 *  - on the client, when `getInitialProps` throws or rejects
 *  - on the client, when a React lifecycle method throws or rejects, and it's
 *    caught by the built-in Nextjs error boundary
 *
 * See:
 *  - https://nextjs.org/docs/basic-features/data-fetching/overview
 *  - https://nextjs.org/docs/api-reference/data-fetching/get-initial-props
 *  - https://reactjs.org/docs/error-boundaries.html
 */

 import * as Sentry from '@sentry/nextjs';
 import { NextPageContext } from 'next';
 import Error from '@screens/error';
 
 const ErrorPage = () => {
   return <Error />;
 };
 
 /* It's getting the Sentry DSN from the environment variables. */
 const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
 
 ErrorPage.getInitialProps = async (contextData: NextPageContext) => {
   if (SENTRY_DSN) {
     // In case this is running in a serverless function, await this in order to give Sentry
     // time to send the error before the lambda exits
     await Sentry.captureUnderscoreErrorException(contextData);
   }
   const {
     res, err,
   } = contextData;
   const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
   return { statusCode };
 };
 
 export default ErrorPage;
 