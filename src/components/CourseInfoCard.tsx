import clsx from "clsx";
import { Course } from "../stores/course";

interface CourseInfoCardProps {
  course: Course;
  isSelected: boolean;
}

const CourseInfoCard = ({ course, isSelected }: CourseInfoCardProps) => {
  const { title, credits, instructor, id: curriculumNumber } = course;
  return (
    <article
      className={clsx(
        [isSelected && "bg-gray-200"],
        "mb-[-2px] border-2 border-gray-600 p-4"
      )}
    >
      <div className="mb-1 flex justify-between">
        <h3>{title}</h3>
        <span className="text-sm text-gray-600">{credits} Credits</span>
      </div>
      <h4 className="text-sm text-gray-600">{instructor}</h4>
      <h4 className="text-sm text-gray-600">{curriculumNumber}</h4>
    </article>
  );
};

export default CourseInfoCard;
