import Document from 'next/document';
import DocumentPage, { getInitialProps } from 'ui/pages/_document';

class MyDocument extends Document {
  render() {
    return <DocumentPage />;
  }
}

MyDocument.getInitialProps = getInitialProps;

export default MyDocument;
