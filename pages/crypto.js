import Head from "next/head";

import Layout from "../components/Layout";
import Crypto from "../components/Crypto";

export const config = { amp: false };

export default function CryptoPage() {
  return (
    <Layout>
      <Head>
        <title>Tyler Buchea | Crypto</title>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <Crypto />

      <footer></footer>
    </Layout>
  );
}
