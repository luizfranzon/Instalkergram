import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0D0D0D" />
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
      </Head>
      <body className="bg-gray-500 selection:bg-blue-500 selection:text-blue-400 flex flex-col justify-start">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
