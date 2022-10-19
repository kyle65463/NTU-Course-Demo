import clsx from "clsx";
import { useCourseStore } from "../stores/course";
import CourseInfoCard from "./CourseInfoCard";

const CourseInfoList = () => {
  const courses = useCourseStore((state) => state.courses);
  const selectedCourseIds = useCourseStore((state) => state.selectedCourseIds);
  const selectCourse = useCourseStore((state) => state.selectCourse);
  return (
    <section className={clsx("w-[20rem] sm:w-[27rem]")}>
      {/* Title */}
      <h2 className="mb-3 w-full text-center text-xl font-medium">
        Course Information
      </h2>

      {/* Course info cards */}
      <div>
        {courses.map((course) => (
          <CourseInfoCard
            key={course.id}
            course={course}
            isSelected={selectedCourseIds.includes(course.id)}
            onClick={() => selectCourse(course.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default CourseInfoList;
