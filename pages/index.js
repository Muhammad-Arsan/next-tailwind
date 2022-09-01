import Head from "next/head";
import About from "../components/About";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portolfolie | React Developer</title>
        <meta name="description" content="Created By Next App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
    </>
  );
}
