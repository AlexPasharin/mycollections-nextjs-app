export default function MoviesPage() {
  return (
    <>
      <h1>Movies Collection</h1>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      pageTitle: "My Movies Collection",
    },
  };
}
