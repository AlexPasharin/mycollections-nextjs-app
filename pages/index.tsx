import Head from "next/head";
import Link from "next/link";

import styles from "../styles/index.module.sass";

export default function HomePage() {
  const sections = [
    { title: "Queen Collection", path: "/queen/collection" },
    { title: "Non Queen Music Collection", path: "/music" },
    { title: "Movies", path: "/movies" },
    { title: "Queen Discography", path: "/queen/discography" },
  ];

  return (
    <>
      <Head>
        <title>My Collections - Home Page</title>
      </Head>
      <h1>My Collections - Home Page</h1>
      <ul className={styles.sections}>
        {sections.map(({ title, path }) => (
          <li key={title}>
            <h2>
              <Link href={path}>{title}</Link>
            </h2>
          </li>
        ))}
      </ul>
    </>
  );
}
