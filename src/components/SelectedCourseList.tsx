import { useMemo } from "react";
import { Course, emptyCourse, useCourseStore } from "../stores/course";
import SelectedCourseCard from "./SelectedCourseCard";

const SelectedCourseList = () => {
  const courses = useCourseStore((state) => state.courses);
  const selectedCourseIds = useCourseStore((state) => state.selectedCourseIds);
  const selectedCourses = useMemo(() => {
    const courseIdsMap: { [key: string]: Course } = {};
    courses.forEach((course) => (courseIdsMap[course.id] = course));
    return selectedCourseIds.map((id) => courseIdsMap[id] ?? emptyCourse);
  }, [selectedCourseIds, courses]);
  const unselectCourse = useCourseStore((state) => state.unselectCourse);
  const resetSelectedCourse = useCourseStore(
    (state) => state.resetSelectedCourse
  );
  return (
    <section className="ml-16 w-[26rem]">
      <h2 className="mb-3 w-full text-center text-xl font-medium">
        Courses I Plan to Take
      </h2>
      <div className="flex h-[614px] flex-col items-center rounded-md bg-green-200 py-4 px-4">
        {/* Action buttons */}
        {selectedCourses.length > 0 && (
          <div className="mb-4 flex w-full justify-end">
            <button className="mr-4 text-sm" onClick={resetSelectedCourse}>
              Reset
            </button>
            <button className="rounded-md bg-white py-1.5 px-3 text-sm">
              Done
            </button>
          </div>
        )}

        {/* Selected Course */}
        {selectedCourses.map((course, index) => (
          <SelectedCourseCard
            key={course.id}
            course={course}
            priority={index + 1}
            onDelete={() => unselectCourse(course.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default SelectedCourseList;
