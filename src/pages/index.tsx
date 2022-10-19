import type { NextPage } from "next";
import Head from "next/head";
import CourseInfoList from "../components/CourseInfoList";
import ResultCourseList from "../components/ResultCourseList";
import SelectedCourseList from "../components/SelectedCourseList";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NTU Course Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col justify-center p-4">
        <div className="flex justify-center">
          <CourseInfoList />
          <SelectedCourseList />
        </div>
        <ResultCourseList />
      </main>
    </>
  );
};

export default Home;
