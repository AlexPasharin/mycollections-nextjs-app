import { NextPage } from "next";

import "styles/global.sass";

export default function App<T extends JSX.IntrinsicAttributes>({
  Component,
  pageProps,
}: {
  Component: NextPage;
  pageProps: T;
}) {
  return <Component {...pageProps} />;
}
