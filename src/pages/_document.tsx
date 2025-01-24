import { Head, Html, Main, NextScript } from 'next/document';
import { FC } from 'react';

const Document: FC = () => {
  return (
    <Html lang='en' data-theme='coffee'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
