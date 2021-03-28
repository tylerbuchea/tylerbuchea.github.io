import Head from "next/head";

import Layout from "../components/Layout";
import ExampleStory from "../components/ExampleStory";

export const config = { amp: true };

export default function RhombusSystems() {
  return (
    <Layout>
      <Head>
        <title>Tyler Buchea | Story 1</title>
      </Head>
      <ExampleStory />
    </Layout>
  );
}
