import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#FFD700" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}