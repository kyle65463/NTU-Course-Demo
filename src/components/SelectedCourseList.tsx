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
    <section className="ml-16 w-[25rem]">
      <h2 className="mb-3 w-full text-center text-xl font-medium">
        Courses I Plan to Take
      </h2>
      <div className="h-[614px] w-[25rem] rounded-md bg-green-200">
        {selectedCourses.map((course) => (
          <div key={course.id} />
        ))}
      </div>
    </section>
  );
};

export default SelectedCourseList;
