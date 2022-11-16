import { NextPage } from "next";
import Head from "next/head";

import "styles/global.sass";

export default function App<
  T extends JSX.IntrinsicAttributes & { pageTitle: string }
>({ Component, pageProps }: { Component: NextPage; pageProps: T }) {
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
