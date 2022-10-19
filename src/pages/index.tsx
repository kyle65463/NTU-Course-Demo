import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import type { NextPage } from "next";
import Head from "next/head";
import CourseInfoList from "../components/CourseInfoList";
import ResultCourseList from "../components/ResultCourseList";
import SelectedCourseList from "../components/SelectedCourseList";
import { fetchCourses } from "../services/course";
import { useCourseStore } from "../stores/course";

const Home: NextPage = () => {
  const setCourseList = useCourseStore((state) => state.setCourseList);

  const { isLoading } = useQuery(["courses"], fetchCourses, {
    onSuccess: (courses) => {
      console.log(courses);
      setCourseList(courses);
    },
  });

  return (
    <>
      <Head>
        <title>NTU Course Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading ? (
        <></>
      ) : (
        <main
          className={clsx(
            "flex flex-col items-center justify-center",
            "min-h-screen p-10 lg:p-4"
          )}
        >
          <div
            className={clsx(
              "flex w-full max-w-[58rem] flex-col items-center",
              "lg:max-w-[58rem] lg:flex-row lg:justify-between"
            )}
          >
            <CourseInfoList />
            <SelectedCourseList />
          </div>
          <ResultCourseList />
        </main>
      )}
    </>
  );
};

export default Home;
