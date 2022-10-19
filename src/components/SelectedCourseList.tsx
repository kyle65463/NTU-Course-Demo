import { useMemo } from "react";
import { useCourseStore } from "../stores/course";

const SelectedCourseList = () => {
  const courses = useCourseStore((state) => state.courses);
  const selectedCourseIds = useCourseStore((state) => state.selectedCourseIds);
  const selectedCourses = useMemo(
    () => courses.filter((course) => selectedCourseIds.includes(course.id)),
    [selectedCourseIds, courses]
  );
  return (
    <section>
      <h2 className="mb-2 w-full text-center text-xl">
        Courses I Plan to Take
      </h2>
      {selectedCourses.map((course) => (
        <div key={course.id} />
      ))}
    </section>
  );
};

export default SelectedCourseList;
