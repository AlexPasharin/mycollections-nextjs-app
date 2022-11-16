import MainDirectory from "layouts/MainDirectory";

export default function NotFoundPage() {
  return <MainDirectory header="Requested Page Does Not Exists" />;
}

export function getStaticProps() {
  return {
    props: {
      pageTitle: "404 - Not Found",
    },
  };
}
