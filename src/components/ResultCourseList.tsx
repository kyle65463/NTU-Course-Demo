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
    <section className="mt-8 flex flex-wrap items-center justify-center gap-1.5">
      {/* No result hint */}
      <span className="mr-1.5 font-medium">
        {resultCourseIds.length > 0 ? "Result:" : "No Result"}
      </span>

      {/* Result course titles  */}
      {resultCourses.map((course) => (
        <span
          className="rounded bg-gray-200 px-1.5 py-0.5 text-sm text-gray-900"
          key={course.id}
        >
          {course.title}
        </span>
      ))}
    </section>
  );
};

export default ResultCourseList;
