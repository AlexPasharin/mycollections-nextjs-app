import { GetStaticProps } from "next";

export default function QueenCollectionPage() {
  return (
    <>
      <h1>My Queen Collection</h1>
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      pageTitle: "My Queen Collection",
    },
  };
};
