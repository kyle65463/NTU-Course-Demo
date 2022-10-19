import { Course } from "../stores/course";

interface SelectedCourseCardProps {
  priority: number;
  course: Course;
}

const SelectedCourseCard = ({
  priority,
  course: { title },
}: SelectedCourseCardProps) => {
  return (
    <article className="mb-[-2px] w-[20rem] border-2 border-gray-600 bg-white p-4">
      <div className="mb-1 flex">
        <span className="mr-4 text-gray-600">{priority}</span>
        <h3>{title}</h3>
      </div>
    </article>
  );
};

export default SelectedCourseCard;
