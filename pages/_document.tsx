import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <Script
            src="/scripts/init-theme.function.js"
            strategy="beforeInteractive"
          />
          <link
            rel="icon"
            href="/favicon.ico"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.4/css/brands.css"
            integrity="sha384-S5yUroXKhsCryF2hYGm7i8RQ/ThL96qmmWD+lF5AZTdOdsxChQktVW+cKP/s4eav"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.4/css/fontawesome.css"
            integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <NextScript />
          <Main />
        </body>
      </Html>
    )
  }
}

export default MyDocument
