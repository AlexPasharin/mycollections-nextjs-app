import Head from "next/head";

import type { AppProps } from "next/app";

import "styles/global.sass";

export default function App({ Component, pageProps }: AppProps) {
  const { pageTitle, ...rest } = pageProps;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Component {...rest} />
    </>
  );
}
