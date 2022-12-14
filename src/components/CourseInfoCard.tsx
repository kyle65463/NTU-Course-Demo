import clsx from "clsx";
import { Course } from "../stores/course";

interface CourseInfoCardProps {
  course: Course;
  isSelected: boolean;
  onClick: () => void;
}

const CourseInfoCard = ({
  course,
  isSelected,
  onClick,
}: CourseInfoCardProps) => {
  const { title, credits, instructor, id: curriculumNumber } = course;
  return (
    <article
      onClick={onClick}
      className={clsx(
        [isSelected && "bg-gray-200"],
        [!isSelected && "cursor-pointer"],
        "mb-[-2px] border-2 border-gray-600 p-4"
      )}
    >
      <div className="mb-1 flex justify-between">
        {/* Course title */}
        <h3 className="flex-1">{title}</h3>

        {/* Credits */}
        <span className="text-sm text-gray-800">{credits} Credits</span>
      </div>

      {/* Instructor */}
      <h4 className="text-sm text-gray-600">{instructor}</h4>

      {/* Curriculum number */}
      <h4 className="text-sm text-gray-600">{curriculumNumber}</h4>
    </article>
  );
};

export default CourseInfoCard;
