import { useMemo } from "react";
import { useCourseStore } from "../stores/course";
import SelectedCourseCard from "./SelectedCourseCard";

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
      <div className="flex h-[614px] w-[25rem] flex-col items-center rounded-md bg-green-200 py-8">
        {selectedCourses.map((course, index) => (
          <SelectedCourseCard
            key={course.id}
            course={course}
            priority={index + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default SelectedCourseList;
