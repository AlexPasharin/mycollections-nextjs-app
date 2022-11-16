export default function QueenCollectionPage() {
  return (
    <>
      <h1>My Queen Collection</h1>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      pageTitle: "My Queen Collection",
    },
  };
}
