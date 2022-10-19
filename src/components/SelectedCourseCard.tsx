import clsx from "clsx";
import { BsFillTrashFill } from "react-icons/bs";
import { Course } from "../stores/course";

interface SelectedCourseCardProps {
  priority: number;
  course: Course;
  onDelete: () => void;
}

const SelectedCourseCard = ({
  priority,
  course: { title },
  onDelete,
}: SelectedCourseCardProps) => {
  return (
    <article
      className={clsx(
        "flex items-center ",
        "mb-[-2px] w-[24rem] px-2.5 py-3",
        "border-2 border-gray-600 bg-white"
      )}
    >
      <div className="flex flex-1">
        <span className="mr-4 h-6 w-6 rounded bg-gray-200 text-center">
          {priority}
        </span>
        <h3>{title}</h3>
      </div>
      <BsFillTrashFill
        className="cursor-pointer text-gray-500 hover:text-gray-400"
        onClick={onDelete}
        size={18}
      />
    </article>
  );
};

export default SelectedCourseCard;
