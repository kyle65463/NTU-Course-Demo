interface Course {
  title: string;
  credits: number;
  instructor: string;
  curriculumNumber: string;
}

interface CourseInfoCardProps {
  course: Course;
}

const CourseInfoList = ({ course }: CourseInfoCardProps) => {
  const { title, credits, instructor, curriculumNumber } = course;
  return (
    <article className="mb-[-2px] border-2 border-gray-600 p-4">
      <div className="mb-1 flex justify-between">
        <h3>{title}</h3>
        <span className="text-sm text-gray-600">{credits} Credits</span>
      </div>
      <h4 className="text-sm text-gray-600">{instructor}</h4>
      <h4 className="text-sm text-gray-600">{curriculumNumber}</h4>
    </article>
  );
};

export default CourseInfoList;