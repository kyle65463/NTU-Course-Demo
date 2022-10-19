import type { NextPage } from "next";
import Head from "next/head";
import CourseInfoList from "../components/CourseInfoList";
import SelectedCourseList from "../components/SelectedCourseList";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NTU Course Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen justify-center p-4 pt-[6%]">
        <CourseInfoList />
        <SelectedCourseList />
      </main>
    </>
  );
};

export default Home;
