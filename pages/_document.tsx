import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/img/favicon.svg" />
      </Head>
      <body className="font-primary bg-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
