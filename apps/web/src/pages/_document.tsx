import Document from 'next/document';
import DocumentPage from 'ui/pages/_document';
import { augmentDocumentWithEmotionCache } from './_app';

class MyDocument extends Document {
  render() {
    return <DocumentPage />;
  }
}

augmentDocumentWithEmotionCache(MyDocument);

export default MyDocument;
