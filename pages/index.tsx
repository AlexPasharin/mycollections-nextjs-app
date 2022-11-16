import MainDirectory from "layouts/MainDirectory";

export default function HomePage() {
  return <MainDirectory header="My Collections - Home Page" />;
}

export function getStaticProps() {
  return {
    props: {
      pageTitle: "Home Page",
    },
  };
}
