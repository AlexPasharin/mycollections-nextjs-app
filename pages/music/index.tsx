export default function MusicPage() {
  return (
    <>
      <h1>Music Collection (non Queen related)</h1>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      pageTitle: "My Music Collection",
    },
  };
}
