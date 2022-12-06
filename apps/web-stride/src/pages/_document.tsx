import DocumentPage, { getInitialProps } from 'ui/pages/_document';
import Document from 'next/document';

export default class MyDocument extends Document {
  render() {
    return <DocumentPage />;
  }
}

MyDocument.getInitialProps = getInitialProps;
