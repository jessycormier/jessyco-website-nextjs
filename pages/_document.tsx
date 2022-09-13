import Document, {
  DocumentContext,
  Head,
  Html, Main, NextScript
} from 'next/document';

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
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
