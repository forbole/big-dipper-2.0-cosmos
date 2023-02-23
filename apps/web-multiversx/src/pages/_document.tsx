import Document from 'next/document';
import DocumentComponent, { getInitialProps, DocumentComponentProps } from 'ui/pages/_document';

class MyDocument extends Document<DocumentComponentProps> {
  render() {
    return <DocumentComponent emotionStyleTags={this.props.emotionStyleTags} />;
  }
}

MyDocument.getInitialProps = getInitialProps;

export default MyDocument;
