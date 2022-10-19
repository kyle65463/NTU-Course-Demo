import { useMemo } from "react";
import { Course, emptyCourse, useCourseStore } from "../stores/course";

const ResultCourseList = () => {
  const courses = useCourseStore((state) => state.courses);
  const resultCourseIds = useCourseStore((state) => state.resultCourseIds);
  const resultCourses = useMemo(() => {
    const courseIdsMap: { [key: string]: Course } = {};
    courses.forEach((course) => (courseIdsMap[course.id] = course));
    return resultCourseIds.map((id) => courseIdsMap[id] ?? emptyCourse);
  }, [resultCourseIds, courses]);
  return (
    <section className="">
      {resultCourses.map((course) => (
        <span key={course.id}>{course.title} </span>
      ))}
    </section>
  );
};

export default ResultCourseList;
