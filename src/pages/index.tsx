import type { NextPage } from "next";
import Head from "next/head";
import CourseInfoList from "../components/CourseInfoList";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NTU Course Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <CourseInfoList />
      </main>
    </>
  );
};

export default Home;
