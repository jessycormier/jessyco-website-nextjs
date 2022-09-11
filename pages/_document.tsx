import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';
import LightSwitch from '../app/components/light-switch.component';
import LayoutFooter from '../app/layout/layout-footer.component';

class MyDocument extends Document {

  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className=''>
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
        <body className='transition-colors dark:bg-gray-900 dark:text-gray-200'>
          <NextScript />
          <LightSwitch />
          <Main />
          <LayoutFooter></LayoutFooter>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
