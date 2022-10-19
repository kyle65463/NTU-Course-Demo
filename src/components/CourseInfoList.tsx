import { useCourseStore } from "../stores/course";
import CourseInfoCard from "./CourseInfoCard";

const CourseInfoList = () => {
  const courses = useCourseStore((state) => state.courses);
  const selectedCourseIds = useCourseStore((state) => state.selectedCourseIds);
  const selectCourse = useCourseStore((state) => state.selectCourse);
  return (
    <section>
      {courses.map((course) => (
        <CourseInfoCard
          key={course.id}
          course={course}
          isSelected={selectedCourseIds.includes(course.id)}
          onClick={() => selectCourse(course.id)}
        />
      ))}
    </section>
  );
};

export default CourseInfoList;
