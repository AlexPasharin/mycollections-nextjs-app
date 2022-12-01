import Head from "next/head";
import Link from "next/link";

export default function MainDirectory({ header }: { header: string }) {
  const sections = [
    { title: "Queen Collection", path: "/Queen/collection" },
    { title: "Non Queen Music Collection", path: "/music" },
    { title: "Movies", path: "/movies" },
    { title: "Queen Discography", path: "/Queen/discography" },
  ];

  return (
    <>
      <h1>{header}</h1>
      <ul>
        {sections.map(({ title, path }) => (
          <li key={title}>
            <h2 style={{ fontSize: "1.2em", margin: "10px 0" }}>
              <Link href={path}>{title}</Link>
            </h2>
          </li>
        ))}
      </ul>
    </>
  );
}
