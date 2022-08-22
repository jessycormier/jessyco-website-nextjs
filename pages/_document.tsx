import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';
import LayoutFooter from '../app/layout/layout-footer.component';

class MyDocument extends Document {

  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className='transition-colors bg-gray-100 dark:bg-gray-900 dark:text-gray-200'>
        <Head>
          <link
            rel="icon"
            href="/favicon.ico"
          />
          <link
            rel="preload"
            href="/fonts/Inter.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <NextScript />
          <Main />
          <LayoutFooter></LayoutFooter>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
